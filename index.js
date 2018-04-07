const App = require('ghost-app');
const request = require('sync-request');

const MultiLang = App.extend({

	// Ghost app functions
    install: function () {},

    uninstall: function () {},

    activate: function () {
		this.ghost.helpers.register('equal', this.equalHelper);
		this.ghost.helpers.register('instagram-widget', this.instagramEmbed);
	},

	deactivate: function () {},

	// Custom functions
	/**
	 * Compares lvalue with rvalue
	 *
	 * @param lvalue
	 * @param rvalue
	 * @param options
	 */
	equalHelper: function(lvalue, rvalue, options) {
		if (arguments.length < 3)
			throw new Error(`Handlebars Helper 'equal' needs 2 parameters. Actuals: ${lvalue} - ${rvalue}`);
		if (lvalue == rvalue) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	},

	/**
	 * Gets the embed code to insert into instagram widget
	 *
	 * @param user Instagram user
	 */
	instagramEmbed: function(user) {
		const instagramURL = `https://www.instagram.com/${user}/?__a=1`;
		const getInstagramJSON = request('GET', instagramURL);
		const instagramData = JSON.parse(getInstagramJSON.getBody('utf-8'));
		const mediaId = instagramData.graphql.user.edge_owner_to_timeline_media.edges[0].node.shortcode;
		const url = `https://api.instagram.com/oembed/?url=http://instagr.am/p/${mediaId}`;
		const res = request('GET', url);
		return JSON.parse(res.getBody('utf8')).html;
	}

});

module.exports = MultiLang;