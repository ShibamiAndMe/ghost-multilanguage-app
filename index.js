const App = require('ghost-app');
const request = require('sync-request');
const fs = require('fs');
const path = require('path');

const MultiLang = App.extend({

	// Ghost app functions
	install: function () {},

	uninstall: function () {},

	activate: function () {
		this.ghost.helpers.register('equal', this.equalHelper);
		this.ghost.helpers.register('instagram_widget', this.instagramEmbed);
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
	equalHelper: function (lvalue, rvalue, options) {
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
	instagramEmbed: function (user) {
		const dataString = fs.readFileSync(path.join(__dirname, '../../data/instagramData.json'), 'utf8');
		const data = JSON.parse(dataString);
		const random = Math.floor(Math.random() * data.posts.length);

		const post = data.posts[random].html;
		//console.log(post);

		return post;
	}

});

module.exports = MultiLang;