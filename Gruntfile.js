/*jshint node:true*/
'use strict';

module.exports = function(grunt) {

  // load tasks / configs
  require('load-grunt-config')(grunt, {
    config: require('./config/project')
  });

  // default task
  grunt.registerTask('default', [
    'clean',
    'test'
  ]);

  // lint everything
  grunt.registerTask('lint', [
    'jshint',
    'jscs'
  ]);

  // run tests
  grunt.registerTask('test', [
    'test:continuous'
  ]);

  grunt.registerTask('test:dev', [
    'karma:unit'
  ]);

  grunt.registerTask('test:continuous', [
    'lint',
    'karma:continuous'
  ]);

  grunt.registerTask('release',
    'Create a new major, minor, or patch release',
    function(type) {
      var types = ['major', 'minor', 'patch', 'build', 'git'];
      if (types.indexOf(type) > -1) {
        grunt.task.run('test:continuous', 'bump:' + type);
      } else {
        grunt.log.writeln('Invalid release type.', 3);
      }
    }
  );

};
