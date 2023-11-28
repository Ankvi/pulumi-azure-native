import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
        organizationalData?: pulumi.Input<AwsOrganizationalDataMasterArgs | AwsOrganizationalDataMemberArgs>;
        /**
         * list of regions to scan
         */
        regions?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Scan interval in hours (value should be between 1-hour to 24-hours)
         */
        scanInterval?: pulumi.Input<number>;
    }

    /**
     * The AWS organization data for the master account
     */
    export interface AwsOrganizationalDataMasterArgs {
        /**
         * If the multi cloud account is of membership type organization, list of accounts excluded from offering
         */
        excludedAccountIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The multi cloud account's membership type in the organization
         * Expected value is 'Organization'.
         */
        organizationMembershipType: pulumi.Input<"Organization">;
        /**
         * If the multi cloud account is of membership type organization, this will be the name of the onboarding stackset
         */
        stacksetName?: pulumi.Input<string>;
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
        parentHierarchyId?: pulumi.Input<string>;
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
     * The CSPM monitoring for AWS offering
     */
    export interface CspmMonitorAwsOfferingArgs {
        /**
         * The native cloud connection configuration
         */
        nativeCloudConnection?: pulumi.Input<CspmMonitorAwsOfferingNativeCloudConnectionArgs>;
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
        cloudRoleArn?: pulumi.Input<string>;
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
     * The CSPM monitoring for GCP offering
     */
    export interface CspmMonitorGcpOfferingArgs {
        /**
         * The native cloud connection configuration
         */
        nativeCloudConnection?: pulumi.Input<CspmMonitorGcpOfferingNativeCloudConnectionArgs>;
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
        serviceAccountEmailAddress?: pulumi.Input<string>;
        /**
         * The GCP workload identity provider id for the offering
         */
        workloadIdentityProviderId?: pulumi.Input<string>;
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
     * The CSPM P1 for AWS offering
     */
    export interface DefenderCspmAwsOfferingArgs {
        /**
         * Defenders CSPM Cloud infrastructure entitlement management (CIEM) offering configurations
         */
        ciem?: pulumi.Input<DefenderCspmAwsOfferingCiemArgs>;
        /**
         * The Microsoft Defender Data Sensitivity discovery configuration
         */
        dataSensitivityDiscovery?: pulumi.Input<DefenderCspmAwsOfferingDataSensitivityDiscoveryArgs>;
        /**
         * The databases DSPM configuration
         */
        databasesDspm?: pulumi.Input<DefenderCspmAwsOfferingDatabasesDspmArgs>;
        /**
         * The Microsoft Defender container agentless discovery K8s configuration
         */
        mdcContainersAgentlessDiscoveryK8s?: pulumi.Input<DefenderCspmAwsOfferingMdcContainersAgentlessDiscoveryK8sArgs>;
        /**
         * The Microsoft Defender container image assessment configuration
         */
        mdcContainersImageAssessment?: pulumi.Input<DefenderCspmAwsOfferingMdcContainersImageAssessmentArgs>;
        /**
         * The type of the security offering.
         * Expected value is 'DefenderCspmAws'.
         */
        offeringType: pulumi.Input<"DefenderCspmAws">;
        /**
         * The Microsoft Defender for Server VM scanning configuration
         */
        vmScanners?: pulumi.Input<DefenderCspmAwsOfferingVmScannersArgs>;
    }

    /**
     * Defenders CSPM Cloud infrastructure entitlement management (CIEM) offering configurations
     */
    export interface DefenderCspmAwsOfferingCiemArgs {
        /**
         * Defender CSPM CIEM discovery configuration
         */
        ciemDiscovery?: pulumi.Input<DefenderCspmAwsOfferingCiemDiscoveryArgs>;
        /**
         * Defender CSPM CIEM AWS OIDC (open id connect) configuration
         */
        ciemOidc?: pulumi.Input<DefenderCspmAwsOfferingCiemOidcArgs>;
    }

    /**
     * Defender CSPM CIEM discovery configuration
     */
    export interface DefenderCspmAwsOfferingCiemDiscoveryArgs {
        /**
         * The cloud role ARN in AWS for CIEM discovery
         */
        cloudRoleArn?: pulumi.Input<string>;
    }

    /**
     * Defender CSPM CIEM AWS OIDC (open id connect) configuration
     */
    export interface DefenderCspmAwsOfferingCiemOidcArgs {
        /**
         * the azure active directory app name used of authenticating against AWS
         */
        azureActiveDirectoryAppName?: pulumi.Input<string>;
        /**
         * The cloud role ARN in AWS for CIEM oidc connection
         */
        cloudRoleArn?: pulumi.Input<string>;
    }

    /**
     * configuration for Microsoft Defender for Server VM scanning
     */
    export interface DefenderCspmAwsOfferingConfigurationArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
        /**
         * VM tags that indicates that VM should not be scanned
         */
        exclusionTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The scanning mode for the VM scan.
         */
        scanningMode?: pulumi.Input<string | enums.ScanningMode>;
    }

    /**
     * The Microsoft Defender Data Sensitivity discovery configuration
     */
    export interface DefenderCspmAwsOfferingDataSensitivityDiscoveryArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
        /**
         * Is Microsoft Defender Data Sensitivity discovery enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The databases DSPM configuration
     */
    export interface DefenderCspmAwsOfferingDatabasesDspmArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
        /**
         * Is databases DSPM protection enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The Microsoft Defender container agentless discovery K8s configuration
     */
    export interface DefenderCspmAwsOfferingMdcContainersAgentlessDiscoveryK8sArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
        /**
         * Is Microsoft Defender container agentless discovery K8s enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The Microsoft Defender container image assessment configuration
     */
    export interface DefenderCspmAwsOfferingMdcContainersImageAssessmentArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
        /**
         * Is Microsoft Defender container image assessment enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The Microsoft Defender for Server VM scanning configuration
     */
    export interface DefenderCspmAwsOfferingVmScannersArgs {
        /**
         * configuration for Microsoft Defender for Server VM scanning
         */
        configuration?: pulumi.Input<DefenderCspmAwsOfferingConfigurationArgs>;
        /**
         * Is Microsoft Defender for Server VM scanning enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The CSPM P1 for GCP offering
     */
    export interface DefenderCspmGcpOfferingArgs {
        /**
         * GCP Defenders CSPM Cloud infrastructure entitlement management (CIEM) discovery offering configurations
         */
        ciemDiscovery?: pulumi.Input<DefenderCspmGcpOfferingCiemDiscoveryArgs>;
        /**
         * The Microsoft Defender Data Sensitivity discovery configuration
         */
        dataSensitivityDiscovery?: pulumi.Input<DefenderCspmGcpOfferingDataSensitivityDiscoveryArgs>;
        /**
         * The Microsoft Defender Container agentless discovery configuration
         */
        mdcContainersAgentlessDiscoveryK8s?: pulumi.Input<DefenderCspmGcpOfferingMdcContainersAgentlessDiscoveryK8sArgs>;
        /**
         * The Microsoft Defender Container image assessment configuration
         */
        mdcContainersImageAssessment?: pulumi.Input<DefenderCspmGcpOfferingMdcContainersImageAssessmentArgs>;
        /**
         * The type of the security offering.
         * Expected value is 'DefenderCspmGcp'.
         */
        offeringType: pulumi.Input<"DefenderCspmGcp">;
        /**
         * The Microsoft Defender for Server VM scanning configuration
         */
        vmScanners?: pulumi.Input<DefenderCspmGcpOfferingVmScannersArgs>;
    }

    /**
     * GCP Defenders CSPM Cloud infrastructure entitlement management (CIEM) discovery offering configurations
     */
    export interface DefenderCspmGcpOfferingCiemDiscoveryArgs {
        /**
         * the azure active directory app name used of authenticating against GCP workload identity federation
         */
        azureActiveDirectoryAppName?: pulumi.Input<string>;
        /**
         * The service account email address in GCP for CIEM discovery offering
         */
        serviceAccountEmailAddress?: pulumi.Input<string>;
        /**
         * The GCP workload identity provider id for CIEM discovery offering
         */
        workloadIdentityProviderId?: pulumi.Input<string>;
    }

    /**
     * configuration for Microsoft Defender for Server VM scanning
     */
    export interface DefenderCspmGcpOfferingConfigurationArgs {
        /**
         * VM tags that indicates that VM should not be scanned
         */
        exclusionTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The scanning mode for the VM scan.
         */
        scanningMode?: pulumi.Input<string | enums.ScanningMode>;
    }

    /**
     * The Microsoft Defender Data Sensitivity discovery configuration
     */
    export interface DefenderCspmGcpOfferingDataSensitivityDiscoveryArgs {
        /**
         * Is Microsoft Defender Data Sensitivity discovery enabled
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The service account email address in GCP for this feature
         */
        serviceAccountEmailAddress?: pulumi.Input<string>;
        /**
         * The workload identity provider id in GCP for this feature
         */
        workloadIdentityProviderId?: pulumi.Input<string>;
    }

    /**
     * The Microsoft Defender Container agentless discovery configuration
     */
    export interface DefenderCspmGcpOfferingMdcContainersAgentlessDiscoveryK8sArgs {
        /**
         * Is Microsoft Defender container agentless discovery enabled
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The service account email address in GCP for this feature
         */
        serviceAccountEmailAddress?: pulumi.Input<string>;
        /**
         * The workload identity provider id in GCP for this feature
         */
        workloadIdentityProviderId?: pulumi.Input<string>;
    }

    /**
     * The Microsoft Defender Container image assessment configuration
     */
    export interface DefenderCspmGcpOfferingMdcContainersImageAssessmentArgs {
        /**
         * Is Microsoft Defender container image assessment enabled
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The service account email address in GCP for this feature
         */
        serviceAccountEmailAddress?: pulumi.Input<string>;
        /**
         * The workload identity provider id in GCP for this feature
         */
        workloadIdentityProviderId?: pulumi.Input<string>;
    }

    /**
     * The Microsoft Defender for Server VM scanning configuration
     */
    export interface DefenderCspmGcpOfferingVmScannersArgs {
        /**
         * configuration for Microsoft Defender for Server VM scanning
         */
        configuration?: pulumi.Input<DefenderCspmGcpOfferingConfigurationArgs>;
        /**
         * Is Microsoft Defender for Server VM scanning enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The Defender for Databases AWS offering
     */
    export interface DefenderFoDatabasesAwsOfferingArgs {
        /**
         * The ARC autoprovisioning configuration
         */
        arcAutoProvisioning?: pulumi.Input<DefenderFoDatabasesAwsOfferingArcAutoProvisioningArgs>;
        /**
         * The databases data security posture management (DSPM) configuration
         */
        databasesDspm?: pulumi.Input<DefenderFoDatabasesAwsOfferingDatabasesDspmArgs>;
        /**
         * The type of the security offering.
         * Expected value is 'DefenderForDatabasesAws'.
         */
        offeringType: pulumi.Input<"DefenderForDatabasesAws">;
        /**
         * The RDS configuration
         */
        rds?: pulumi.Input<DefenderFoDatabasesAwsOfferingRdsArgs>;
    }

    /**
     * The ARC autoprovisioning configuration
     */
    export interface DefenderFoDatabasesAwsOfferingArcAutoProvisioningArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
        /**
         * Configuration for servers Arc auto provisioning
         */
        configuration?: pulumi.Input<DefenderFoDatabasesAwsOfferingConfigurationArgs>;
        /**
         * Is arc auto provisioning enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * Configuration for servers Arc auto provisioning
     */
    export interface DefenderFoDatabasesAwsOfferingConfigurationArgs {
        /**
         * Optional Arc private link scope resource id to link the Arc agent
         */
        privateLinkScope?: pulumi.Input<string>;
        /**
         * Optional http proxy endpoint to use for the Arc agent
         */
        proxy?: pulumi.Input<string>;
    }

    /**
     * The databases data security posture management (DSPM) configuration
     */
    export interface DefenderFoDatabasesAwsOfferingDatabasesDspmArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
        /**
         * Is databases data security posture management (DSPM) protection enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The RDS configuration
     */
    export interface DefenderFoDatabasesAwsOfferingRdsArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
        /**
         * Is RDS protection enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The Defender for Containers AWS offering
     */
    export interface DefenderForContainersAwsOfferingArgs {
        /**
         * Is audit logs pipeline auto provisioning enabled
         */
        autoProvisioning?: pulumi.Input<boolean>;
        /**
         * The cloudwatch to kinesis connection configuration
         */
        cloudWatchToKinesis?: pulumi.Input<DefenderForContainersAwsOfferingCloudWatchToKinesisArgs>;
        /**
         * The container vulnerability assessment configuration
         */
        containerVulnerabilityAssessment?: pulumi.Input<DefenderForContainersAwsOfferingContainerVulnerabilityAssessmentArgs>;
        /**
         * The container vulnerability assessment task configuration
         */
        containerVulnerabilityAssessmentTask?: pulumi.Input<DefenderForContainersAwsOfferingContainerVulnerabilityAssessmentTaskArgs>;
        /**
         * Enable container vulnerability assessment feature
         */
        enableContainerVulnerabilityAssessment?: pulumi.Input<boolean>;
        /**
         * The kinesis to s3 connection configuration
         */
        kinesisToS3?: pulumi.Input<DefenderForContainersAwsOfferingKinesisToS3Args>;
        /**
         * The retention time in days of kube audit logs set on the CloudWatch log group
         */
        kubeAuditRetentionTime?: pulumi.Input<number>;
        /**
         * The kubernetes to scuba connection configuration
         */
        kubernetesScubaReader?: pulumi.Input<DefenderForContainersAwsOfferingKubernetesScubaReaderArgs>;
        /**
         * The kubernetes service connection configuration
         */
        kubernetesService?: pulumi.Input<DefenderForContainersAwsOfferingKubernetesServiceArgs>;
        /**
         * The Microsoft Defender container agentless discovery K8s configuration
         */
        mdcContainersAgentlessDiscoveryK8s?: pulumi.Input<DefenderForContainersAwsOfferingMdcContainersAgentlessDiscoveryK8sArgs>;
        /**
         * The Microsoft Defender container image assessment configuration
         */
        mdcContainersImageAssessment?: pulumi.Input<DefenderForContainersAwsOfferingMdcContainersImageAssessmentArgs>;
        /**
         * The type of the security offering.
         * Expected value is 'DefenderForContainersAws'.
         */
        offeringType: pulumi.Input<"DefenderForContainersAws">;
        /**
         * The externalId used by the data reader to prevent the confused deputy attack
         */
        scubaExternalId?: pulumi.Input<string>;
    }

    /**
     * The cloudwatch to kinesis connection configuration
     */
    export interface DefenderForContainersAwsOfferingCloudWatchToKinesisArgs {
        /**
         * The cloud role ARN in AWS used by CloudWatch to transfer data into Kinesis
         */
        cloudRoleArn?: pulumi.Input<string>;
    }

    /**
     * The container vulnerability assessment configuration
     */
    export interface DefenderForContainersAwsOfferingContainerVulnerabilityAssessmentArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
    }

    /**
     * The container vulnerability assessment task configuration
     */
    export interface DefenderForContainersAwsOfferingContainerVulnerabilityAssessmentTaskArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
    }

    /**
     * The kinesis to s3 connection configuration
     */
    export interface DefenderForContainersAwsOfferingKinesisToS3Args {
        /**
         * The cloud role ARN in AWS used by Kinesis to transfer data into S3
         */
        cloudRoleArn?: pulumi.Input<string>;
    }

    /**
     * The kubernetes to scuba connection configuration
     */
    export interface DefenderForContainersAwsOfferingKubernetesScubaReaderArgs {
        /**
         * The cloud role ARN in AWS for this feature used for reading data
         */
        cloudRoleArn?: pulumi.Input<string>;
    }

    /**
     * The kubernetes service connection configuration
     */
    export interface DefenderForContainersAwsOfferingKubernetesServiceArgs {
        /**
         * The cloud role ARN in AWS for this feature used for provisioning resources
         */
        cloudRoleArn?: pulumi.Input<string>;
    }

    /**
     * The Microsoft Defender container agentless discovery K8s configuration
     */
    export interface DefenderForContainersAwsOfferingMdcContainersAgentlessDiscoveryK8sArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
        /**
         * Is Microsoft Defender container agentless discovery K8s enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The Microsoft Defender container image assessment configuration
     */
    export interface DefenderForContainersAwsOfferingMdcContainersImageAssessmentArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
        /**
         * Is Microsoft Defender container image assessment enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The containers GCP offering
     */
    export interface DefenderForContainersGcpOfferingArgs {
        /**
         * Is audit logs data collection enabled
         */
        auditLogsAutoProvisioningFlag?: pulumi.Input<boolean>;
        /**
         * The native cloud connection configuration
         */
        dataPipelineNativeCloudConnection?: pulumi.Input<DefenderForContainersGcpOfferingDataPipelineNativeCloudConnectionArgs>;
        /**
         * Is Microsoft Defender for Cloud Kubernetes agent auto provisioning enabled
         */
        defenderAgentAutoProvisioningFlag?: pulumi.Input<boolean>;
        /**
         * The Microsoft Defender Container agentless discovery configuration
         */
        mdcContainersAgentlessDiscoveryK8s?: pulumi.Input<DefenderForContainersGcpOfferingMdcContainersAgentlessDiscoveryK8sArgs>;
        /**
         * The Microsoft Defender Container image assessment configuration
         */
        mdcContainersImageAssessment?: pulumi.Input<DefenderForContainersGcpOfferingMdcContainersImageAssessmentArgs>;
        /**
         * The native cloud connection configuration
         */
        nativeCloudConnection?: pulumi.Input<DefenderForContainersGcpOfferingNativeCloudConnectionArgs>;
        /**
         * The type of the security offering.
         * Expected value is 'DefenderForContainersGcp'.
         */
        offeringType: pulumi.Input<"DefenderForContainersGcp">;
        /**
         * Is Policy Kubernetes agent auto provisioning enabled
         */
        policyAgentAutoProvisioningFlag?: pulumi.Input<boolean>;
    }

    /**
     * The native cloud connection configuration
     */
    export interface DefenderForContainersGcpOfferingDataPipelineNativeCloudConnectionArgs {
        /**
         * The data collection service account email address in GCP for this offering
         */
        serviceAccountEmailAddress?: pulumi.Input<string>;
        /**
         * The data collection GCP workload identity provider id for this offering
         */
        workloadIdentityProviderId?: pulumi.Input<string>;
    }

    /**
     * The Microsoft Defender Container agentless discovery configuration
     */
    export interface DefenderForContainersGcpOfferingMdcContainersAgentlessDiscoveryK8sArgs {
        /**
         * Is Microsoft Defender container agentless discovery enabled
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The service account email address in GCP for this feature
         */
        serviceAccountEmailAddress?: pulumi.Input<string>;
        /**
         * The workload identity provider id in GCP for this feature
         */
        workloadIdentityProviderId?: pulumi.Input<string>;
    }

    /**
     * The Microsoft Defender Container image assessment configuration
     */
    export interface DefenderForContainersGcpOfferingMdcContainersImageAssessmentArgs {
        /**
         * Is Microsoft Defender container image assessment enabled
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * The service account email address in GCP for this feature
         */
        serviceAccountEmailAddress?: pulumi.Input<string>;
        /**
         * The workload identity provider id in GCP for this feature
         */
        workloadIdentityProviderId?: pulumi.Input<string>;
    }

    /**
     * The native cloud connection configuration
     */
    export interface DefenderForContainersGcpOfferingNativeCloudConnectionArgs {
        /**
         * The service account email address in GCP for this offering
         */
        serviceAccountEmailAddress?: pulumi.Input<string>;
        /**
         * The GCP workload identity provider id for this offering
         */
        workloadIdentityProviderId?: pulumi.Input<string>;
    }

    /**
     * The Defender for Databases GCP offering configurations
     */
    export interface DefenderForDatabasesGcpOfferingArgs {
        /**
         * The ARC autoprovisioning configuration
         */
        arcAutoProvisioning?: pulumi.Input<DefenderForDatabasesGcpOfferingArcAutoProvisioningArgs>;
        /**
         * The native cloud connection configuration
         */
        defenderForDatabasesArcAutoProvisioning?: pulumi.Input<DefenderForDatabasesGcpOfferingDefenderForDatabasesArcAutoProvisioningArgs>;
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
         * Configuration for servers Arc auto provisioning
         */
        configuration?: pulumi.Input<DefenderForDatabasesGcpOfferingConfigurationArgs>;
        /**
         * Is arc auto provisioning enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * Configuration for servers Arc auto provisioning
     */
    export interface DefenderForDatabasesGcpOfferingConfigurationArgs {
        /**
         * Optional Arc private link scope resource id to link the Arc agent
         */
        privateLinkScope?: pulumi.Input<string>;
        /**
         * Optional http proxy endpoint to use for the Arc agent
         */
        proxy?: pulumi.Input<string>;
    }

    /**
     * The native cloud connection configuration
     */
    export interface DefenderForDatabasesGcpOfferingDefenderForDatabasesArcAutoProvisioningArgs {
        /**
         * The service account email address in GCP for this offering
         */
        serviceAccountEmailAddress?: pulumi.Input<string>;
        /**
         * The GCP workload identity provider id for this offering
         */
        workloadIdentityProviderId?: pulumi.Input<string>;
    }

    /**
     * The Defender for DevOps for Azure DevOps offering
     */
    export interface DefenderForDevOpsAzureDevOpsOfferingArgs {
        /**
         * The type of the security offering.
         * Expected value is 'DefenderForDevOpsAzureDevOps'.
         */
        offeringType: pulumi.Input<"DefenderForDevOpsAzureDevOps">;
    }

    /**
     * The Defender for DevOps for Gitlab offering
     */
    export interface DefenderForDevOpsGitLabOfferingArgs {
        /**
         * The type of the security offering.
         * Expected value is 'DefenderForDevOpsGitLab'.
         */
        offeringType: pulumi.Input<"DefenderForDevOpsGitLab">;
    }

    /**
     * The Defender for DevOps for Github offering
     */
    export interface DefenderForDevOpsGithubOfferingArgs {
        /**
         * The type of the security offering.
         * Expected value is 'DefenderForDevOpsGithub'.
         */
        offeringType: pulumi.Input<"DefenderForDevOpsGithub">;
    }

    /**
     * The Defender for Servers AWS offering
     */
    export interface DefenderForServersAwsOfferingArgs {
        /**
         * The ARC autoprovisioning configuration
         */
        arcAutoProvisioning?: pulumi.Input<DefenderForServersAwsOfferingArcAutoProvisioningArgs>;
        /**
         * The Defender for servers connection configuration
         */
        defenderForServers?: pulumi.Input<DefenderForServersAwsOfferingDefenderForServersArgs>;
        /**
         * The Microsoft Defender for Endpoint autoprovisioning configuration
         */
        mdeAutoProvisioning?: pulumi.Input<DefenderForServersAwsOfferingMdeAutoProvisioningArgs>;
        /**
         * The type of the security offering.
         * Expected value is 'DefenderForServersAws'.
         */
        offeringType: pulumi.Input<"DefenderForServersAws">;
        /**
         * configuration for the servers offering subPlan
         */
        subPlan?: pulumi.Input<DefenderForServersAwsOfferingSubPlanArgs>;
        /**
         * The Vulnerability Assessment autoprovisioning configuration
         */
        vaAutoProvisioning?: pulumi.Input<DefenderForServersAwsOfferingVaAutoProvisioningArgs>;
        /**
         * The Microsoft Defender for Server VM scanning configuration
         */
        vmScanners?: pulumi.Input<DefenderForServersAwsOfferingVmScannersArgs>;
    }

    /**
     * The ARC autoprovisioning configuration
     */
    export interface DefenderForServersAwsOfferingArcAutoProvisioningArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
        /**
         * Configuration for servers Arc auto provisioning
         */
        configuration?: pulumi.Input<DefenderForServersAwsOfferingConfigurationArgs>;
        /**
         * Is arc auto provisioning enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * Configuration for servers Arc auto provisioning
     */
    export interface DefenderForServersAwsOfferingConfigurationArgs {
        /**
         * Optional Arc private link scope resource id to link the Arc agent
         */
        privateLinkScope?: pulumi.Input<string>;
        /**
         * Optional HTTP proxy endpoint to use for the Arc agent
         */
        proxy?: pulumi.Input<string>;
    }

    /**
     * configuration for Vulnerability Assessment autoprovisioning
     */
    export interface DefenderForServersAwsOfferingConfigurationConfigurationArgs {
        /**
         * The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys'
         */
        type?: pulumi.Input<string | enums.Type>;
    }

    /**
     * configuration for Microsoft Defender for Server VM scanning
     */
    export interface DefenderForServersAwsOfferingConfigurationConfigurationConfigurationArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
        /**
         * VM tags that indicates that VM should not be scanned
         */
        exclusionTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The scanning mode for the VM scan.
         */
        scanningMode?: pulumi.Input<string | enums.ScanningMode>;
    }

    /**
     * The Defender for servers connection configuration
     */
    export interface DefenderForServersAwsOfferingDefenderForServersArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
    }

    /**
     * The Microsoft Defender for Endpoint autoprovisioning configuration
     */
    export interface DefenderForServersAwsOfferingMdeAutoProvisioningArgs {
        /**
         * configuration for Microsoft Defender for Endpoint autoprovisioning
         */
        configuration?: any;
        /**
         * Is Microsoft Defender for Endpoint auto provisioning enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * configuration for the servers offering subPlan
     */
    export interface DefenderForServersAwsOfferingSubPlanArgs {
        /**
         * The available sub plans
         */
        type?: pulumi.Input<string | enums.SubPlan>;
    }

    /**
     * The Vulnerability Assessment autoprovisioning configuration
     */
    export interface DefenderForServersAwsOfferingVaAutoProvisioningArgs {
        /**
         * configuration for Vulnerability Assessment autoprovisioning
         */
        configuration?: pulumi.Input<DefenderForServersAwsOfferingConfigurationConfigurationArgs>;
        /**
         * Is Vulnerability Assessment auto provisioning enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The Microsoft Defender for Server VM scanning configuration
     */
    export interface DefenderForServersAwsOfferingVmScannersArgs {
        /**
         * configuration for Microsoft Defender for Server VM scanning
         */
        configuration?: pulumi.Input<DefenderForServersAwsOfferingConfigurationConfigurationConfigurationArgs>;
        /**
         * Is Microsoft Defender for Server VM scanning enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The Defender for Servers GCP offering configurations
     */
    export interface DefenderForServersGcpOfferingArgs {
        /**
         * The ARC autoprovisioning configuration
         */
        arcAutoProvisioning?: pulumi.Input<DefenderForServersGcpOfferingArcAutoProvisioningArgs>;
        /**
         * The Defender for servers connection configuration
         */
        defenderForServers?: pulumi.Input<DefenderForServersGcpOfferingDefenderForServersArgs>;
        /**
         * The Microsoft Defender for Endpoint autoprovisioning configuration
         */
        mdeAutoProvisioning?: pulumi.Input<DefenderForServersGcpOfferingMdeAutoProvisioningArgs>;
        /**
         * The type of the security offering.
         * Expected value is 'DefenderForServersGcp'.
         */
        offeringType: pulumi.Input<"DefenderForServersGcp">;
        /**
         * configuration for the servers offering subPlan
         */
        subPlan?: pulumi.Input<DefenderForServersGcpOfferingSubPlanArgs>;
        /**
         * The Vulnerability Assessment autoprovisioning configuration
         */
        vaAutoProvisioning?: pulumi.Input<DefenderForServersGcpOfferingVaAutoProvisioningArgs>;
        /**
         * The Microsoft Defender for Server VM scanning configuration
         */
        vmScanners?: pulumi.Input<DefenderForServersGcpOfferingVmScannersArgs>;
    }

    /**
     * The ARC autoprovisioning configuration
     */
    export interface DefenderForServersGcpOfferingArcAutoProvisioningArgs {
        /**
         * Configuration for servers Arc auto provisioning
         */
        configuration?: pulumi.Input<DefenderForServersGcpOfferingConfigurationArgs>;
        /**
         * Is arc auto provisioning enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * Configuration for servers Arc auto provisioning
     */
    export interface DefenderForServersGcpOfferingConfigurationArgs {
        /**
         * Optional Arc private link scope resource id to link the Arc agent
         */
        privateLinkScope?: pulumi.Input<string>;
        /**
         * Optional HTTP proxy endpoint to use for the Arc agent
         */
        proxy?: pulumi.Input<string>;
    }

    /**
     * configuration for Vulnerability Assessment autoprovisioning
     */
    export interface DefenderForServersGcpOfferingConfigurationConfigurationArgs {
        /**
         * The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys'
         */
        type?: pulumi.Input<string | enums.Type>;
    }

    /**
     * configuration for Microsoft Defender for Server VM scanning
     */
    export interface DefenderForServersGcpOfferingConfigurationConfigurationConfigurationArgs {
        /**
         * VM tags that indicate that VM should not be scanned
         */
        exclusionTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The scanning mode for the VM scan.
         */
        scanningMode?: pulumi.Input<string | enums.ScanningMode>;
    }

    /**
     * The Defender for servers connection configuration
     */
    export interface DefenderForServersGcpOfferingDefenderForServersArgs {
        /**
         * The service account email address in GCP for this feature
         */
        serviceAccountEmailAddress?: pulumi.Input<string>;
        /**
         * The workload identity provider id in GCP for this feature
         */
        workloadIdentityProviderId?: pulumi.Input<string>;
    }

    /**
     * The Microsoft Defender for Endpoint autoprovisioning configuration
     */
    export interface DefenderForServersGcpOfferingMdeAutoProvisioningArgs {
        /**
         * configuration for Microsoft Defender for Endpoint autoprovisioning
         */
        configuration?: any;
        /**
         * Is Microsoft Defender for Endpoint auto provisioning enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * configuration for the servers offering subPlan
     */
    export interface DefenderForServersGcpOfferingSubPlanArgs {
        /**
         * The available sub plans
         */
        type?: pulumi.Input<string | enums.SubPlan>;
    }

    /**
     * The Vulnerability Assessment autoprovisioning configuration
     */
    export interface DefenderForServersGcpOfferingVaAutoProvisioningArgs {
        /**
         * configuration for Vulnerability Assessment autoprovisioning
         */
        configuration?: pulumi.Input<DefenderForServersGcpOfferingConfigurationConfigurationArgs>;
        /**
         * Is Vulnerability Assessment auto provisioning enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The Microsoft Defender for Server VM scanning configuration
     */
    export interface DefenderForServersGcpOfferingVmScannersArgs {
        /**
         * configuration for Microsoft Defender for Server VM scanning
         */
        configuration?: pulumi.Input<DefenderForServersGcpOfferingConfigurationConfigurationConfigurationArgs>;
        /**
         * Is Microsoft Defender for Server VM scanning enabled
         */
        enabled?: pulumi.Input<boolean>;
    }

    /**
     * The gcpOrganization data for the member account
     */
    export interface GcpOrganizationalDataMemberArgs {
        /**
         * The GCP management project number from organizational onboarding
         */
        managementProjectNumber?: pulumi.Input<string>;
        /**
         * The multi cloud account's membership type in the organization
         * Expected value is 'Member'.
         */
        organizationMembershipType: pulumi.Input<"Member">;
        /**
         * If the multi cloud account is not of membership type organization, this will be the ID of the project's parent
         */
        parentHierarchyId?: pulumi.Input<string>;
    }

    /**
     * The gcpOrganization data for the parent account
     */
    export interface GcpOrganizationalDataOrganizationArgs {
        /**
         * If the multi cloud account is of membership type organization, list of accounts excluded from offering
         */
        excludedProjectNumbers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The multi cloud account's membership type in the organization
         * Expected value is 'Organization'.
         */
        organizationMembershipType: pulumi.Input<"Organization">;
        /**
         * The service account email address which represents the organization level permissions container.
         */
        serviceAccountEmailAddress?: pulumi.Input<string>;
        /**
         * The GCP workload identity provider id which represents the permissions required to auto provision security connectors
         */
        workloadIdentityProviderId?: pulumi.Input<string>;
    }

    /**
     * The details about the project represented by the security connector
     */
    export interface GcpProjectDetailsArgs {
        /**
         * The GCP Project id
         */
        projectId?: pulumi.Input<string>;
        /**
         * The unique GCP Project number
         */
        projectNumber?: pulumi.Input<string>;
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
        organizationalData?: pulumi.Input<GcpOrganizationalDataMemberArgs | GcpOrganizationalDataOrganizationArgs>;
        /**
         * The Gcp project's details
         */
        projectDetails?: pulumi.Input<GcpProjectDetailsArgs>;
        /**
         * Scan interval in hours (value should be between 1-hour to 24-hours)
         */
        scanInterval?: pulumi.Input<number>;
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
     * The information protection for AWS offering
     */
    export interface InformationProtectionAwsOfferingArgs {
        /**
         * The native cloud connection configuration
         */
        informationProtection?: pulumi.Input<InformationProtectionAwsOfferingInformationProtectionArgs>;
        /**
         * The type of the security offering.
         * Expected value is 'InformationProtectionAws'.
         */
        offeringType: pulumi.Input<"InformationProtectionAws">;
    }

    /**
     * The native cloud connection configuration
     */
    export interface InformationProtectionAwsOfferingInformationProtectionArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
    }
