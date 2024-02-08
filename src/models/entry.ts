
interface EntryDocument {
  id: string;
  type: "course" | "blog" | string;
  title: string;
  content: any;
  date: Date;
  topics: string[];
  author: string;
}