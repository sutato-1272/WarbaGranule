'use client';

import { useState } from 'react';
import { Palette, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#produk', label: 'Produk' },
  { href: '#estimasi', label: 'Estimasi' },
  { href: '#mengapa-kami', label: 'Mengapa Kami' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Palette className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">
            WarnaGranule
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button asChild variant="ghost" key={link.href}>
              <a href={link.href} className="text-sm font-medium">
                {link.label}
              </a>
            </Button>
          ))}
          <Button asChild size="sm" className="ml-4 bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#kontak">Hubungi Kami</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b p-4">
                  <a href="#" className="flex items-center gap-2" onClick={closeMobileMenu}>
                    <Palette className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-bold text-primary">
                      WarnaGranule
                    </span>
                  </a>
                   <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Tutup menu</span>
                      </Button>
                    </SheetTrigger>
                </div>
                <nav className="flex flex-col p-4 space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t">
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href="#kontak" onClick={closeMobileMenu}>Hubungi Kami</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
