import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface CodeTemplate {
  id: string;
  title: string;
  description: string;
  language: string;
  type: string;
  code?: string;
}

interface TemplateCardProps {
  template: CodeTemplate;
  onClick?: () => void;
}

export function TemplateCard({ template, onClick }: TemplateCardProps) {
  return (
    <Card 
      className="cursor-pointer bg-background/60 backdrop-blur-md border-white/20 hover:border-white/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold rainbow-text">{template.title}</CardTitle>
        <CardDescription className="line-clamp-2 mt-1 text-foreground/80 font-medium">{template.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary" className="bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
            {template.language}
          </Badge>
          <Badge variant="outline" className="border-white/30 text-foreground/90 backdrop-blur-sm">
            {template.type}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export default TemplateCard;
