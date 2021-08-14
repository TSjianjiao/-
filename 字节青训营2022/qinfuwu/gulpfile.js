const gulp = require('gulp')
const shell = require('gulp-shell')
const fs = require('fs/promises')
const path = require('path')
const watch =  async () => {
  gulp.watch('src/**/*', {ignoreInitial: false}, shell.task('tsc --project tsconfig.json && tscpaths -p tsconfig.json -s ./src -o ./dist'))
}

module.exports = {
  watch,
}
