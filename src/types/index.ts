export interface EntryType {
  id: string;
  type: "course" | "blog" | string;
  title: string;
  content: string;
  date: string;
  topics: string[];
  author: string;
}

export interface BlockData {
  text: string;
  level?: number;
  type?: string;
  items?: string[];
  file?: {
    url: string;
    size: number;
    name: string;
    extension: string;
  };
  title?: string;
  withBorder?: boolean;
  withBackground?: boolean;
  stretched?: boolean;
  caption?: string;
}

export interface Tune {
  footnotes: string[];
}

export interface Block {
  id: string;
  type: string;
  data: BlockData;
  tunes?: {
    footnotes?: string[];
  };
}

export interface EditorData {
  time: number;
  blocks: Block[];
}
