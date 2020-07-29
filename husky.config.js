const tasks = arr => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'git-branch-is -r "^((?!master).)*$"',
      'lint-staged',
      'cypress run --quiet',
    ]),
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
