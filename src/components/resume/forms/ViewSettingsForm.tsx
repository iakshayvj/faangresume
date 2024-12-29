import { Settings } from 'lucide-react';
import ColorSetPicker from './ColorSetPicker';
import type { ViewSettings } from '@/types/theme';
import type { ColorSettings } from '@/types/colors';

interface Props {
  settings: ViewSettings;
  onChange: (settings: ViewSettings) => void;
  colorSettings: ColorSettings;
  onColorSettingsChange: (settings: ColorSettings) => void;
}

export default function ViewSettingsForm({
  settings,
  onChange,
  colorSettings,
  onColorSettingsChange,
}: Props) {
  const handleReset = () => {
    onChange({
      theme: 'classic',
      fontSizes: {
        sectionHeader: 'text-base',
        subsectionHeader: 'text-sm',
        body: 'text-xs',
        summary: 'text-[13px]',
      },
    });
    onColorSettingsChange({ selectedSet: 'classic' });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Settings className="w-4 h-4" />
        <span className="font-medium">View Settings</span>
      </div>

      <div className="space-y-4">
        <ColorSetPicker
          settings={colorSettings}
          onChange={onColorSettingsChange}
        />

        <button
          onClick={handleReset}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
}