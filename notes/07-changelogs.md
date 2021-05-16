<p align='left'>
 <a href="./06-scripty.md">◀ Back: Scripty</a>
</p>

---

# Changelogs

Here, we'll be using [conventional changelog](https://github.com/conventional-changelog/conventional-changelog), which generates a change log from git metadata.

An overview of the packages this convention uses:

- [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli) - the full-featured command line interface
- [standard-changelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/standard-changelog) - command line interface for the angular commit format.
- [conventional-github-releaser](https://github.com/conventional-changelog/conventional-github-releaser) - Make a new GitHub release from git metadata
- [conventional-recommended-bump](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-recommended-bump) - Get a recommended version bump based on conventional commits
- [conventional-commits-detector](https://github.com/conventional-changelog/conventional-commits-detector) - Detect what commit message convention your repository is using
- [commitizen](https://github.com/commitizen/cz-cli) - Simple commit conventions for internet citizens.
- [commitlint](https://github.com/conventional-changelog/commitlint) - Lint commit messages

---

There's a `commitlint.config.js` file in [`COURSE_FILES/07-commitlint-and-changelogs`](../COURSE_FILES/07-commitlint-and-changelogs) copy it into the project root.

Once this file has been moved, we need to add some packages as workspace dependencies

```sh
yarn add -WD @commitlint/cli @commitlint/config-conventional @commitlint/config-lerna-scopes commitlint husky lerna-changelog
```

To configure husky, add the following the root level `package.json`. With this, husky will ensure that commit messages meet the conventions that we have in place for our commit messages. This acts as an enforcement mechanism. 

```diff
  },
  "devDependencies": {
    "@commitlint/cli": "^12.1.4",
    "@commitlint/config-conventional": "^12.1.4",
    "@commitlint/config-lerna-scopes": "^12.1.4",
    "@typescript-eslint/eslint-plugin": "^4.23.0",
    "@typescript-eslint/parser": "^4.23.0",
    "commitlint": "^12.1.4",
    "eslint": "^7.26.0",
    "husky": "^6.0.0",
    "lerna": "^4.0.0",
    "lerna-changelog": "^1.0.1",
    "rimraf": "^3.0.2",
    "scripty": "^2.0.0"
  },
+ "husky": {
+   "hooks": {
+     "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
+   }
+ },
```

Once done, run `yarn install`.



---

<p align='right'>
 <a href="./08-publishing-and-versioning.md">Next: Publishing and Versioning ▶</a>
</p>
