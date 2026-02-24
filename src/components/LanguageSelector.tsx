import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  selected: string;
  onChange: (val: string) => void;
}

const LanguageSelector = ({ selected, onChange }: Props) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Language</label>
      <Select value={selected} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="typescript">TypeScript</SelectItem>
          <SelectItem value="javascript">JavaScript</SelectItem>
          <SelectItem value="python">Python</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
