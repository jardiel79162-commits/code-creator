import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  selected: string;
  onChange: (val: string) => void;
}

const LanguageSelector = ({ selected, onChange }: Props) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold tracking-wide drop-shadow-sm text-foreground">Language</label>
      <Select value={selected} onValueChange={onChange}>
        <SelectTrigger className="bg-background/50 backdrop-blur-sm border-white/20 font-medium">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent className="bg-background/80 backdrop-blur-md border-white/20">
          <SelectItem value="typescript">TypeScript</SelectItem>
          <SelectItem value="javascript">JavaScript</SelectItem>
          <SelectItem value="python">Python</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
