interface Props {
  code: string;
  language: string;
}

const CodeDisplay = ({ code, language }: Props) => {
  return (
    <div className="relative rounded-xl bg-slate-950/70 backdrop-blur-xl border border-white/20 p-6 shadow-2xl">
      <div className="absolute right-4 top-4 text-xs font-bold uppercase tracking-wider rainbow-text">{language}</div>
      <pre className="text-sm text-slate-50 overflow-x-auto mt-4 font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
