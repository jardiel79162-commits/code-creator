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
      className="cursor-pointer hover:border-primary transition-colors hover:shadow-md"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">{template.title}</CardTitle>
        <CardDescription className="line-clamp-2 mt-1">{template.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {template.language}
          </Badge>
          <Badge variant="outline" className="border-border">
            {template.type}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export default TemplateCard;
