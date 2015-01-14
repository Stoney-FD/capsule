module.exports =
  options:
    namespace: '<%= package.name %>'
    base: 'src/'
  all:
    files:
      'dist/<%= package.name %>.all.js': 'src/**/*.js'
