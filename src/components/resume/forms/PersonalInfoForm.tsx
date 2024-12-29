import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import type { ResumeData } from '@/types/resume';

interface Props {
  data: ResumeData['personalInfo'];
  onChange: (data: ResumeData['personalInfo']) => void;
}

export default function PersonalInfoForm({ data, onChange }: Props) {
  const handleChange = (field: keyof ResumeData['personalInfo'], value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={data.name || ''}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="John Doe"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={data.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john@example.com"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={data.phone || ''}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="(555) 555-5555"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={data.location || ''}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="San Francisco, CA"
          />
        </div>
      </div>

      <Separator className="my-6" />
      
      <div className="space-y-4">
        <h3 className="font-medium">Social & Portfolio Links</h3>
        <div className="grid gap-2">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            value={data.linkedin || ''}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            placeholder="linkedin.com/in/johndoe"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="github">GitHub</Label>
          <Input
            id="github"
            value={data.github || ''}
            onChange={(e) => handleChange('github', e.target.value)}
            placeholder="github.com/johndoe"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="portfolio">Portfolio</Label>
          <Input
            id="portfolio"
            value={data.portfolio || ''}
            onChange={(e) => handleChange('portfolio', e.target.value)}
            placeholder="johndoe.com"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="medium">Medium</Label>
          <Input
            id="medium"
            value={data.medium || ''}
            onChange={(e) => handleChange('medium', e.target.value)}
            placeholder="medium.com/@johndoe"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="substack">Substack</Label>
          <Input
            id="substack"
            value={data.substack || ''}
            onChange={(e) => handleChange('substack', e.target.value)}
            placeholder="johndoe.substack.com"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="youtube">YouTube</Label>
          <Input
            id="youtube"
            value={data.youtube || ''}
            onChange={(e) => handleChange('youtube', e.target.value)}
            placeholder="youtube.com/@johndoe"
          />
        </div>
      </div>

      <Separator className="my-6" />

      <div className="grid gap-2">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          value={data.summary || ''}
          onChange={(e) => handleChange('summary', e.target.value)}
          placeholder="Senior professional with X years of experience..."
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
}