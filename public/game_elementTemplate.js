(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['game_element'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"game_element\">\r\n\r\n\r\n  <img class=\"game_image\" src=\""
    + alias4(((helper = (helper = helpers.PhotoURL || (depth0 != null ? depth0.PhotoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PhotoURL","hash":{},"data":data}) : helper)))
    + "\"></img>\r\n  <div class=\"game_info\">\r\n    <h2 class=\"game_title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\r\n    <p class=\"game_price\">"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p>\r\n    <p class=\"game_category\">"
    + alias4(((helper = (helper = helpers.catagories || (depth0 != null ? depth0.catagories : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"catagories","hash":{},"data":data}) : helper)))
    + "</p>\r\n    <p class=\"game_description_text\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\r\n  </div>\r\n\r\n</article>\r\n";
},"useData":true});
})();