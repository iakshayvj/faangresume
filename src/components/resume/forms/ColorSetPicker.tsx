import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { colorSets } from '@/data/colorSets';
import type { ColorSettings } from '@/types/colors';

interface Props {
  settings: ColorSettings;
  onChange: (settings: ColorSettings) => void;
}

export default function ColorSetPicker({ settings, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Font Colors</Label>
        <Select
          value={settings.selectedSet}
          onValueChange={(value) => onChange({ selectedSet: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a color set" />
          </SelectTrigger>
          <SelectContent>
            {colorSets.map((set) => (
              <SelectItem
                key={set.id}
                value={set.id}
                className="flex items-center gap-2"
              >
                <div className="flex gap-1">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: set.colors.headers }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: set.colors.body }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: set.colors.accents }}
                  />
                </div>
                <span>{set.name}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}