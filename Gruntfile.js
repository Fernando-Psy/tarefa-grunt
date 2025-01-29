module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                'main.css': 'main.less'
                }
            },
            procuction: {
                options: {
                    compress: true,
                },
                files: {
                'main.min.css': 'main.less'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'main2.css': 'main.scss'
                }
            }
        },
        /*watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify']
            }
        }*/
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    /*grunt.loadNpmTasks('grunt-contrib-watch');*/
    grunt.registerTask('default', ['less', 'sass']);
};