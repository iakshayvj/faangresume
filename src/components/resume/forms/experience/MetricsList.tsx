import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, X } from 'lucide-react';

interface Props {
  metrics: string[];
  onChange: (metrics: string[]) => void;
}

export default function MetricsList({ metrics, onChange }: Props) {
  const addMetric = () => {
    onChange([...metrics, '']);
  };

  const updateMetric = (index: number, value: string) => {
    const newMetrics = [...metrics];
    newMetrics[index] = value;
    onChange(newMetrics);
  };

  const removeMetric = (index: number) => {
    onChange(metrics.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <Label>Key Metrics & Achievements</Label>
      {metrics.map((metric, index) => (
        <div key={index} className="flex gap-2">
          <Input
            value={metric}
            onChange={(e) => updateMetric(index, e.target.value)}
            placeholder="Increased user engagement by 40% through..."
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeMetric(index)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="w-full"
        onClick={addMetric}
      >
        <PlusCircle className="w-4 h-4 mr-2" />
        Add Metric
      </Button>
    </div>
  );
}