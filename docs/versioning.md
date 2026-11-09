# Versioning

This repository validates pull request commit messages using
[`gha-commit`](https://github.com/ssongin/gha-commit), then creates semantic
version tags from commits pushed to `master`. `feat` creates a minor version,
`fix` and other patch-level types create a patch, and breaking changes create
a major version. `docs` and `test` commits do not create tags unless marked as
breaking. See the [commit prefix reference](https://github.com/ssongin/gha-commit/blob/master/docs/prefixes.md).

Documentation is published with
[`gha-docs`](https://github.com/ssongin/gha-docs). The latest docs are at the
site root; tagged versions are published under `versions/<tag>`. The selector
in the navigation is populated from the Pages version manifest.

Pin action and workflow references to a reviewed release tag or full commit
SHA for production use. Examples currently use `@master` so they work before
the first version tag is created; switch to a reviewed tag when available.

To publish documentation for another version, add a `v*` tag. The publishing
workflow builds the docs from that tag into its version directory. For local
development, run `npm ci` and `npm run docs:dev` from `docs`.
