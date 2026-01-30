import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playClick: () => void;
  volume: number;
  setVolume: (volume: number) => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [volume, setVolumeState] = useState(1.0); // Default 100% - LOUD by default

  useEffect(() => {
    const savedPreference = localStorage.getItem('soundEnabled');
    if (savedPreference !== null) {
      setSoundEnabled(savedPreference === 'true');
    }
    
    const savedVolume = localStorage.getItem('soundVolume');
    if (savedVolume !== null) {
      setVolumeState(parseFloat(savedVolume));
    }
  }, []);

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    localStorage.setItem('soundVolume', String(newVolume));
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => {
      const newValue = !prev;
      localStorage.setItem('soundEnabled', String(newValue));
      return newValue;
    });
  };

  const playClick = () => {
    if (!soundEnabled || volume === 0) return;
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create noise buffer for click sound - Extended for more punch
      const bufferSize = audioContext.sampleRate * 0.08; // 80ms for smoother tail
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      
      // Generate white noise with smooth exponential decay
      for (let i = 0; i < bufferSize; i++) {
        const decay = Math.exp(-i / (bufferSize * 0.2)); // Smoother decay curve
        data[i] = (Math.random() * 2 - 1) * decay * 0.5; // Increased amplitude
      }
      
      const noiseSource = audioContext.createBufferSource();
      noiseSource.buffer = buffer;
      
      // High-pass filter to make it sound more "clicky" and premium
      const filter = audioContext.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 1800; // Slightly lower for warmer tone
      filter.Q.value = 1.5; // Add resonance for character
      
      const gainNode = audioContext.createGain();
      const adjustedVolume = 0.75 * volume; // Much louder base volume
      gainNode.gain.setValueAtTime(adjustedVolume, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.08); // Smooth fade
      
      noiseSource.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      noiseSource.start(audioContext.currentTime);
      noiseSource.stop(audioContext.currentTime + 0.08);
      
      // Clean up after sound finishes
      setTimeout(() => {
        audioContext.close();
      }, 100);
    } catch (error) {
      // Silent fail for audio errors
    }
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playClick, volume, setVolume }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    // Return safe defaults during hot reload or when context is not available
    return {
      soundEnabled: false,
      toggleSound: () => {},
      playClick: () => {},
      volume: 0.7,
      setVolume: () => {},
    };
  }
  return context;
}