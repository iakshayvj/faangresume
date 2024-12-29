import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import MetricsList from './MetricsList';
import type { Experience } from '@/types/resume';

interface Props {
  data: Experience;
  onChange: (experience: Experience) => void;
  onRemove: () => void;
}

export default function ExperienceEntry({ data, onChange, onRemove }: Props) {
  const handleChange = (field: keyof Experience, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <Card className="p-4">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={data.company}
                onChange={(e) => handleChange('company', e.target.value)}
                placeholder="Company name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={data.title}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="Product Manager"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                value={data.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
                placeholder="MM/YYYY"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                value={data.endDate}
                onChange={(e) => handleChange('endDate', e.target.value)}
                placeholder="MM/YYYY or Present"
              />
            </div>
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
      
      <MetricsList
        metrics={data.metrics}
        onChange={(metrics) => handleChange('metrics', metrics)}
      />
    </Card>
  );
}