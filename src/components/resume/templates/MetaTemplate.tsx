import type { ResumeData } from '@/types/resume';
import { formatMetric, formatSTAR } from '@/utils/formatters';

export default function MetaTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="p-8 max-w-[850px] mx-auto bg-gray-50 text-black">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{data.personalInfo.name}</h1>
        <div className="text-sm space-x-2">
          <span>{data.personalInfo.email}</span>
          <span>•</span>
          <span>{data.personalInfo.phone}</span>
          <span>•</span>
          <span>{data.personalInfo.location}</span>
          {data.personalInfo.linkedin && (
            <>
              <span>•</span>
              <a href={data.personalInfo.linkedin} className="text-blue-600">
                LinkedIn
              </a>
            </>
          )}
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b border-blue-600">
          Professional Experience
        </h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold">{exp.company}</h3>
              <span className="text-sm">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <div className="text-sm font-medium mb-2">{exp.title}</div>
            <ul className="list-disc list-inside mb-2 text-sm">
              {exp.metrics.map((metric, idx) => (
                <li key={idx}>{formatMetric(metric)}</li>
              ))}
            </ul>
            {exp.stories.length > 0 && (
              <div className="text-sm space-y-2">
                {exp.stories.map((story, idx) => (
                  <p key={idx} className="text-gray-700">
                    {formatSTAR(story)}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b border-blue-600">
          Education
        </h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between">
              <h3 className="font-semibold">{edu.school}</h3>
              <span className="text-sm">{edu.graduationDate}</span>
            </div>
            <div className="text-sm">
              {edu.degree} in {edu.field}
              {edu.gpa && ` • GPA: ${edu.gpa}`}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b border-blue-600">
          Skills
        </h2>
        <div className="text-sm">{data.skills.join(' • ')}</div>
      </section>
    </div>
  );
}