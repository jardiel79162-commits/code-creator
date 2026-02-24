import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  selected: string;
  onChange: (val: string) => void;
}

const TypeSelector = ({ selected, onChange }: Props) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold tracking-wide drop-shadow-sm text-foreground">Type</label>
      <Select value={selected} onValueChange={onChange}>
        <SelectTrigger className="bg-background/50 backdrop-blur-sm border-white/20 font-medium">
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent className="bg-background/80 backdrop-blur-md border-white/20">
          <SelectItem value="api">API Client</SelectItem>
          <SelectItem value="component">UI Component</SelectItem>
          <SelectItem value="util">Utility Function</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TypeSelector;
