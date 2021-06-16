// Aquí pueden configurarse cosas como WebPack

module.exports = {
  configureWebpack: {},

  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
