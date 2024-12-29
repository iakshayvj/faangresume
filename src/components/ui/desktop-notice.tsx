import { Monitor } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DesktopNotice({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            Desktop Experience Recommended
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            For the best resume building experience, we recommend using a desktop or laptop computer. The resume builder is optimized for larger screens to ensure precise formatting and layout control.
          </p>
          <p className="text-sm text-muted-foreground">
            While you can browse our landing page on mobile, please switch to a desktop device when you're ready to create your resume.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}