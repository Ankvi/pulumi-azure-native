import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The environment authentication details
 */
export interface AccessTokenAuthenticationArgs {
    /**
     * The access token that will be used while authenticating with the onboarded environment
     */
    accessToken?: pulumi.Input<string | undefined>;
    /**
     * The authentication type
     * Expected value is 'AccessToken'.
     */
    authenticationType: pulumi.Input<"AccessToken">;
    /**
     * The user name that will be used while authenticating with the onboarded environment
     */
    username?: pulumi.Input<string | undefined>;
}

/**
 * Properties of the additional workspaces.
 */
export interface AdditionalWorkspacesPropertiesArgs {
    /**
     * List of data types sent to workspace
     */
    dataTypes?: pulumi.Input<pulumi.Input<string | enums.AdditionalWorkspaceDataType>[] | undefined>;
    /**
     * Workspace type.
     */
    type?: pulumi.Input<string | enums.AdditionalWorkspaceType | undefined>;
    /**
     * Workspace resource id
     */
    workspace?: pulumi.Input<string | undefined>;
}
/**
 * additionalWorkspacesPropertiesArgsProvideDefaults sets the appropriate defaults for AdditionalWorkspacesPropertiesArgs
 */
export function additionalWorkspacesPropertiesArgsProvideDefaults(val: AdditionalWorkspacesPropertiesArgs): AdditionalWorkspacesPropertiesArgs {
    return {
        ...val,
        type: (val.type) ?? "Sentinel",
    };
}

/**
 * A custom alert rule that checks if a value (depends on the custom alert type) is allowed.
 */
export interface AllowlistCustomAlertRuleArgs {
    /**
     * The values to allow. The format of the values depends on the rule type.
     */
    allowlistValues: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Status of the custom alert.
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * The type of the custom alert rule.
     * Expected value is 'AllowlistCustomAlertRule'.
     */
    ruleType: pulumi.Input<"AllowlistCustomAlertRule">;
}

/**
 * Configuration for servers Arc auto provisioning for a given environment
 */
export interface ArcAutoProvisioningConfigurationArgs {
    /**
     * Optional Arc private link scope resource id to link the Arc agent
     */
    privateLinkScope?: pulumi.Input<string | undefined>;
    /**
     * Optional HTTP proxy endpoint to use for the Arc agent
     */
    proxy?: pulumi.Input<string | undefined>;
}

/**
 * The result of the assessment
 */
export interface AssessmentStatusArgs {
    /**
     * Programmatic code for the cause of the assessment status
     */
    cause?: pulumi.Input<string | undefined>;
    /**
     * Programmatic code for the status of the assessment
     */
    code: pulumi.Input<string | enums.AssessmentStatusCode>;
    /**
     * Human readable description of the assessment status
     */
    description?: pulumi.Input<string | undefined>;
}

/**
 * Describe the properties of a security assessment object reference (by key)
 */
export interface AssignedAssessmentItemArgs {
    /**
     * Unique key to a security assessment object
     */
    assessmentKey?: pulumi.Input<string | undefined>;
}

/**
 * describe the properties of a security assessment object reference (by key)
 */
export interface AssignedComponentItemArgs {
    /**
     * unique key to a security assessment object
     */
    key?: pulumi.Input<string | undefined>;
}

/**
 * Additional data about the assignment
 */
export interface AssignmentPropertiesAdditionalDataArgs {
    /**
     * Exemption category of this assignment
     */
    exemptionCategory?: pulumi.Input<string | undefined>;
}

/**
 * Describe the properties of a assignment attestation
 */
export interface AttestationEvidenceArgs {
    /**
     * The description of the evidence
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The source url of the evidence
     */
    sourceUrl?: pulumi.Input<string | undefined>;
}

/**
 * Authorization payload.
 */
export interface AuthorizationArgs {
    /**
     * Gets or sets one-time OAuth code to exchange for refresh and access tokens.
     *
     * Only used during PUT/PATCH operations. The secret is cleared during GET.
     */
    code?: pulumi.Input<string | undefined>;
}

/**
 * The target Event Hub to which event data will be exported. To learn more about Microsoft Defender for Cloud continuous export capabilities, visit https://aka.ms/ASCExportLearnMore
 */
export interface AutomationActionEventHubArgs {
    /**
     * Enum. Indicates the action type.
     * Expected value is 'EventHub'.
     */
    actionType: pulumi.Input<"EventHub">;
    /**
     * The target Event Hub connection string (it will not be included in any response).
     */
    connectionString?: pulumi.Input<string | undefined>;
    /**
     * The target Event Hub Azure Resource ID.
     */
    eventHubResourceId?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether the trusted service is enabled or not.
     */
    isTrustedServiceEnabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The logic app action that should be triggered. To learn more about Microsoft Defender for Cloud's Workflow Automation capabilities, visit https://aka.ms/ASCWorkflowAutomationLearnMore
 */
export interface AutomationActionLogicAppArgs {
    /**
     * Enum. Indicates the action type.
     * Expected value is 'LogicApp'.
     */
    actionType: pulumi.Input<"LogicApp">;
    /**
     * The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App
     */
    logicAppResourceId?: pulumi.Input<string | undefined>;
    /**
     * The Logic App trigger URI endpoint (it will not be included in any response).
     */
    uri?: pulumi.Input<string | undefined>;
}

/**
 * The Log Analytics Workspace to which event data will be exported. Security alerts data will reside in the 'SecurityAlert' table and the assessments data will reside in the 'SecurityRecommendation' table (under the 'Security'/'SecurityCenterFree' solutions). Note that in order to view the data in the workspace, the Security Center Log Analytics free/standard solution needs to be enabled on that workspace. To learn more about Microsoft Defender for Cloud continuous export capabilities, visit https://aka.ms/ASCExportLearnMore
 */
export interface AutomationActionWorkspaceArgs {
    /**
     * Enum. Indicates the action type.
     * Expected value is 'Workspace'.
     */
    actionType: pulumi.Input<"Workspace">;
    /**
     * The fully qualified Log Analytics Workspace Azure Resource ID.
     */
    workspaceResourceId?: pulumi.Input<string | undefined>;
}

/**
 * A rule set which evaluates all its rules upon an event interception. Only when all the included rules in the rule set will be evaluated as 'true', will the event trigger the defined actions.
 */
export interface AutomationRuleSetArgs {
    rules?: pulumi.Input<pulumi.Input<AutomationTriggeringRuleArgs>[] | undefined>;
}

/**
 * A single automation scope.
 */
export interface AutomationScopeArgs {
    /**
     * The resources scope description.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The resources scope path. Can be the subscription on which the automation is defined on or a resource group under that subscription (fully qualified Azure resource IDs).
     */
    scopePath?: pulumi.Input<string | undefined>;
}

/**
 * The source event types which evaluate the security automation set of rules. For example - security alerts and security assessments. To learn more about the supported security events data models schemas - please visit https://aka.ms/ASCAutomationSchemas.
 */
export interface AutomationSourceArgs {
    /**
     * A valid event source type.
     */
    eventSource?: pulumi.Input<string | enums.EventSource | undefined>;
    /**
     * A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical 'or').
     */
    ruleSets?: pulumi.Input<pulumi.Input<AutomationRuleSetArgs>[] | undefined>;
}

/**
 * A rule which is evaluated upon event interception. The rule is configured by comparing a specific value from the event model to an expected value. This comparison is done by using one of the supported operators set.
 */
export interface AutomationTriggeringRuleArgs {
    /**
     * The expected value.
     */
    expectedValue?: pulumi.Input<string | undefined>;
    /**
     * A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType.
     */
    operator?: pulumi.Input<string | enums.Operator | undefined>;
    /**
     * The JPath of the entity model property that should be checked.
     */
    propertyJPath?: pulumi.Input<string | undefined>;
    /**
     * The data type of the compared operands (string, integer, floating point number or a boolean [true/false]]
     */
    propertyType?: pulumi.Input<string | enums.PropertyType | undefined>;
}

/**
 * The AWS connector environment data
 */
export interface AwsEnvironmentDataArgs {
    /**
     * The type of the environment data.
     * Expected value is 'AwsAccount'.
     */
    environmentType: pulumi.Input<"AwsAccount">;
    /**
     * The AWS account's organizational data
     */
    organizationalData?: pulumi.Input<AwsOrganizationalDataMasterArgs | AwsOrganizationalDataMemberArgs | undefined>;
    /**
     * list of regions to scan
     */
    regions?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Scan interval in hours (value should be between 1-hour to 24-hours)
     */
    scanInterval?: pulumi.Input<number | undefined>;
}

/**
 * The AWS organization data for the master account
 */
export interface AwsOrganizationalDataMasterArgs {
    /**
     * If the multi cloud account is of membership type organization, list of accounts excluded from offering
     */
    excludedAccountIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The multi cloud account's membership type in the organization
     * Expected value is 'Organization'.
     */
    organizationMembershipType: pulumi.Input<"Organization">;
    /**
     * If the multi cloud account is of membership type organization, this will be the name of the onboarding stackset
     */
    stacksetName?: pulumi.Input<string | undefined>;
}

/**
 * The AWS organization data for the member account
 */
export interface AwsOrganizationalDataMemberArgs {
    /**
     * The multi cloud account's membership type in the organization
     * Expected value is 'Member'.
     */
    organizationMembershipType: pulumi.Input<"Member">;
    /**
     * If the multi cloud account is not of membership type organization, this will be the ID of the account's parent
     */
    parentHierarchyId?: pulumi.Input<string | undefined>;
}

/**
 * The AzureDevOps scope connector's environment data
 */
export interface AzureDevOpsScopeEnvironmentDataArgs {
    /**
     * The type of the environment data.
     * Expected value is 'AzureDevOpsScope'.
     */
    environmentType: pulumi.Input<"AzureDevOpsScope">;
}

/**
 * Details of the Azure resource that was assessed
 */
export interface AzureResourceDetailsArgs {
    /**
     * The platform where the assessed resource resides
     * Expected value is 'Azure'.
     */
    source: pulumi.Input<"Azure">;
}

/**
 * Describe the properties of a of a standard assignments object reference
 */
export interface CommonAssignedStandardItemArgs {
    /**
     * Full resourceId of the Microsoft.Security/standard object
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * The CSPM monitoring for AWS offering
 */
export interface CspmMonitorAwsOfferingArgs {
    /**
     * The native cloud connection configuration
     */
    nativeCloudConnection?: pulumi.Input<CspmMonitorAwsOfferingNativeCloudConnectionArgs | undefined>;
    /**
     * The type of the security offering.
     * Expected value is 'CspmMonitorAws'.
     */
    offeringType: pulumi.Input<"CspmMonitorAws">;
}

/**
 * The native cloud connection configuration
 */
export interface CspmMonitorAwsOfferingNativeCloudConnectionArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
}

/**
 * The CSPM monitoring for AzureDevOps offering
 */
export interface CspmMonitorAzureDevOpsOfferingArgs {
    /**
     * The type of the security offering.
     * Expected value is 'CspmMonitorAzureDevOps'.
     */
    offeringType: pulumi.Input<"CspmMonitorAzureDevOps">;
}

/**
 * The CSPM (Cloud security posture management) monitoring for Docker Hub offering
 */
export interface CspmMonitorDockerHubOfferingArgs {
    /**
     * The type of the security offering.
     * Expected value is 'CspmMonitorDockerHub'.
     */
    offeringType: pulumi.Input<"CspmMonitorDockerHub">;
}

/**
 * The CSPM monitoring for GCP offering
 */
export interface CspmMonitorGcpOfferingArgs {
    /**
     * The native cloud connection configuration
     */
    nativeCloudConnection?: pulumi.Input<CspmMonitorGcpOfferingNativeCloudConnectionArgs | undefined>;
    /**
     * The type of the security offering.
     * Expected value is 'CspmMonitorGcp'.
     */
    offeringType: pulumi.Input<"CspmMonitorGcp">;
}

/**
 * The native cloud connection configuration
 */
export interface CspmMonitorGcpOfferingNativeCloudConnectionArgs {
    /**
     * The service account email address in GCP for this offering
     */
    serviceAccountEmailAddress?: pulumi.Input<string | undefined>;
    /**
     * The GCP workload identity provider id for the offering
     */
    workloadIdentityProviderId?: pulumi.Input<string | undefined>;
}

/**
 * The CSPM (Cloud security posture management) monitoring for gitlab offering
 */
export interface CspmMonitorGitLabOfferingArgs {
    /**
     * The type of the security offering.
     * Expected value is 'CspmMonitorGitLab'.
     */
    offeringType: pulumi.Input<"CspmMonitorGitLab">;
}

/**
 * The CSPM monitoring for github offering
 */
export interface CspmMonitorGithubOfferingArgs {
    /**
     * The type of the security offering.
     * Expected value is 'CspmMonitorGithub'.
     */
    offeringType: pulumi.Input<"CspmMonitorGithub">;
}

/**
 * The CSPM (Cloud security posture management) monitoring for JFrog Artifactory offering
 */
export interface CspmMonitorJFrogOfferingArgs {
    /**
     * The type of the security offering.
     * Expected value is 'CspmMonitorJFrog'.
     */
    offeringType: pulumi.Input<"CspmMonitorJFrog">;
}

/**
 * The CSPM P1 for AWS offering
 */
export interface DefenderCspmAwsOfferingArgs {
    /**
     * Defenders CSPM Permissions Management offering configurations
     */
    ciem?: pulumi.Input<DefenderCspmAwsOfferingCiemArgs | undefined>;
    /**
     * The Microsoft Defender Data Sensitivity discovery configuration
     */
    dataSensitivityDiscovery?: pulumi.Input<DefenderCspmAwsOfferingDataSensitivityDiscoveryArgs | undefined>;
    /**
     * The databases DSPM configuration
     */
    databasesDspm?: pulumi.Input<DefenderCspmAwsOfferingDatabasesDspmArgs | undefined>;
    /**
     * The Microsoft Defender container agentless discovery K8s configuration
     */
    mdcContainersAgentlessDiscoveryK8S?: pulumi.Input<DefenderCspmAwsOfferingMdcContainersAgentlessDiscoveryK8SArgs | undefined>;
    /**
     * The Microsoft Defender container image assessment configuration
     */
    mdcContainersImageAssessment?: pulumi.Input<DefenderCspmAwsOfferingMdcContainersImageAssessmentArgs | undefined>;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderCspmAws'.
     */
    offeringType: pulumi.Input<"DefenderCspmAws">;
    /**
     * The Microsoft Defender for CSPM offering VM scanning configuration
     */
    vmScanners?: pulumi.Input<DefenderCspmAwsOfferingVmScannersArgs | undefined>;
}

/**
 * Defenders CSPM Permissions Management offering configurations
 */
export interface DefenderCspmAwsOfferingCiemArgs {
    /**
     * Defender CSPM Permissions Management discovery configuration
     */
    ciemDiscovery?: pulumi.Input<DefenderCspmAwsOfferingCiemCiemDiscoveryArgs | undefined>;
    /**
     * AWS Defender CSPM Permissions Management OIDC (open id connect) connection configurations
     */
    ciemOidc?: pulumi.Input<DefenderCspmAwsOfferingCiemCiemOidcArgs | undefined>;
}

/**
 * Defender CSPM Permissions Management discovery configuration
 */
export interface DefenderCspmAwsOfferingCiemCiemDiscoveryArgs {
    /**
     * The cloud role ARN in AWS for Permissions Management discovery
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
}

/**
 * AWS Defender CSPM Permissions Management OIDC (open id connect) connection configurations
 */
export interface DefenderCspmAwsOfferingCiemCiemOidcArgs {
    /**
     * the azure active directory app name used of authenticating against AWS
     */
    azureActiveDirectoryAppName?: pulumi.Input<string | undefined>;
    /**
     * The cloud role ARN in AWS for Permissions Management used for oidc connection
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
}

/**
 * The Microsoft Defender Data Sensitivity discovery configuration
 */
export interface DefenderCspmAwsOfferingDataSensitivityDiscoveryArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
    /**
     * Is Microsoft Defender Data Sensitivity discovery enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The databases DSPM configuration
 */
export interface DefenderCspmAwsOfferingDatabasesDspmArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
    /**
     * Is databases DSPM protection enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The Microsoft Defender container agentless discovery K8s configuration
 */
export interface DefenderCspmAwsOfferingMdcContainersAgentlessDiscoveryK8SArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
    /**
     * Is Microsoft Defender container agentless discovery K8s enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The Microsoft Defender container image assessment configuration
 */
export interface DefenderCspmAwsOfferingMdcContainersImageAssessmentArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
    /**
     * Is Microsoft Defender container image assessment enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The Microsoft Defender for CSPM offering VM scanning configuration
 */
export interface DefenderCspmAwsOfferingVmScannersArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
    /**
     * Configuration for VM scanning
     */
    configuration?: pulumi.Input<VmScannersBaseConfigurationArgs | undefined>;
    /**
     * Is VM scanning enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The Defender for CSPM Docker Hub offering configurations
 */
export interface DefenderCspmDockerHubOfferingArgs {
    /**
     * The type of the security offering.
     * Expected value is 'DefenderCspmDockerHub'.
     */
    offeringType: pulumi.Input<"DefenderCspmDockerHub">;
}

/**
 * The CSPM P1 for GCP offering
 */
export interface DefenderCspmGcpOfferingArgs {
    /**
     * GCP Defenders CSPM Permissions Management OIDC (Open ID connect) connection configurations
     */
    ciemDiscovery?: pulumi.Input<DefenderCspmGcpOfferingCiemDiscoveryArgs | undefined>;
    /**
     * The Microsoft Defender Data Sensitivity discovery configuration
     */
    dataSensitivityDiscovery?: pulumi.Input<DefenderCspmGcpOfferingDataSensitivityDiscoveryArgs | undefined>;
    /**
     * The Microsoft Defender Container agentless discovery configuration
     */
    mdcContainersAgentlessDiscoveryK8S?: pulumi.Input<DefenderCspmGcpOfferingMdcContainersAgentlessDiscoveryK8SArgs | undefined>;
    /**
     * The Microsoft Defender Container image assessment configuration
     */
    mdcContainersImageAssessment?: pulumi.Input<DefenderCspmGcpOfferingMdcContainersImageAssessmentArgs | undefined>;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderCspmGcp'.
     */
    offeringType: pulumi.Input<"DefenderCspmGcp">;
    /**
     * The Microsoft Defender for CSPM VM scanning configuration
     */
    vmScanners?: pulumi.Input<DefenderCspmGcpOfferingVmScannersArgs | undefined>;
}

/**
 * GCP Defenders CSPM Permissions Management OIDC (Open ID connect) connection configurations
 */
export interface DefenderCspmGcpOfferingCiemDiscoveryArgs {
    /**
     * the azure active directory app name used of authenticating against GCP workload identity federation
     */
    azureActiveDirectoryAppName?: pulumi.Input<string | undefined>;
    /**
     * The service account email address in GCP for Permissions Management offering
     */
    serviceAccountEmailAddress?: pulumi.Input<string | undefined>;
    /**
     * The GCP workload identity provider id for Permissions Management offering
     */
    workloadIdentityProviderId?: pulumi.Input<string | undefined>;
}

/**
 * The Microsoft Defender Data Sensitivity discovery configuration
 */
export interface DefenderCspmGcpOfferingDataSensitivityDiscoveryArgs {
    /**
     * Is Microsoft Defender Data Sensitivity discovery enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The service account email address in GCP for this feature
     */
    serviceAccountEmailAddress?: pulumi.Input<string | undefined>;
    /**
     * The workload identity provider id in GCP for this feature
     */
    workloadIdentityProviderId?: pulumi.Input<string | undefined>;
}

/**
 * The Microsoft Defender Container agentless discovery configuration
 */
export interface DefenderCspmGcpOfferingMdcContainersAgentlessDiscoveryK8SArgs {
    /**
     * Is Microsoft Defender container agentless discovery enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The service account email address in GCP for this feature
     */
    serviceAccountEmailAddress?: pulumi.Input<string | undefined>;
    /**
     * The workload identity provider id in GCP for this feature
     */
    workloadIdentityProviderId?: pulumi.Input<string | undefined>;
}

/**
 * The Microsoft Defender Container image assessment configuration
 */
export interface DefenderCspmGcpOfferingMdcContainersImageAssessmentArgs {
    /**
     * Is Microsoft Defender container image assessment enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The service account email address in GCP for this feature
     */
    serviceAccountEmailAddress?: pulumi.Input<string | undefined>;
    /**
     * The workload identity provider id in GCP for this feature
     */
    workloadIdentityProviderId?: pulumi.Input<string | undefined>;
}

/**
 * The Microsoft Defender for CSPM VM scanning configuration
 */
export interface DefenderCspmGcpOfferingVmScannersArgs {
    /**
     * Configuration for VM scanning
     */
    configuration?: pulumi.Input<VmScannersBaseConfigurationArgs | undefined>;
    /**
     * Is VM scanning enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The CSPM P1 for JFrog Artifactory offering
 */
export interface DefenderCspmJFrogOfferingArgs {
    /**
     * The Microsoft Defender Container image assessment configuration
     */
    mdcContainersImageAssessment?: pulumi.Input<DefenderCspmJFrogOfferingMdcContainersImageAssessmentArgs | undefined>;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderCspmJFrog'.
     */
    offeringType: pulumi.Input<"DefenderCspmJFrog">;
}

/**
 * The Microsoft Defender Container image assessment configuration
 */
export interface DefenderCspmJFrogOfferingMdcContainersImageAssessmentArgs {
    /**
     * Is Microsoft Defender container image assessment enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The Defender for Databases AWS offering
 */
export interface DefenderFoDatabasesAwsOfferingArgs {
    /**
     * The ARC autoprovisioning configuration
     */
    arcAutoProvisioning?: pulumi.Input<DefenderFoDatabasesAwsOfferingArcAutoProvisioningArgs | undefined>;
    /**
     * The databases data security posture management (DSPM) configuration
     */
    databasesDspm?: pulumi.Input<DefenderFoDatabasesAwsOfferingDatabasesDspmArgs | undefined>;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForDatabasesAws'.
     */
    offeringType: pulumi.Input<"DefenderForDatabasesAws">;
    /**
     * The RDS configuration
     */
    rds?: pulumi.Input<DefenderFoDatabasesAwsOfferingRdsArgs | undefined>;
}

/**
 * The ARC autoprovisioning configuration
 */
export interface DefenderFoDatabasesAwsOfferingArcAutoProvisioningArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
    /**
     * Configuration for servers Arc auto provisioning for a given environment
     */
    configuration?: pulumi.Input<ArcAutoProvisioningConfigurationArgs | undefined>;
    /**
     * Is arc auto provisioning enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The databases data security posture management (DSPM) configuration
 */
export interface DefenderFoDatabasesAwsOfferingDatabasesDspmArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
    /**
     * Is databases data security posture management (DSPM) protection enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The RDS configuration
 */
export interface DefenderFoDatabasesAwsOfferingRdsArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
    /**
     * Is RDS protection enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The Defender for Containers AWS offering
 */
export interface DefenderForContainersAwsOfferingArgs {
    /**
     * The cloudwatch to kinesis connection configuration
     */
    cloudWatchToKinesis?: pulumi.Input<DefenderForContainersAwsOfferingCloudWatchToKinesisArgs | undefined>;
    /**
     * The externalId used by the data reader to prevent the confused deputy attack
     */
    dataCollectionExternalId?: pulumi.Input<string | undefined>;
    /**
     * Is audit logs data collection enabled
     */
    enableAuditLogsAutoProvisioning?: pulumi.Input<boolean | undefined>;
    /**
     * Is Microsoft Defender for Cloud Kubernetes agent auto provisioning enabled
     */
    enableDefenderAgentAutoProvisioning?: pulumi.Input<boolean | undefined>;
    /**
     * Is Policy Kubernetes agent auto provisioning enabled
     */
    enablePolicyAgentAutoProvisioning?: pulumi.Input<boolean | undefined>;
    /**
     * The kinesis to s3 connection configuration
     */
    kinesisToS3?: pulumi.Input<DefenderForContainersAwsOfferingKinesisToS3Args | undefined>;
    /**
     * The retention time in days of kube audit logs set on the CloudWatch log group
     */
    kubeAuditRetentionTime?: pulumi.Input<number | undefined>;
    /**
     * The kubernetes data collection connection configuration
     */
    kubernetesDataCollection?: pulumi.Input<DefenderForContainersAwsOfferingKubernetesDataCollectionArgs | undefined>;
    /**
     * The kubernetes service connection configuration
     */
    kubernetesService?: pulumi.Input<DefenderForContainersAwsOfferingKubernetesServiceArgs | undefined>;
    /**
     * The Microsoft Defender container agentless discovery K8s configuration
     */
    mdcContainersAgentlessDiscoveryK8S?: pulumi.Input<DefenderForContainersAwsOfferingMdcContainersAgentlessDiscoveryK8SArgs | undefined>;
    /**
     * The Microsoft Defender container image assessment configuration
     */
    mdcContainersImageAssessment?: pulumi.Input<DefenderForContainersAwsOfferingMdcContainersImageAssessmentArgs | undefined>;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForContainersAws'.
     */
    offeringType: pulumi.Input<"DefenderForContainersAws">;
    /**
     * The Microsoft Defender for Container K8s VM host scanning configuration
     */
    vmScanners?: pulumi.Input<DefenderForContainersAwsOfferingVmScannersArgs | undefined>;
}

/**
 * The cloudwatch to kinesis connection configuration
 */
export interface DefenderForContainersAwsOfferingCloudWatchToKinesisArgs {
    /**
     * The cloud role ARN in AWS used by CloudWatch to transfer data into Kinesis
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
}

/**
 * The kinesis to s3 connection configuration
 */
export interface DefenderForContainersAwsOfferingKinesisToS3Args {
    /**
     * The cloud role ARN in AWS used by Kinesis to transfer data into S3
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
}

/**
 * The kubernetes data collection connection configuration
 */
export interface DefenderForContainersAwsOfferingKubernetesDataCollectionArgs {
    /**
     * The cloud role ARN in AWS for this feature used for reading data
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
}

/**
 * The kubernetes service connection configuration
 */
export interface DefenderForContainersAwsOfferingKubernetesServiceArgs {
    /**
     * The cloud role ARN in AWS for this feature used for provisioning resources
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
}

/**
 * The Microsoft Defender container agentless discovery K8s configuration
 */
export interface DefenderForContainersAwsOfferingMdcContainersAgentlessDiscoveryK8SArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
    /**
     * Is Microsoft Defender container agentless discovery K8s enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The Microsoft Defender container image assessment configuration
 */
export interface DefenderForContainersAwsOfferingMdcContainersImageAssessmentArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
    /**
     * Is Microsoft Defender container image assessment enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The Microsoft Defender for Container K8s VM host scanning configuration
 */
export interface DefenderForContainersAwsOfferingVmScannersArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
    /**
     * Configuration for VM scanning
     */
    configuration?: pulumi.Input<VmScannersBaseConfigurationArgs | undefined>;
    /**
     * Is VM scanning enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The Defender for containers Docker Hub offering configurations
 */
export interface DefenderForContainersDockerHubOfferingArgs {
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForContainersDockerHub'.
     */
    offeringType: pulumi.Input<"DefenderForContainersDockerHub">;
}

/**
 * The containers GCP offering
 */
export interface DefenderForContainersGcpOfferingArgs {
    /**
     * The native cloud connection configuration
     */
    dataPipelineNativeCloudConnection?: pulumi.Input<DefenderForContainersGcpOfferingDataPipelineNativeCloudConnectionArgs | undefined>;
    /**
     * Is audit logs data collection enabled
     */
    enableAuditLogsAutoProvisioning?: pulumi.Input<boolean | undefined>;
    /**
     * Is Microsoft Defender for Cloud Kubernetes agent auto provisioning enabled
     */
    enableDefenderAgentAutoProvisioning?: pulumi.Input<boolean | undefined>;
    /**
     * Is Policy Kubernetes agent auto provisioning enabled
     */
    enablePolicyAgentAutoProvisioning?: pulumi.Input<boolean | undefined>;
    /**
     * The Microsoft Defender Container agentless discovery configuration
     */
    mdcContainersAgentlessDiscoveryK8S?: pulumi.Input<DefenderForContainersGcpOfferingMdcContainersAgentlessDiscoveryK8SArgs | undefined>;
    /**
     * The Microsoft Defender Container image assessment configuration
     */
    mdcContainersImageAssessment?: pulumi.Input<DefenderForContainersGcpOfferingMdcContainersImageAssessmentArgs | undefined>;
    /**
     * The native cloud connection configuration
     */
    nativeCloudConnection?: pulumi.Input<DefenderForContainersGcpOfferingNativeCloudConnectionArgs | undefined>;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForContainersGcp'.
     */
    offeringType: pulumi.Input<"DefenderForContainersGcp">;
    /**
     * The Microsoft Defender for Container K8s VM host scanning configuration
     */
    vmScanners?: pulumi.Input<DefenderForContainersGcpOfferingVmScannersArgs | undefined>;
}

/**
 * The native cloud connection configuration
 */
export interface DefenderForContainersGcpOfferingDataPipelineNativeCloudConnectionArgs {
    /**
     * The data collection service account email address in GCP for this offering
     */
    serviceAccountEmailAddress?: pulumi.Input<string | undefined>;
    /**
     * The data collection GCP workload identity provider id for this offering
     */
    workloadIdentityProviderId?: pulumi.Input<string | undefined>;
}

/**
 * The Microsoft Defender Container agentless discovery configuration
 */
export interface DefenderForContainersGcpOfferingMdcContainersAgentlessDiscoveryK8SArgs {
    /**
     * Is Microsoft Defender container agentless discovery enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The service account email address in GCP for this feature
     */
    serviceAccountEmailAddress?: pulumi.Input<string | undefined>;
    /**
     * The workload identity provider id in GCP for this feature
     */
    workloadIdentityProviderId?: pulumi.Input<string | undefined>;
}

/**
 * The Microsoft Defender Container image assessment configuration
 */
export interface DefenderForContainersGcpOfferingMdcContainersImageAssessmentArgs {
    /**
     * Is Microsoft Defender container image assessment enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The service account email address in GCP for this feature
     */
    serviceAccountEmailAddress?: pulumi.Input<string | undefined>;
    /**
     * The workload identity provider id in GCP for this feature
     */
    workloadIdentityProviderId?: pulumi.Input<string | undefined>;
}

/**
 * The native cloud connection configuration
 */
export interface DefenderForContainersGcpOfferingNativeCloudConnectionArgs {
    /**
     * The service account email address in GCP for this offering
     */
    serviceAccountEmailAddress?: pulumi.Input<string | undefined>;
    /**
     * The GCP workload identity provider id for this offering
     */
    workloadIdentityProviderId?: pulumi.Input<string | undefined>;
}

/**
 * The Microsoft Defender for Container K8s VM host scanning configuration
 */
export interface DefenderForContainersGcpOfferingVmScannersArgs {
    /**
     * Configuration for VM scanning
     */
    configuration?: pulumi.Input<VmScannersBaseConfigurationArgs | undefined>;
    /**
     * Is VM scanning enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The Defender for Containers for JFrog Artifactory offering
 */
export interface DefenderForContainersJFrogOfferingArgs {
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForContainersJFrog'.
     */
    offeringType: pulumi.Input<"DefenderForContainersJFrog">;
}

/**
 * The Defender for Databases GCP offering configurations
 */
export interface DefenderForDatabasesGcpOfferingArgs {
    /**
     * The ARC autoprovisioning configuration
     */
    arcAutoProvisioning?: pulumi.Input<DefenderForDatabasesGcpOfferingArcAutoProvisioningArgs | undefined>;
    /**
     * The native cloud connection configuration
     */
    defenderForDatabasesArcAutoProvisioning?: pulumi.Input<DefenderForDatabasesGcpOfferingDefenderForDatabasesArcAutoProvisioningArgs | undefined>;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForDatabasesGcp'.
     */
    offeringType: pulumi.Input<"DefenderForDatabasesGcp">;
}

/**
 * The ARC autoprovisioning configuration
 */
export interface DefenderForDatabasesGcpOfferingArcAutoProvisioningArgs {
    /**
     * Configuration for servers Arc auto provisioning for a given environment
     */
    configuration?: pulumi.Input<ArcAutoProvisioningConfigurationArgs | undefined>;
    /**
     * Is arc auto provisioning enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The native cloud connection configuration
 */
export interface DefenderForDatabasesGcpOfferingDefenderForDatabasesArcAutoProvisioningArgs {
    /**
     * The service account email address in GCP for this offering
     */
    serviceAccountEmailAddress?: pulumi.Input<string | undefined>;
    /**
     * The GCP workload identity provider id for this offering
     */
    workloadIdentityProviderId?: pulumi.Input<string | undefined>;
}

/**
 * The Defender for Servers AWS offering
 */
export interface DefenderForServersAwsOfferingArgs {
    /**
     * The ARC autoprovisioning configuration
     */
    arcAutoProvisioning?: pulumi.Input<DefenderForServersAwsOfferingArcAutoProvisioningArgs | undefined>;
    /**
     * The Defender for servers connection configuration
     */
    defenderForServers?: pulumi.Input<DefenderForServersAwsOfferingDefenderForServersArgs | undefined>;
    /**
     * The Microsoft Defender for Endpoint autoprovisioning configuration
     */
    mdeAutoProvisioning?: pulumi.Input<DefenderForServersAwsOfferingMdeAutoProvisioningArgs | undefined>;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForServersAws'.
     */
    offeringType: pulumi.Input<"DefenderForServersAws">;
    /**
     * configuration for the servers offering subPlan
     */
    subPlan?: pulumi.Input<DefenderForServersAwsOfferingSubPlanArgs | undefined>;
    /**
     * The Vulnerability Assessment autoprovisioning configuration
     */
    vaAutoProvisioning?: pulumi.Input<DefenderForServersAwsOfferingVaAutoProvisioningArgs | undefined>;
    /**
     * The Microsoft Defender for Server VM scanning configuration
     */
    vmScanners?: pulumi.Input<DefenderForServersAwsOfferingVmScannersArgs | undefined>;
}

/**
 * The ARC autoprovisioning configuration
 */
export interface DefenderForServersAwsOfferingArcAutoProvisioningArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
    /**
     * Configuration for servers Arc auto provisioning for a given environment
     */
    configuration?: pulumi.Input<ArcAutoProvisioningConfigurationArgs | undefined>;
    /**
     * Is arc auto provisioning enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The Defender for servers connection configuration
 */
export interface DefenderForServersAwsOfferingDefenderForServersArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
}

/**
 * The Microsoft Defender for Endpoint autoprovisioning configuration
 */
export interface DefenderForServersAwsOfferingMdeAutoProvisioningArgs {
    /**
     * configuration for Microsoft Defender for Endpoint autoprovisioning
     */
    configuration?: any | undefined;
    /**
     * Is Microsoft Defender for Endpoint auto provisioning enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * configuration for the servers offering subPlan
 */
export interface DefenderForServersAwsOfferingSubPlanArgs {
    /**
     * The available sub plans
     */
    type?: pulumi.Input<string | enums.SubPlan | undefined>;
}

/**
 * The Vulnerability Assessment autoprovisioning configuration
 */
export interface DefenderForServersAwsOfferingVaAutoProvisioningArgs {
    /**
     * configuration for Vulnerability Assessment autoprovisioning
     */
    configuration?: pulumi.Input<DefenderForServersAwsOfferingVaAutoProvisioningConfigurationArgs | undefined>;
    /**
     * Is Vulnerability Assessment auto provisioning enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * configuration for Vulnerability Assessment autoprovisioning
 */
export interface DefenderForServersAwsOfferingVaAutoProvisioningConfigurationArgs {
    /**
     * The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys'
     */
    type?: pulumi.Input<string | enums.Type | undefined>;
}

/**
 * The Microsoft Defender for Server VM scanning configuration
 */
export interface DefenderForServersAwsOfferingVmScannersArgs {
    /**
     * The cloud role ARN in AWS for this feature
     */
    cloudRoleArn?: pulumi.Input<string | undefined>;
    /**
     * Configuration for VM scanning
     */
    configuration?: pulumi.Input<VmScannersBaseConfigurationArgs | undefined>;
    /**
     * Is VM scanning enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The Defender for Servers GCP offering configurations
 */
export interface DefenderForServersGcpOfferingArgs {
    /**
     * The ARC autoprovisioning configuration
     */
    arcAutoProvisioning?: pulumi.Input<DefenderForServersGcpOfferingArcAutoProvisioningArgs | undefined>;
    /**
     * The Defender for servers connection configuration
     */
    defenderForServers?: pulumi.Input<DefenderForServersGcpOfferingDefenderForServersArgs | undefined>;
    /**
     * The Microsoft Defender for Endpoint autoprovisioning configuration
     */
    mdeAutoProvisioning?: pulumi.Input<DefenderForServersGcpOfferingMdeAutoProvisioningArgs | undefined>;
    /**
     * The type of the security offering.
     * Expected value is 'DefenderForServersGcp'.
     */
    offeringType: pulumi.Input<"DefenderForServersGcp">;
    /**
     * configuration for the servers offering subPlan
     */
    subPlan?: pulumi.Input<DefenderForServersGcpOfferingSubPlanArgs | undefined>;
    /**
     * The Vulnerability Assessment autoprovisioning configuration
     */
    vaAutoProvisioning?: pulumi.Input<DefenderForServersGcpOfferingVaAutoProvisioningArgs | undefined>;
    /**
     * The Microsoft Defender for Server VM scanning configuration
     */
    vmScanners?: pulumi.Input<DefenderForServersGcpOfferingVmScannersArgs | undefined>;
}

/**
 * The ARC autoprovisioning configuration
 */
export interface DefenderForServersGcpOfferingArcAutoProvisioningArgs {
    /**
     * Configuration for servers Arc auto provisioning for a given environment
     */
    configuration?: pulumi.Input<ArcAutoProvisioningConfigurationArgs | undefined>;
    /**
     * Is arc auto provisioning enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The Defender for servers connection configuration
 */
export interface DefenderForServersGcpOfferingDefenderForServersArgs {
    /**
     * The service account email address in GCP for this feature
     */
    serviceAccountEmailAddress?: pulumi.Input<string | undefined>;
    /**
     * The workload identity provider id in GCP for this feature
     */
    workloadIdentityProviderId?: pulumi.Input<string | undefined>;
}

/**
 * The Microsoft Defender for Endpoint autoprovisioning configuration
 */
export interface DefenderForServersGcpOfferingMdeAutoProvisioningArgs {
    /**
     * configuration for Microsoft Defender for Endpoint autoprovisioning
     */
    configuration?: any | undefined;
    /**
     * Is Microsoft Defender for Endpoint auto provisioning enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * configuration for the servers offering subPlan
 */
export interface DefenderForServersGcpOfferingSubPlanArgs {
    /**
     * The available sub plans
     */
    type?: pulumi.Input<string | enums.SubPlan | undefined>;
}

/**
 * The Vulnerability Assessment autoprovisioning configuration
 */
export interface DefenderForServersGcpOfferingVaAutoProvisioningArgs {
    /**
     * configuration for Vulnerability Assessment autoprovisioning
     */
    configuration?: pulumi.Input<DefenderForServersGcpOfferingVaAutoProvisioningConfigurationArgs | undefined>;
    /**
     * Is Vulnerability Assessment auto provisioning enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * configuration for Vulnerability Assessment autoprovisioning
 */
export interface DefenderForServersGcpOfferingVaAutoProvisioningConfigurationArgs {
    /**
     * The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys'
     */
    type?: pulumi.Input<string | enums.Type | undefined>;
}

/**
 * The Microsoft Defender for Server VM scanning configuration
 */
export interface DefenderForServersGcpOfferingVmScannersArgs {
    /**
     * Configuration for VM scanning
     */
    configuration?: pulumi.Input<VmScannersBaseConfigurationArgs | undefined>;
    /**
     * Is VM scanning enabled
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Defender for Storage resource properties.
 */
export interface DefenderForStorageSettingPropertiesArgs {
    /**
     * Indicates whether Defender for Storage is enabled on this storage account.
     */
    isEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Properties of Malware Scanning.
     */
    malwareScanning?: pulumi.Input<MalwareScanningPropertiesArgs | undefined>;
    /**
     * Indicates whether the settings defined for this storage account should override the settings defined for the subscription.
     */
    overrideSubscriptionLevelSettings?: pulumi.Input<boolean | undefined>;
    /**
     * Properties of Sensitive Data Discovery.
     */
    sensitiveDataDiscovery?: pulumi.Input<SensitiveDataDiscoveryPropertiesArgs | undefined>;
}

/**
 * A custom alert rule that checks if a value (depends on the custom alert type) is denied.
 */
export interface DenylistCustomAlertRuleArgs {
    /**
     * The values to deny. The format of the values depends on the rule type.
     */
    denylistValues: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Status of the custom alert.
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * The type of the custom alert rule.
     * Expected value is 'DenylistCustomAlertRule'.
     */
    ruleType: pulumi.Input<"DenylistCustomAlertRule">;
}

/**
 * DevOps Configuration properties.
 */
export interface DevOpsConfigurationPropertiesArgs {
    /**
     * Authorization payload.
     */
    authorization?: pulumi.Input<AuthorizationArgs | undefined>;
    /**
     * AutoDiscovery states.
     */
    autoDiscovery?: pulumi.Input<string | enums.AutoDiscovery | undefined>;
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
    provisioningState?: pulumi.Input<string | enums.DevOpsProvisioningState | undefined>;
    /**
     * List of top-level inventory to select when AutoDiscovery is disabled.
     * This field is ignored when AutoDiscovery is enabled.
     */
    topLevelInventoryList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The Docker Hub connector environment data
 */
export interface DockerHubEnvironmentDataArgs {
    /**
     * The Docker Hub organization authentication details
     */
    authentication?: pulumi.Input<AccessTokenAuthenticationArgs | undefined>;
    /**
     * The type of the environment data.
     * Expected value is 'DockerHubOrganization'.
     */
    environmentType: pulumi.Input<"DockerHubOrganization">;
    /**
     * Scan interval in hours (value should be between 1-hour to 24-hours)
     */
    scanInterval?: pulumi.Input<number | undefined>;
}

/**
 * A plan's extension properties
 */
export interface ExtensionArgs {
    /**
     * Property values associated with the extension.
     */
    additionalExtensionProperties?: any | undefined;
    /**
     * Indicates whether the extension is enabled.
     */
    isEnabled: pulumi.Input<string | enums.IsEnabled>;
    /**
     * The extension name. Supported values are: <br><br>**AgentlessDiscoveryForKubernetes** - Provides zero footprint, API-based discovery of Kubernetes clusters, their configurations and deployments. The collected data is used to create a contextualized security graph for Kubernetes clusters, provide risk hunting capabilities, and visualize risks and threats to  Kubernetes environments and workloads.<br>Available for CloudPosture plan and Containers plan.<br><br>**OnUploadMalwareScanning** - Limits the GB to be scanned per month for each storage account within the subscription. Once this limit reached on a given storage account, Blobs won't be scanned during current calendar month.<br>Available for StorageAccounts plan (DefenderForStorageV2 sub plans).<br><br>**SensitiveDataDiscovery** - Sensitive data discovery identifies Blob storage container with sensitive data such as credentials, credit cards, and more, to help prioritize and investigate security events.<br>Available for StorageAccounts plan (DefenderForStorageV2 sub plan) and CloudPosture plan.<br><br>**ContainerRegistriesVulnerabilityAssessments** - Provides vulnerability management for images stored in your container registries.<br>Available for CloudPosture plan and Containers plan.<br><br>**MdeDesignatedSubscription** - Direct onboarding is a seamless integration between Defender for Endpoint and Defender for Cloud that doesn't require extra software deployment on your servers. The onboarded resources will be presented under a designated Azure Subscription you configure<br>Available for VirtualMachines plan (P1 and P2 sub plans).<br><br>**AgentlessVmScanning** - Scans your machines for installed software, vulnerabilities, malware and secret scanning without relying on agents or impacting machine performance. Learn more here https://learn.microsoft.com/en-us/azure/defender-for-cloud/concept-agentless-data-collection.<br>Available for CloudPosture plan, VirtualMachines plan (P2 sub plan) and Containers plan.<br><br>**EntraPermissionsManagement** - Permissions Management provides Cloud Infrastructure Entitlement Management (CIEM) capabilities that helps organizations to manage and control user access and entitlements in their cloud infrastructure - important attack vector for cloud environments.<br>Permissions Management analyzes all permissions and active usage, and suggests recommendations to reduce permissions to enforce the principle of least privilege. Learn more here https://learn.microsoft.com/en-us/azure/defender-for-cloud/permissions-management.<br>Available for CloudPosture plan. <br><br>**FileIntegrityMonitoring** - File integrity monitoring (FIM), examines operating system files.<br>Windows registries, Linux system files, in real time, for changes that might indicate an attack.<br>Available for VirtualMachines plan (P2 sub plan). <br><br>**ContainerSensor** - The sensor is based on IG and provides a rich threat detection suite for Kubernetes clusters, nodes, and workloads, powered by Microsoft leading threat intelligence, provides mapping to MITRE ATT&CK framework.<br>Available for Containers plan. <br><br>**AIPromptEvidence** - Exposes the prompts passed between the user and the AI model as alert evidence. This helps classify and triage the alerts with relevant user context. The prompt snippets will include only segments of the user prompt or model response that were deemed suspicious and relevant for security classifications. The prompt evidence will be available through Defender portal as part of each alert.<br>Available for AI plan. <br><br>
     */
    name: pulumi.Input<string>;
}

/**
 * The gcpOrganization data for the member account
 */
export interface GcpOrganizationalDataMemberArgs {
    /**
     * The GCP management project number from organizational onboarding
     */
    managementProjectNumber?: pulumi.Input<string | undefined>;
    /**
     * The multi cloud account's membership type in the organization
     * Expected value is 'Member'.
     */
    organizationMembershipType: pulumi.Input<"Member">;
    /**
     * If the multi cloud account is not of membership type organization, this will be the ID of the project's parent
     */
    parentHierarchyId?: pulumi.Input<string | undefined>;
}

/**
 * The gcpOrganization data for the parent account
 */
export interface GcpOrganizationalDataOrganizationArgs {
    /**
     * If the multi cloud account is of membership type organization, list of accounts excluded from offering
     */
    excludedProjectNumbers?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The multi cloud account's membership type in the organization
     * Expected value is 'Organization'.
     */
    organizationMembershipType: pulumi.Input<"Organization">;
    /**
     * The service account email address which represents the organization level permissions container.
     */
    serviceAccountEmailAddress?: pulumi.Input<string | undefined>;
    /**
     * The GCP workload identity provider id which represents the permissions required to auto provision security connectors
     */
    workloadIdentityProviderId?: pulumi.Input<string | undefined>;
}

/**
 * The details about the project represented by the security connector
 */
export interface GcpProjectDetailsArgs {
    /**
     * The GCP Project id
     */
    projectId?: pulumi.Input<string | undefined>;
    /**
     * The unique GCP Project number
     */
    projectNumber?: pulumi.Input<string | undefined>;
}

/**
 * The GCP project connector environment data
 */
export interface GcpProjectEnvironmentDataArgs {
    /**
     * The type of the environment data.
     * Expected value is 'GcpProject'.
     */
    environmentType: pulumi.Input<"GcpProject">;
    /**
     * The Gcp project's organizational data
     */
    organizationalData?: pulumi.Input<GcpOrganizationalDataMemberArgs | GcpOrganizationalDataOrganizationArgs | undefined>;
    /**
     * The Gcp project's details
     */
    projectDetails?: pulumi.Input<GcpProjectDetailsArgs | undefined>;
    /**
     * Scan interval in hours (value should be between 1-hour to 24-hours)
     */
    scanInterval?: pulumi.Input<number | undefined>;
}

/**
 * The github scope connector's environment data
 */
export interface GithubScopeEnvironmentDataArgs {
    /**
     * The type of the environment data.
     * Expected value is 'GithubScope'.
     */
    environmentType: pulumi.Input<"GithubScope">;
}

/**
 * The GitLab scope connector's environment data
 */
export interface GitlabScopeEnvironmentDataArgs {
    /**
     * The type of the environment data.
     * Expected value is 'GitlabScope'.
     */
    environmentType: pulumi.Input<"GitlabScope">;
}

/**
 * Describe the additional data of governance assignment - optional
 */
export interface GovernanceAssignmentAdditionalDataArgs {
    /**
     * Ticket link associated with this governance assignment - for example: https://snow.com
     */
    ticketLink?: pulumi.Input<string | undefined>;
    /**
     * Ticket number associated with this governance assignment
     */
    ticketNumber?: pulumi.Input<number | undefined>;
    /**
     * The ticket status associated with this governance assignment - for example: Active
     */
    ticketStatus?: pulumi.Input<string | undefined>;
}

/**
 * The governance email weekly notification configuration.
 */
export interface GovernanceEmailNotificationArgs {
    /**
     * Exclude manager from weekly email notification.
     */
    disableManagerEmailNotification?: pulumi.Input<boolean | undefined>;
    /**
     * Exclude  owner from weekly email notification.
     */
    disableOwnerEmailNotification?: pulumi.Input<boolean | undefined>;
}

/**
 * The governance email weekly notification configuration
 */
export interface GovernanceRuleEmailNotificationArgs {
    /**
     * Defines whether manager email notifications are disabled
     */
    disableManagerEmailNotification?: pulumi.Input<boolean | undefined>;
    /**
     * Defines whether owner email notifications are disabled
     */
    disableOwnerEmailNotification?: pulumi.Input<boolean | undefined>;
}

/**
 * Describe the owner source of governance rule
 */
export interface GovernanceRuleOwnerSourceArgs {
    /**
     * The owner type for the governance rule owner source
     */
    type?: pulumi.Input<string | enums.GovernanceRuleOwnerSourceType | undefined>;
    /**
     * The source value e.g. tag key like owner name or email address
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * The JFrog Artifactory connector environment data
 */
export interface JFrogEnvironmentDataArgs {
    /**
     * The type of the environment data.
     * Expected value is 'JFrogArtifactory'.
     */
    environmentType: pulumi.Input<"JFrogArtifactory">;
    /**
     * Scan interval in hours (value should be between 1-hour to 24-hours)
     */
    scanInterval?: pulumi.Input<number | undefined>;
}

export interface JitNetworkAccessPolicyVirtualMachineArgs {
    /**
     * Resource ID of the virtual machine that is linked to this policy
     */
    id: pulumi.Input<string>;
    /**
     * Port configurations for the virtual machine
     */
    ports: pulumi.Input<pulumi.Input<JitNetworkAccessPortRuleArgs>[]>;
    /**
     * Public IP address of the Azure Firewall that is linked to this policy, if applicable
     */
    publicIpAddress?: pulumi.Input<string | undefined>;
}

export interface JitNetworkAccessPortRuleArgs {
    /**
     * Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
     */
    allowedSourceAddressPrefix?: pulumi.Input<string | undefined>;
    /**
     * Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
     */
    allowedSourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Maximum duration requests can be made for. In ISO 8601 duration format. Minimum 5 minutes, maximum 1 day
     */
    maxRequestAccessDuration: pulumi.Input<string>;
    number: pulumi.Input<number>;
    protocol: pulumi.Input<string | enums.Protocol>;
}

export interface JitNetworkAccessRequestArgs {
    /**
     * The justification for making the initiate request
     */
    justification?: pulumi.Input<string | undefined>;
    /**
     * The identity of the person who made the request
     */
    requestor: pulumi.Input<string>;
    /**
     * The start time of the request in UTC
     */
    startTimeUtc: pulumi.Input<string>;
    virtualMachines: pulumi.Input<pulumi.Input<JitNetworkAccessRequestVirtualMachineArgs>[]>;
}

export interface JitNetworkAccessRequestPortArgs {
    /**
     * Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
     */
    allowedSourceAddressPrefix?: pulumi.Input<string | undefined>;
    /**
     * Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
     */
    allowedSourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The date & time at which the request ends in UTC
     */
    endTimeUtc: pulumi.Input<string>;
    /**
     * The port which is mapped to this port's `number` in the Azure Firewall, if applicable
     */
    mappedPort?: pulumi.Input<number | undefined>;
    number: pulumi.Input<number>;
    /**
     * The status of the port
     */
    status: pulumi.Input<string | enums.Status>;
    /**
     * A description of why the `status` has its value
     */
    statusReason: pulumi.Input<string | enums.StatusReason>;
}

export interface JitNetworkAccessRequestVirtualMachineArgs {
    /**
     * Resource ID of the virtual machine that is linked to this policy
     */
    id: pulumi.Input<string>;
    /**
     * The ports that were opened for the virtual machine
     */
    ports: pulumi.Input<pulumi.Input<JitNetworkAccessRequestPortArgs>[]>;
}

/**
 * Properties of Malware Scanning.
 */
export interface MalwareScanningPropertiesArgs {
    /**
     * Properties of On Upload malware scanning.
     */
    onUpload?: pulumi.Input<OnUploadPropertiesArgs | undefined>;
    /**
     * Optional. Resource id of an Event Grid Topic to send scan results to.
     */
    scanResultsEventGridTopicResourceId?: pulumi.Input<string | undefined>;
}

/**
 * Alert notification source
 */
export interface NotificationsSourceAlertArgs {
    /**
     * Defines the minimal alert severity which will be sent as email notifications
     */
    minimalSeverity?: pulumi.Input<string | enums.MinimalSeverity | undefined>;
    /**
     * The source type that will trigger the notification
     * Expected value is 'Alert'.
     */
    sourceType: pulumi.Input<"Alert">;
}

/**
 * Attack path notification source
 */
export interface NotificationsSourceAttackPathArgs {
    /**
     * Defines the minimal attach path risk level which will be sent as email notifications
     */
    minimalRiskLevel?: pulumi.Input<string | enums.MinimalRiskLevel | undefined>;
    /**
     * The source type that will trigger the notification
     * Expected value is 'AttackPath'.
     */
    sourceType: pulumi.Input<"AttackPath">;
}

/**
 * Details of the On Premise resource that was assessed
 */
export interface OnPremiseResourceDetailsArgs {
    /**
     * The name of the machine
     */
    machineName: pulumi.Input<string>;
    /**
     * The platform where the assessed resource resides
     * Expected value is 'OnPremise'.
     */
    source: pulumi.Input<"OnPremise">;
    /**
     * The oms agent Id installed on the machine
     */
    sourceComputerId: pulumi.Input<string>;
    /**
     * The unique Id of the machine
     */
    vmuuid: pulumi.Input<string>;
    /**
     * Azure resource Id of the workspace the machine is attached to
     */
    workspaceId: pulumi.Input<string>;
}

/**
 * Details of the On Premise Sql resource that was assessed
 */
export interface OnPremiseSqlResourceDetailsArgs {
    /**
     * The Sql database name installed on the machine
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the machine
     */
    machineName: pulumi.Input<string>;
    /**
     * The Sql server name installed on the machine
     */
    serverName: pulumi.Input<string>;
    /**
     * The platform where the assessed resource resides
     * Expected value is 'OnPremiseSql'.
     */
    source: pulumi.Input<"OnPremiseSql">;
    /**
     * The oms agent Id installed on the machine
     */
    sourceComputerId: pulumi.Input<string>;
    /**
     * The unique Id of the machine
     */
    vmuuid: pulumi.Input<string>;
    /**
     * Azure resource Id of the workspace the machine is attached to
     */
    workspaceId: pulumi.Input<string>;
}

/**
 * Properties of On Upload malware scanning.
 */
export interface OnUploadPropertiesArgs {
    /**
     * Defines the max GB to be scanned per Month. Set to -1 if no capping is needed.
     */
    capGBPerMonth?: pulumi.Input<number | undefined>;
    /**
     * Indicates whether On Upload malware scanning should be enabled.
     */
    isEnabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Describes properties of an assessment as related to the standard
 */
export interface PartialAssessmentPropertiesArgs {
    /**
     * The assessment key
     */
    assessmentKey?: pulumi.Input<string | undefined>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus | undefined>;
}

/**
 * The type of IoT Security recommendation.
 */
export interface RecommendationConfigurationPropertiesArgs {
    /**
     * The type of IoT Security recommendation.
     */
    recommendationType: pulumi.Input<string | enums.RecommendationType>;
    /**
     * Recommendation status. When the recommendation status is disabled recommendations are not generated.
     */
    status: pulumi.Input<string | enums.RecommendationConfigStatus>;
}
/**
 * recommendationConfigurationPropertiesArgsProvideDefaults sets the appropriate defaults for RecommendationConfigurationPropertiesArgs
 */
export function recommendationConfigurationPropertiesArgsProvideDefaults(val: RecommendationConfigurationPropertiesArgs): RecommendationConfigurationPropertiesArgs {
    return {
        ...val,
        status: (val.status) ?? "Enabled",
    };
}

/**
 * The ETA (estimated time of arrival) for remediation
 */
export interface RemediationEtaArgs {
    /**
     * ETA for remediation.
     */
    eta: pulumi.Input<string>;
    /**
     * Justification for change of Eta.
     */
    justification: pulumi.Input<string>;
}

/**
 * A more specific scope used to identify the alerts to suppress.
 */
export interface ScopeElementArgs {
    /**
     * The alert entity type to suppress by.
     */
    field?: pulumi.Input<string | undefined>;
}

/**
 * Describes the partner that created the assessment
 */
export interface SecurityAssessmentMetadataPartnerDataArgs {
    /**
     * Name of the company of the partner
     */
    partnerName: pulumi.Input<string>;
    /**
     * Name of the product of the partner that created the assessment
     */
    productName?: pulumi.Input<string | undefined>;
    /**
     * Secret to authenticate the partner and verify it created the assessment - write only
     */
    secret: pulumi.Input<string>;
}

/**
 * Describes properties of an assessment metadata.
 */
export interface SecurityAssessmentMetadataPropertiesArgs {
    /**
     * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
     */
    assessmentType: pulumi.Input<string | enums.AssessmentType>;
    categories?: pulumi.Input<pulumi.Input<string | enums.Categories>[] | undefined>;
    /**
     * Human readable description of the assessment
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * User friendly display name of the assessment
     */
    displayName: pulumi.Input<string>;
    /**
     * The implementation effort required to remediate this assessment
     */
    implementationEffort?: pulumi.Input<string | enums.ImplementationEffort | undefined>;
    /**
     * Describes the partner that created the assessment
     */
    partnerData?: pulumi.Input<SecurityAssessmentMetadataPartnerDataArgs | undefined>;
    /**
     * True if this assessment is in preview release status
     */
    preview?: pulumi.Input<boolean | undefined>;
    /**
     * Human readable description of what you should do to mitigate this security issue
     */
    remediationDescription?: pulumi.Input<string | undefined>;
    /**
     * The severity level of the assessment
     */
    severity: pulumi.Input<string | enums.Severity>;
    threats?: pulumi.Input<pulumi.Input<string | enums.Threats>[] | undefined>;
    /**
     * The user impact of the assessment
     */
    userImpact?: pulumi.Input<string | enums.UserImpact | undefined>;
}

export interface SecurityAssessmentMetadataPropertiesResponsePublishDatesArgs {
    gA?: pulumi.Input<string | undefined>;
    public: pulumi.Input<string>;
}

/**
 * Data regarding 3rd party partner integration
 */
export interface SecurityAssessmentPartnerDataArgs {
    /**
     * Name of the company of the partner
     */
    partnerName: pulumi.Input<string>;
    /**
     * secret to authenticate the partner - write only
     */
    secret: pulumi.Input<string>;
}

/**
 * Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription.
 */
export interface SecurityContactPropertiesNotificationsByRoleArgs {
    /**
     * Defines which RBAC roles will get email notifications from Microsoft Defender for Cloud. List of allowed RBAC roles:
     */
    roles?: pulumi.Input<pulumi.Input<string | enums.SecurityContactRole>[] | undefined>;
    /**
     * Defines whether to send email notifications from AMicrosoft Defender for Cloud to persons with specific RBAC roles on the subscription.
     */
    state?: pulumi.Input<string | enums.State | undefined>;
}

/**
 * Properties of Sensitive Data Discovery.
 */
export interface SensitiveDataDiscoveryPropertiesArgs {
    /**
     * Indicates whether Sensitive Data Discovery should be enabled.
     */
    isEnabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Additional data about assignment that has Attest effect
 */
export interface StandardAssignmentPropertiesAttestationDataArgs {
    /**
     * Component item with key as applied to this standard assignment over the given scope
     */
    assignedAssessment?: pulumi.Input<AssignedAssessmentItemArgs | undefined>;
    /**
     * Attest category of this assignment
     */
    complianceState?: pulumi.Input<string | enums.AttestationComplianceState | undefined>;
    /**
     * Array of links to attestation evidence
     */
    evidence?: pulumi.Input<pulumi.Input<AttestationEvidenceArgs>[] | undefined>;
}

/**
 * Additional data about assignment that has Exempt effect
 */
export interface StandardAssignmentPropertiesExemptionDataArgs {
    /**
     * Component item with key as applied to this standard assignment over the given scope
     */
    assignedAssessment?: pulumi.Input<AssignedAssessmentItemArgs | undefined>;
    /**
     * Exemption category of this assignment
     */
    exemptionCategory?: pulumi.Input<string | enums.ExemptionCategory | undefined>;
}

/**
 * Describes properties of an component as related to the standard
 */
export interface StandardComponentPropertiesArgs {
    /**
     * Component Key matching componentMetadata
     */
    key?: pulumi.Input<string | undefined>;
}

export interface SuppressionAlertsScopeArgs {
    /**
     * All the conditions inside need to be true in order to suppress the alert
     */
    allOf: pulumi.Input<pulumi.Input<ScopeElementArgs>[]>;
}

/**
 * A custom alert rule that checks if a value (depends on the custom alert type) is within the given range.
 */
export interface ThresholdCustomAlertRuleArgs {
    /**
     * Status of the custom alert.
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * The maximum threshold.
     */
    maxThreshold: pulumi.Input<number>;
    /**
     * The minimum threshold.
     */
    minThreshold: pulumi.Input<number>;
    /**
     * The type of the custom alert rule.
     * Expected value is 'ThresholdCustomAlertRule'.
     */
    ruleType: pulumi.Input<"ThresholdCustomAlertRule">;
}

/**
 * A custom alert rule that checks if the number of activities (depends on the custom alert type) in a time window is within the given range.
 */
export interface TimeWindowCustomAlertRuleArgs {
    /**
     * Status of the custom alert.
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * The maximum threshold.
     */
    maxThreshold: pulumi.Input<number>;
    /**
     * The minimum threshold.
     */
    minThreshold: pulumi.Input<number>;
    /**
     * The type of the custom alert rule.
     * Expected value is 'TimeWindowCustomAlertRule'.
     */
    ruleType: pulumi.Input<"TimeWindowCustomAlertRule">;
    /**
     * The time window size in iso8601 format.
     */
    timeWindowSize: pulumi.Input<string>;
}

/**
 * Properties of the IoT Security solution's user defined resources.
 */
export interface UserDefinedResourcesPropertiesArgs {
    /**
     * Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs""
     */
    query: pulumi.Input<string>;
    /**
     * List of Azure subscription ids on which the user defined resources query should be executed.
     */
    querySubscriptions: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Configuration for VM scanning
 */
export interface VmScannersBaseConfigurationArgs {
    /**
     * Tags that indicates that a resource should not be scanned
     */
    exclusionTags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The scanning mode for the VM scan.
     */
    scanningMode?: pulumi.Input<string | enums.ScanningMode | undefined>;
}
