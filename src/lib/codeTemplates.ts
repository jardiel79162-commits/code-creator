export const generateCode = (language: string, type: string): string => {
  if (language === 'typescript' && type === 'api') {
    return `export const fetchData = async () => {\n  const res = await fetch('/api/data');\n  if (!res.ok) throw new Error('Network response was not ok');\n  return res.json();\n};`;
  }
  if (language === 'javascript' && type === 'component') {
    return `const MyComponent = () => {\n  return (\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  );\n};\n\nexport default MyComponent;`;
  }
  return `// Example code for ${language} - ${type}\n// Add more templates in src/lib/codeTemplates.ts`;
};
