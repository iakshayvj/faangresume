import type { ResumeData } from '@/types/resume';
import type { ViewSettings } from '@/types/theme';
import { formatMetric } from '@/utils/formatters';

interface Props {
  data: ResumeData;
  settings: ViewSettings;
}

export default function GoogleTemplate({ data, settings }: Props) {
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
    if (data.personalInfo.portfolio) {
      links.push({
        id: 'portfolio',
        url: formatLink(data.personalInfo.portfolio),
        label: 'Portfolio'
      });
    }
    if (data.personalInfo.github) {
      links.push({
        id: 'github',
        url: formatLink(data.personalInfo.github),
        label: 'GitHub'
      });
    }
    if (data.personalInfo.medium) {
      links.push({
        id: 'medium',
        url: formatLink(data.personalInfo.medium),
        label: 'Medium'
      });
    }
    
    return links.map((link, index) => (
      <span key={link.id}>
        {index > 0 && <span key={`sep-${link.id}`}> | </span>}
        <a href={link.url} className="text-blue-600 hover:underline">
          {link.label}
        </a>
      </span>
    ));
  };

  return (
    <div className="max-w-[850px] mx-auto p-8 text-[#333]">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center mb-2">{data.personalInfo.name}</h1>
        <div className="text-sm text-center">
          {data.personalInfo.location} | {data.personalInfo.phone} | {data.personalInfo.email} | {renderLinks()}
        </div>
      </header>

      {data.personalInfo.summary && (
        <div className="mb-6">
          <p className="text-sm text-center italic leading-relaxed">
            {data.personalInfo.summary}
          </p>
        </div>
      )}

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-300 pb-1">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <div>
                <span className="font-bold">{exp.company}</span>
                <span className="mx-2">|</span>
                <span className="font-semibold">{exp.title}</span>
              </div>
              <span className="text-sm">{exp.startDate} - {exp.endDate}</span>
            </div>
            <ul className="list-disc ml-5 text-sm space-y-1">
              {exp.metrics.map((metric, idx) => (
                <li key={idx} className="leading-snug">
                  {formatMetric(metric)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-300 pb-1">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="font-bold">{edu.school}</span>
                <span className="mx-2">|</span>
                <span>{edu.degree} in {edu.field}</span>
              </div>
              <span className="text-sm">{edu.graduationDate}</span>
            </div>
            {edu.gpa && <div className="text-sm">GPA: {edu.gpa}</div>}
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-300 pb-1">Technical Skills</h2>
        <div className="text-sm">
          {data.skills.join(' • ')}
        </div>
      </section>
    </div>
  );
}