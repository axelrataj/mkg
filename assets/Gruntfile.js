module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dev: {
        options: {
          noCache: true,
        },
        files: {
          "css/style.css": "css/style.scss",
        },
      },
    },

    autoprefixer: {
      dev: {
        options: {
          browsers: ["last 8 versions", "ie 8", "ie 9"],
        },
        src: ["css/*.css"],
      },
    },

    watch: {
      dev: {
        files: ["css/*.scss", "css/*/*.scss"],
        tasks: ["dev" /*, 'ftp'*/],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("dev", ["sass", "autoprefixer"]);
  grunt.registerTask("default", ["dev"]);
};
