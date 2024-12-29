import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';
import EducationEntry from './education/EducationEntry';
import type { Education } from '@/types/resume';

interface Props {
  data: Education[];
  onChange: (education: Education[]) => void;
}

export default function EducationForm({ data, onChange }: Props) {
  const addEducation = () => {
    onChange([
      ...data,
      {
        school: '',
        degree: '',
        field: '',
        graduationDate: '',
      },
    ]);
  };

  const updateEducation = (index: number, education: Education) => {
    const newData = [...data];
    newData[index] = education;
    onChange(newData);
  };

  const removeEducation = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {data.map((education, index) => (
        <EducationEntry
          key={index}
          data={education}
          onChange={(edu) => updateEducation(index, edu)}
          onRemove={() => removeEducation(index)}
        />
      ))}
      <Button
        variant="outline"
        className="w-full"
        onClick={addEducation}
      >
        <PlusCircle className="w-4 h-4 mr-2" />
        Add Education
      </Button>
    </div>
  );
}