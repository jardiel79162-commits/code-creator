import { CodeGenerator } from "@/components/CodeGenerator";

const Index = () => {
  return (
    <main className="container py-8 space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">JTC CodeGen</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Generate your code templates instantly. Select the language, structure, and get started.
        </p>
      </div>
      <CodeGenerator />
    </main>
  );
};

export default Index;
