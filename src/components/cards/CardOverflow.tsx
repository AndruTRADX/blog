interface EntryCategory {
  name: string;
  color: string;
}

interface Props {
  entryCategory: EntryCategory;
}

const CardOverflow = ({ entryCategory }: Props) => {
  return (
    <div className="flex items-center gap-1 text-xs flex-shrink-0 bg-primary/10 hover:bg-primary/15 transition-colors border border-primary rounded-xl px-2 py-1 cursor-pointer">
      <span className={`w-3 h-3 rounded-full block ${entryCategory.color}`} />
      <p className="text-primary font-semibold">{entryCategory.name}</p>
    </div>
  );
};

export default CardOverflow;
