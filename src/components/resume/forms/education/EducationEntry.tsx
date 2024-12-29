import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Trash2, PlusCircle, X } from 'lucide-react';
import type { Education } from '@/types/resume';

interface Props {
  data: Education;
  onChange: (education: Education) => void;
  onRemove: () => void;
}

export default function EducationEntry({ data, onChange, onRemove }: Props) {
  const handleChange = (field: keyof Education, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const addActivity = () => {
    const activities = data.activities || [];
    handleChange('activities', [...activities, '']);
  };

  const updateActivity = (index: number, value: string) => {
    const activities = [...(data.activities || [])];
    activities[index] = value;
    handleChange('activities', activities);
  };

  const removeActivity = (index: number) => {
    const activities = [...(data.activities || [])];
    activities.splice(index, 1);
    handleChange('activities', activities);
  };

  return (
    <Card className="p-4">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="school">School</Label>
              <Input
                id="school"
                value={data.school}
                onChange={(e) => handleChange('school', e.target.value)}
                placeholder="PES University"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="graduationDate">Graduation Date</Label>
              <Input
                id="graduationDate"
                value={data.graduationDate}
                onChange={(e) => handleChange('graduationDate', e.target.value)}
                placeholder="2014"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="degree">Degree</Label>
              <Input
                id="degree"
                value={data.degree}
                onChange={(e) => handleChange('degree', e.target.value)}
                placeholder="Bachelor of Computer Applications"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="field">Field of Study</Label>
              <Input
                id="field"
                value={data.field}
                onChange={(e) => handleChange('field', e.target.value)}
                placeholder="Computer Science"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="gpa">GPA (optional)</Label>
              <Input
                id="gpa"
                type="number"
                step="0.01"
                min="0"
                max="4"
                value={data.gpa || ''}
                onChange={(e) => handleChange('gpa', parseFloat(e.target.value) || undefined)}
                placeholder="4.0"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Activities and Societies</Label>
            {(data.activities || []).map((activity, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={activity}
                  onChange={(e) => updateActivity(index, e.target.value)}
                  placeholder="Technical Lead, College Programming Club"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeActivity(index)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={addActivity}
            >
              <PlusCircle className="w-4 h-4 mr-2" />
              Add Activity
            </Button>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onRemove}
          className="text-destructive hover:text-destructive hover:bg-destructive/10 ml-2"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}