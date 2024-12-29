import { Eye, FileText, Star, Download, Zap, Target, BarChart, Shield } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Live Preview',
    description: 'See your resume come to life as you type with real-time preview',
    color: 'text-blue-600',
    gradient: 'from-blue-500/10 to-blue-500/5'
  },
  {
    icon: Shield,
    title: 'ATS-Optimized',
    description: 'Engineered to pass ATS scans at FAANG companies',
    color: 'text-green-600',
    gradient: 'from-green-500/10 to-green-500/5'
  },
  {
    icon: Target,
    title: 'PM-Focused',
    description: 'Templates crafted specifically for Product Manager roles',
    color: 'text-purple-600',
    gradient: 'from-purple-500/10 to-purple-500/5'
  },
  {
    icon: Zap,
    title: 'Quick Export',
    description: 'Download your polished resume instantly as PDF',
    color: 'text-orange-600',
    gradient: 'from-orange-500/10 to-orange-500/5'
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Our Resume Builder?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built specifically for Product Managers targeting FAANG and top tech companies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-100">
                <div className={`inline-flex p-3 rounded-lg ${feature.color} bg-white shadow-lg mb-4 ring-2 ring-gray-100`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                {/* Decorative Side Border */}
                <div 
                  className={`absolute left-0 top-0 w-1 h-full rounded-l-xl ${feature.color.replace('text', 'bg')}`} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}