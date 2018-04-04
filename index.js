const App = require('ghost-app');

const MultiLang = App.extend({

	// Ghost app functions
    install: function () {},

    uninstall: function () {},

    activate: function () {
    	this.ghost.helpers.register('equal', this.equalHelper);
	},

	deactivate: function () {},

	// Custom functions
	equalHelper: function(lvalue, rvalue, options) {
		if (arguments.length < 3)
			throw new Error(`Handlebars Helper 'equal' needs 2 parameters. Actuals: ${lvalue} - ${rvalue}`);
		if (lvalue == rvalue) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	}

});

module.exports = MultiLang;