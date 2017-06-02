module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            dev: {
                options: {
                    noCache: true
                },
                files: {
                    'css/style.css':'css/style.scss'
                }
            }
        },

        autoprefixer: {
            dev: {
                options: {
                    browsers: ['last 8 versions', 'ie 8', 'ie 9']
                },
                src: ["css/*.css"]
            }
        },

        watch: {
            dev: {
                files: ['css/*.scss', 'css/*/*.scss'],
                tasks: ['dev'/*, 'ftp'*/]
            }
        }

        /*'ftp-deploy': {
            build: {
                auth: {
                    host: 'cleansystem2.home.pl',
                    //port: 21,
                    authKey: 'key1'
                },
                src: 'css',
                dest: 'sjcam/wp-content/themes/sjcam/assets/css',
                exclusions: ['./css/_partials/!*', './css/!*.scss', './css/style.css.map', './css/style-static.css']
            }
        }*/

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    /*grunt.loadNpmTasks('grunt-ftp-deploy');*/

    grunt.registerTask("dev", ["sass", "autoprefixer"]);
    /*grunt.registerTask("ftp", ["ftp-deploy"]);*/
    grunt.registerTask('default', ['dev']);

};
