import { ListItem } from "./ListItem";
import { Page } from "./Page";

export type ListView = {
  totalElements?: number;
  pages?: number;
  content: Array<ListItem>;
  pageSize?: number;
  pageNumber?: number;
  btnAction?: any;
  btnText?: string;
  onPaginate?: (page: Page) => void;
};
