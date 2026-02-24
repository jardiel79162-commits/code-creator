interface Props {
  code: string;
  language: string;
}

const CodeDisplay = ({ code, language }: Props) => {
  return (
    <div className="relative rounded-lg bg-slate-950 p-4">
      <div className="absolute right-4 top-4 text-xs font-semibold uppercase text-slate-400">{language}</div>
      <pre className="text-sm text-slate-50 overflow-x-auto mt-6">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
