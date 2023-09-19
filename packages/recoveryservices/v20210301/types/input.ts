import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties of an add vCenter request.
     */
    export interface AddVCenterRequestPropertiesArgs {
        /**
         * The friendly name of the vCenter.
         */
        friendlyName?: pulumi.Input<string>;
        /**
         * The IP address of the vCenter to be discovered.
         */
        ipAddress?: pulumi.Input<string>;
        /**
         * The port number for discovery.
         */
        port?: pulumi.Input<string>;
        /**
         * The process server Id from where the discovery is orchestrated.
         */
        processServerId?: pulumi.Input<string>;
        /**
         * The account Id which has privileges to discover the vCenter.
         */
        runAsAccountId?: pulumi.Input<string>;
    }

    /**
     * Create network mappings input properties/behavior specific to Azure to Azure Network mapping.
     */
    export interface AzureToAzureCreateNetworkMappingInputArgs {
        /**
         * The instance type.
         * Expected value is 'AzureToAzure'.
         */
        instanceType?: pulumi.Input<"AzureToAzure">;
        /**
         * The primary azure vnet Id.
         */
        primaryNetworkId?: pulumi.Input<string>;
    }

    /**
     * Common input details for network mapping operation.
     */
    export interface CreateNetworkMappingInputPropertiesArgs {
        /**
         * Fabric specific input properties.
         */
        fabricSpecificDetails?: pulumi.Input<AzureToAzureCreateNetworkMappingInputArgs | VmmToAzureCreateNetworkMappingInputArgs | VmmToVmmCreateNetworkMappingInputArgs>;
        /**
         * Recovery fabric Name.
         */
        recoveryFabricName?: pulumi.Input<string>;
        /**
         * Recovery network Id.
         */
        recoveryNetworkId?: pulumi.Input<string>;
    }

    /**
     * Create network mappings input properties/behavior specific to Vmm to Azure Network mapping.
     */
    export interface VmmToAzureCreateNetworkMappingInputArgs {
        /**
         * The instance type.
         * Expected value is 'VmmToAzure'.
         */
        instanceType?: pulumi.Input<"VmmToAzure">;
    }

    /**
     * Create network mappings input properties/behavior specific to vmm to vmm Network mapping.
     */
    export interface VmmToVmmCreateNetworkMappingInputArgs {
        /**
         * The instance type.
         * Expected value is 'VmmToVmm'.
         */
        instanceType?: pulumi.Input<"VmmToVmm">;
    }
