# gha-ansible

Reusable GitHub Actions for Ansible projects: lint playbooks, run syntax and
Molecule tests, validate `group_vars` or `host_vars` against a consumer-provided
schema, execute playbooks, and publish collections to Ansible Galaxy.

Use an individual composite action when you want to assemble your own workflow,
or call a reusable workflow to run a complete job. The combined
[`ansible.yml`](.github/workflows/ansible.yml) workflow runs lint and tests and
can optionally publish a collection or execute a playbook.

See the [documentation](https://ssongin.github.io/gha-ansible/) for examples,
inputs, permissions, and versioning guidance.
