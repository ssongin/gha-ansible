---
layout: home

hero:
  name: gha-ansible
  text: Reusable Ansible workflows
  tagline: Lint, test, run playbooks, and publish Ansible collections from GitHub Actions.
  actions:
    - theme: brand
      text: Get started
      link: /combined-usage
    - theme: alt
      text: Explore actions
      link: /ansible-lint

features:
  - title: Standalone actions
    details: Add lint, syntax and Molecule tests, playbook execution, or Galaxy publishing to your own jobs.
  - title: Reusable workflows
    details: Call ready-to-use jobs individually or use one workflow for linting and tests with optional publishing and execution.
  - title: Versioned documentation
    details: Browse the latest guides or switch to documentation for a released version.
---

`gha-ansible` provides composite actions for building your own jobs and reusable
workflows for common Ansible project automation. The combined workflow runs
lint and tests by default; publishing and playbook execution are opt-in.

Browse the [individual actions](ansible-lint.md), see the
[combined workflow example](combined-usage.md), or learn about
[documentation and action versioning](versioning.md).
