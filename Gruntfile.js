module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// CSS
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'assets/css/style.unprefixed.css': 'assets/scss/style.scss'
				}
			}
		},
		autoprefixer: {
			files: {
				src: 'assets/css/style.unprefixed.css',
				dest: 'assets/css/style.min.css'
			}
		},

		// JS
		concat: {
			files: {
				src: ['assets/js/*.js', 'assets/js/scripts.js'],
				dest: 'assets/js/uglify/scripts.uglify.js',
			}
		},
		uglify: {
			files: {
				src: 'assets/js/uglify/scripts.uglify.js',
				dest: 'assets/js/min/scripts.min.js'
			}
		},

		// HTML
		includes: {
			files: {
				src: ['html/*.html', '!html/_*.html'],
				dest: 'site/',
				flatten: true,
				cwd: '.',
				options: {
					silent: true
				}
			}
		},

		// SERVE
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: 'assets/css/*.scss',
				tasks: ['css']
			},
			html: {
				files: 'html/*.html',
				tasks: ['html']
			},
			js: {
				files: 'assets/js/*.js',
				tasks: ['js']
			}
		},
		connect: {
			options: {
				port: 1337,
				hostname: 'localhost',
				base: 'site'
			},
			server: {
				options: {
					livereload: true,
					open: true
				}
			}
		}
	});

	// CSS
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');

	// HTML
	grunt.loadNpmTasks('grunt-includes');

	// JS
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// SERVE
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('css', ['sass', 'autoprefixer']);
	grunt.registerTask('html', ['includes']);
	grunt.registerTask('js', ['concat', 'uglify']);
	grunt.registerTask('default', ['css', 'html', 'js']);
	grunt.registerTask('serve', ['default', 'connect', 'watch']);

};
