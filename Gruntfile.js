// Gruntfile.js

module.exports = (grunt) => {
    grunt.initConfig({
      execute: {
        target: {
          src: ['Db_testdb.js']
        }
      },
      watch: {
        scripts: {
          files: ['Db_testdb.js'],
          tasks: ['execute'],
        },
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-execute');
  };
