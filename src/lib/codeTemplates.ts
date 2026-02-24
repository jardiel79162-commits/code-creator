export const LANGUAGES = [
  { id: "javascript", label: "JavaScript", name: "JavaScript" },
  { id: "typescript", label: "TypeScript", name: "TypeScript" },
  { id: "python", label: "Python", name: "Python" },
  { id: "java", label: "Java", name: "Java" },
  { id: "html", label: "HTML", name: "HTML" }
];
export const languages = LANGUAGES;

export const TYPES = [
  { id: "component", label: "Component", name: "Component" },
  { id: "function", label: "Function", name: "Function" },
  { id: "api", label: "API Route", name: "API Route" }
];
export const types = TYPES;

export const TEMPLATES: Record<string, Record<string, string>> = {
  javascript: {
    component: "export default function Component() {\n  return <div>Hello World</div>;\n}",
    function: "function calculate(a, b) {\n  return a + b;\n}",
    api: "export default function handler(req, res) {\n  res.status(200).json({ message: 'Success' });\n}"
  },
  typescript: {
    component: "import React from 'react';\n\nexport default function Component(): JSX.Element {\n  return <div>Hello World</div>;\n}",
    function: "function calculate(a: number, b: number): number {\n  return a + b;\n}",
    api: "import { NextApiRequest, NextApiResponse } from 'next';\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n  res.status(200).json({ message: 'Success' });\n}"
  },
  python: {
    component: "class Component:\n    def render(self):\n        return '<div>Hello World</div>'",
    function: "def calculate(a, b):\n    return a + b",
    api: "from flask import Flask, jsonify\napp = Flask(__name__)\n\n@app.route('/api')\ndef handler():\n    return jsonify({'message': 'Success'})"
  },
  java: {
    component: "public class Component {\n    public String render() {\n        return \"<div>Hello World</div>\";\n    }\n}",
    function: "public int calculate(int a, int b) {\n    return a + b;\n}",
    api: "@RestController\npublic class ApiController {\n    @GetMapping(\"/api\")\n    public ResponseEntity<String> handler() {\n        return ResponseEntity.ok(\"Success\");\n    }\n}"
  },
  html: {
    component: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Component</title>\n</head>\n<body>\n  <div>Hello World</div>\n</body>\n</html>",
    function: "<!-- HTML não suporta funções nativamente. Utilize JavaScript dentro de uma tag <script>. -->",
    api: "<!-- HTML não suporta rotas de API nativamente. -->"
  }
};
export const templates = TEMPLATES;
export const codeTemplates = TEMPLATES;
