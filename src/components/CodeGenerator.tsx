import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import TypeSelector from "./TypeSelector";
import CodeDisplay from "./CodeDisplay";
import { generateCode } from "@/lib/codeTemplates";

const CodeGenerator = () => {
  const [language, setLanguage] = useState("typescript");
  const [type, setType] = useState("api");
  
  const generatedCode = generateCode ? generateCode(language, type) : "// Code will appear here";

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LanguageSelector selected={language} onChange={setLanguage} />
        <TypeSelector selected={type} onChange={setType} />
      </div>
      <CodeDisplay code={generatedCode} language={language} />
    </div>
  );
};

export default CodeGenerator;
