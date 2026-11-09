# Combine the actions

Call the reusable `ansible.yml` workflow as one job to lint and test an Ansible
project. Lint and syntax checking run by default. Schema validation, Molecule
tests, Galaxy publishing, and playbook execution are configurable.

```yaml
name: Ansible CI

on:
  pull_request:
  push:
    branches: [main]

permissions:
  contents: read

jobs:
  ansible:
    uses: ssongin/gha-ansible/.github/workflows/ansible.yml@master
    with:
      working_directory: ansible
      galaxy_requirements_file: collections/requirements.yml
      molecule: true
      validate_vars: true
      schema_file: schemas/variables.schema.json
      vars_paths: |
        inventories/production/group_vars
        inventories/production/host_vars
```

The `ansible.yml` workflow exposes the lint and test settings documented in
[Ansible lint](ansible-lint.md) and [Ansible test](ansible-test.md). To validate
variables, set `validate_vars: true`, provide `schema_file`, and choose one or
more `vars_paths`. Paths are relative to `working_directory`; the validator
recursively checks YAML files in each selected directory. See
[Validate Ansible variables](ansible-schema-validate.md) for standalone usage.
To publish a collection after checks pass, set `publish_collection: true`, provide
`collection_source`, and pass the Galaxy secret. To execute a playbook after
the checks, set `run_playbook: true` and provide an inventory and any required
Vault secret.

```yaml
jobs:
  ansible:
    uses: ssongin/gha-ansible/.github/workflows/ansible.yml@master
    with:
      working_directory: ansible
      playbook: deploy.yml
      run_playbook: true
      inventory: inventories/staging
      publish_collection: true
      collection_source: collections/ansible_collections/acme/platform
    secrets:
      galaxy_api_key: ${{ secrets.GALAXY_API_KEY }}
      vault_password: ${{ secrets.ANSIBLE_VAULT_PASSWORD }}
```

The reusable workflow requires `contents: read`. Publishing and execution
should be enabled only on trusted events and with protected environments
where appropriate. GitHub does not allow permissions to be elevated by a
called workflow beyond those granted by its caller.

For complete control over job dependencies or deployment approvals, call
`ansible-lint.yml`, `ansible-test.yml`, `ansible-galaxy-publish.yml`, and
`ansible-run.yml` as separate jobs. Each is independently reusable.
