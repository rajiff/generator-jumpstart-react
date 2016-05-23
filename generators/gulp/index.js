var generators = require("yeoman-generator"),
	common = require("../common");

module.exports = generators.Base.extend({

	scaffoldFolders: function() {
		var mkdirp = require('mkdirp');
		mkdirp("gulp/");
	},

	writing: function() {

		var _this = this;

		var to_glob = [
            // Find root level files
            "./gulpfile.js",
            // Find all grunt tasks
            "./gulp/**/*.js",
        ];
        common.copyStuff(_this, to_glob);

        var to_template = [
            "./package.json",
        ];
        common.templateStuff(_this, to_template);

	},

	install: function() {
		this.npmInstall();
	}
});
