<p align='left'>
 <a href="./04-linting.md">◀ Back: Linting</a>
</p>

---

# Lerna

It may feel like we're doing a _lot_ of per-package work, even with just two packages. Imagine how much worse this gets when you have 10 or 100 packages!

Lerna is designed to make this much easier.

Let's begin by adding it as a workspace dependency

```sh
yarn add -WD lerna
```

and creating a `lerna.json` config file at the root of our project

```json
{
  "packages": ["packages/*"],
  "npmClient": "yarn",
  "version": "0.0.1",
  "useWorkspaces": true,
  "nohoist": ["parcel-bundler"]
}
```

Lerna commands overview:

```lerna add <pkg> [globs..]  Add a single dependency to matched packages
  lerna bootstrap            Link local packages together and install remaining package
                             dependencies
  lerna changed              List local packages that have changed since the last tagged
                             release                                      [aliases: updated]
  lerna clean                Remove the node_modules directory from all packages
  lerna create <name> [loc]  Create a new lerna-managed package
  lerna diff [pkgName]       Diff all packages or a single package since the last release
  lerna exec [cmd] [args..]  Execute an arbitrary command in each package
  lerna import <dir>         Import a package into the monorepo with commit history
  lerna info                 Prints debugging information about the local environment
  lerna init                 Create a new Lerna repo or upgrade an existing repo to the
                             current version of Lerna.
  lerna link                 Symlink together all packages that are dependencies of each
                             other
  lerna list                 List local packages                       [aliases: ls, la, ll]
  lerna publish [bump]       Publish packages in the current project.
  lerna run <script>         Run an npm script in each package that contains that script
  lerna version [bump]       Bump version of packages changed since the last release.
  lerna add <pkg> [globs..]  Add a single dependency to matched packages
```

Finally, run

```sh
lerna bootstrap
```

If we had dependencies between our existing packages (we do not, yet), this would take care of "linking" everything up.

Look in `packages/types/node_modules`. See anything interesting?

Lerna can do a lot for us, but we'll start with one of the most useful aspects of the tool: running a command _in each_ package.

```sh
# Go to each package and run `yarn test`
lerna run test
# Go to each package and run `yarn lint`
lerna run lint
```

Check out `lerna --help` to get a preview of what else Lerna can do.

---

<p align='right'>
 <a href="./06-scripty.md">Next: Scripty ▶</a>
</p>
