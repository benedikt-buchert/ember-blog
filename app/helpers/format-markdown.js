import Ember from "ember";

var formatMarkdown = Ember.Handlebars.makeBoundHelper(function(markdown) {
	var showdown = new Showdown.converter();
        return new Ember.Handlebars.SafeString(showdown.makeHtml(markdown));
});

export default formatMarkdown;