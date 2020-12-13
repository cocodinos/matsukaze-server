import { Get, Controller, Render } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller()
export class HomeController {

  @Get()
  @Render('home')
  async root(@I18n() i18n: I18nContext) {
    var params = {
      navbar: await i18n.translate("home.navbar"),
      images: {
        splash: await i18n.translate("home.images.splash")
      },
      title: await i18n.translate("home.titles.splash")
    }
    return {splash: true, params: params};
  }
}
