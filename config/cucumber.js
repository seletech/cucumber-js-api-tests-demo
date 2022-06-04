module.exports = {
  default: {
    parallel: 1,
    format: ['html:cucumber-report.html'],
    paths: ['tests/features/**/*.feature'],
    require: ['tests/step_definitions/*.js']
  }
}