import { cn } from '@/lib/utils';
import { CodeType, codeTypes, Language, getTemplatesByLanguage } from '@/lib/codeTemplates';

interface TypeSelectorProps {
  selected: CodeType;
  language: Language;
  onSelect: (type: CodeType) => void;
}

export function TypeSelector({ selected, language, onSelect }: TypeSelectorProps) {
  const availableTemplates = getTemplatesByLanguage(language);
  const availableTypes = [...new Set(availableTemplates.map(t => t.type))];

  return (
    <div className="flex flex-wrap gap-2">
      {codeTypes
        .filter(type => availableTypes.includes(type.value))
        .map((type) => (
          <button
            key={type.value}
            onClick={() => onSelect(type.value)}
            className={cn(
              "rounded-full px-4 py-2 font-mono text-sm transition-all duration-300",
              "border border-border",
              selected === type.value
                ? "border-accent bg-accent/20 text-accent"
                : "bg-muted/50 text-muted-foreground hover:border-accent/50 hover:text-foreground"
            )}
          >
            {type.label}
          </button>
        ))}
    </div>
  );
}
