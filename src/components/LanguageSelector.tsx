import React from "react";
import { Button } from "@/components/ui/button";
import { languages } from "@/lib/codeTemplates";

interface LanguageSelectorProps {
  language?: string;
  setLanguage?: (lang: string) => void;
  selected?: string;
  onSelect?: (lang: string) => void;
  value?: string;
  onChange?: (lang: string) => void;
  selectedLanguage?: string;
  onLanguageSelect?: (lang: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = (props) => {
  // Identifica dinamicamente as props para manter a compatibilidade com o código existente
  const selectedValue = props.language || props.selected || props.value || props.selectedLanguage;
  const onChange = props.setLanguage || props.onSelect || props.onChange || props.onLanguageSelect;

  return (
    <div className="space-y-3 w-full">
      <label className="text-sm font-semibold leading-none mb-2 block">
        Escolha a Linguagem
      </label>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang: any) => {
          const id = lang.id || lang.value || lang;
          const label = lang.label || lang.name || lang;
          
          return (
            <Button
              key={id}
              variant={selectedValue === id ? "default" : "outline"}
              onClick={() => onChange && onChange(id)}
              className="transition-all duration-200"
              type="button"
            >
              {label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
