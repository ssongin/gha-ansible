# Run a playbook

Use the `ansible-run` action or workflow for controlled playbook execution.
Execution is never enabled automatically by the combined workflow. Configure
the caller's trigger and environment protection rules before using this for
deployments.

```yaml
jobs:
  deploy:
    permissions:
      contents: read
    uses: ssongin/gha-ansible/.github/workflows/ansible-run.yml@master
    with:
      working_directory: ansible
      playbook: deploy.yml
      inventory: inventories/production
      galaxy_requirements_file: collections/requirements.yml
    secrets:
      vault_password: ${{ secrets.ANSIBLE_VAULT_PASSWORD }}
```

The caller supplies `contents: read`; the workflow creates a temporary
permission-restricted file for an optional Vault password and removes it when
execution finishes. Inventory can be a file path or Ansible inline inventory
value. `extra_args` accepts additional command-line options.

| Name | Default | Description |
| --- | --- | --- |
| `working_directory` | `.` | Ansible project directory. |
| `python_version` | `3.x` | Python version. |
| `ansible_core_version` | `latest` | ansible-core version to install. |
| `requirements_file` | Empty | Optional pip requirements file. |
| `galaxy_requirements_file` | Empty | Optional Galaxy requirements file. |
| `playbook` | Required | Playbook file to execute. |
| `inventory` | Empty | Inventory path or inline inventory value. |
| `extra_args` | Empty | Additional `ansible-playbook` arguments. |
| `vault_password` secret | Empty | Optional Vault password. |
