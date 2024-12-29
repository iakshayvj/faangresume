import type { ResumeData } from '@/types/resume';
import { formatMetric, formatSTAR } from '@/utils/formatters';

export default function AmazonTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="p-8 max-w-[850px] mx-auto bg-white text-black">
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
              <a href={data.personalInfo.linkedin} className="text-orange-600">
                LinkedIn
              </a>
            </>
          )}
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-orange-600 border-b-2 border-orange-600">
          Professional Experience
        </h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-lg">{exp.company}</h3>
              <span className="text-sm">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <div className="text-md font-medium mb-3">{exp.title}</div>
            <ul className="list-disc list-inside mb-3 text-sm space-y-1">
              {exp.metrics.map((metric, idx) => (
                <li key={idx} className="leading-relaxed">
                  {formatMetric(metric)}
                </li>
              ))}
            </ul>
            {exp.stories.length > 0 && (
              <div className="text-sm space-y-2 pl-4">
                {exp.stories.map((story, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed">
                    {formatSTAR(story)}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-orange-600 border-b-2 border-orange-600">
          Education
        </h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between">
              <h3 className="font-bold">{edu.school}</h3>
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
        <h2 className="text-xl font-semibold mb-4 text-orange-600 border-b-2 border-orange-600">
          Skills & Leadership Principles
        </h2>
        <div className="text-sm leading-relaxed">
          {data.skills.join(' • ')}
        </div>
      </section>
    </div>
  );
}