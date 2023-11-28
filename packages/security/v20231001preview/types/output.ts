import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
     * The CSPM P1 for AWS offering
     */
    export interface DefenderCspmAwsOfferingResponse {
        /**
         * Defenders CSPM Cloud infrastructure entitlement management (CIEM) offering configurations
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
         * The Microsoft Defender for Server VM scanning configuration
         */
        vmScanners?: DefenderCspmAwsOfferingResponseVmScanners;
    }

    /**
     * Defenders CSPM Cloud infrastructure entitlement management (CIEM) offering configurations
     */
    export interface DefenderCspmAwsOfferingResponseCiem {
        /**
         * Defender CSPM CIEM discovery configuration
         */
        ciemDiscovery?: DefenderCspmAwsOfferingResponseCiemDiscovery;
        /**
         * Defender CSPM CIEM AWS OIDC (open id connect) configuration
         */
        ciemOidc?: DefenderCspmAwsOfferingResponseCiemOidc;
    }

    /**
     * Defender CSPM CIEM discovery configuration
     */
    export interface DefenderCspmAwsOfferingResponseCiemDiscovery {
        /**
         * The cloud role ARN in AWS for CIEM discovery
         */
        cloudRoleArn?: string;
    }

    /**
     * Defender CSPM CIEM AWS OIDC (open id connect) configuration
     */
    export interface DefenderCspmAwsOfferingResponseCiemOidc {
        /**
         * the azure active directory app name used of authenticating against AWS
         */
        azureActiveDirectoryAppName?: string;
        /**
         * The cloud role ARN in AWS for CIEM oidc connection
         */
        cloudRoleArn?: string;
    }

    /**
     * configuration for Microsoft Defender for Server VM scanning
     */
    export interface DefenderCspmAwsOfferingResponseConfiguration {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: string;
        /**
         * VM tags that indicates that VM should not be scanned
         */
        exclusionTags?: {[key: string]: string};
        /**
         * The scanning mode for the VM scan.
         */
        scanningMode?: string;
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
     * The Microsoft Defender for Server VM scanning configuration
     */
    export interface DefenderCspmAwsOfferingResponseVmScanners {
        /**
         * configuration for Microsoft Defender for Server VM scanning
         */
        configuration?: DefenderCspmAwsOfferingResponseConfiguration;
        /**
         * Is Microsoft Defender for Server VM scanning enabled
         */
        enabled?: boolean;
    }

    /**
     * The CSPM P1 for GCP offering
     */
    export interface DefenderCspmGcpOfferingResponse {
        /**
         * GCP Defenders CSPM Cloud infrastructure entitlement management (CIEM) discovery offering configurations
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
         * The Microsoft Defender for Server VM scanning configuration
         */
        vmScanners?: DefenderCspmGcpOfferingResponseVmScanners;
    }

    /**
     * GCP Defenders CSPM Cloud infrastructure entitlement management (CIEM) discovery offering configurations
     */
    export interface DefenderCspmGcpOfferingResponseCiemDiscovery {
        /**
         * the azure active directory app name used of authenticating against GCP workload identity federation
         */
        azureActiveDirectoryAppName?: string;
        /**
         * The service account email address in GCP for CIEM discovery offering
         */
        serviceAccountEmailAddress?: string;
        /**
         * The GCP workload identity provider id for CIEM discovery offering
         */
        workloadIdentityProviderId?: string;
    }

    /**
     * configuration for Microsoft Defender for Server VM scanning
     */
    export interface DefenderCspmGcpOfferingResponseConfiguration {
        /**
         * VM tags that indicates that VM should not be scanned
         */
        exclusionTags?: {[key: string]: string};
        /**
         * The scanning mode for the VM scan.
         */
        scanningMode?: string;
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
     * The Microsoft Defender for Server VM scanning configuration
     */
    export interface DefenderCspmGcpOfferingResponseVmScanners {
        /**
         * configuration for Microsoft Defender for Server VM scanning
         */
        configuration?: DefenderCspmGcpOfferingResponseConfiguration;
        /**
         * Is Microsoft Defender for Server VM scanning enabled
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
         * Configuration for servers Arc auto provisioning
         */
        configuration?: DefenderFoDatabasesAwsOfferingResponseConfiguration;
        /**
         * Is arc auto provisioning enabled
         */
        enabled?: boolean;
    }

    /**
     * Configuration for servers Arc auto provisioning
     */
    export interface DefenderFoDatabasesAwsOfferingResponseConfiguration {
        /**
         * Optional Arc private link scope resource id to link the Arc agent
         */
        privateLinkScope?: string;
        /**
         * Optional http proxy endpoint to use for the Arc agent
         */
        proxy?: string;
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
         * Is audit logs pipeline auto provisioning enabled
         */
        autoProvisioning?: boolean;
        /**
         * The cloudwatch to kinesis connection configuration
         */
        cloudWatchToKinesis?: DefenderForContainersAwsOfferingResponseCloudWatchToKinesis;
        /**
         * The container vulnerability assessment configuration
         */
        containerVulnerabilityAssessment?: DefenderForContainersAwsOfferingResponseContainerVulnerabilityAssessment;
        /**
         * The container vulnerability assessment task configuration
         */
        containerVulnerabilityAssessmentTask?: DefenderForContainersAwsOfferingResponseContainerVulnerabilityAssessmentTask;
        /**
         * The offering description.
         */
        description: string;
        /**
         * Enable container vulnerability assessment feature
         */
        enableContainerVulnerabilityAssessment?: boolean;
        /**
         * The kinesis to s3 connection configuration
         */
        kinesisToS3?: DefenderForContainersAwsOfferingResponseKinesisToS3;
        /**
         * The retention time in days of kube audit logs set on the CloudWatch log group
         */
        kubeAuditRetentionTime?: number;
        /**
         * The kubernetes to scuba connection configuration
         */
        kubernetesScubaReader?: DefenderForContainersAwsOfferingResponseKubernetesScubaReader;
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
         * The externalId used by the data reader to prevent the confused deputy attack
         */
        scubaExternalId?: string;
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
     * The container vulnerability assessment configuration
     */
    export interface DefenderForContainersAwsOfferingResponseContainerVulnerabilityAssessment {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: string;
    }

    /**
     * The container vulnerability assessment task configuration
     */
    export interface DefenderForContainersAwsOfferingResponseContainerVulnerabilityAssessmentTask {
        /**
         * The cloud role ARN in AWS for this feature
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
     * The kubernetes to scuba connection configuration
     */
    export interface DefenderForContainersAwsOfferingResponseKubernetesScubaReader {
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
     * The containers GCP offering
     */
    export interface DefenderForContainersGcpOfferingResponse {
        /**
         * Is audit logs data collection enabled
         */
        auditLogsAutoProvisioningFlag?: boolean;
        /**
         * The native cloud connection configuration
         */
        dataPipelineNativeCloudConnection?: DefenderForContainersGcpOfferingResponseDataPipelineNativeCloudConnection;
        /**
         * Is Microsoft Defender for Cloud Kubernetes agent auto provisioning enabled
         */
        defenderAgentAutoProvisioningFlag?: boolean;
        /**
         * The offering description.
         */
        description: string;
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
         * Is Policy Kubernetes agent auto provisioning enabled
         */
        policyAgentAutoProvisioningFlag?: boolean;
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
         * Configuration for servers Arc auto provisioning
         */
        configuration?: DefenderForDatabasesGcpOfferingResponseConfiguration;
        /**
         * Is arc auto provisioning enabled
         */
        enabled?: boolean;
    }

    /**
     * Configuration for servers Arc auto provisioning
     */
    export interface DefenderForDatabasesGcpOfferingResponseConfiguration {
        /**
         * Optional Arc private link scope resource id to link the Arc agent
         */
        privateLinkScope?: string;
        /**
         * Optional http proxy endpoint to use for the Arc agent
         */
        proxy?: string;
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
     * The Defender for DevOps for Azure DevOps offering
     */
    export interface DefenderForDevOpsAzureDevOpsOfferingResponse {
        /**
         * The offering description.
         */
        description: string;
        /**
         * The type of the security offering.
         * Expected value is 'DefenderForDevOpsAzureDevOps'.
         */
        offeringType: "DefenderForDevOpsAzureDevOps";
    }

    /**
     * The Defender for DevOps for Gitlab offering
     */
    export interface DefenderForDevOpsGitLabOfferingResponse {
        /**
         * The offering description.
         */
        description: string;
        /**
         * The type of the security offering.
         * Expected value is 'DefenderForDevOpsGitLab'.
         */
        offeringType: "DefenderForDevOpsGitLab";
    }

    /**
     * The Defender for DevOps for Github offering
     */
    export interface DefenderForDevOpsGithubOfferingResponse {
        /**
         * The offering description.
         */
        description: string;
        /**
         * The type of the security offering.
         * Expected value is 'DefenderForDevOpsGithub'.
         */
        offeringType: "DefenderForDevOpsGithub";
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
         * Configuration for servers Arc auto provisioning
         */
        configuration?: DefenderForServersAwsOfferingResponseConfiguration;
        /**
         * Is arc auto provisioning enabled
         */
        enabled?: boolean;
    }

    /**
     * Configuration for servers Arc auto provisioning
     */
    export interface DefenderForServersAwsOfferingResponseConfiguration {
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
     * configuration for Vulnerability Assessment autoprovisioning
     */
    export interface DefenderForServersAwsOfferingResponseConfigurationConfiguration {
        /**
         * The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys'
         */
        type?: string;
    }

    /**
     * configuration for Microsoft Defender for Server VM scanning
     */
    export interface DefenderForServersAwsOfferingResponseConfigurationConfigurationConfiguration {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: string;
        /**
         * VM tags that indicates that VM should not be scanned
         */
        exclusionTags?: {[key: string]: string};
        /**
         * The scanning mode for the VM scan.
         */
        scanningMode?: string;
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
        configuration?: DefenderForServersAwsOfferingResponseConfigurationConfiguration;
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
         * configuration for Microsoft Defender for Server VM scanning
         */
        configuration?: DefenderForServersAwsOfferingResponseConfigurationConfigurationConfiguration;
        /**
         * Is Microsoft Defender for Server VM scanning enabled
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
         * Configuration for servers Arc auto provisioning
         */
        configuration?: DefenderForServersGcpOfferingResponseConfiguration;
        /**
         * Is arc auto provisioning enabled
         */
        enabled?: boolean;
    }

    /**
     * Configuration for servers Arc auto provisioning
     */
    export interface DefenderForServersGcpOfferingResponseConfiguration {
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
     * configuration for Vulnerability Assessment autoprovisioning
     */
    export interface DefenderForServersGcpOfferingResponseConfigurationConfiguration {
        /**
         * The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys'
         */
        type?: string;
    }

    /**
     * configuration for Microsoft Defender for Server VM scanning
     */
    export interface DefenderForServersGcpOfferingResponseConfigurationConfigurationConfiguration {
        /**
         * VM tags that indicate that VM should not be scanned
         */
        exclusionTags?: {[key: string]: string};
        /**
         * The scanning mode for the VM scan.
         */
        scanningMode?: string;
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
        configuration?: DefenderForServersGcpOfferingResponseConfigurationConfiguration;
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
         * configuration for Microsoft Defender for Server VM scanning
         */
        configuration?: DefenderForServersGcpOfferingResponseConfigurationConfigurationConfiguration;
        /**
         * Is Microsoft Defender for Server VM scanning enabled
         */
        enabled?: boolean;
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
     * The information protection for AWS offering
     */
    export interface InformationProtectionAwsOfferingResponse {
        /**
         * The offering description.
         */
        description: string;
        /**
         * The native cloud connection configuration
         */
        informationProtection?: InformationProtectionAwsOfferingResponseInformationProtection;
        /**
         * The type of the security offering.
         * Expected value is 'InformationProtectionAws'.
         */
        offeringType: "InformationProtectionAws";
    }

    /**
     * The native cloud connection configuration
     */
    export interface InformationProtectionAwsOfferingResponseInformationProtection {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: string;
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
