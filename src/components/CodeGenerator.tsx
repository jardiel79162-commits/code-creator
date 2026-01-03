import { useState, useMemo } from 'react';
import { Wand2 } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { TypeSelector } from './TypeSelector';
import { TemplateCard } from './TemplateCard';
import { CodeDisplay } from './CodeDisplay';
import { 
  Language, 
  CodeType, 
  getTemplatesByLanguage,
  getTemplate 
} from '@/lib/codeTemplates';

export function CodeGenerator() {
  const [language, setLanguage] = useState<Language>('typescript');
  const [codeType, setCodeType] = useState<CodeType>('function');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);

  const availableTemplates = useMemo(() => {
    return getTemplatesByLanguage(language);
  }, [language]);

  const filteredTemplates = useMemo(() => {
    return availableTemplates.filter(t => t.type === codeType);
  }, [availableTemplates, codeType]);

  const selectedTemplate = useMemo(() => {
    if (selectedTemplateId) {
      return availableTemplates.find(t => t.id === selectedTemplateId);
    }
    return filteredTemplates[0];
  }, [selectedTemplateId, filteredTemplates, availableTemplates]);

  // Auto-select first template when filters change
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    const templates = getTemplatesByLanguage(newLanguage);
    const firstOfType = templates.find(t => t.type === codeType);
    if (firstOfType) {
      setSelectedTemplateId(firstOfType.id);
    } else if (templates.length > 0) {
      setCodeType(templates[0].type);
      setSelectedTemplateId(templates[0].id);
    }
  };

  const handleTypeChange = (newType: CodeType) => {
    setCodeType(newType);
    const template = getTemplate(language, newType);
    if (template) {
      setSelectedTemplateId(template.id);
    }
  };

  return (
    <div className="space-y-8">
      {/* Language Selection */}
      <section className="animate-fade-in space-y-3">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <span className="text-gradient-primary">01</span>
          <span>Escolha a linguagem</span>
        </h2>
        <LanguageSelector selected={language} onSelect={handleLanguageChange} />
      </section>

      {/* Type Selection */}
      <section className="animate-fade-in space-y-3" style={{ animationDelay: '0.1s' }}>
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <span className="text-gradient-primary">02</span>
          <span>Tipo de código</span>
        </h2>
        <TypeSelector 
          selected={codeType} 
          language={language}
          onSelect={handleTypeChange} 
        />
      </section>

      {/* Template Selection */}
      <section className="animate-fade-in space-y-3" style={{ animationDelay: '0.2s' }}>
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <span className="text-gradient-primary">03</span>
          <span>Template disponível</span>
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={selectedTemplate?.id === template.id}
              onClick={() => setSelectedTemplateId(template.id)}
            />
          ))}
        </div>
      </section>

      {/* Generated Code */}
      {selectedTemplate && (
        <section className="animate-fade-in space-y-3" style={{ animationDelay: '0.3s' }}>
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Wand2 className="h-5 w-5 text-primary" />
            <span>Código gerado</span>
          </h2>
          <CodeDisplay 
            code={selectedTemplate.code} 
            language={selectedTemplate.language} 
          />
        </section>
      )}
    </div>
  );
}
