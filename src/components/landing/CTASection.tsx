import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  onStartBuilding: () => void;
}

export default function CTASection({ onStartBuilding }: Props) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.6))]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-sm text-white">Ready to stand out?</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Land Your Dream PM Role at FAANG
        </h2>
        <Button
          size="lg"
          variant="secondary"
          className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
          onClick={onStartBuilding}
        >
          Build Your Resume Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}