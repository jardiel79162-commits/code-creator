import { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeDisplayProps {
  code: string;
  language: string;
}

export function CodeDisplay({ code, language }: CodeDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="group relative animate-fade-in overflow-hidden rounded-lg border border-border bg-code-bg">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="font-mono text-sm text-muted-foreground">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs transition-all",
            "hover:bg-primary/10 hover:text-primary",
            copied && "bg-primary/20 text-primary"
          )}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-sm leading-relaxed">
          {lines.map((line, index) => (
            <div
              key={index}
              className="group/line flex hover:bg-code-line"
            >
              <span className="mr-4 inline-block w-8 select-none text-right text-muted-foreground/50">
                {index + 1}
              </span>
              <code className="flex-1">
                <HighlightedLine line={line} language={language} />
              </code>
            </div>
          ))}
        </pre>
      </div>

      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </div>
  );
}

function HighlightedLine({ line, language }: { line: string; language: string }) {
  // Simple syntax highlighting
  const highlightPatterns = [
    // Comments
    { pattern: /(\/\/.*|#.*|""".*"""|'''.*''')/g, className: 'text-code-comment' },
    // Strings
    { pattern: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, className: 'text-code-string' },
    // Keywords
    { pattern: /\b(const|let|var|function|async|await|return|if|else|for|while|class|import|export|from|try|catch|throw|new|this|def|self|None|True|False|interface|type|extends|implements)\b/g, className: 'text-code-keyword' },
    // Functions
    { pattern: /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, className: 'text-code-function' },
    // Numbers
    { pattern: /\b(\d+\.?\d*)\b/g, className: 'text-code-number' },
  ];

  let result = line;
  const segments: { text: string; className?: string }[] = [];
  
  // For simplicity, we'll just return the line with basic highlighting
  // A full implementation would use a proper parser
  
  return <span className="text-foreground">{line}</span>;
}
