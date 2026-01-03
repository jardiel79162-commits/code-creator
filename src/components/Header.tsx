import { Code2, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="relative overflow-hidden border-b border-border bg-card/50 backdrop-blur-sm">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-1/4 -top-1/2 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6 flex items-center gap-3">
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Code2 className="h-7 w-7 text-primary-foreground" />
              </div>
              <Sparkles className="absolute -right-1 -top-1 h-5 w-5 animate-pulse-glow text-accent" />
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient-primary">Code</span>
            <span className="text-foreground">Gen</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-lg text-muted-foreground">
            Gere código profissional em segundos. Templates modernos para 
            JavaScript, TypeScript, Python e React.
          </p>

          {/* Stats */}
          <div className="mt-8 flex items-center gap-8 text-sm">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary">4</span>
              <span className="text-muted-foreground">Linguagens</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary">9+</span>
              <span className="text-muted-foreground">Templates</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary">∞</span>
              <span className="text-muted-foreground">Possibilidades</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </header>
  );
}
