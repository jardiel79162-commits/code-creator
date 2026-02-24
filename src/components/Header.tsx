import { Code2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block text-lg">JTC CodeGen</span>
        </div>
      </div>
    </header>
  );
};
