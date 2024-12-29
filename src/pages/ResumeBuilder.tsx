import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ResumeForm from '@/components/resume/ResumeForm';
import ResumePreview from '@/components/resume/ResumePreview';
import { sampleResume } from '@/data/sampleResume';
import { defaultFontSizes } from '@/data/themes';
import { exportToPDF } from '@/utils/pdfExport';
import type { ResumeData } from '@/types/resume';
import type { ViewSettings } from '@/types/theme';
import type { ColorSettings } from '@/types/colors';

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>(sampleResume);
  const [viewSettings, setViewSettings] = useState<ViewSettings>({
    theme: 'classic',
    fontSizes: defaultFontSizes,
  });
  const [colorSettings, setColorSettings] = useState<ColorSettings>({
    selectedSet: 'classic',
  });

  const handleExport = async () => {
    const success = await exportToPDF('resume-preview', `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`);
    if (!success) {
      console.error('Failed to generate PDF');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">FAANG PM Resume Builder</h1>
            <Button onClick={handleExport}>Export PDF</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <ResumeForm
              onUpdate={setResumeData}
              settings={viewSettings}
              onSettingsChange={setViewSettings}
              colorSettings={colorSettings}
              onColorSettingsChange={setColorSettings}
            />
          </div>
          <div className="bg-white rounded-lg shadow" id="resume-preview">
            <ResumePreview
              data={resumeData}
              settings={viewSettings}
              colorSettings={colorSettings}
            />
          </div>
        </div>
      </main>
    </div>
  );
}