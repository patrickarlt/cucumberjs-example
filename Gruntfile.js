module.exports = function (grunt) {

  grunt.initConfig({
    phantom: {
      cucumber: {}
    },
    cucumberjs: {
      files: 'features',
      options: {
        steps: 'features/step_definitions',
        format: 'pretty'
      }
    }
  });

  grunt.loadNpmTasks('grunt-cucumber');
  grunt.loadNpmTasks('grunt-phantom');

  grunt.registerTask('default', ['phantom', 'cucumberjs']);
};
