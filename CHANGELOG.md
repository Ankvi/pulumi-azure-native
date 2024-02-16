### Does the PR have any schema changes?

Found 58 breaking changes:

#### Resources
- `🔴` "azure-native:deploymentmanager:ArtifactSource" missing
- `🔴` "azure-native:deploymentmanager:Rollout" missing
- `🔴` "azure-native:deploymentmanager:Service" missing
- `🔴` "azure-native:deploymentmanager:ServiceTopology" missing
- `🔴` "azure-native:deploymentmanager:ServiceUnit" missing
- `🔴` "azure-native:deploymentmanager:Step" missing
#### Functions
- `🔴` "azure-native:deploymentmanager:getArtifactSource" missing
- `🔴` "azure-native:deploymentmanager:getRollout" missing
- `🔴` "azure-native:deploymentmanager:getService" missing
- `🔴` "azure-native:deploymentmanager:getServiceTopology" missing
- `🔴` "azure-native:deploymentmanager:getServiceUnit" missing
- `🔴` "azure-native:deploymentmanager:getStep" missing
#### Types
- `🟡` "azure-native:cognitiveservices:RaiPolicyContentFilter": properties: "policyName" missing
- `🟡` "azure-native:cognitiveservices:RaiPolicyContentFilterResponse": properties: "policyName" missing
- `🔴` "azure-native:deploymentmanager:ApiKeyAuthentication" missing
- `🔴` "azure-native:deploymentmanager:ApiKeyAuthenticationResponse" missing
- `🔴` "azure-native:deploymentmanager:CloudErrorBodyResponse" missing
- `🔴` "azure-native:deploymentmanager:DeploymentMode" missing
- `🔴` "azure-native:deploymentmanager:HealthCheckStepProperties" missing
- `🔴` "azure-native:deploymentmanager:HealthCheckStepPropertiesResponse" missing
- `🔴` "azure-native:deploymentmanager:Identity" missing
- `🔴` "azure-native:deploymentmanager:IdentityResponse" missing
- `🔴` "azure-native:deploymentmanager:MessageResponse" missing
- `🔴` "azure-native:deploymentmanager:PrePostStep" missing
- `🔴` "azure-native:deploymentmanager:PrePostStepResponse" missing
- `🔴` "azure-native:deploymentmanager:ResourceOperationResponse" missing
- `🔴` "azure-native:deploymentmanager:RestAuthLocation" missing
- `🔴` "azure-native:deploymentmanager:RestAuthType" missing
- `🔴` "azure-native:deploymentmanager:RestHealthCheck" missing
- `🔴` "azure-native:deploymentmanager:RestHealthCheckResponse" missing
- `🔴` "azure-native:deploymentmanager:RestHealthCheckStepAttributes" missing
- `🔴` "azure-native:deploymentmanager:RestHealthCheckStepAttributesResponse" missing
- `🔴` "azure-native:deploymentmanager:RestMatchQuantifier" missing
- `🔴` "azure-native:deploymentmanager:RestRequest" missing
- `🔴` "azure-native:deploymentmanager:RestRequestMethod" missing
- `🔴` "azure-native:deploymentmanager:RestRequestResponse" missing
- `🔴` "azure-native:deploymentmanager:RestResponse" missing
- `🔴` "azure-native:deploymentmanager:RestResponseRegex" missing
- `🔴` "azure-native:deploymentmanager:RestResponseResponse" missing
- `🔴` "azure-native:deploymentmanager:RestResponseResponseRegex" missing
- `🔴` "azure-native:deploymentmanager:RolloutIdentityAuthentication" missing
- `🔴` "azure-native:deploymentmanager:RolloutIdentityAuthenticationResponse" missing
- `🔴` "azure-native:deploymentmanager:RolloutOperationInfoResponse" missing
- `🔴` "azure-native:deploymentmanager:RolloutStepResponse" missing
- `🔴` "azure-native:deploymentmanager:SasAuthentication" missing
- `🔴` "azure-native:deploymentmanager:SasAuthenticationResponse" missing
- `🔴` "azure-native:deploymentmanager:ServiceResponse" missing
- `🔴` "azure-native:deploymentmanager:ServiceUnitArtifacts" missing
- `🔴` "azure-native:deploymentmanager:ServiceUnitArtifactsResponse" missing
- `🔴` "azure-native:deploymentmanager:ServiceUnitResponse" missing
- `🔴` "azure-native:deploymentmanager:StepGroup" missing
- `🔴` "azure-native:deploymentmanager:StepGroupResponse" missing
- `🔴` "azure-native:deploymentmanager:StepOperationInfoResponse" missing
- `🔴` "azure-native:deploymentmanager:StepType" missing
- `🔴` "azure-native:deploymentmanager:WaitStepAttributes" missing
- `🔴` "azure-native:deploymentmanager:WaitStepAttributesResponse" missing
- `🔴` "azure-native:deploymentmanager:WaitStepProperties" missing
- `🔴` "azure-native:deploymentmanager:WaitStepPropertiesResponse" missing

#### New resources:

- `mobilepacketcore.AmfDeployment`
- `mobilepacketcore.ClusterService`
- `mobilepacketcore.NrfDeployment`
- `mobilepacketcore.NssfDeployment`
- `mobilepacketcore.ObservabilityService`
- `mobilepacketcore.SmfDeployment`
- `mobilepacketcore.UpfDeployment`

#### New functions:

- `mobilepacketcore.getAmfDeployment`
- `mobilepacketcore.getClusterService`
- `mobilepacketcore.getNrfDeployment`
- `mobilepacketcore.getNssfDeployment`
- `mobilepacketcore.getObservabilityService`
- `mobilepacketcore.getSmfDeployment`
- `mobilepacketcore.getUpfDeployment`

<!-- Release notes generated using configuration in .github/release.yml at v2.28.0 -->

## What's Changed
* Move custom resources into own package by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3059
* Enable RequireEmptyPreviewAfterRefresh in all tests by @mikhailshilkov in https://github.com/pulumi/pulumi-azure-native/pull/3056
* Reset, don't remove sub-resource properties to avoid wrong diffs by @thomas11 in https://github.com/pulumi/pulumi-azure-native/pull/3054


**Full Changelog**: https://github.com/pulumi/pulumi-azure-native/compare/v2.27.0...v2.28.0