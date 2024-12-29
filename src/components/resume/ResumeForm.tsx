import { useState } from 'react';
import { Settings } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PersonalInfoForm from './forms/PersonalInfoForm';
import ExperienceForm from './forms/ExperienceForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import ViewSettingsForm from './forms/ViewSettingsForm';
import { sampleResume } from '@/data/sampleResume';
import type { ResumeData } from '@/types/resume';
import type { ViewSettings } from '@/types/theme';
import type { ColorSettings } from '@/types/colors';

interface Props {
  onUpdate: (data: ResumeData) => void;
  settings: ViewSettings;
  onSettingsChange: (settings: ViewSettings) => void;
  colorSettings: ColorSettings;
  onColorSettingsChange: (settings: ColorSettings) => void;
}

export default function ResumeForm({
  onUpdate,
  settings,
  onSettingsChange,
  colorSettings,
  onColorSettingsChange,
}: Props) {
  const [data, setData] = useState<ResumeData>(sampleResume);

  const updateData = (section: keyof ResumeData, value: any) => {
    const newData = { ...data, [section]: value };
    setData(newData);
    onUpdate(newData);
  };

  return (
    <Card className="p-6">
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="w-4 h-4" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="personal">
          <PersonalInfoForm
            data={data.personalInfo}
            onChange={(value) => updateData('personalInfo', value)}
          />
        </TabsContent>
        <TabsContent value="experience">
          <ExperienceForm
            data={data.experience}
            onChange={(value) => updateData('experience', value)}
          />
        </TabsContent>
        <TabsContent value="education">
          <EducationForm
            data={data.education}
            onChange={(value) => updateData('education', value)}
          />
        </TabsContent>
        <TabsContent value="skills">
          <SkillsForm
            data={data.skills}
            onChange={(value) => updateData('skills', value)}
          />
        </TabsContent>
        <TabsContent value="settings">
          <ViewSettingsForm
            settings={settings}
            onChange={onSettingsChange}
            colorSettings={colorSettings}
            onColorSettingsChange={onColorSettingsChange}
          />
        </TabsContent>
      </Tabs>
    </Card>
  );
}