import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The CSPM monitoring for AWS offering configurations
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
     * The Defender for Containers AWS offering configurations
     */
    export interface DefenderForContainersAwsOfferingArgs {
        /**
         * The cloudwatch to kinesis connection configuration
         */
        cloudWatchToKinesis?: pulumi.Input<DefenderForContainersAwsOfferingCloudWatchToKinesisArgs>;
        /**
         * The kinesis to s3 connection configuration
         */
        kinesisToS3?: pulumi.Input<DefenderForContainersAwsOfferingKinesisToS3Args>;
        /**
         * The kubernetes to scuba connection configuration
         */
        kubernetesScubaReader?: pulumi.Input<DefenderForContainersAwsOfferingKubernetesScubaReaderArgs>;
        /**
         * The kubernetes service connection configuration
         */
        kubernetesService?: pulumi.Input<DefenderForContainersAwsOfferingKubernetesServiceArgs>;
        /**
         * The type of the security offering.
         * Expected value is 'DefenderForContainersAws'.
         */
        offeringType: pulumi.Input<"DefenderForContainersAws">;
    }

    /**
     * The cloudwatch to kinesis connection configuration
     */
    export interface DefenderForContainersAwsOfferingCloudWatchToKinesisArgs {
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
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
    }

    /**
     * The kubernetes to scuba connection configuration
     */
    export interface DefenderForContainersAwsOfferingKubernetesScubaReaderArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
    }

    /**
     * The kubernetes service connection configuration
     */
    export interface DefenderForContainersAwsOfferingKubernetesServiceArgs {
        /**
         * The cloud role ARN in AWS for this feature
         */
        cloudRoleArn?: pulumi.Input<string>;
    }

    /**
     * The Defender for Servers AWS offering configurations
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
         * The type of the security offering.
         * Expected value is 'DefenderForServersAws'.
         */
        offeringType: pulumi.Input<"DefenderForServersAws">;
    }

    /**
     * The ARC autoprovisioning configuration
     */
    export interface DefenderForServersAwsOfferingArcAutoProvisioningArgs {
        /**
         * Is arc auto provisioning enabled
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Metadata of Service Principal secret for autoprovisioning
         */
        servicePrincipalSecretMetadata?: pulumi.Input<DefenderForServersAwsOfferingServicePrincipalSecretMetadataArgs>;
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
     * Metadata of Service Principal secret for autoprovisioning
     */
    export interface DefenderForServersAwsOfferingServicePrincipalSecretMetadataArgs {
        /**
         * expiration date of service principal secret
         */
        expiryDate?: pulumi.Input<string>;
        /**
         * name of secret resource in parameter store
         */
        parameterNameInStore?: pulumi.Input<string>;
        /**
         * region of parameter store where secret is kept
         */
        parameterStoreRegion?: pulumi.Input<string>;
    }

    /**
     * The information protection for AWS offering configurations
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

    /**
     * The multi cloud account's organizational data
     */
    export interface SecurityConnectorPropertiesOrganizationalDataArgs {
        /**
         * If the multi cloud account is of membership type organization, list of accounts excluded from offering
         */
        excludedAccountIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The multi cloud account's membership type in the organization
         */
        organizationMembershipType?: pulumi.Input<string | enums.OrganizationMembershipType>;
        /**
         * If the multi cloud account is not of membership type organization, this will be the ID of the account's parent
         */
        parentHierarchyId?: pulumi.Input<string>;
        /**
         * If the multi cloud account is of membership type organization, this will be the name of the onboarding stackset
         */
        stacksetName?: pulumi.Input<string>;
    }
