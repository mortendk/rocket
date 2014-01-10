module.exports = function(grunt) {

    grunt.initConfig({

        // Package
        pkg: grunt.file.readJSON('package.json'),

        // Compass
        compass: {
            build: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    // outputStyle: 'compressed'
                }
            }
        },

        // Clean
        clean: {
            pre: ['styleguide', 'css'],
            post: ['.sass-cache']
        },

        // Watch
        watch: {
            sass: {
                files: ['sass/**/*.{sass,scss}'],
                tasks: ['compass', 'sassdown']
            }
        },

        // Sassdown (Styleguide)
        sassdown: {
            options: {
                assets: [
                    '../css/*.css',
                    'js/*.js'
                ],
                template: 'styleguide-theme/template.hbs',
                theme:    'styleguide-theme/theme.css'
            },
            files: {
                expand: true,
                cwd: 'sass/',
                src: ['**/*.{sass,scss}'],
                dest: 'styleguide/'
            }
        }

    });

    // Load NPM Tasks
    grunt.loadNpmTasks('sassdown');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Register Grunt tasks
    grunt.registerTask('default', ['clean:pre', 'compass', 'sassdown', 'clean:post']);

};
