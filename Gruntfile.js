module.exports = function(grunt){
	
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		
		/**
         * JSHint
         *
         * Validate the source code files to ensure they follow our coding convention and
         * don"t contain any common errors.
         */
		jshint: {
			
		}
	});
	
	//Load the plugin.
	grunt.loadNpmTasks("grunt-contrib-jshint");
	
	//Dafault task(s).
	grunt.registerTask('default',['jshint']);
};