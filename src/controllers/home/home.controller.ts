import { Get, Controller, Render, Query } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller("home")
export class HomeController {

  @Get()
  @Render("home")
  async root(@I18n() i18n: I18nContext, @Query() query ) {
    var lang;
    if(query.lang) { lang = "?lang=" + query.lang }
    const viewParams = {
      navbar: await i18n.translate("digenes.navbar", query.lang),
      content: await i18n.translate("digenes.content.home", query.lang)
    }
    return {url: "/home/", lang: lang, params: viewParams};
  }

  @Get("order")
  // @Render("home")
  async order(@I18n() i18n: I18nContext) {
    
  }

}
