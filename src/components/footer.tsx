import { Palette } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background/80 py-6">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
           <Palette className="h-5 w-5 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left font-headline font-bold text-primary">
            WarnaGranule Solutions
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © 2024 WarnaGranule Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
