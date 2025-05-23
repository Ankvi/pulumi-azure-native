import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The environment authentication details
 */
export interface AccessTokenAuthenticationResponse {
    /**
     * The access token that will be used while authenticating with the onboarded environment
     */
    accessToken?: string;
    /**
     * The authentication type
     * Expected value is 'AccessToken'.
     */
    authenticationType: "AccessToken";
    /**
     * The user name that will be used while authenticating with the onboarded environment
     */
    username?: string;
}

/**
 * Configuration payload for PR Annotations.
 */
export interface ActionableRemediationResponse {
    /**
     * Repository branch configuration for PR Annotations.
     */
    branchConfiguration?: TargetBranchConfigurationResponse;
    /**
     * Gets or sets list of categories and severity levels.
     */
    categoryConfigurations?: CategoryConfigurationResponse[];
    /**
     * Update Settings.
     * 
     * Enabled - Resource should inherit configurations from parent.
     * Disabled - Resource should not inherit configurations from parent.
     */
    inheritFromParentState?: string;
    /**
     * ActionableRemediation Setting.
     * None - the setting was never set.
     * Enabled - ActionableRemediation is enabled.
     * Disabled - ActionableRemediation is disabled.
     */
    state?: string;
}

/**
 * Properties of the additional workspaces.
 */
export interface AdditionalWorkspacesPropertiesResponse {
    /**
     * List of data types sent to workspace
     */
    dataTypes?: string[];
    /**
     * Workspace type.
     */
    type?: string;
    /**
     * Workspace resource id
     */
    workspace?: string;
}
/**
 * additionalWorkspacesPropertiesResponseProvideDefaults sets the appropriate defaults for AdditionalWorkspacesPropertiesResponse
 */
export function additionalWorkspacesPropertiesResponseProvideDefaults(val: AdditionalWorkspacesPropertiesResponse): AdditionalWorkspacesPropertiesResponse {
    return {
        ...val,
        type: (val.type) ?? "Sentinel",
    };
}

/**
 * A custom alert rule that checks if a value (depends on the custom alert type) is allowed.
 */
export interface AllowlistCustomAlertRuleResponse {
    /**
     * The values to allow. The format of the values depends on the rule type.
     */
    allowlistValues: string[];
    /**
     * The description of the custom alert.
     */
    description: string;
    /**
     * The display name of the custom alert.
     */
    displayName: string;
    /**
     * Status of the custom alert.
     */
    isEnabled: boolean;
    /**
     * The type of the custom alert rule.
     * Expected value is 'AllowlistCustomAlertRule'.
     */
    ruleType: "AllowlistCustomAlertRule";
    /**
     * The value type of the items in the list.
     */
    valueType: string;
}

/**
 * Configuration for servers Arc auto provisioning for a given environment
 */
export interface ArcAutoProvisioningResponseConfiguration {
    /**
     * Optional Arc private link scope resource id to link the Arc agent
     */
    privateLinkScope?: string;
    /**
     * Optional HTTP proxy endpoint to use for the Arc agent
     */
    proxy?: string;
}

/**
 * Links relevant to the assessment
 */
export interface AssessmentLinksResponse {
    /**
     * Link to assessment in Azure Portal
     */
    azurePortalUri: string;
}

/**
 * The result of the assessment
 */
export interface AssessmentStatusResponseResponse {
    /**
     * Programmatic code for the cause of the assessment status
     */
    cause?: string;
    /**
     * Programmatic code for the status of the assessment
     */
    code: string;
    /**
     * Human readable description of the assessment status
     */
    description?: string;
    /**
     * The time that the assessment was created and first evaluated. Returned as UTC time in ISO 8601 format
     */
    firstEvaluationDate: string;
    /**
     * The time that the status of the assessment last changed. Returned as UTC time in ISO 8601 format
     */
    statusChangeDate: string;
}

/**
 * Describe the properties of a security assessment object reference (by key)
 */
export interface AssignedAssessmentItemResponse {
    /**
     * Unique key to a security assessment object
     */
    assessmentKey?: string;
}

/**
 * describe the properties of a security assessment object reference (by key)
 */
export interface AssignedComponentItemResponse {
    /**
     * unique key to a security assessment object
     */
    key?: string;
}

/**
 * Describe the properties of a of a standard assignments object reference
 */
export interface AssignedStandardItemResponse {
    /**
     * Full resourceId of the Microsoft.Security/standard object
     */
    id?: string;
}

/**
 * Additional data about the assignment
 */
export interface AssignmentPropertiesResponseAdditionalData {
    /**
     * Exemption category of this assignment
     */
    exemptionCategory?: string;
}

/**
 * Describe the properties of a assignment attestation
 */
export interface AttestationEvidenceResponse {
    /**
     * The description of the evidence
     */
    description?: string;
    /**
     * The source url of the evidence
     */
    sourceUrl?: string;
}

/**
 * Authorization payload.
 */
export interface AuthorizationResponse {
    /**
     * Gets or sets one-time OAuth code to exchange for refresh and access tokens.
     * 
     * Only used during PUT/PATCH operations. The secret is cleared during GET.
     */
    code?: string;
}

/**
 * The target Event Hub to which event data will be exported. To learn more about Microsoft Defender for Cloud continuous export capabilities, visit https://aka.ms/ASCExportLearnMore
 */
export interface AutomationActionEventHubResponse {
    /**
     * The type of the action that will be triggered by the Automation
     * Expected value is 'EventHub'.
     */
    actionType: "EventHub";
    /**
     * The target Event Hub connection string (it will not be included in any response).
     */
    connectionString?: string;
    /**
     * The target Event Hub Azure Resource ID.
     */
    eventHubResourceId?: string;
    /**
     * Indicates whether the trusted service is enabled or not.
     */
    isTrustedServiceEnabled?: boolean;
    /**
     * The target Event Hub SAS policy name.
     */
    sasPolicyName: string;
}

/**
 * The logic app action that should be triggered. To learn more about Microsoft Defender for Cloud's Workflow Automation capabilities, visit https://aka.ms/ASCWorkflowAutomationLearnMore
 */
export interface AutomationActionLogicAppResponse {
    /**
     * The type of the action that will be triggered by the Automation
     * Expected value is 'LogicApp'.
     */
    actionType: "LogicApp";
    /**
     * The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App
     */
    logicAppResourceId?: string;
    /**
     * The Logic App trigger URI endpoint (it will not be included in any response).
     */
    uri?: string;
}

/**
 * The Log Analytics Workspace to which event data will be exported. Security alerts data will reside in the 'SecurityAlert' table and the assessments data will reside in the 'SecurityRecommendation' table (under the 'Security'/'SecurityCenterFree' solutions). Note that in order to view the data in the workspace, the Security Center Log Analytics free/standard solution needs to be enabled on that workspace. To learn more about Microsoft Defender for Cloud continuous export capabilities, visit https://aka.ms/ASCExportLearnMore
 */
export interface AutomationActionWorkspaceResponse {
    /**
     * The type of the action that will be triggered by the Automation
     * Expected value is 'Workspace'.
     */
    actionType: "Workspace";
    /**
     * The fully qualified Log Analytics Workspace Azure Resource ID.
     */
    workspaceResourceId?: string;
}

/**
 * A rule set which evaluates all its rules upon an event interception. Only when all the included rules in the rule set will be evaluated as 'true', will the event trigger the defined actions. 
 */
export interface AutomationRuleSetResponse {
    rules?: AutomationTriggeringRuleResponse[];
}

/**
 * A single automation scope.
 */
export interface AutomationScopeResponse {
    /**
     * The resources scope description.
     */
    description?: string;
    /**
     * The resources scope path. Can be the subscription on which the automation is defined on or a resource group under that subscription (fully qualified Azure resource IDs).
     */
    scopePath?: string;
}

/**
 * The source event types which evaluate the security automation set of rules. For example - security alerts and security assessments. To learn more about the supported security events data models schemas - please visit https://aka.ms/ASCAutomationSchemas.
 */
export interface AutomationSourceResponse {
    /**
     * A valid event source type.
     */
    eventSource?: string;
    /**
     * A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical 'or').
     */
    ruleSets?: AutomationRuleSetResponse[];
}

/**
 * A rule which is evaluated upon event interception. The rule is configured by comparing a specific value from the event model to an expected value. This comparison is done by using one of the supported operators set.
 */
export interface AutomationTriggeringRuleResponse {
    /**
     * The expected value.
     */
    expectedValue?: string;
    /**
     * A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType.
     */
    operator?: string;
    /**
     * The JPath of the entity model property that should be checked.
     */
    propertyJPath?: string;
    /**
     * The data type of the compared operands (string, integer, floating point number or a boolean [true/false]]
     */
    propertyType?: string;
}

/**
 * AWS cloud account connector based assume role, the role enables delegating access to your AWS resources. The role is composed of role Amazon Resource Name (ARN) and external ID. For more details, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html">Creating a Role to Delegate Permissions to an IAM User (write only)</a>
 */
export interface AwAssumeRoleAuthenticationDetailsPropertiesResponse {
    /**
     * The ID of the cloud account
     */
    accountId: string;
    /**
     * State of the multi-cloud connector
     */
    authenticationProvisioningState: string;
    /**
     * Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
     * Expected value is 'awsAssumeRole'.
     */
    authenticationType: "awsAssumeRole";
    /**
     * Assumed role ID is an identifier that you can use to create temporary security credentials.
     */
    awsAssumeRoleArn: string;
    /**
     * A unique identifier that is required when you assume a role in another account.
     */
    awsExternalId: string;
    /**
     * The permissions detected in the cloud account.
     */
    grantedPermissions: string[];
}

/**
 * AWS cloud account connector based credentials, the credentials is composed of access key ID and secret key, for more details, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html">Creating an IAM User in Your AWS Account (write only)</a>
 */
export interface AwsCredsAuthenticationDetailsPropertiesResponse {
    /**
     * The ID of the cloud account
     */
    accountId: string;
    /**
     * State of the multi-cloud connector
     */
    authenticationProvisioningState: string;
    /**
     * Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
     * Expected value is 'awsCreds'.
     */
    authenticationType: "awsCreds";
    /**
     * Public key element of the AWS credential object (write only)
     */
    awsAccessKeyId: string;
    /**
     * Secret key element of the AWS credential object (write only)
     */
    awsSecretAccessKey: string;
    /**
     * The permissions detected in the cloud account.
     */
    grantedPermissions: string[];
}

/**
 * The AWS connector environment data
 */
export interface AwsEnvironmentDataResponse {
    /**
     * The AWS account name
     */
    accountName: string;
    /**
     * The type of the environment data.
     * Expected value is 'AwsAccount'.
     */
    environmentType: "AwsAccount";
    /**
     * The AWS account's organizational data
     */
    organizationalData?: AwsOrganizationalDataMasterResponse | AwsOrganizationalDataMemberResponse;
    /**
     * list of regions to scan
     */
    regions?: string[];
    /**
     * Scan interval in hours (value should be between 1-hour to 24-hours)
     */
    scanInterval?: number;
}

/**
 * The AWS organization data for the master account
 */
export interface AwsOrganizationalDataMasterResponse {
    /**
     * If the multi cloud account is of membership type organization, list of accounts excluded from offering
     */
    excludedAccountIds?: string[];
    /**
     * The multi cloud account's membership type in the organization
     * Expected value is 'Organization'.
     */
    organizationMembershipType: "Organization";
    /**
     * If the multi cloud account is of membership type organization, this will be the name of the onboarding stackset
     */
    stacksetName?: string;
}

/**
 * The AWS organization data for the member account
 */
export interface AwsOrganizationalDataMemberResponse {
    /**
     * The multi cloud account's membership type in the organization
     * Expected value is 'Member'.
     */
    organizationMembershipType: "Member";
    /**
     * If the multi cloud account is not of membership type organization, this will be the ID of the account's parent
     */
    parentHierarchyId?: string;
}

/**
 * Azure DevOps Organization properties.
 */
export interface AzureDevOpsOrgPropertiesResponse {
    /**
     * Configuration payload for PR Annotations.
     */
    actionableRemediation?: ActionableRemediationResponse;
    /**
     * Details about resource onboarding status across all connectors.
     * 
     * OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.
     * Onboarded - this resource has already been onboarded by the specified connector.
     * NotOnboarded - this resource has not been onboarded to any connector.
     * NotApplicable - the onboarding state is not applicable to the current endpoint.
     */
    onboardingState?: string;
    /**
     * The provisioning state of the resource.
     * 
     * Pending - Provisioning pending.
     * Failed - Provisioning failed.
     * Succeeded - Successful provisioning.
     * Canceled - Provisioning canceled.
     * PendingDeletion - Deletion pending.
     * DeletionSuccess - Deletion successful.
     * DeletionFailure - Deletion failure.
     */
    provisioningState?: string;
    /**
     * Gets or sets resource status message.
     */
    provisioningStatusMessage: string;
    /**
     * Gets or sets time when resource was last checked.
     */
    provisioningStatusUpdateTimeUtc: string;
}

/**
 * Azure DevOps Organization resource.
 */
export interface AzureDevOpsOrgResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * Azure DevOps Organization properties.
     */
    properties?: AzureDevOpsOrgPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The AzureDevOps scope connector's environment data
 */
export interface AzureDevOpsScopeEnvironmentDataResponse {
    /**
     * The type of the environment data.
     * Expected value is 'AzureDevOpsScope'.
     */
    environmentType: "AzureDevOpsScope";
}

/**
 * Details of the Azure resource that was assessed
 */
export interface AzureResourceDetailsResponse {
    /**
     * Azure resource Id of the assessed resource
     */
    id: string;
    /**
     * The platform where the assessed resource resides
     * Expected value is 'Azure'.
     */
    source: "Azure";
}

/**
 * Severity level per category configuration for PR Annotations.
 */
export interface CategoryConfigurationResponse {
    /**
     * Rule categories.
     * Code - code scanning results.
     * Artifact scanning results.
     * Dependencies scanning results.
     * IaC results.
     * Secrets scanning results.
     * Container scanning results.
     */
    category?: string;
    /**
     * Gets or sets minimum severity level for a given category.
     */
    minimumSeverityLevel?: string;
}

/**
 * The CSPM monitoring for AWS offering
 */
export interface CspmMonitorAwsOfferingResponse {
    /**
     * The offering description.
     */
    description: string;
    /**
     * The native cloud connection configuration
     */
    nativeCloudConnection?: CspmMonitorAwsOfferingResponseNativeCloudConnection;
    /**
     * The type of the security offering.
     * Expected value is 'CspmMonitorAws'.
     */
    offeringType: "CspmMonitorAws";
}

/**
 * The native cloud connection configuration
 */
export interface CspmMonitorAwsOfferingResponseNativeCloudConnection {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
}

/**
 * The CSPM monitoring for AzureDevOps offering
 */
export interface CspmMonitorAzureDevOpsOfferingResponse {
    /**
     * The offering description.
     */
    description: string;
    /**
     * The type of the security offering.
     * Expected value is 'CspmMonitorAzureDevOps'.
     */
    offeringType: "CspmMonitorAzureDevOps";
}

/**
 * The CSPM (Cloud security posture management) monitoring for Docker Hub offering
 */
export interface CspmMonitorDockerHubOfferingResponse {
    /**
     * The offering description.
     */
    description: string;
    /**
     * The type of the security offering.
     * Expected value is 'CspmMonitorDockerHub'.
     */
    offeringType: "CspmMonitorDockerHub";
}

/**
 * The CSPM monitoring for GCP offering
 */
export interface CspmMonitorGcpOfferingResponse {
    /**
     * The offering description.
     */
    description: string;
    /**
     * The native cloud connection configuration
     */
    nativeCloudConnection?: CspmMonitorGcpOfferingResponseNativeCloudConnection;
    /**
     * The type of the security offering.
     * Expected value is 'CspmMonitorGcp'.
     */
    offeringType: "CspmMonitorGcp";
}

/**
 * The native cloud connection configuration
 */
export interface CspmMonitorGcpOfferingResponseNativeCloudConnection {
    /**
     * The service account email address in GCP for this offering
     */
    serviceAccountEmailAddress?: string;
    /**
     * The GCP workload identity provider id for the offering
     */
    workloadIdentityProviderId?: string;
}

/**
 * The CSPM (Cloud security posture management) monitoring for gitlab offering
 */
export interface CspmMonitorGitLabOfferingResponse {
    /**
     * The offering description.
     */
    description: string;
    /**
     * The type of the security offering.
     * Expected value is 'CspmMonitorGitLab'.
     */
    offeringType: "CspmMonitorGitLab";
}

/**
 * The CSPM monitoring for github offering
 */
export interface CspmMonitorGithubOfferingResponse {
    /**
     * The offering description.
     */
    description: string;
    /**
     * The type of the security offering.
     * Expected value is 'CspmMonitorGithub'.
     */
    offeringType: "CspmMonitorGithub";
}

/**
 * The CSPM (Cloud security posture management) monitoring for JFrog Artifactory offering
 */
export interface CspmMonitorJFrogOfferingResponse {
    /**
     * The offering description.
     */
    description: string;
    /**
     * The type of the security offering.
     * Expected value is 'CspmMonitorJFrog'.
     */
    offeringType: "CspmMonitorJFrog";
}

/**
 * The CSPM P1 for AWS offering
 */
export interface DefenderCspmAwsOfferingResponse {
    /**
     * Defenders CSPM Permissions Management offering configurations
     */
    ciem?: DefenderCspmAwsOfferingResponseCiem;
    /**
     * The Microsoft Defender Data Sensitivity discovery configuration
     */
    dataSensitivityDiscovery?: DefenderCspmAwsOfferingResponseDataSensitivityDiscovery;
    /**
     * The databases DSPM configuration
     */
    databasesDspm?: DefenderCspmAwsOfferingResponseDatabasesDspm;
    /**
     * The offering description.
     */
    description: string;
    /**
     * The Microsoft Defender container agentless discovery K8s configuration
     */
    mdcContainersAgentlessDiscoveryK8s?: DefenderCspmAwsOfferingResponseMdcContainersAgentlessDiscoveryK8s;
    /**
     * The Microsoft Defender container image assessment configuration
     */
    mdcContainersImageAssessment?: DefenderCspmAwsOfferingResponseMdcContainersImageAssessment;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderCspmAws'.
     */
    offeringType: "DefenderCspmAws";
    /**
     * The Microsoft Defender for CSPM offering VM scanning configuration
     */
    vmScanners?: DefenderCspmAwsOfferingResponseVmScanners;
}

/**
 * Defenders CSPM Permissions Management offering configurations
 */
export interface DefenderCspmAwsOfferingResponseCiem {
    /**
     * Defender CSPM Permissions Management discovery configuration
     */
    ciemDiscovery?: DefenderCspmAwsOfferingResponseCiemDiscovery;
    /**
     * AWS Defender CSPM Permissions Management OIDC (open id connect) connection configurations
     */
    ciemOidc?: DefenderCspmAwsOfferingResponseCiemOidc;
}

/**
 * Defender CSPM Permissions Management discovery configuration
 */
export interface DefenderCspmAwsOfferingResponseCiemDiscovery {
    /**
     * The cloud role ARN in AWS for Permissions Management discovery
     */
    cloudRoleArn?: string;
}

/**
 * AWS Defender CSPM Permissions Management OIDC (open id connect) connection configurations
 */
export interface DefenderCspmAwsOfferingResponseCiemOidc {
    /**
     * the azure active directory app name used of authenticating against AWS
     */
    azureActiveDirectoryAppName?: string;
    /**
     * The cloud role ARN in AWS for Permissions Management used for oidc connection
     */
    cloudRoleArn?: string;
}

/**
 * The Microsoft Defender Data Sensitivity discovery configuration
 */
export interface DefenderCspmAwsOfferingResponseDataSensitivityDiscovery {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
    /**
     * Is Microsoft Defender Data Sensitivity discovery enabled
     */
    enabled?: boolean;
}

/**
 * The databases DSPM configuration
 */
export interface DefenderCspmAwsOfferingResponseDatabasesDspm {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
    /**
     * Is databases DSPM protection enabled
     */
    enabled?: boolean;
}

/**
 * The Microsoft Defender container agentless discovery K8s configuration
 */
export interface DefenderCspmAwsOfferingResponseMdcContainersAgentlessDiscoveryK8s {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
    /**
     * Is Microsoft Defender container agentless discovery K8s enabled
     */
    enabled?: boolean;
}

/**
 * The Microsoft Defender container image assessment configuration
 */
export interface DefenderCspmAwsOfferingResponseMdcContainersImageAssessment {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
    /**
     * Is Microsoft Defender container image assessment enabled
     */
    enabled?: boolean;
}

/**
 * The Microsoft Defender for CSPM offering VM scanning configuration
 */
export interface DefenderCspmAwsOfferingResponseVmScanners {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
    /**
     * Configuration for VM scanning
     */
    configuration?: VmScannersBaseResponseConfiguration;
    /**
     * Is VM scanning enabled
     */
    enabled?: boolean;
}

/**
 * The Defender for CSPM Docker Hub offering configurations
 */
export interface DefenderCspmDockerHubOfferingResponse {
    /**
     * The offering description.
     */
    description: string;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderCspmDockerHub'.
     */
    offeringType: "DefenderCspmDockerHub";
}

/**
 * The CSPM P1 for GCP offering
 */
export interface DefenderCspmGcpOfferingResponse {
    /**
     * GCP Defenders CSPM Permissions Management OIDC (Open ID connect) connection configurations
     */
    ciemDiscovery?: DefenderCspmGcpOfferingResponseCiemDiscovery;
    /**
     * The Microsoft Defender Data Sensitivity discovery configuration
     */
    dataSensitivityDiscovery?: DefenderCspmGcpOfferingResponseDataSensitivityDiscovery;
    /**
     * The offering description.
     */
    description: string;
    /**
     * The Microsoft Defender Container agentless discovery configuration
     */
    mdcContainersAgentlessDiscoveryK8s?: DefenderCspmGcpOfferingResponseMdcContainersAgentlessDiscoveryK8s;
    /**
     * The Microsoft Defender Container image assessment configuration
     */
    mdcContainersImageAssessment?: DefenderCspmGcpOfferingResponseMdcContainersImageAssessment;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderCspmGcp'.
     */
    offeringType: "DefenderCspmGcp";
    /**
     * The Microsoft Defender for CSPM VM scanning configuration
     */
    vmScanners?: DefenderCspmGcpOfferingResponseVmScanners;
}

/**
 * GCP Defenders CSPM Permissions Management OIDC (Open ID connect) connection configurations
 */
export interface DefenderCspmGcpOfferingResponseCiemDiscovery {
    /**
     * the azure active directory app name used of authenticating against GCP workload identity federation
     */
    azureActiveDirectoryAppName?: string;
    /**
     * The service account email address in GCP for Permissions Management offering
     */
    serviceAccountEmailAddress?: string;
    /**
     * The GCP workload identity provider id for Permissions Management offering
     */
    workloadIdentityProviderId?: string;
}

/**
 * The Microsoft Defender Data Sensitivity discovery configuration
 */
export interface DefenderCspmGcpOfferingResponseDataSensitivityDiscovery {
    /**
     * Is Microsoft Defender Data Sensitivity discovery enabled
     */
    enabled?: boolean;
    /**
     * The service account email address in GCP for this feature
     */
    serviceAccountEmailAddress?: string;
    /**
     * The workload identity provider id in GCP for this feature
     */
    workloadIdentityProviderId?: string;
}

/**
 * The Microsoft Defender Container agentless discovery configuration
 */
export interface DefenderCspmGcpOfferingResponseMdcContainersAgentlessDiscoveryK8s {
    /**
     * Is Microsoft Defender container agentless discovery enabled
     */
    enabled?: boolean;
    /**
     * The service account email address in GCP for this feature
     */
    serviceAccountEmailAddress?: string;
    /**
     * The workload identity provider id in GCP for this feature
     */
    workloadIdentityProviderId?: string;
}

/**
 * The Microsoft Defender Container image assessment configuration
 */
export interface DefenderCspmGcpOfferingResponseMdcContainersImageAssessment {
    /**
     * Is Microsoft Defender container image assessment enabled
     */
    enabled?: boolean;
    /**
     * The service account email address in GCP for this feature
     */
    serviceAccountEmailAddress?: string;
    /**
     * The workload identity provider id in GCP for this feature
     */
    workloadIdentityProviderId?: string;
}

/**
 * The Microsoft Defender for CSPM VM scanning configuration
 */
export interface DefenderCspmGcpOfferingResponseVmScanners {
    /**
     * Configuration for VM scanning
     */
    configuration?: VmScannersBaseResponseConfiguration;
    /**
     * Is VM scanning enabled
     */
    enabled?: boolean;
}

/**
 * The CSPM P1 for JFrog Artifactory offering
 */
export interface DefenderCspmJFrogOfferingResponse {
    /**
     * The offering description.
     */
    description: string;
    /**
     * The Microsoft Defender Container image assessment configuration
     */
    mdcContainersImageAssessment?: DefenderCspmJFrogOfferingResponseMdcContainersImageAssessment;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderCspmJFrog'.
     */
    offeringType: "DefenderCspmJFrog";
}

/**
 * The Microsoft Defender Container image assessment configuration
 */
export interface DefenderCspmJFrogOfferingResponseMdcContainersImageAssessment {
    /**
     * Is Microsoft Defender container image assessment enabled
     */
    enabled?: boolean;
}

/**
 * The Defender for Databases AWS offering
 */
export interface DefenderFoDatabasesAwsOfferingResponse {
    /**
     * The ARC autoprovisioning configuration
     */
    arcAutoProvisioning?: DefenderFoDatabasesAwsOfferingResponseArcAutoProvisioning;
    /**
     * The databases data security posture management (DSPM) configuration
     */
    databasesDspm?: DefenderFoDatabasesAwsOfferingResponseDatabasesDspm;
    /**
     * The offering description.
     */
    description: string;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForDatabasesAws'.
     */
    offeringType: "DefenderForDatabasesAws";
    /**
     * The RDS configuration
     */
    rds?: DefenderFoDatabasesAwsOfferingResponseRds;
}

/**
 * The ARC autoprovisioning configuration
 */
export interface DefenderFoDatabasesAwsOfferingResponseArcAutoProvisioning {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
    /**
     * Configuration for servers Arc auto provisioning for a given environment
     */
    configuration?: ArcAutoProvisioningResponseConfiguration;
    /**
     * Is arc auto provisioning enabled
     */
    enabled?: boolean;
}

/**
 * The databases data security posture management (DSPM) configuration
 */
export interface DefenderFoDatabasesAwsOfferingResponseDatabasesDspm {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
    /**
     * Is databases data security posture management (DSPM) protection enabled
     */
    enabled?: boolean;
}

/**
 * The RDS configuration
 */
export interface DefenderFoDatabasesAwsOfferingResponseRds {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
    /**
     * Is RDS protection enabled
     */
    enabled?: boolean;
}

/**
 * The Defender for Containers AWS offering
 */
export interface DefenderForContainersAwsOfferingResponse {
    /**
     * The cloudwatch to kinesis connection configuration
     */
    cloudWatchToKinesis?: DefenderForContainersAwsOfferingResponseCloudWatchToKinesis;
    /**
     * The externalId used by the data reader to prevent the confused deputy attack
     */
    dataCollectionExternalId?: string;
    /**
     * The offering description.
     */
    description: string;
    /**
     * Is audit logs data collection enabled
     */
    enableAuditLogsAutoProvisioning?: boolean;
    /**
     * Is Microsoft Defender for Cloud Kubernetes agent auto provisioning enabled
     */
    enableDefenderAgentAutoProvisioning?: boolean;
    /**
     * Is Policy Kubernetes agent auto provisioning enabled
     */
    enablePolicyAgentAutoProvisioning?: boolean;
    /**
     * The kinesis to s3 connection configuration
     */
    kinesisToS3?: DefenderForContainersAwsOfferingResponseKinesisToS3;
    /**
     * The retention time in days of kube audit logs set on the CloudWatch log group
     */
    kubeAuditRetentionTime?: number;
    /**
     * The kubernetes data collection connection configuration
     */
    kubernetesDataCollection?: DefenderForContainersAwsOfferingResponseKubernetesDataCollection;
    /**
     * The kubernetes service connection configuration
     */
    kubernetesService?: DefenderForContainersAwsOfferingResponseKubernetesService;
    /**
     * The Microsoft Defender container agentless discovery K8s configuration
     */
    mdcContainersAgentlessDiscoveryK8s?: DefenderForContainersAwsOfferingResponseMdcContainersAgentlessDiscoveryK8s;
    /**
     * The Microsoft Defender container image assessment configuration
     */
    mdcContainersImageAssessment?: DefenderForContainersAwsOfferingResponseMdcContainersImageAssessment;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForContainersAws'.
     */
    offeringType: "DefenderForContainersAws";
    /**
     * The Microsoft Defender for Container K8s VM host scanning configuration
     */
    vmScanners?: DefenderForContainersAwsOfferingResponseVmScanners;
}

/**
 * The cloudwatch to kinesis connection configuration
 */
export interface DefenderForContainersAwsOfferingResponseCloudWatchToKinesis {
    /**
     * The cloud role ARN in AWS used by CloudWatch to transfer data into Kinesis
     */
    cloudRoleArn?: string;
}

/**
 * The kinesis to s3 connection configuration
 */
export interface DefenderForContainersAwsOfferingResponseKinesisToS3 {
    /**
     * The cloud role ARN in AWS used by Kinesis to transfer data into S3
     */
    cloudRoleArn?: string;
}

/**
 * The kubernetes data collection connection configuration
 */
export interface DefenderForContainersAwsOfferingResponseKubernetesDataCollection {
    /**
     * The cloud role ARN in AWS for this feature used for reading data
     */
    cloudRoleArn?: string;
}

/**
 * The kubernetes service connection configuration
 */
export interface DefenderForContainersAwsOfferingResponseKubernetesService {
    /**
     * The cloud role ARN in AWS for this feature used for provisioning resources
     */
    cloudRoleArn?: string;
}

/**
 * The Microsoft Defender container agentless discovery K8s configuration
 */
export interface DefenderForContainersAwsOfferingResponseMdcContainersAgentlessDiscoveryK8s {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
    /**
     * Is Microsoft Defender container agentless discovery K8s enabled
     */
    enabled?: boolean;
}

/**
 * The Microsoft Defender container image assessment configuration
 */
export interface DefenderForContainersAwsOfferingResponseMdcContainersImageAssessment {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
    /**
     * Is Microsoft Defender container image assessment enabled
     */
    enabled?: boolean;
}

/**
 * The Microsoft Defender for Container K8s VM host scanning configuration
 */
export interface DefenderForContainersAwsOfferingResponseVmScanners {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
    /**
     * Configuration for VM scanning
     */
    configuration?: VmScannersBaseResponseConfiguration;
    /**
     * Is VM scanning enabled
     */
    enabled?: boolean;
}

/**
 * The Defender for containers Docker Hub offering configurations
 */
export interface DefenderForContainersDockerHubOfferingResponse {
    /**
     * The offering description.
     */
    description: string;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForContainersDockerHub'.
     */
    offeringType: "DefenderForContainersDockerHub";
}

/**
 * The containers GCP offering
 */
export interface DefenderForContainersGcpOfferingResponse {
    /**
     * The native cloud connection configuration
     */
    dataPipelineNativeCloudConnection?: DefenderForContainersGcpOfferingResponseDataPipelineNativeCloudConnection;
    /**
     * The offering description.
     */
    description: string;
    /**
     * Is audit logs data collection enabled
     */
    enableAuditLogsAutoProvisioning?: boolean;
    /**
     * Is Microsoft Defender for Cloud Kubernetes agent auto provisioning enabled
     */
    enableDefenderAgentAutoProvisioning?: boolean;
    /**
     * Is Policy Kubernetes agent auto provisioning enabled
     */
    enablePolicyAgentAutoProvisioning?: boolean;
    /**
     * The Microsoft Defender Container agentless discovery configuration
     */
    mdcContainersAgentlessDiscoveryK8s?: DefenderForContainersGcpOfferingResponseMdcContainersAgentlessDiscoveryK8s;
    /**
     * The Microsoft Defender Container image assessment configuration
     */
    mdcContainersImageAssessment?: DefenderForContainersGcpOfferingResponseMdcContainersImageAssessment;
    /**
     * The native cloud connection configuration
     */
    nativeCloudConnection?: DefenderForContainersGcpOfferingResponseNativeCloudConnection;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForContainersGcp'.
     */
    offeringType: "DefenderForContainersGcp";
    /**
     * The Microsoft Defender for Container K8s VM host scanning configuration
     */
    vmScanners?: DefenderForContainersGcpOfferingResponseVmScanners;
}

/**
 * The native cloud connection configuration
 */
export interface DefenderForContainersGcpOfferingResponseDataPipelineNativeCloudConnection {
    /**
     * The data collection service account email address in GCP for this offering
     */
    serviceAccountEmailAddress?: string;
    /**
     * The data collection GCP workload identity provider id for this offering
     */
    workloadIdentityProviderId?: string;
}

/**
 * The Microsoft Defender Container agentless discovery configuration
 */
export interface DefenderForContainersGcpOfferingResponseMdcContainersAgentlessDiscoveryK8s {
    /**
     * Is Microsoft Defender container agentless discovery enabled
     */
    enabled?: boolean;
    /**
     * The service account email address in GCP for this feature
     */
    serviceAccountEmailAddress?: string;
    /**
     * The workload identity provider id in GCP for this feature
     */
    workloadIdentityProviderId?: string;
}

/**
 * The Microsoft Defender Container image assessment configuration
 */
export interface DefenderForContainersGcpOfferingResponseMdcContainersImageAssessment {
    /**
     * Is Microsoft Defender container image assessment enabled
     */
    enabled?: boolean;
    /**
     * The service account email address in GCP for this feature
     */
    serviceAccountEmailAddress?: string;
    /**
     * The workload identity provider id in GCP for this feature
     */
    workloadIdentityProviderId?: string;
}

/**
 * The native cloud connection configuration
 */
export interface DefenderForContainersGcpOfferingResponseNativeCloudConnection {
    /**
     * The service account email address in GCP for this offering
     */
    serviceAccountEmailAddress?: string;
    /**
     * The GCP workload identity provider id for this offering
     */
    workloadIdentityProviderId?: string;
}

/**
 * The Microsoft Defender for Container K8s VM host scanning configuration
 */
export interface DefenderForContainersGcpOfferingResponseVmScanners {
    /**
     * Configuration for VM scanning
     */
    configuration?: VmScannersBaseResponseConfiguration;
    /**
     * Is VM scanning enabled
     */
    enabled?: boolean;
}

/**
 * The Defender for Containers for JFrog Artifactory offering
 */
export interface DefenderForContainersJFrogOfferingResponse {
    /**
     * The offering description.
     */
    description: string;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForContainersJFrog'.
     */
    offeringType: "DefenderForContainersJFrog";
}

/**
 * The Defender for Databases GCP offering configurations
 */
export interface DefenderForDatabasesGcpOfferingResponse {
    /**
     * The ARC autoprovisioning configuration
     */
    arcAutoProvisioning?: DefenderForDatabasesGcpOfferingResponseArcAutoProvisioning;
    /**
     * The native cloud connection configuration
     */
    defenderForDatabasesArcAutoProvisioning?: DefenderForDatabasesGcpOfferingResponseDefenderForDatabasesArcAutoProvisioning;
    /**
     * The offering description.
     */
    description: string;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForDatabasesGcp'.
     */
    offeringType: "DefenderForDatabasesGcp";
}

/**
 * The ARC autoprovisioning configuration
 */
export interface DefenderForDatabasesGcpOfferingResponseArcAutoProvisioning {
    /**
     * Configuration for servers Arc auto provisioning for a given environment
     */
    configuration?: ArcAutoProvisioningResponseConfiguration;
    /**
     * Is arc auto provisioning enabled
     */
    enabled?: boolean;
}

/**
 * The native cloud connection configuration
 */
export interface DefenderForDatabasesGcpOfferingResponseDefenderForDatabasesArcAutoProvisioning {
    /**
     * The service account email address in GCP for this offering
     */
    serviceAccountEmailAddress?: string;
    /**
     * The GCP workload identity provider id for this offering
     */
    workloadIdentityProviderId?: string;
}

/**
 * The Defender for Servers AWS offering
 */
export interface DefenderForServersAwsOfferingResponse {
    /**
     * The ARC autoprovisioning configuration
     */
    arcAutoProvisioning?: DefenderForServersAwsOfferingResponseArcAutoProvisioning;
    /**
     * The Defender for servers connection configuration
     */
    defenderForServers?: DefenderForServersAwsOfferingResponseDefenderForServers;
    /**
     * The offering description.
     */
    description: string;
    /**
     * The Microsoft Defender for Endpoint autoprovisioning configuration
     */
    mdeAutoProvisioning?: DefenderForServersAwsOfferingResponseMdeAutoProvisioning;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForServersAws'.
     */
    offeringType: "DefenderForServersAws";
    /**
     * configuration for the servers offering subPlan
     */
    subPlan?: DefenderForServersAwsOfferingResponseSubPlan;
    /**
     * The Vulnerability Assessment autoprovisioning configuration
     */
    vaAutoProvisioning?: DefenderForServersAwsOfferingResponseVaAutoProvisioning;
    /**
     * The Microsoft Defender for Server VM scanning configuration
     */
    vmScanners?: DefenderForServersAwsOfferingResponseVmScanners;
}

/**
 * The ARC autoprovisioning configuration
 */
export interface DefenderForServersAwsOfferingResponseArcAutoProvisioning {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
    /**
     * Configuration for servers Arc auto provisioning for a given environment
     */
    configuration?: ArcAutoProvisioningResponseConfiguration;
    /**
     * Is arc auto provisioning enabled
     */
    enabled?: boolean;
}

/**
 * configuration for Vulnerability Assessment autoprovisioning
 */
export interface DefenderForServersAwsOfferingResponseConfiguration {
    /**
     * The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys'
     */
    type?: string;
}

/**
 * The Defender for servers connection configuration
 */
export interface DefenderForServersAwsOfferingResponseDefenderForServers {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
}

/**
 * The Microsoft Defender for Endpoint autoprovisioning configuration
 */
export interface DefenderForServersAwsOfferingResponseMdeAutoProvisioning {
    /**
     * configuration for Microsoft Defender for Endpoint autoprovisioning
     */
    configuration?: any;
    /**
     * Is Microsoft Defender for Endpoint auto provisioning enabled
     */
    enabled?: boolean;
}

/**
 * configuration for the servers offering subPlan
 */
export interface DefenderForServersAwsOfferingResponseSubPlan {
    /**
     * The available sub plans
     */
    type?: string;
}

/**
 * The Vulnerability Assessment autoprovisioning configuration
 */
export interface DefenderForServersAwsOfferingResponseVaAutoProvisioning {
    /**
     * configuration for Vulnerability Assessment autoprovisioning
     */
    configuration?: DefenderForServersAwsOfferingResponseConfiguration;
    /**
     * Is Vulnerability Assessment auto provisioning enabled
     */
    enabled?: boolean;
}

/**
 * The Microsoft Defender for Server VM scanning configuration
 */
export interface DefenderForServersAwsOfferingResponseVmScanners {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: string;
    /**
     * Configuration for VM scanning
     */
    configuration?: VmScannersBaseResponseConfiguration;
    /**
     * Is VM scanning enabled
     */
    enabled?: boolean;
}

/**
 * The Defender for Servers GCP offering configurations
 */
export interface DefenderForServersGcpOfferingResponse {
    /**
     * The ARC autoprovisioning configuration
     */
    arcAutoProvisioning?: DefenderForServersGcpOfferingResponseArcAutoProvisioning;
    /**
     * The Defender for servers connection configuration
     */
    defenderForServers?: DefenderForServersGcpOfferingResponseDefenderForServers;
    /**
     * The offering description.
     */
    description: string;
    /**
     * The Microsoft Defender for Endpoint autoprovisioning configuration
     */
    mdeAutoProvisioning?: DefenderForServersGcpOfferingResponseMdeAutoProvisioning;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForServersGcp'.
     */
    offeringType: "DefenderForServersGcp";
    /**
     * configuration for the servers offering subPlan
     */
    subPlan?: DefenderForServersGcpOfferingResponseSubPlan;
    /**
     * The Vulnerability Assessment autoprovisioning configuration
     */
    vaAutoProvisioning?: DefenderForServersGcpOfferingResponseVaAutoProvisioning;
    /**
     * The Microsoft Defender for Server VM scanning configuration
     */
    vmScanners?: DefenderForServersGcpOfferingResponseVmScanners;
}

/**
 * The ARC autoprovisioning configuration
 */
export interface DefenderForServersGcpOfferingResponseArcAutoProvisioning {
    /**
     * Configuration for servers Arc auto provisioning for a given environment
     */
    configuration?: ArcAutoProvisioningResponseConfiguration;
    /**
     * Is arc auto provisioning enabled
     */
    enabled?: boolean;
}

/**
 * configuration for Vulnerability Assessment autoprovisioning
 */
export interface DefenderForServersGcpOfferingResponseConfiguration {
    /**
     * The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys'
     */
    type?: string;
}

/**
 * The Defender for servers connection configuration
 */
export interface DefenderForServersGcpOfferingResponseDefenderForServers {
    /**
     * The service account email address in GCP for this feature
     */
    serviceAccountEmailAddress?: string;
    /**
     * The workload identity provider id in GCP for this feature
     */
    workloadIdentityProviderId?: string;
}

/**
 * The Microsoft Defender for Endpoint autoprovisioning configuration
 */
export interface DefenderForServersGcpOfferingResponseMdeAutoProvisioning {
    /**
     * configuration for Microsoft Defender for Endpoint autoprovisioning
     */
    configuration?: any;
    /**
     * Is Microsoft Defender for Endpoint auto provisioning enabled
     */
    enabled?: boolean;
}

/**
 * configuration for the servers offering subPlan
 */
export interface DefenderForServersGcpOfferingResponseSubPlan {
    /**
     * The available sub plans
     */
    type?: string;
}

/**
 * The Vulnerability Assessment autoprovisioning configuration
 */
export interface DefenderForServersGcpOfferingResponseVaAutoProvisioning {
    /**
     * configuration for Vulnerability Assessment autoprovisioning
     */
    configuration?: DefenderForServersGcpOfferingResponseConfiguration;
    /**
     * Is Vulnerability Assessment auto provisioning enabled
     */
    enabled?: boolean;
}

/**
 * The Microsoft Defender for Server VM scanning configuration
 */
export interface DefenderForServersGcpOfferingResponseVmScanners {
    /**
     * Configuration for VM scanning
     */
    configuration?: VmScannersBaseResponseConfiguration;
    /**
     * Is VM scanning enabled
     */
    enabled?: boolean;
}

/**
 * Defender for Storage resource properties.
 */
export interface DefenderForStorageSettingPropertiesResponse {
    /**
     * Indicates whether Defender for Storage is enabled on this storage account.
     */
    isEnabled?: boolean;
    /**
     * Properties of Malware Scanning.
     */
    malwareScanning?: MalwareScanningPropertiesResponse;
    /**
     * Indicates whether the settings defined for this storage account should override the settings defined for the subscription.
     */
    overrideSubscriptionLevelSettings?: boolean;
    /**
     * Properties of Sensitive Data Discovery.
     */
    sensitiveDataDiscovery?: SensitiveDataDiscoveryPropertiesResponse;
}

/**
 * A custom alert rule that checks if a value (depends on the custom alert type) is denied.
 */
export interface DenylistCustomAlertRuleResponse {
    /**
     * The values to deny. The format of the values depends on the rule type.
     */
    denylistValues: string[];
    /**
     * The description of the custom alert.
     */
    description: string;
    /**
     * The display name of the custom alert.
     */
    displayName: string;
    /**
     * Status of the custom alert.
     */
    isEnabled: boolean;
    /**
     * The type of the custom alert rule.
     * Expected value is 'DenylistCustomAlertRule'.
     */
    ruleType: "DenylistCustomAlertRule";
    /**
     * The value type of the items in the list.
     */
    valueType: string;
}

/**
 * Details about DevOps capability.
 */
export interface DevOpsCapabilityResponse {
    /**
     * Gets the name of the DevOps capability.
     */
    name: string;
    /**
     * Gets the value of the DevOps capability.
     */
    value: string;
}

/**
 * DevOps Configuration properties.
 */
export interface DevOpsConfigurationPropertiesResponse {
    /**
     * Authorization payload.
     */
    authorization?: AuthorizationResponse;
    /**
     * AutoDiscovery states.
     */
    autoDiscovery?: string;
    /**
     * List of capabilities assigned to the DevOps configuration during the discovery process.
     */
    capabilities: DevOpsCapabilityResponse[];
    /**
     * The provisioning state of the resource.
     * 
     * Pending - Provisioning pending.
     * Failed - Provisioning failed.
     * Succeeded - Successful provisioning.
     * Canceled - Provisioning canceled.
     * PendingDeletion - Deletion pending.
     * DeletionSuccess - Deletion successful.
     * DeletionFailure - Deletion failure.
     */
    provisioningState?: string;
    /**
     * Gets or sets resource status message.
     */
    provisioningStatusMessage: string;
    /**
     * Gets or sets time when resource was last checked.
     */
    provisioningStatusUpdateTimeUtc: string;
    /**
     * List of top-level inventory to select when AutoDiscovery is disabled.
     * This field is ignored when AutoDiscovery is enabled.
     */
    topLevelInventoryList?: string[];
}

/**
 * The Docker Hub connector environment data
 */
export interface DockerHubEnvironmentDataResponse {
    /**
     * The Docker Hub organization authentication details
     */
    authentication?: AccessTokenAuthenticationResponse;
    /**
     * The type of the environment data.
     * Expected value is 'DockerHubOrganization'.
     */
    environmentType: "DockerHubOrganization";
    /**
     * Scan interval in hours (value should be between 1-hour to 24-hours)
     */
    scanInterval?: number;
}

/**
 * A plan's extension properties
 */
export interface ExtensionResponse {
    /**
     * Property values associated with the extension.
     */
    additionalExtensionProperties?: any;
    /**
     * Indicates whether the extension is enabled.
     */
    isEnabled: string;
    /**
     * The extension name. Supported values are: <br><br>**AgentlessDiscoveryForKubernetes** - Provides zero footprint, API-based discovery of Kubernetes clusters, their configurations and deployments. The collected data is used to create a contextualized security graph for Kubernetes clusters, provide risk hunting capabilities, and visualize risks and threats to  Kubernetes environments and workloads.<br>Available for CloudPosture plan and Containers plan.<br><br>**OnUploadMalwareScanning** - Limits the GB to be scanned per month for each storage account within the subscription. Once this limit reached on a given storage account, Blobs won't be scanned during current calendar month.<br>Available for StorageAccounts plan (DefenderForStorageV2 sub plans).<br><br>**SensitiveDataDiscovery** - Sensitive data discovery identifies Blob storage container with sensitive data such as credentials, credit cards, and more, to help prioritize and investigate security events.<br>Available for StorageAccounts plan (DefenderForStorageV2 sub plan) and CloudPosture plan.<br><br>**ContainerRegistriesVulnerabilityAssessments** - Provides vulnerability management for images stored in your container registries.<br>Available for CloudPosture plan and Containers plan.<br><br>**MdeDesignatedSubscription** - Direct onboarding is a seamless integration between Defender for Endpoint and Defender for Cloud that doesn’t require extra software deployment on your servers. The onboarded resources will be presented under a designated Azure Subscription you configure<br>Available for VirtualMachines plan (P1 and P2 sub plans).<br><br>**AgentlessVmScanning** - Scans your machines for installed software, vulnerabilities, malware and secret scanning without relying on agents or impacting machine performance. Learn more here https://learn.microsoft.com/en-us/azure/defender-for-cloud/concept-agentless-data-collection.<br>Available for CloudPosture plan, VirtualMachines plan (P2 sub plan) and Containers plan.<br><br>**EntraPermissionsManagement** - Permissions Management provides Cloud Infrastructure Entitlement Management (CIEM) capabilities that helps organizations to manage and control user access and entitlements in their cloud infrastructure - important attack vector for cloud environments.<br>Permissions Management analyzes all permissions and active usage, and suggests recommendations to reduce permissions to enforce the principle of least privilege. Learn more here https://learn.microsoft.com/en-us/azure/defender-for-cloud/permissions-management.<br>Available for CloudPosture plan. <br><br>**FileIntegrityMonitoring** - File integrity monitoring (FIM), examines operating system files.<br>Windows registries, Linux system files, in real time, for changes that might indicate an attack.<br>Available for VirtualMachines plan (P2 sub plan). <br><br>**ContainerSensor** - The sensor is based on IG and provides a rich threat detection suite for Kubernetes clusters, nodes, and workloads, powered by Microsoft leading threat intelligence, provides mapping to MITRE ATT&CK framework.<br>Available for Containers plan. <br><br>**AIPromptEvidence** - Exposes the prompts passed between the user and the AI model as alert evidence. This helps classify and triage the alerts with relevant user context. The prompt snippets will include only segments of the user prompt or model response that were deemed suspicious and relevant for security classifications. The prompt evidence will be available through Defender portal as part of each alert.<br>Available for AI plan. <br><br>
     */
    name: string;
    /**
     * Optional. A status describing the success/failure of the extension's enablement/disablement operation.
     */
    operationStatus: OperationStatusResponse;
}

/**
 * GCP cloud account connector based service to service credentials, the credentials are composed of the organization ID and a JSON API key (write only)
 */
export interface GcpCredentialsDetailsPropertiesResponse {
    /**
     * Auth provider x509 certificate URL field of the API key (write only)
     */
    authProviderX509CertUrl: string;
    /**
     * Auth URI field of the API key (write only)
     */
    authUri: string;
    /**
     * State of the multi-cloud connector
     */
    authenticationProvisioningState: string;
    /**
     * Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
     * Expected value is 'gcpCredentials'.
     */
    authenticationType: "gcpCredentials";
    /**
     * Client email field of the API key (write only)
     */
    clientEmail: string;
    /**
     * Client ID field of the API key (write only)
     */
    clientId: string;
    /**
     * Client x509 certificate URL field of the API key (write only)
     */
    clientX509CertUrl: string;
    /**
     * The permissions detected in the cloud account.
     */
    grantedPermissions: string[];
    /**
     * The organization ID of the GCP cloud account
     */
    organizationId: string;
    /**
     * Private key field of the API key (write only)
     */
    privateKey: string;
    /**
     * Private key ID field of the API key (write only)
     */
    privateKeyId: string;
    /**
     * Project ID field of the API key (write only)
     */
    projectId: string;
    /**
     * Token URI field of the API key (write only)
     */
    tokenUri: string;
    /**
     * Type field of the API key (write only)
     */
    type: string;
}

/**
 * The gcpOrganization data for the member account
 */
export interface GcpOrganizationalDataMemberResponse {
    /**
     * The GCP management project number from organizational onboarding
     */
    managementProjectNumber?: string;
    /**
     * The multi cloud account's membership type in the organization
     * Expected value is 'Member'.
     */
    organizationMembershipType: "Member";
    /**
     * If the multi cloud account is not of membership type organization, this will be the ID of the project's parent
     */
    parentHierarchyId?: string;
}

/**
 * The gcpOrganization data for the parent account
 */
export interface GcpOrganizationalDataOrganizationResponse {
    /**
     * If the multi cloud account is of membership type organization, list of accounts excluded from offering
     */
    excludedProjectNumbers?: string[];
    /**
     * The multi cloud account's membership type in the organization
     * Expected value is 'Organization'.
     */
    organizationMembershipType: "Organization";
    /**
     * GCP organization name
     */
    organizationName: string;
    /**
     * The service account email address which represents the organization level permissions container.
     */
    serviceAccountEmailAddress?: string;
    /**
     * The GCP workload identity provider id which represents the permissions required to auto provision security connectors
     */
    workloadIdentityProviderId?: string;
}

/**
 * The details about the project represented by the security connector
 */
export interface GcpProjectDetailsResponse {
    /**
     * The GCP Project id
     */
    projectId?: string;
    /**
     * GCP project name
     */
    projectName: string;
    /**
     * The unique GCP Project number
     */
    projectNumber?: string;
    /**
     * The GCP workload identity federation pool id
     */
    workloadIdentityPoolId: string;
}

/**
 * The GCP project connector environment data
 */
export interface GcpProjectEnvironmentDataResponse {
    /**
     * The type of the environment data.
     * Expected value is 'GcpProject'.
     */
    environmentType: "GcpProject";
    /**
     * The Gcp project's organizational data
     */
    organizationalData?: GcpOrganizationalDataMemberResponse | GcpOrganizationalDataOrganizationResponse;
    /**
     * The Gcp project's details
     */
    projectDetails?: GcpProjectDetailsResponse;
    /**
     * Scan interval in hours (value should be between 1-hour to 24-hours)
     */
    scanInterval?: number;
}

/**
 * GitHub Owner properties.
 */
export interface GitHubOwnerPropertiesResponse {
    /**
     * Gets or sets internal GitHub id.
     */
    gitHubInternalId: string;
    /**
     * Details about resource onboarding status across all connectors.
     * 
     * OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.
     * Onboarded - this resource has already been onboarded by the specified connector.
     * NotOnboarded - this resource has not been onboarded to any connector.
     * NotApplicable - the onboarding state is not applicable to the current endpoint.
     */
    onboardingState?: string;
    /**
     * Gets or sets GitHub Owner url.
     */
    ownerUrl: string;
    /**
     * The provisioning state of the resource.
     * 
     * Pending - Provisioning pending.
     * Failed - Provisioning failed.
     * Succeeded - Successful provisioning.
     * Canceled - Provisioning canceled.
     * PendingDeletion - Deletion pending.
     * DeletionSuccess - Deletion successful.
     * DeletionFailure - Deletion failure.
     */
    provisioningState?: string;
    /**
     * Gets or sets resource status message.
     */
    provisioningStatusMessage: string;
    /**
     * Gets or sets time when resource was last checked.
     */
    provisioningStatusUpdateTimeUtc: string;
}

/**
 * GitHub Owner resource.
 */
export interface GitHubOwnerResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * GitHub Owner properties.
     */
    properties?: GitHubOwnerPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * GitLab Group properties.
 */
export interface GitLabGroupPropertiesResponse {
    /**
     * Gets or sets the human readable fully-qualified name of the Group object.
     * 
     * This contains the entire namespace hierarchy as seen on GitLab UI where namespaces are separated by the '/' character.
     */
    fullyQualifiedFriendlyName: string;
    /**
     * Gets or sets the fully-qualified name of the Group object.
     * 
     * This contains the entire namespace hierarchy where namespaces are separated by the '$' character.
     */
    fullyQualifiedName: string;
    /**
     * Details about resource onboarding status across all connectors.
     * 
     * OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.
     * Onboarded - this resource has already been onboarded by the specified connector.
     * NotOnboarded - this resource has not been onboarded to any connector.
     * NotApplicable - the onboarding state is not applicable to the current endpoint.
     */
    onboardingState?: string;
    /**
     * The provisioning state of the resource.
     * 
     * Pending - Provisioning pending.
     * Failed - Provisioning failed.
     * Succeeded - Successful provisioning.
     * Canceled - Provisioning canceled.
     * PendingDeletion - Deletion pending.
     * DeletionSuccess - Deletion successful.
     * DeletionFailure - Deletion failure.
     */
    provisioningState?: string;
    /**
     * Gets or sets resource status message.
     */
    provisioningStatusMessage: string;
    /**
     * Gets or sets time when resource was last checked.
     */
    provisioningStatusUpdateTimeUtc: string;
    /**
     * Gets or sets the url of the GitLab Group.
     */
    url: string;
}

/**
 * GitLab Group resource.
 */
export interface GitLabGroupResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * GitLab Group properties.
     */
    properties?: GitLabGroupPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The github scope connector's environment data
 */
export interface GithubScopeEnvironmentDataResponse {
    /**
     * The type of the environment data.
     * Expected value is 'GithubScope'.
     */
    environmentType: "GithubScope";
}

/**
 * The GitLab scope connector's environment data
 */
export interface GitlabScopeEnvironmentDataResponse {
    /**
     * The type of the environment data.
     * Expected value is 'GitlabScope'.
     */
    environmentType: "GitlabScope";
}

/**
 * Describe the additional data of governance assignment - optional
 */
export interface GovernanceAssignmentAdditionalDataResponse {
    /**
     * Ticket link associated with this governance assignment - for example: https://snow.com
     */
    ticketLink?: string;
    /**
     * Ticket number associated with this governance assignment
     */
    ticketNumber?: number;
    /**
     * The ticket status associated with this governance assignment - for example: Active
     */
    ticketStatus?: string;
}

/**
 * The governance email weekly notification configuration.
 */
export interface GovernanceEmailNotificationResponse {
    /**
     * Exclude manager from weekly email notification.
     */
    disableManagerEmailNotification?: boolean;
    /**
     * Exclude  owner from weekly email notification.
     */
    disableOwnerEmailNotification?: boolean;
}

/**
 * The governance email weekly notification configuration
 */
export interface GovernanceRuleEmailNotificationResponse {
    /**
     * Defines whether manager email notifications are disabled
     */
    disableManagerEmailNotification?: boolean;
    /**
     * Defines whether owner email notifications are disabled
     */
    disableOwnerEmailNotification?: boolean;
}

/**
 * The governance rule metadata
 */
export interface GovernanceRuleMetadataResponse {
    /**
     * Governance rule Created by object id (GUID)
     */
    createdBy: string;
    /**
     * Governance rule creation date
     */
    createdOn: string;
    /**
     * Governance rule last updated by object id (GUID)
     */
    updatedBy: string;
    /**
     * Governance rule last update date
     */
    updatedOn: string;
}

/**
 * Describe the owner source of governance rule
 */
export interface GovernanceRuleOwnerSourceResponse {
    /**
     * The owner type for the governance rule owner source
     */
    type?: string;
    /**
     * The source value e.g. tag key like owner name or email address
     */
    value?: string;
}

/**
 * Settings for hybrid compute management
 */
export interface HybridComputeSettingsPropertiesResponse {
    /**
     * Whether or not to automatically install Azure Arc (hybrid compute) agents on machines
     */
    autoProvision: string;
    /**
     * State of the service principal and its secret
     */
    hybridComputeProvisioningState: string;
    /**
     * For a non-Azure machine that is not connected directly to the internet, specify a proxy server that the non-Azure machine can use.
     */
    proxyServer?: ProxyServerPropertiesResponse;
    /**
     * The location where the metadata of machines will be stored
     */
    region?: string;
    /**
     * The name of the resource group where Arc (Hybrid Compute) connectors are connected.
     */
    resourceGroupName?: string;
    /**
     * An object to access resources that are secured by an Azure AD tenant.
     */
    servicePrincipal?: ServicePrincipalPropertiesResponse;
}

/**
 * Identity for the resource.
 */
export interface IdentityResponse {
    /**
     * The principal ID of resource identity.
     */
    principalId: string;
    /**
     * The tenant ID of resource.
     */
    tenantId: string;
    /**
     * The identity type.
     */
    type?: string;
}

/**
 * The JFrog Artifactory connector environment data
 */
export interface JFrogEnvironmentDataResponse {
    /**
     * The type of the environment data.
     * Expected value is 'JFrogArtifactory'.
     */
    environmentType: "JFrogArtifactory";
    /**
     * Scan interval in hours (value should be between 1-hour to 24-hours)
     */
    scanInterval?: number;
}

export interface JitNetworkAccessPolicyVirtualMachineResponse {
    /**
     * Resource ID of the virtual machine that is linked to this policy
     */
    id: string;
    /**
     * Port configurations for the virtual machine
     */
    ports: JitNetworkAccessPortRuleResponse[];
    /**
     * Public IP address of the Azure Firewall that is linked to this policy, if applicable
     */
    publicIpAddress?: string;
}

export interface JitNetworkAccessPortRuleResponse {
    /**
     * Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
     */
    allowedSourceAddressPrefix?: string;
    /**
     * Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
     */
    allowedSourceAddressPrefixes?: string[];
    /**
     * Maximum duration requests can be made for. In ISO 8601 duration format. Minimum 5 minutes, maximum 1 day
     */
    maxRequestAccessDuration: string;
    number: number;
    protocol: string;
}

export interface JitNetworkAccessRequestPortResponse {
    /**
     * Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
     */
    allowedSourceAddressPrefix?: string;
    /**
     * Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
     */
    allowedSourceAddressPrefixes?: string[];
    /**
     * The date & time at which the request ends in UTC
     */
    endTimeUtc: string;
    /**
     * The port which is mapped to this port's `number` in the Azure Firewall, if applicable
     */
    mappedPort?: number;
    number: number;
    /**
     * The status of the port
     */
    status: string;
    /**
     * A description of why the `status` has its value
     */
    statusReason: string;
}

export interface JitNetworkAccessRequestResponse {
    /**
     * The justification for making the initiate request
     */
    justification?: string;
    /**
     * The identity of the person who made the request
     */
    requestor: string;
    /**
     * The start time of the request in UTC
     */
    startTimeUtc: string;
    virtualMachines: JitNetworkAccessRequestVirtualMachineResponse[];
}

export interface JitNetworkAccessRequestVirtualMachineResponse {
    /**
     * Resource ID of the virtual machine that is linked to this policy
     */
    id: string;
    /**
     * The ports that were opened for the virtual machine
     */
    ports: JitNetworkAccessRequestPortResponse[];
}

/**
 * Properties of Malware Scanning.
 */
export interface MalwareScanningPropertiesResponse {
    /**
     * Properties of On Upload malware scanning.
     */
    onUpload?: OnUploadPropertiesResponse;
    /**
     * Upon failure or partial success. Additional data describing Malware Scanning enable/disable operation.
     */
    operationStatus: OperationStatusResponse;
    /**
     * Optional. Resource id of an Event Grid Topic to send scan results to.
     */
    scanResultsEventGridTopicResourceId?: string;
}

/**
 * Alert notification source
 */
export interface NotificationsSourceAlertResponse {
    /**
     * Defines the minimal alert severity which will be sent as email notifications
     */
    minimalSeverity?: string;
    /**
     * The source type that will trigger the notification
     * Expected value is 'Alert'.
     */
    sourceType: "Alert";
}

/**
 * Attack path notification source
 */
export interface NotificationsSourceAttackPathResponse {
    /**
     * Defines the minimal attach path risk level which will be sent as email notifications
     */
    minimalRiskLevel?: string;
    /**
     * The source type that will trigger the notification
     * Expected value is 'AttackPath'.
     */
    sourceType: "AttackPath";
}

/**
 * Details of the On Premise resource that was assessed
 */
export interface OnPremiseResourceDetailsResponse {
    /**
     * The name of the machine
     */
    machineName: string;
    /**
     * The platform where the assessed resource resides
     * Expected value is 'OnPremise'.
     */
    source: "OnPremise";
    /**
     * The oms agent Id installed on the machine
     */
    sourceComputerId: string;
    /**
     * The unique Id of the machine
     */
    vmuuid: string;
    /**
     * Azure resource Id of the workspace the machine is attached to
     */
    workspaceId: string;
}

/**
 * Details of the On Premise Sql resource that was assessed
 */
export interface OnPremiseSqlResourceDetailsResponse {
    /**
     * The Sql database name installed on the machine
     */
    databaseName: string;
    /**
     * The name of the machine
     */
    machineName: string;
    /**
     * The Sql server name installed on the machine
     */
    serverName: string;
    /**
     * The platform where the assessed resource resides
     * Expected value is 'OnPremiseSql'.
     */
    source: "OnPremiseSql";
    /**
     * The oms agent Id installed on the machine
     */
    sourceComputerId: string;
    /**
     * The unique Id of the machine
     */
    vmuuid: string;
    /**
     * Azure resource Id of the workspace the machine is attached to
     */
    workspaceId: string;
}

/**
 * Properties of On Upload malware scanning.
 */
export interface OnUploadPropertiesResponse {
    /**
     * Defines the max GB to be scanned per Month. Set to -1 if no capping is needed.
     */
    capGBPerMonth?: number;
    /**
     * Indicates whether On Upload malware scanning should be enabled.
     */
    isEnabled?: boolean;
}

/**
 * A status describing the success/failure of the extension's enablement/disablement operation.
 */
export interface OperationStatusResponse {
    /**
     * The operation status code.
     */
    code?: string;
    /**
     * Additional information regarding the success/failure of the operation.
     */
    message?: string;
}

/**
 * Describes properties of an assessment as related to the standard
 */
export interface PartialAssessmentPropertiesResponse {
    /**
     * The assessment key
     */
    assessmentKey?: string;
}

/**
 * For a non-Azure machine that is not connected directly to the internet, specify a proxy server that the non-Azure machine can use.
 */
export interface ProxyServerPropertiesResponse {
    /**
     * Proxy server IP
     */
    ip?: string;
    /**
     * Proxy server port
     */
    port?: string;
}

/**
 * The type of IoT Security recommendation.
 */
export interface RecommendationConfigurationPropertiesResponse {
    name: string;
    /**
     * The type of IoT Security recommendation.
     */
    recommendationType: string;
    /**
     * Recommendation status. When the recommendation status is disabled recommendations are not generated.
     */
    status: string;
}
/**
 * recommendationConfigurationPropertiesResponseProvideDefaults sets the appropriate defaults for RecommendationConfigurationPropertiesResponse
 */
export function recommendationConfigurationPropertiesResponseProvideDefaults(val: RecommendationConfigurationPropertiesResponse): RecommendationConfigurationPropertiesResponse {
    return {
        ...val,
        status: (val.status) ?? "Enabled",
    };
}

/**
 * The ETA (estimated time of arrival) for remediation
 */
export interface RemediationEtaResponse {
    /**
     * ETA for remediation.
     */
    eta: string;
    /**
     * Justification for change of Eta.
     */
    justification: string;
}

/**
 * Rule results properties.
 */
export interface RuleResultsPropertiesResponse {
    /**
     * Expected results in the baseline.
     */
    results?: string[][];
}

/**
 * A more specific scope used to identify the alerts to suppress.
 */
export interface ScopeElementResponse {
    /**
     * The alert entity type to suppress by.
     */
    field?: string;
}

/**
 * Describes the partner that created the assessment
 */
export interface SecurityAssessmentMetadataPartnerDataResponse {
    /**
     * Name of the company of the partner
     */
    partnerName: string;
    /**
     * Name of the product of the partner that created the assessment
     */
    productName?: string;
    /**
     * Secret to authenticate the partner and verify it created the assessment - write only
     */
    secret: string;
}

/**
 * Describes properties of an assessment metadata.
 */
export interface SecurityAssessmentMetadataPropertiesResponse {
    /**
     * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
     */
    assessmentType: string;
    categories?: string[];
    /**
     * Human readable description of the assessment
     */
    description?: string;
    /**
     * User friendly display name of the assessment
     */
    displayName: string;
    /**
     * The implementation effort required to remediate this assessment
     */
    implementationEffort?: string;
    /**
     * Describes the partner that created the assessment
     */
    partnerData?: SecurityAssessmentMetadataPartnerDataResponse;
    /**
     * Azure resource ID of the policy definition that turns this assessment calculation on
     */
    policyDefinitionId: string;
    /**
     * True if this assessment is in preview release status
     */
    preview?: boolean;
    /**
     * Human readable description of what you should do to mitigate this security issue
     */
    remediationDescription?: string;
    /**
     * The severity level of the assessment
     */
    severity: string;
    threats?: string[];
    /**
     * The user impact of the assessment
     */
    userImpact?: string;
}

export interface SecurityAssessmentMetadataPropertiesResponseResponsePublishDates {
    gA?: string;
    public: string;
}

/**
 * Data regarding 3rd party partner integration
 */
export interface SecurityAssessmentPartnerDataResponse {
    /**
     * Name of the company of the partner
     */
    partnerName: string;
    /**
     * secret to authenticate the partner - write only
     */
    secret: string;
}

/**
 * Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription.
 */
export interface SecurityContactPropertiesResponseNotificationsByRole {
    /**
     * Defines which RBAC roles will get email notifications from Microsoft Defender for Cloud. List of allowed RBAC roles: 
     */
    roles?: string[];
    /**
     * Defines whether to send email notifications from AMicrosoft Defender for Cloud to persons with specific RBAC roles on the subscription.
     */
    state?: string;
}

/**
 * Properties of Sensitive Data Discovery.
 */
export interface SensitiveDataDiscoveryPropertiesResponse {
    /**
     * Indicates whether Sensitive Data Discovery should be enabled.
     */
    isEnabled?: boolean;
    /**
     * Upon failure or partial success. Additional data describing Sensitive Data Discovery enable/disable operation.
     */
    operationStatus: OperationStatusResponse;
}

/**
 * Details of the service principal.
 */
export interface ServicePrincipalPropertiesResponse {
    /**
     * Application ID of service principal.
     */
    applicationId?: string;
    /**
     * A secret string that the application uses to prove its identity, also can be referred to as application password (write only).
     */
    secret?: string;
}

/**
 * The standard assignment metadata
 */
export interface StandardAssignmentMetadataResponse {
    /**
     * Standard assignment Created by object id (GUID)
     */
    createdBy: string;
    /**
     * Standard assignment creation date
     */
    createdOn: string;
    /**
     * Standard assignment last updated by object id (GUID)
     */
    lastUpdatedBy: string;
    /**
     * Standard assignment last update date
     */
    lastUpdatedOn: string;
}

/**
 * Additional data about assignment that has Attest effect
 */
export interface StandardAssignmentPropertiesResponseAttestationData {
    /**
     * Component item with key as applied to this standard assignment over the given scope
     */
    assignedAssessment?: AssignedAssessmentItemResponse;
    /**
     * Attestation compliance date
     */
    complianceDate: string;
    /**
     * Attest category of this assignment
     */
    complianceState?: string;
    /**
     * Array of links to attestation evidence
     */
    evidence?: AttestationEvidenceResponse[];
}

/**
 * Additional data about assignment that has Exempt effect
 */
export interface StandardAssignmentPropertiesResponseExemptionData {
    /**
     * Component item with key as applied to this standard assignment over the given scope
     */
    assignedAssessment?: AssignedAssessmentItemResponse;
    /**
     * Exemption category of this assignment
     */
    exemptionCategory?: string;
}

/**
 * Describes properties of an component as related to the standard
 */
export interface StandardComponentPropertiesResponse {
    /**
     * Component Key matching componentMetadata
     */
    key?: string;
}

/**
 * The standard metadata
 */
export interface StandardMetadataResponse {
    /**
     * Standard Created by object id (GUID)
     */
    createdBy: string;
    /**
     * Standard creation date
     */
    createdOn: string;
    /**
     * Standard last updated by object id (GUID)
     */
    lastUpdatedBy: string;
    /**
     * Standard last update date
     */
    lastUpdatedOn: string;
}

export interface SuppressionAlertsScopeResponse {
    /**
     * All the conditions inside need to be true in order to suppress the alert
     */
    allOf: ScopeElementResponse[];
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * Repository branch configuration for PR Annotations.
 */
export interface TargetBranchConfigurationResponse {
    /**
     * Configuration of PR Annotations on default branch.
     * 
     * Enabled - PR Annotations are enabled on the resource's default branch.
     * Disabled - PR Annotations are disabled on the resource's default branch.
     */
    annotateDefaultBranch?: string;
    /**
     * Gets or sets branches that should have annotations.
     */
    branchNames?: string[];
}

/**
 * A custom alert rule that checks if a value (depends on the custom alert type) is within the given range.
 */
export interface ThresholdCustomAlertRuleResponse {
    /**
     * The description of the custom alert.
     */
    description: string;
    /**
     * The display name of the custom alert.
     */
    displayName: string;
    /**
     * Status of the custom alert.
     */
    isEnabled: boolean;
    /**
     * The maximum threshold.
     */
    maxThreshold: number;
    /**
     * The minimum threshold.
     */
    minThreshold: number;
    /**
     * The type of the custom alert rule.
     * Expected value is 'ThresholdCustomAlertRule'.
     */
    ruleType: "ThresholdCustomAlertRule";
}

/**
 * A custom alert rule that checks if the number of activities (depends on the custom alert type) in a time window is within the given range.
 */
export interface TimeWindowCustomAlertRuleResponse {
    /**
     * The description of the custom alert.
     */
    description: string;
    /**
     * The display name of the custom alert.
     */
    displayName: string;
    /**
     * Status of the custom alert.
     */
    isEnabled: boolean;
    /**
     * The maximum threshold.
     */
    maxThreshold: number;
    /**
     * The minimum threshold.
     */
    minThreshold: number;
    /**
     * The type of the custom alert rule.
     * Expected value is 'TimeWindowCustomAlertRule'.
     */
    ruleType: "TimeWindowCustomAlertRule";
    /**
     * The time window size in iso8601 format.
     */
    timeWindowSize: string;
}

/**
 * Properties of the IoT Security solution's user defined resources.
 */
export interface UserDefinedResourcesPropertiesResponse {
    /**
     * Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs""
     */
    query: string;
    /**
     * List of Azure subscription ids on which the user defined resources query should be executed.
     */
    querySubscriptions: string[];
}

/**
 * Configuration for VM scanning
 */
export interface VmScannersBaseResponseConfiguration {
    /**
     * Tags that indicates that a resource should not be scanned
     */
    exclusionTags?: {[key: string]: string};
    /**
     * The scanning mode for the VM scan.
     */
    scanningMode?: string;
}
