/*global module:false*/

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    // jQuery
                    jQuery: true,
                    // extras
                    alert: true,
                    console: true
                }
            },
            all: [
                'Gruntfile.js',
                'src/js/script.js',
                'src/js/modules/*.js'
            ]
        },
        sass: {
            options: {
                sourcemap: 'none'
            },
            main: {
                files: {
                    'public/assets/css/style.css': 'src/sass/style.scss',
                    'public/assets/css/ie.css' : 'src/sass/ie.scss'
                }
            }
        },
        cssmin: {
            main: {
                files: {
                    'public/assets/css/style.css': ['public/assets/css/style.css'],
                    'public/assets/css/ie.css': ['public/assets/css/ie.css']
                }
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: ['jQuery']
                }
            },
            libraries: {
                files: {
                    'public/assets/js/libs.js': [
                        'bower_components/jquery/dist/jquery.min.js'
                    ]
                }
            },
            develop: {
                options: {
                    mangle: false
                },
                files: {
                    'public/assets/js/script.js': [
                        'src/js/script.js',
                        'src/js/modules/*.js'
                    ]
                }
            },
            deploy: {
                files: {
                    'public/assets/js/script.js': [
                        'src/js/script.js',
                        'src/js/modules/*.js'
                    ]
                }
            },
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'public/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'public/images/'
                }]
            }
        },
        clean: {
            fonts: {
                src: ['public/assets/fonts/*']
            },
            images: {
                src: ['public/assets/images/*']
            },
            script: {
                src: ['public/assets/js/*']
            },
        },
        copy: {
            fonts: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/fonts/',
                        src: ['**'],
                        dest: 'public/assets/fonts/'
                    }
                ]
            },
            images: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/images/public/',
                        src: ['**'],
                        dest: 'public/assets/images/'
                    }
                ]
            }
        },
        watch: {
            fonts: {
                files: ['src/fonts/**/*.*'],
                tasks: ['clean:fonts', 'copy:fonts']
            },
            images: {
                files: ['src/images/public/**/*.*'],
                tasks: ['clean:images', 'copy:images']
            },
            sass: {
                files: ['src/sass/**/*.scss'],
                tasks: ['sass', 'cssmin']
            },
            script: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify:develop']
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    // // Default task(s)
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', ['clean', 'copy', 'sass', 'uglify:libraries', 'uglify:develop']);
    grunt.registerTask('deploy', ['build', 'imagemin', 'cssmin', 'uglify:deploy']);
    grunt.registerTask('default', ['test', 'build']);
};
