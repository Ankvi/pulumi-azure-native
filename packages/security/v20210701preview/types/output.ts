import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The CSPM monitoring for AWS offering configurations
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
     * The Defender for Containers AWS offering configurations
     */
    export interface DefenderForContainersAwsOfferingResponse {
        /**
         * The cloudwatch to kinesis connection configuration
         */
        cloudWatchToKinesis?: DefenderForContainersAwsOfferingResponseCloudWatchToKinesis;
        /**
         * The offering description.
         */
        description: string;
        /**
         * The kinesis to s3 connection configuration
         */
        kinesisToS3?: DefenderForContainersAwsOfferingResponseKinesisToS3;
        /**
         * The kubernetes to scuba connection configuration
         */
        kubernetesScubaReader?: DefenderForContainersAwsOfferingResponseKubernetesScubaReader;
        /**
         * The kubernetes service connection configuration
         */
        kubernetesService?: DefenderForContainersAwsOfferingResponseKubernetesService;
        /**
         * The type of the security offering.
         * Expected value is 'DefenderForContainersAws'.
         */
        offeringType: "DefenderForContainersAws";
    }

    /**
     * The cloudwatch to kinesis connection configuration
     */
    export interface DefenderForContainersAwsOfferingResponseCloudWatchToKinesis {
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
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: string;
    }

    /**
     * The kubernetes to scuba connection configuration
     */
    export interface DefenderForContainersAwsOfferingResponseKubernetesScubaReader {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: string;
    }

    /**
     * The kubernetes service connection configuration
     */
    export interface DefenderForContainersAwsOfferingResponseKubernetesService {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: string;
    }

    /**
     * The Defender for Servers AWS offering configurations
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
         * The type of the security offering.
         * Expected value is 'DefenderForServersAws'.
         */
        offeringType: "DefenderForServersAws";
    }

    /**
     * The ARC autoprovisioning configuration
     */
    export interface DefenderForServersAwsOfferingResponseArcAutoProvisioning {
        /**
         * Is arc auto provisioning enabled
         */
        enabled?: boolean;
        /**
         * Metadata of Service Principal secret for autoprovisioning
         */
        servicePrincipalSecretMetadata?: DefenderForServersAwsOfferingResponseServicePrincipalSecretMetadata;
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
     * Metadata of Service Principal secret for autoprovisioning
     */
    export interface DefenderForServersAwsOfferingResponseServicePrincipalSecretMetadata {
        /**
         * expiration date of service principal secret
         */
        expiryDate?: string;
        /**
         * name of secret resource in parameter store
         */
        parameterNameInStore?: string;
        /**
         * region of parameter store where secret is kept
         */
        parameterStoreRegion?: string;
    }

    /**
     * The information protection for AWS offering configurations
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
     * The multi cloud account's organizational data
     */
    export interface SecurityConnectorPropertiesResponseOrganizationalData {
        /**
         * If the multi cloud account is of membership type organization, list of accounts excluded from offering
         */
        excludedAccountIds?: string[];
        /**
         * The multi cloud account's membership type in the organization
         */
        organizationMembershipType?: string;
        /**
         * If the multi cloud account is not of membership type organization, this will be the ID of the account's parent
         */
        parentHierarchyId?: string;
        /**
         * If the multi cloud account is of membership type organization, this will be the name of the onboarding stackset
         */
        stacksetName?: string;
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
