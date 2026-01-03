import { Code2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CodeTemplate } from '@/lib/codeTemplates';

interface TemplateCardProps {
  template: CodeTemplate;
  isSelected: boolean;
  onClick: () => void;
}

export function TemplateCard({ template, isSelected, onClick }: TemplateCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-full rounded-lg border p-4 text-left transition-all duration-300",
        "hover:border-primary/50 hover:bg-primary/5",
        isSelected
          ? "border-primary bg-primary/10 glow-primary"
          : "border-border bg-card"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Code2 className={cn(
              "h-4 w-4 transition-colors",
              isSelected ? "text-primary" : "text-muted-foreground"
            )} />
            <h3 className="font-medium">{template.name}</h3>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {template.description}
          </p>
        </div>
        
        {isSelected && (
          <Sparkles className="h-5 w-5 animate-pulse-glow text-primary" />
        )}
      </div>

      {/* Hover effect */}
      <div className={cn(
        "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300",
        "pointer-events-none group-hover:opacity-100",
        isSelected && "opacity-100"
      )}>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </button>
  );
}
