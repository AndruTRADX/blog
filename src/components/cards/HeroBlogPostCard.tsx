import Link from "next/link";

interface Props {
  category: string;
  title: string;
  date: string;
  link: string;
}

const HeroBlogPostCard = ({ category, title, date, link }: Props) => {
  return (
    <Link
      href={link}
      className="flex flex-col max-w-[420px] group cursor-pointer"
    >
      <p className="text-sm text-gray-2 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-primary" />
        {category}
      </p>
      <h3 className="header-md-linked">{title}</h3>
      <p className="text-xs text-gray-2">{date.replaceAll("-", "/")}</p>
      <hr className="mt-2 border rounded-sm border-primary w-24" />
    </Link>
  );
};

export default HeroBlogPostCard;
