import { EntryType } from "@/types";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface Props {
  entry: EntryType;
}

const EntryCard = ({ entry }: Props) => {
  return (
    <Link
      href={`/${entry.type === "course" ? "courses" : "blogs"}/${entry.id}`}
      className="bento-grid-child group"
    >
      <div className="flex justify-between items-center gap-x-8 ">
        <h3 className="header-md-linked">{entry.title}</h3>
        <div className="w-5 h-5 flex">
          <ArrowUpRightIcon className="icon-def" />
        </div>
      </div>
      <p className="flex gap-x-1 items-center">
        <span className="text-primary group-hover:text-primary-hover text-sm font-medium">
          {entry.author}
        </span>
        <span className="w-1 h-1 bg-primary group-hover:bg-primary-hover rounded-full" />
        <span className="text-primary group-hover:text-primary-hover text-sm font-medium">
          {entry.date.replaceAll("-", "/")}
        </span>
      </p>
      <p className="text-gray-2 text-sm">{entry.content}</p>
      <ul className="flex mt-1 gap-2 items-center flex-wrap ">
        {entry?.topics?.map((topic, index) => (
          <li className="span-badge" key={`topic-bento-child-${index}`}>
            <p>{topic}</p>
          </li>
        ))}
      </ul>
    </Link>
  );
};

export default EntryCard;
