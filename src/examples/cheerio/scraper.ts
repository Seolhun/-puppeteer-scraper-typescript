import * as cheerio from 'cheerio';
import BaseScraper from './schema';

const $ = cheerio.load('<ul id="fruits">...</ul>', {
  normalizeWhitespace: true,
  xmlMode: true,
});

class Scraper {
  settings: BaseScraper;

  constructor() {
    this.settings = new BaseScraper();
  }

  private _getTitle($name, type: string, ignore) {
    if (type === 'first') {
      $name.firstText(ignore);
    } else if (type === 'last') {
      $name.lastText(ignore);
    } else if (type === 'text') {
      $name.text().trim();
    } else {
      $name.allText(ignore);
    }
  }

  private _isNonTitle(title: string) {
    title = title.toLocaleLowerCase();
    for (const item in ['추석', '한가위', '공지', '휴무', '휴가', '연휴', 'notice', '이벤트', 'holiday', 'chuseok']) {
      if (title.indexOf(item) !== -1) {
        return true;
      }
    }
    return false;
  }

  parseMainTitle($: CheerioStatic, $item: Cheerio, goods) {
    const name = $item.find(this.settings.main.title.selector);
  }

  //   extractMainItems = ($) ->
  //   $(settings.main.item.selector)

  // parseMainUrl = ($, $item, goods) ->
  //   goods.url = $item.find(settings.main.url.selector).attr 'href'

  // parseMainImage = ($, $item, goods) ->
  //   goods.image = $item.find(settings.main.image.selector).attr settings.main.image.attr or 'src'

  // parseMainProductNo = ($, $item, goods) ->
  //   if settings.main.product_no.pattern is 'cafe24'
  //     if /\/product\/[^/#]+\/([0-9]+)\/category\/[0-9]+/.test goods.url
  //       goods.product_no = RegExp.$1
  //     else if /\bproduct_no=(\d+)/.test goods.url
  //       goods.product_no = RegExp.$1
  //   else
  //     if settings.main.product_no.pattern.test goods.url
  //       goods.product_no = RegExp.$1

}
