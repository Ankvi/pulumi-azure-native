# CHANGELOG

### Does the PR have any schema changes?

Looking good! No breaking changes found.

#### New resources:

- `confluent.Connector`
- `confluent.OrganizationClusterById`
- `confluent.OrganizationEnvironmentById`
- `confluent.Topic`

#### New functions:

- `confluent.getConnector`
- `confluent.getOrganizationClusterById`
- `confluent.getOrganizationEnvironmentById`
- `confluent.getTopic`

<!-- Release notes generated using configuration in .github/release.yml at v2.82.0 -->

## What's Changed
* [v3] Skip flattening if properties would clash - PR #2 by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3839
* Custom support for File Share Protected Items by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3809
* Fix azure.IsNotFound for new azcore error type by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3842
* Customise module naming by @danielrbradley in https://github.com/pulumi/pulumi-azure-native/pull/3838


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v2.81.0...v2.82.0