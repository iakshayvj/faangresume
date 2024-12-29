import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';
import ExperienceEntry from './experience/ExperienceEntry';
import type { Experience } from '@/types/resume';

interface Props {
  data: Experience[];
  onChange: (experiences: Experience[]) => void;
}

export default function ExperienceForm({ data, onChange }: Props) {
  const addExperience = () => {
    onChange([
      ...data,
      {
        company: '',
        title: '',
        startDate: '',
        endDate: '',
        metrics: [''],
        stories: [],
      },
    ]);
  };

  const updateExperience = (index: number, experience: Experience) => {
    const newData = [...data];
    newData[index] = experience;
    onChange(newData);
  };

  const removeExperience = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {data.map((experience, index) => (
        <ExperienceEntry
          key={index}
          data={experience}
          onChange={(exp) => updateExperience(index, exp)}
          onRemove={() => removeExperience(index)}
        />
      ))}
      <Button
        variant="outline"
        className="w-full"
        onClick={addExperience}
      >
        <PlusCircle className="w-4 h-4 mr-2" />
        Add Experience
      </Button>
    </div>
  );
}