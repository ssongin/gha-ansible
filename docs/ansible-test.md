# Ansible test

The `ansible-test` action installs ansible-core and optional project
dependencies, installs Galaxy requirements, checks playbook syntax, and can
run Molecule. Leave `playbook` empty to skip syntax checking. Molecule and its
driver can be installed from your `requirements_file`.

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: ssongin/gha-ansible/.github/actions/ansible-test@master
    with:
      working_directory: ansible
      galaxy_requirements_file: collections/requirements.yml
      playbook: site.yml
      molecule: true
      molecule_directory: ansible/roles/web
```

Use the reusable workflow when you want a ready-made GitHub Actions job:

```yaml
jobs:
  test:
    permissions:
      contents: read
    uses: ssongin/gha-ansible/.github/workflows/ansible-test.yml@master
    with:
      working_directory: ansible
      galaxy_requirements_file: collections/requirements.yml
      molecule: true
```

| Name | Default | Description |
| --- | --- | --- |
| `working_directory` | `.` | Ansible project directory. |
| `python_version` | `3.x` | Python version. |
| `ansible_core_version` | `latest` | ansible-core version to install. |
| `requirements_file` | Empty | Optional pip requirements file. |
| `galaxy_requirements_file` | Empty | Optional `ansible-galaxy` requirements file. |
| `playbook` | `site.yml` | Playbook to syntax-check; empty skips the check. |
| `molecule` | `false` | Run `molecule test` after syntax checking. |
| `molecule_directory` | Project directory | Directory containing the Molecule scenario. |
