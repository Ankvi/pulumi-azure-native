# CHANGELOG

### Does the PR have any schema changes?

Found 79 breaking changes:

#### Resources
- "azure-native:desktopvirtualization:ScalingPlanPersonalSchedule": required inputs:
    - `🟢` "daysOfWeek" input has changed to Required
    - `🟢` "offPeakStartTime" input has changed to Required
    - `🟢` "peakStartTime" input has changed to Required
    - `🟢` "rampDownStartTime" input has changed to Required
    - `🟢` "rampUpStartTime" input has changed to Required
- "azure-native:hybridconnectivity:PublicCloudConnector":
    - `🟡` inputs: "properties" missing
    - `🟡` properties: "properties" missing output "properties"
    - required inputs:
        - `🟢` "awsCloudProfile" input has changed to Required
        - `🟢` "hostType" input has changed to Required
- "azure-native:hybridconnectivity:SolutionConfiguration":
    - `🟡` inputs: "properties" missing
    - `🟡` properties: "properties" missing output "properties"
    - `🟢` required inputs: "solutionType" input has changed to Required
- `🔴` "azure-native:logz:MetricsSource" missing
- `🔴` "azure-native:logz:MetricsSourceTagRule" missing
- `🔴` "azure-native:logz:Monitor" missing
- `🔴` "azure-native:logz:SubAccount" missing
- `🔴` "azure-native:logz:SubAccountTagRule" missing
- `🔴` "azure-native:logz:TagRule" missing
- `🔴` "azure-native:visualstudio:Account" missing
- `🔴` "azure-native:visualstudio:Extension" missing
#### Functions
- `🔴` "azure-native:logz:getMetricsSource" missing
- `🔴` "azure-native:logz:getMetricsSourceTagRule" missing
- `🔴` "azure-native:logz:getMonitor" missing
- `🔴` "azure-native:logz:getSubAccount" missing
- `🔴` "azure-native:logz:getSubAccountTagRule" missing
- `🔴` "azure-native:logz:getTagRule" missing
- `🔴` "azure-native:logz:listMonitorMonitoredResources" missing
- `🔴` "azure-native:logz:listMonitorUserRoles" missing
- `🔴` "azure-native:logz:listMonitorVMHosts" missing
- `🔴` "azure-native:logz:listSubAccountMonitoredResources" missing
- `🔴` "azure-native:logz:listSubAccountVMHosts" missing
- `🔴` "azure-native:visualstudio:getAccount" missing
- `🔴` "azure-native:visualstudio:getExtension" missing
#### Types
- `🟡` "azure-native:datafactory:GreenplumLinkedService": properties: "password" missing
- `🟡` "azure-native:datafactory:GreenplumLinkedServiceResponse": properties: "password" missing
- `🟢` "azure-native:datafactory:OracleLinkedService": required: "connectionString" property is no longer Required
- `🟢` "azure-native:datafactory:OracleLinkedServiceResponse": required: "connectionString" property is no longer Required
- `🟢` "azure-native:datafactory:PrestoLinkedService": required: "serverVersion" property is no longer Required
- `🟢` "azure-native:datafactory:PrestoLinkedServiceResponse": required: "serverVersion" property is no longer Required
- `🔴` "azure-native:hybridconnectivity:PublicCloudConnectorProperties" missing
- `🔴` "azure-native:hybridconnectivity:PublicCloudConnectorPropertiesResponse" missing
- `🔴` "azure-native:hybridconnectivity:SolutionConfigurationProperties" missing
- `🔴` "azure-native:hybridconnectivity:SolutionConfigurationPropertiesResponse" missing
- `🔴` "azure-native:logz:FilteringTag" missing
- `🔴` "azure-native:logz:FilteringTagResponse" missing
- `🔴` "azure-native:logz:IdentityProperties" missing
- `🔴` "azure-native:logz:IdentityPropertiesResponse" missing
- `🔴` "azure-native:logz:LogRules" missing
- `🔴` "azure-native:logz:LogRulesResponse" missing
- `🔴` "azure-native:logz:LogzOrganizationProperties" missing
- `🔴` "azure-native:logz:LogzOrganizationPropertiesResponse" missing
- `🔴` "azure-native:logz:ManagedIdentityTypes" missing
- `🔴` "azure-native:logz:MarketplaceSubscriptionStatus" missing
- `🔴` "azure-native:logz:MetricRules" missing
- `🔴` "azure-native:logz:MetricRulesResponse" missing
- `🔴` "azure-native:logz:MetricsTagRulesProperties" missing
- `🔴` "azure-native:logz:MetricsTagRulesPropertiesResponse" missing
- `🔴` "azure-native:logz:MonitorProperties" missing
- `🔴` "azure-native:logz:MonitorPropertiesResponse" missing
- `🔴` "azure-native:logz:MonitoredResourceResponse" missing
- `🔴` "azure-native:logz:MonitoringStatus" missing
- `🔴` "azure-native:logz:MonitoringTagRulesProperties" missing
- `🔴` "azure-native:logz:MonitoringTagRulesPropertiesResponse" missing
- `🔴` "azure-native:logz:PlanData" missing
- `🔴` "azure-native:logz:PlanDataResponse" missing
- `🔴` "azure-native:logz:SystemDataResponse" missing
- `🔴` "azure-native:logz:TagAction" missing
- `🔴` "azure-native:logz:UserInfo" missing
- `🔴` "azure-native:logz:UserInfoResponse" missing
- `🔴` "azure-native:logz:UserRoleResponseResponse" missing
- `🔴` "azure-native:logz:VMResourcesResponse" missing
- `🟡` "azure-native:servicefabric:FaultSimulationDetailsResponse": properties: "parameters" type changed from "#/types/azure-native:servicefabric:ZoneFaultSimulationParametersResponse" to "#/types/azure-native:servicefabric:ZoneFaultSimulationContentResponse"
- `🟢` "azure-native:servicefabric:NodeTypeFaultSimulationResponse": required: "operationStatus" property has changed to Required
- `🔴` "azure-native:servicefabric:ZoneFaultSimulationParametersResponse" missing
- `🟢` "azure-native:sovereign:LandingZoneRegistrationResourceProperties": required: "managedIdentity" property is no longer Required
- `🟢` "azure-native:sovereign:LandingZoneRegistrationResourcePropertiesResponse": required: "managedIdentity" property is no longer Required
- `🔴` "azure-native:visualstudio:AccountResourceRequestOperationType" missing
- `🔴` "azure-native:visualstudio:ExtensionResourcePlan" missing
- `🔴` "azure-native:visualstudio:ExtensionResourcePlanResponse" missing

#### New resources:

- `advisor.Assessment`
- `agricultureplatform.AgriService`
- `billingbenefits.Discount`
- `databasefleetmanager.FirewallRule`
- `databasefleetmanager.Fleet`
- `databasefleetmanager.FleetDatabase`
- `databasefleetmanager.FleetTier`
- `databasefleetmanager.Fleetspace`
- `dependencymap.DiscoverySource`
- `dependencymap.Map`
- `manufacturingplatform.ManufacturingDataService`
- `mysqldiscovery.MySQLServer`
- `mysqldiscovery.MySQLSite`
- `servicefabric.Application`
- `servicefabric.ApplicationType`
- `servicefabric.ApplicationTypeVersion`
- `servicefabric.Service`

#### New functions:

- `advisor.getAssessment`
- `agricultureplatform.getAgriService`
- `agricultureplatform.listAgriServiceAvailableSolutions`
- `billingbenefits.getDiscount`
- `databasefleetmanager.getFirewallRule`
- `databasefleetmanager.getFleet`
- `databasefleetmanager.getFleetDatabase`
- `databasefleetmanager.getFleetTier`
- `databasefleetmanager.getFleetspace`
- `dependencymap.getDiscoverySource`
- `dependencymap.getMap`
- `manufacturingplatform.getManufacturingDataService`
- `manufacturingplatform.listManufacturingDataServiceAvailableVersions`
- `mysqldiscovery.getMySQLServer`
- `mysqldiscovery.getMySQLSite`
- `servicefabric.getApplication`
- `servicefabric.getApplicationType`
- `servicefabric.getApplicationTypeVersion`
- `servicefabric.getService`

<!-- Release notes generated using configuration in .github/release.yml at v2.90.0 -->

## What's Changed
* Fix reading usgov cloud from TF config and expand test coverage by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/4057
* Update and standardize on Gradle 8.13 by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/4058
* Upgrade spec to 45924e4983, removing a ScalingPlanPersonalSchedule exception, was removed upstream by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/4060
* Add a message about other API versions to v3 registry API docs by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/4056


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v2.89.3...v2.90.0