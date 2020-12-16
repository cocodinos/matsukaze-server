import { Get, Controller, Render } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller("home")
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

  @Get("synopsis")
  @Render('home')
  async synopsis(@I18n() i18n: I18nContext) {
    var params = {
      navbar: await i18n.translate("home.navbar"),
      images: {},
      title: await i18n.translate("home.titles.splash")
    }
    return {synopsis: true, params: params};
  }

  @Get("team")
  @Render('home')
  async team(@I18n() i18n: I18nContext) {
    var params = {
      navbar: await i18n.translate("home.navbar"),
      images: {},
      title: await i18n.translate("home.titles.splash")
    }
    return {team: true, params: params};
  }

  @Get("contact")
  @Render('home')
  async contact(@I18n() i18n: I18nContext) {
    var params = {
      navbar: await i18n.translate("home.navbar"),
      images: {},
      title: await i18n.translate("home.titles.splash")
    }
    return {contact: true, params: params};
  }
}
