import { FileEdit, Palette, Download } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: FileEdit,
    title: 'Enter Your Details',
    description: 'Add your experience, education, and key achievements',
    color: 'text-blue-600',
    gradient: 'from-blue-500/10 to-blue-500/5'
  },
  {
    step: '02',
    icon: Palette,
    title: 'Customize Design',
    description: 'Choose your preferred layout and styling options',
    color: 'text-purple-600',
    gradient: 'from-purple-500/10 to-purple-500/5'
  },
  {
    step: '03',
    icon: Download,
    title: 'Download PDF',
    description: 'Get your FAANG-ready resume instantly',
    color: 'text-green-600',
    gradient: 'from-green-500/10 to-green-500/5'
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-12 md:py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three simple steps to create your professional PM resume
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                <span className={`text-xl font-bold ${step.color}`}>{step.step}</span>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className={`inline-flex p-4 rounded-lg ${step.color} bg-white shadow-md mb-6`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Decorative Bottom Border */}
              <div className={`h-1 w-full absolute bottom-0 left-0 rounded-b-xl ${step.color} opacity-75`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}