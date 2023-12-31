import * as pulumi from "@pulumi/pulumi";
    export interface WorkloadCrrAccessTokenResponse {
        /**
         * Access token used for authentication
         */
        accessTokenString?: string;
        /**
         * Active region name of BMS Stamp
         */
        bMSActiveRegion?: string;
        /**
         * Backup Management Type
         */
        backupManagementType?: string;
        /**
         * Container Id
         */
        containerId?: string;
        /**
         * Container Unique name
         */
        containerName?: string;
        /**
         * Container Type
         */
        containerType?: string;
        /**
         * CoordinatorServiceStampId to be used by BCM in restore call
         */
        coordinatorServiceStampId?: string;
        /**
         * CoordinatorServiceStampUri to be used by BCM in restore call
         */
        coordinatorServiceStampUri?: string;
        /**
         * Datasource Container Unique Name
         */
        datasourceContainerName?: string;
        /**
         * Datasource Id
         */
        datasourceId?: string;
        /**
         * Datasource Friendly Name
         */
        datasourceName?: string;
        /**
         * Datasource Type
         */
        datasourceType?: string;
        /**
         * Type of the specific object - used for deserializing
         * Expected value is 'WorkloadCrrAccessToken'.
         */
        objectType: "WorkloadCrrAccessToken";
        /**
         * Policy Id
         */
        policyId?: string;
        /**
         * Policy Name
         */
        policyName?: string;
        protectableObjectContainerHostOsName?: string;
        protectableObjectFriendlyName?: string;
        protectableObjectParentLogicalContainerName?: string;
        protectableObjectProtectionState?: string;
        protectableObjectUniqueName?: string;
        protectableObjectWorkloadType?: string;
        /**
         * Protected item container id
         */
        protectionContainerId?: number;
        /**
         * ProtectionServiceStampId to be used by BCM in restore call
         */
        protectionServiceStampId?: string;
        /**
         * ProtectionServiceStampUri to be used by BCM in restore call
         */
        protectionServiceStampUri?: string;
        /**
         * Recovery Point Id
         */
        recoveryPointId?: string;
        /**
         * Recovery Point Time
         */
        recoveryPointTime?: string;
        /**
         * Resource Group name of the source vault
         */
        resourceGroupName?: string;
        /**
         * Resource Id of the source vault
         */
        resourceId?: string;
        /**
         * Resource Name of the source vault
         */
        resourceName?: string;
        /**
         * Recovery point information: Managed virtual machine
         */
        rpIsManagedVirtualMachine?: boolean;
        /**
         * Recovery point information: Original SA option
         */
        rpOriginalSAOption?: boolean;
        /**
         * Recovery point Tier Information
         */
        rpTierInformation?: {[key: string]: string};
        /**
         * Recovery point information: VM size description
         */
        rpVMSizeDescription?: string;
        /**
         * Subscription Id of the source vault
         */
        subscriptionId?: string;
        /**
         * Extended Information about the token like FileSpec etc.
         */
        tokenExtendedInformation?: string;
    }
