# CHANGELOG

### Does the PR have any schema changes?

Found 9 breaking changes:

#### Types
- `🟡` "azure-native:datafactory:ScriptActivityScriptBlock": properties: "type" type changed from "" to "pulumi.json#/Any"
- `🟡` "azure-native:datafactory:ScriptActivityScriptBlockResponse": properties: "type" type changed from "string" to "pulumi.json#/Any"
- `🔴` "azure-native:datafactory:ScriptType" missing
- `🔴` "azure-native:datafactory:SystemAssignedManagedIdentityCredential" missing
- `🔴` "azure-native:datafactory:SystemAssignedManagedIdentityCredentialResponse" missing
- `🔴` "azure-native:datafactory:UserAssignedManagedIdentityCredential" missing
- `🔴` "azure-native:datafactory:UserAssignedManagedIdentityCredentialResponse" missing
- "azure-native:elastic:OpenAIIntegrationPropertiesResponse": required:
    - `🟢` "openAIResourceEndpoint" property is no longer Required
    - `🟢` "openAIResourceId" property is no longer Required

#### New resources:

- `appplatform.Job`
- `devcenter.EncryptionSet`
- `devcenter.Plan`
- `devcenter.PlanMember`
- `machinelearningservices.ConnectionDeployment`
- `machinelearningservices.ConnectionRaiBlocklist`
- `machinelearningservices.ConnectionRaiBlocklistItem`
- `machinelearningservices.ConnectionRaiPolicy`
- `machinelearningservices.RaiPolicy`
- `web.WebAppSiteContainer`
- `web.WebAppSiteContainerSlot`

#### New functions:

- `appplatform.getJob`
- `appplatform.listJobEnvSecrets`
- `appplatform.listJobExecutionEnvSecrets`
- `devcenter.getEncryptionSet`
- `devcenter.getPlan`
- `devcenter.getPlanMember`
- `devcenter.getProjectInheritedSettings`
- `machinelearningservices.getConnectionDeployment`
- `machinelearningservices.getConnectionRaiBlocklist`
- `machinelearningservices.getConnectionRaiBlocklistItem`
- `machinelearningservices.getConnectionRaiPolicy`
- `machinelearningservices.getRaiPolicy`
- `machinelearningservices.listWorkspaceConnectionModels`
- `web.getWebAppSiteContainer`
- `web.getWebAppSiteContainerSlot`

<!-- Release notes generated using configuration in .github/release.yml at v2.38.0 -->

## What's Changed
* Update and reactivate postgres test by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3218
* Handle read failure after create failure by @danielrbradley in https://github.com/pulumi/pulumi-azure-native/pull/3219
* Implement provider cancellation by @danielrbradley in https://github.com/pulumi/pulumi-azure-native/pull/3224
* Re-disable Postgres test by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3227
* Bump gradle/gradle-build-action due to node v16 warning. Bump Python to 3.9. by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3232


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v2.37.0...v2.38.0