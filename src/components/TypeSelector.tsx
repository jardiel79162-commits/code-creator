import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  selected: string;
  onChange: (val: string) => void;
}

const TypeSelector = ({ selected, onChange }: Props) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Type</label>
      <Select value={selected} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="api">API Client</SelectItem>
          <SelectItem value="component">UI Component</SelectItem>
          <SelectItem value="util">Utility Function</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TypeSelector;
