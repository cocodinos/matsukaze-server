import { Controller, Get, Query, Render, Res } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller()
export class RootController {

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
}
