import { ArrowRight, FileCheck, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  onStartBuilding: () => void;
}

export default function HeroSection({ onStartBuilding }: Props) {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <Award className="h-6 w-6 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">FAANG-Ready Resume Builder</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Craft Your Dream PM Resume
              <span className="block mt-2 text-blue-600">in Minutes!</span>
            </h1>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-600">
                Build ATS-optimized, recruiter-friendly resumes tailored for Product Managers at top tech companies.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-green-500" />
                  <span>ATS Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-500" />
                  <span>PM Focused</span>
                </div>
              </div>
            </div>
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={onStartBuilding}
            >
              Start Building <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-lg" />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2340"
              alt="Resume Builder Preview"
              className="rounded-lg shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium">Live Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}