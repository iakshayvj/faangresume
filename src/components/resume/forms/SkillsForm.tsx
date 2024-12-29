import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, Trash2 } from 'lucide-react';

interface Props {
  data: string[];
  onChange: (skills: string[]) => void;
}

export default function SkillsForm({ data, onChange }: Props) {
  const addSkill = () => {
    onChange([...data, '']);
  };

  const updateSkill = (index: number, value: string) => {
    const newSkills = [...data];
    newSkills[index] = value;
    onChange(newSkills);
  };

  const removeSkill = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <Label>Skills</Label>
      {data.map((skill, index) => (
        <div key={index} className="flex gap-2">
          <Input
            value={skill}
            onChange={(e) => updateSkill(index, e.target.value)}
            placeholder="Product Strategy, Data Analysis, etc."
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeSkill(index)}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button
        variant="outline"
        className="w-full"
        onClick={addSkill}
      >
        <PlusCircle className="w-4 h-4 mr-2" />
        Add Skill
      </Button>
    </div>
  );
}