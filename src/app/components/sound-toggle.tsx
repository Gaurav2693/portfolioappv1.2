import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/app/context/sound-context';

export default function SoundToggle() {
  const { soundEnabled, toggleSound } = useSound();

  return (
    <button
      onClick={toggleSound}
      className="premium-button p-2 rounded-lg transition-all duration-160"
      aria-label={soundEnabled ? 'Disable sounds' : 'Enable sounds'}
      title={soundEnabled ? 'Disable sounds' : 'Enable sounds'}
    >
      {soundEnabled ? (
        <Volume2 className="w-5 h-5" />
      ) : (
        <VolumeX className="w-5 h-5" />
      )}
    </button>
  );
}
