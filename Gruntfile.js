module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'css/styles.css': 'less/styles.less'
                },
                options: {
                    compress: true
                }
            }
        },
        watch: {
            styles: {
                files: ['less/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/main.min.js': ['js/main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify', 'watch']);
};