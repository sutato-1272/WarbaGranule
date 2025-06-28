import { Palette } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <a href="#" className="flex items-center gap-2">
          <Palette className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">
            WarnaGranule Solutions
          </span>
        </a>
      </div>
    </header>
  );
}
