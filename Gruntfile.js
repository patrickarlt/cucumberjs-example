module.exports = function (grunt) {

  grunt.initConfig({
    cucumberjs: {
      files: 'features',
      options: {
        steps: 'features/step_definitions',
        format: 'pretty'
      }
    }
  });

  grunt.loadNpmTasks('grunt-cucumber');

  grunt.registerTask('default', ['cucumberjs']);
};