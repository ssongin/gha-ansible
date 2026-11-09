# Validate Ansible variables

The schema validator checks YAML files against a JSON Schema supplied by the
consumer. Set `vars_paths` to whichever `group_vars`, `host_vars`, or
individual variable files should be checked. Directories are searched
recursively for `.yml` and `.yaml` files. JSON Schema files may be written as
JSON or YAML.

## Use the action directly

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: ssongin/gha-ansible/.github/actions/ansible-schema-validate@master
    with:
      working_directory: ansible
      schema_file: schemas/variables.schema.json
      vars_paths: |
        inventories/production/group_vars
        inventories/production/host_vars
```

`vars_paths` is a newline-separated list, so select only `group_vars`, only
`host_vars`, particular inventory directories, or individual files according
to the repository's layout.

## Use the reusable workflow

```yaml
jobs:
  validate-vars:
    permissions:
      contents: read
    uses: ssongin/gha-ansible/.github/workflows/ansible-schema-validate.yml@master
    with:
      working_directory: ansible
      schema_file: schemas/variables.schema.json
      vars_paths: inventories/production/group_vars
```

## Inputs

| Name | Default | Description |
| --- | --- | --- |
| `working_directory` | `.` | Base directory for the schema and variable paths. |
| `schema_file` | Required | JSON or YAML Schema file, relative to `working_directory`. |
| `vars_paths` | Required | Newline-separated YAML files/directories, relative to `working_directory`. |
| `python_version` | `3.x` | Python version used for the validator. |

Empty directories or paths that contain no YAML files fail validation, as do
invalid YAML, invalid schemas, and variable values that do not match the
schema.
