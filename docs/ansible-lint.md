# Ansible lint

The `ansible-lint` composite action installs Python and ansible-lint, then
checks the project in `working_directory`. It can also install a pip
requirements file before linting.

## Use the action directly

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: ssongin/gha-ansible/.github/actions/ansible-lint@master
    with:
      working_directory: ansible
      requirements_file: requirements.txt
      python_version: '3.12'
```

## Use the reusable workflow

```yaml
jobs:
  lint:
    permissions:
      contents: read
    uses: ssongin/gha-ansible/.github/workflows/ansible-lint.yml@master
    with:
      working_directory: ansible
      requirements_file: requirements.txt
```

## Inputs

| Name | Default | Description |
| --- | --- | --- |
| `working_directory` | `.` | Ansible project directory. |
| `python_version` | `3.x` | Python version for the tool installation. |
| `ansible_lint_version` | `latest` | ansible-lint version to install. |
| `requirements_file` | Empty | Optional pip requirements file, relative to the project directory. |

Pin actions and workflows to a reviewed release tag or full commit SHA for
production use.
