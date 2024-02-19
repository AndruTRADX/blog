"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface Topic {
  value: string;
  label: string;
}

interface Props {
  open: boolean;
  setOpen: (prop: boolean) => void;
  value: string;
  setValue: (prop: string) => void;
  topics: Topic[];
}

const SelectTopic = ({ open, setOpen, value, setValue, topics }: Props) => {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? topics.find((topic) => topic.value === value)?.label
            : "Select topic"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search topic" className="h-9" />
          <CommandEmpty>No topic found.</CommandEmpty>
          <CommandGroup>
            {topics.map((topic) => (
              <CommandItem
                key={topic.value}
                value={topic.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {topic.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === topic.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SelectTopic;
