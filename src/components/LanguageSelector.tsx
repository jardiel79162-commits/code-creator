import { cn } from '@/lib/utils';
import { Language, languages } from '@/lib/codeTemplates';

interface LanguageSelectorProps {
  selected: Language;
  onSelect: (language: Language) => void;
}

export function LanguageSelector({ selected, onSelect }: LanguageSelectorProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {languages.map((lang) => (
        <button
          key={lang.value}
          onClick={() => onSelect(lang.value)}
          className={cn(
            "group relative flex items-center gap-2 rounded-lg px-4 py-3 font-medium transition-all duration-300",
            "border border-border hover:border-primary/50",
            selected === lang.value
              ? "border-primary bg-primary/10 text-primary glow-primary"
              : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
          )}
        >
          <span className="text-lg">{lang.icon}</span>
          <span>{lang.label}</span>
          
          {selected === lang.value && (
            <span className="absolute -bottom-px left-1/2 h-0.5 w-8 -translate-x-1/2 bg-primary" />
          )}
        </button>
      ))}
    </div>
  );
}
