# Publish a collection

The Galaxy publishing action builds a collection from the source directory
containing `galaxy.yml` and publishes it to Ansible Galaxy. The API key must be
stored as a GitHub Actions secret. Publishing requires `contents: read` and
the caller to provide that secret; do not expose this workflow to untrusted
pull request code.

```yaml
jobs:
  publish:
    permissions:
      contents: read
    uses: ssongin/gha-ansible/.github/workflows/ansible-galaxy-publish.yml@master
    with:
      collection_source: collections/ansible_collections/acme/platform
    secrets:
      galaxy_api_key: ${{ secrets.GALAXY_API_KEY }}
```

| Name | Default | Description |
| --- | --- | --- |
| `collection_source` | Required | Collection source directory containing `galaxy.yml`. |
| `ansible_core_version` | `latest` | ansible-core version used for the Galaxy client. |
| `galaxy_api_key` secret | Required | API key for the publishing account. |
