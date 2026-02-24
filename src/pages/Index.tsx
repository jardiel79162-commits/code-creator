import Header from "@/components/Header";
import CodeGenerator from "@/components/CodeGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <CodeGenerator />
      </main>
    </div>
  );
};

export default Index;
