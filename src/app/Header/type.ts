export type THeader = {
  items: TItem[];
  navigate: (url: string) => void;
};

export type TItem = { key: string; title: string; url: string };
