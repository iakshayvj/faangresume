import type { ResumeData } from '@/types/resume';
import type { ViewSettings } from '@/types/theme';
import type { ColorSettings } from '@/types/colors';
import { colorSets } from '@/data/colorSets';

interface Props {
  data: ResumeData;
  settings: ViewSettings;
  colorSettings: ColorSettings;
}

export default function ResumePreview({ data, settings, colorSettings }: Props) {
  const colorSet = colorSets.find(set => set.id === colorSettings.selectedSet) || colorSets[0];

  const formatLink = (url: string | undefined, prefix: string = '') => {
    if (!url) return null;
    return url.startsWith('http') ? url : `${prefix}${url}`;
  };

  const renderLinks = () => {
    const links = [];
    if (data.personalInfo.linkedin) {
      links.push({
        id: 'linkedin',
        url: formatLink(data.personalInfo.linkedin),
        label: 'LinkedIn'
      });
    }
    if (data.personalInfo.github) {
      links.push({
        id: 'github',
        url: formatLink(data.personalInfo.github),
        label: 'GitHub'
      });
    }
    if (data.personalInfo.portfolio) {
      links.push({
        id: 'portfolio',
        url: formatLink(data.personalInfo.portfolio),
        label: 'Portfolio'
      });
    }
    
    return links.map((link, index) => (
      <span key={link.id}>
        {index > 0 && <span key={`sep-${link.id}`}> | </span>}
        <a 
          href={link.url} 
          className="underline"
          style={{ color: colorSet.colors.accents }}
        >
          {link.label}
        </a>
      </span>
    ));
  };

  return (
    <div className="max-w-[850px] mx-auto p-8" style={{ color: colorSet.colors.body }}>
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-center mb-2" style={{ color: colorSet.colors.headers }}>
          {data.personalInfo.name}
        </h1>
        <div className="text-sm text-center">
          {data.personalInfo.location} | {data.personalInfo.phone} | {data.personalInfo.email} | {renderLinks()}
        </div>
      </header>

      {data.personalInfo.summary && (
        <div className="mb-6">
          <p className="text-sm text-center italic">
            {data.personalInfo.summary}
          </p>
        </div>
      )}

      <section className="mb-6">
        <h2 
          className="text-lg font-bold uppercase mb-3 border-b pb-1"
          style={{ color: colorSet.colors.headers, borderColor: colorSet.colors.accents }}
        >
          Experience
        </h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <div>
                <span className="font-bold" style={{ color: colorSet.colors.headers }}>
                  {exp.company}
                </span>
                <span> | </span>
                <span className="font-bold" style={{ color: colorSet.colors.headers }}>
                  {exp.title}
                </span>
              </div>
              <span className="text-sm">{exp.startDate} - {exp.endDate}</span>
            </div>
            <ul className="list-disc ml-5 text-sm space-y-1">
              {exp.metrics.map((metric, idx) => (
                <li key={idx} className="leading-snug">
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 
          className="text-lg font-bold uppercase mb-3 border-b pb-1"
          style={{ color: colorSet.colors.headers, borderColor: colorSet.colors.accents }}
        >
          Education
        </h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="font-bold" style={{ color: colorSet.colors.headers }}>
                  {edu.school}
                </span>
                <span> | </span>
                <span className="font-bold" style={{ color: colorSet.colors.headers }}>
                  {edu.degree}, {edu.field}
                </span>
              </div>
              <span className="text-sm">{edu.graduationDate}</span>
            </div>
            {edu.gpa && <div className="text-sm">GPA: {edu.gpa}</div>}
            {edu.activities && edu.activities.length > 0 && (
              <div className="mt-1 text-sm">
                <span className="font-medium">Activities: </span>
                {edu.activities.join(' • ')}
              </div>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2 
          className="text-lg font-bold uppercase mb-3 border-b pb-1"
          style={{ color: colorSet.colors.headers, borderColor: colorSet.colors.accents }}
        >
          Technical Skills
        </h2>
        <div className="text-sm">
          {data.skills.map((skill, index) => (
            <span key={index}>
              {index > 0 && <span> • </span>}
              <span className="font-medium">{skill}</span>
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}