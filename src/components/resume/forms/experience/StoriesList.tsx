import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { PlusCircle, Trash2 } from 'lucide-react';
import type { Story } from '@/types/resume';

interface Props {
  stories: Story[];
  onChange: (stories: Story[]) => void;
}

export default function StoriesList({ stories, onChange }: Props) {
  const addStory = () => {
    onChange([
      ...stories,
      { situation: '', task: '', action: '', result: '' },
    ]);
  };

  const updateStory = (index: number, field: keyof Story, value: string) => {
    const newStories = [...stories];
    newStories[index] = { ...newStories[index], [field]: value };
    onChange(newStories);
  };

  const removeStory = (index: number) => {
    onChange(stories.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4 mt-6">
      <div className="flex justify-between items-center">
        <Label>STAR Stories</Label>
      </div>
      {stories.map((story, index) => (
        <Card key={index} className="p-4 space-y-4">
          <div className="flex justify-between items-start">
            <Label className="text-sm font-medium">Story {index + 1}</Label>
            <Button
              variant="ghost"
              size="icon"
              className="text-destructive"
              onClick={() => removeStory(index)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`situation-${index}`}>Situation</Label>
              <Input
                id={`situation-${index}`}
                value={story.situation}
                onChange={(e) => updateStory(index, 'situation', e.target.value)}
                placeholder="Describe the situation..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`task-${index}`}>Task</Label>
              <Input
                id={`task-${index}`}
                value={story.task}
                onChange={(e) => updateStory(index, 'task', e.target.value)}
                placeholder="What was your task..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`action-${index}`}>Action</Label>
              <Input
                id={`action-${index}`}
                value={story.action}
                onChange={(e) => updateStory(index, 'action', e.target.value)}
                placeholder="What actions did you take..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`result-${index}`}>Result</Label>
              <Input
                id={`result-${index}`}
                value={story.result}
                onChange={(e) => updateStory(index, 'result', e.target.value)}
                placeholder="What were the results..."
              />
            </div>
          </div>
        </Card>
      ))}
      <Button
        variant="outline"
        className="w-full"
        onClick={addStory}
      >
        <PlusCircle className="w-4 h-4 mr-2" />
        Add STAR Story
      </Button>
    </div>
  );
}