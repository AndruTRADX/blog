import Link from "next/link";

interface Props {
  category: string;
  title: string;
  date: string
  link: string;
}

const HeroBlogPostCard = ({ category, title, date, link }: Props) => {

  return (
    <Link href={link} className="flex flex-col max-w-[420px] group cursor-pointer">
      <p className="text-sm text-gray-2 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-primary" />
        {category}
      </p>
      <p className="text-gray-1 group-hover:text-primary-hover transition-colors font-medium">{title}</p>
      <p className="text-xs text-gray-2">{date}</p>
      <hr className="mt-2 border rounded-sm border-primary w-24" />
    </Link>
  );
};

export default HeroBlogPostCard;