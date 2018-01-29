import * as cheerio from 'cheerio';

export default class BaseScraper {
  deleted_pattern: DeletedPattern;
  main: MainPattern;
  detail: DetailPattern;

  constructor() {
    this.deleted_pattern = new DeletedPattern();
    this.main = new MainPattern();
    this.main = new DetailPattern();
  }
}

export class DeletedPattern {
  titles: string[];
  title_pattern: RegExp;
  tags: string[];
  tag_pattern: RegExp;
  image_urls: string[];

  main: BaseDeletedPattern;
  detail: BaseDeletedPattern;

  constructor() {
    this.titles = [];
    this.title_pattern = /\u0000/;
    this.tags = [];
    this.tag_pattern = /\u0000/;
    this.image_urls = [];

    this.main = new BaseDeletedPattern();
    this.detail = new BaseDeletedPattern();
  }
}

export class MainPattern {
  item: Selector;
  title: Selector;
  tags: Selector;
  author: Selector;
  created_date: Selector;
  url: Selector;
  image: Selector;
  query_no: RegExp;
  constructor() {
    this.item = new Selector();
    this.title = new Selector();
    this.tags = new Selector();
    this.author = new Selector();
    this.created_date = new Selector();
    this.url = new Selector();
    this.image = new Selector();
    this.query_no = /\u0000/;
  }
}

export class DetailPattern {
  item: Selector;
  title: Selector;
  tags: Selector;
  content: Selector;
  author: Selector;
  created_date: Selector;
  url: Selector;
  image: Selector;
  query_no: RegExp;
  constructor() {
    this.item = new Selector();
    this.title = new Selector();
    this.tags = new Selector();
    this.content = new Selector();
    this.author = new Selector();
    this.created_date = new Selector();
    this.url = new Selector();
    this.image = new Selector();
    this.query_no = /\u0000/;
  }
}

class BaseDeletedPattern {
  selector_to_check: string;
  selectors_if_exist: CheerioSelector[];
  image_urls: string[];
  constructor() {
    this.selector_to_check = '';
    this.selectors_if_exist = [];
    this.image_urls = [];
  }
}

class Selector {
  selector: string;
  pattern: RegExp;
  remove_selector: string;
  parse: () => void;
  constructor() {
    this.selector = '';
    this.pattern = /\u0000/;
    this.remove_selector = '';
    this.parse = () => null;
  }
}
