# CHANGELOG

### Does the PR have any schema changes?

Found 15 breaking changes:

#### Resources
- "azure-native:dbforpostgresql:ServerGroupCluster":
    - inputs:
        - `🟡` "authConfig" type changed from "#/types/azure-native:dbforpostgresql:AuthConfig" to "#/types/azure-native:dbforpostgresql:ServerGroupClusterAuthConfig"
        - `🟡` "dataEncryption" type changed from "#/types/azure-native:dbforpostgresql:DataEncryption" to "#/types/azure-native:dbforpostgresql:ServerGroupClusterDataEncryption"
        - `🟡` "maintenanceWindow" type changed from "#/types/azure-native:dbforpostgresql:MaintenanceWindow" to "#/types/azure-native:dbforpostgresql:ServerGroupClusterMaintenanceWindow"
    - properties:
        - `🟡` "authConfig" type changed from "#/types/azure-native:dbforpostgresql:AuthConfigResponse" to "#/types/azure-native:dbforpostgresql:ServerGroupClusterAuthConfigResponse"
        - `🟡` "dataEncryption" type changed from "#/types/azure-native:dbforpostgresql:DataEncryptionResponse" to "#/types/azure-native:dbforpostgresql:ServerGroupClusterDataEncryptionResponse"
        - `🟡` "maintenanceWindow" type changed from "#/types/azure-native:dbforpostgresql:MaintenanceWindowResponse" to "#/types/azure-native:dbforpostgresql:ServerGroupClusterMaintenanceWindowResponse"
- "azure-native:monitor:AzureMonitorWorkspace":
    - properties:
        - `🟡` "defaultIngestionSettings" type changed from "#/types/azure-native:monitor:IngestionSettingsResponse" to "#/types/azure-native:monitor:AzureMonitorWorkspaceResponseDefaultIngestionSettings"
        - `🟡` "metrics" type changed from "#/types/azure-native:monitor:MetricsResponse" to "#/types/azure-native:monitor:AzureMonitorWorkspaceResponseMetrics"
    - `🟢` required: "publicNetworkAccess" property is no longer Required
#### Types
- `🟢` "azure-native:datafactory:AmazonRdsForOracleLinkedService": required: "connectionString" property is no longer Required
- `🟢` "azure-native:datafactory:AmazonRdsForOracleLinkedServiceResponse": required: "connectionString" property is no longer Required
- `🟡` "azure-native:dbforpostgresql:DataEncryption": properties: "primaryKeyUri" missing
- `🟡` "azure-native:dbforpostgresql:DataEncryptionResponse": properties: "primaryKeyUri" missing
- `🔴` "azure-native:monitor:IngestionSettingsResponse" missing
- `🔴` "azure-native:monitor:MetricsResponse" missing

#### New resources:

- `containerservice.Namespace`
- `cosmosdb.CassandraResourceCassandraRoleAssignment`
- `cosmosdb.CassandraResourceCassandraRoleDefinition`
- `cosmosdb.Fleet`
- `cosmosdb.FleetAnalytic`
- `cosmosdb.Fleetspace`
- `cosmosdb.FleetspaceAccount`
- `cosmosdb.GremlinResourceGremlinRoleAssignment`
- `cosmosdb.GremlinResourceGremlinRoleDefinition`
- `cosmosdb.MongoMIResourceMongoMIRoleAssignment`
- `cosmosdb.MongoMIResourceMongoMIRoleDefinition`
- `onlineexperimentation.OnlineExperimentWorkspace`

#### New functions:

- `containerservice.getNamespace`
- `containerservice.listNamespaceCredential`
- `cosmosdb.getCassandraResourceCassandraRoleAssignment`
- `cosmosdb.getCassandraResourceCassandraRoleDefinition`
- `cosmosdb.getFleet`
- `cosmosdb.getFleetAnalytic`
- `cosmosdb.getFleetspace`
- `cosmosdb.getFleetspaceAccount`
- `cosmosdb.getGremlinResourceGremlinRoleAssignment`
- `cosmosdb.getGremlinResourceGremlinRoleDefinition`
- `cosmosdb.getMongoMIResourceMongoMIRoleAssignment`
- `cosmosdb.getMongoMIResourceMongoMIRoleDefinition`
- `devcenter.getDevCenterCatalogImageDefinitionBuildDetails`
- `devcenter.getDevCenterCatalogImageDefinitionErrorDetails`
- `onlineexperimentation.getOnlineExperimentWorkspace`

<!-- Release notes generated using configuration in .github/release.yml at v3.3.0 -->

## What's Changed
* Revert AzureMonitorWorkspace to 2023-04-03 by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4127
* Disambiguate three conflicting type names between Postgres Server and ServerGroup by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/4088
* [examples] Update AKS Kubernetes version by @EronWright in https://github.com/pulumi/pulumi-azure-native/pull/4130


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v3.2.0...v3.3.0