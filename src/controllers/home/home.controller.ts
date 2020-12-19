import { Get, Controller, Render } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller("home")
export class HomeController {

  @Get()
  @Render('home')
  async root(@I18n() i18n: I18nContext) {
    const params = {
      navbar: await i18n.translate("digenes.navbar"),
      content: await i18n.translate("digenes.content.home")
    }
    return {splash: true, params: params};
  }
}
