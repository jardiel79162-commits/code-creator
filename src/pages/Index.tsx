import { Header } from '@/components/Header';
import { CodeGenerator } from '@/components/CodeGenerator';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <CodeGenerator />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          Feito com <span className="text-primary">♥</span> para desenvolvedores
        </p>
      </footer>
    </div>
  );
};

export default Index;
