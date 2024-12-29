import type { ResumeData } from '@/types/resume';

export const sampleResume: ResumeData = {
  personalInfo: {
    name: "Akshay Joshi",
    email: "akshay.joshiv@gmail.com",
    phone: "9900415998",
    location: "Bangalore, India",
    linkedin: "www.linkedin.com/in/iakshayvj",
    github: "https://github.com/iakshayvj",
    summary: "Senior IC PM with 7+ years scaling AI/ML products from 0-1 in big tech. Led development of production LLM applications reducing customer service costs by 65% while driving 3x user growth. Expertise in large language models, recommendation systems, and ML infrastructure."
  },
  experience: [
    {
      company: "Meta",
      title: "Product Manager, News Feed",
      startDate: "Jan 2021",
      endDate: "Present",
      metrics: [
        "Led cross-functional team of 15 engineers to launch ML-based content ranking system, increasing user engagement by 32%",
        "Drove 40% reduction in misinformation through development of automated detection system",
        "Increased daily active users by 12M through launch of personalized content discovery features"
      ]
    },
    {
      company: "Google",
      title: "Product Manager, Google Maps",
      startDate: "Jun 2019",
      endDate: "Dec 2020", 
      metrics: [
        "Launched real-time transit predictions feature used by 35M monthly active users",
        "Increased user satisfaction score from 82% to 91% through UX improvements",
        "Led development of new revenue stream generating $25M ARR through business listings"
      ]
    }
  ],
  education: [
    {
      school: "PES University",
      degree: "Bachelor of Computer Applications",
      field: "",
      graduationDate: "2014",
      activities: [
        " Volunteer, Pixels Photography Club",
      ]
    }
  ],
  skills: [
    "Product Strategy",
    "A/B Testing", 
    "Data Analytics",
    "Machine Learning",
    "SQL",
    "Python",
    "User Research",
    "Agile/Scrum",
    "Cross-functional Leadership",
    "Product Analytics (Amplitude, Mixpanel)",
    "Stakeholder Management"
  ]
};