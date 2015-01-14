define(function() {
  var Localization = function(data) {
    this.data = data || {};
    this.language = Localization.defaultLanguage;
  };

  Localization.defaultLanguage = 'en';
});