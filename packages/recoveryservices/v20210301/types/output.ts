import * as pulumi from "@pulumi/pulumi";
    /**
     * A2A Network Mapping fabric specific settings.
     */
    export interface AzureToAzureNetworkMappingSettingsResponse {
        /**
         * Gets the Instance type.
         * Expected value is 'AzureToAzure'.
         */
        instanceType: "AzureToAzure";
        /**
         * The primary fabric location.
         */
        primaryFabricLocation?: string;
        /**
         * The recovery fabric location.
         */
        recoveryFabricLocation?: string;
    }

    /**
     * Health Error
     */
    export interface HealthErrorResponse {
        /**
         * Error creation time (UTC)
         */
        creationTimeUtc?: string;
        /**
         * Value indicating whether the health error is customer resolvable.
         */
        customerResolvability?: string;
        /**
         * ID of the entity.
         */
        entityId?: string;
        /**
         * Category of error.
         */
        errorCategory?: string;
        /**
         * Error code.
         */
        errorCode?: string;
        /**
         * The health error unique id.
         */
        errorId?: string;
        /**
         * Level of error.
         */
        errorLevel?: string;
        /**
         * Error message.
         */
        errorMessage?: string;
        /**
         * Source of error.
         */
        errorSource?: string;
        /**
         * Type of error.
         */
        errorType?: string;
        /**
         * The inner health errors. HealthError having a list of HealthError as child errors is problematic. InnerHealthError is used because this will prevent an infinite loop of structures when Hydra tries to auto-generate the contract. We are exposing the related health errors as inner health errors and all API consumers can utilize this in the same fashion as Exception -&gt; InnerException.
         */
        innerHealthErrors?: InnerHealthErrorResponse[];
        /**
         * Possible causes of error.
         */
        possibleCauses?: string;
        /**
         * Recommended action to resolve error.
         */
        recommendedAction?: string;
        /**
         * DRA error message.
         */
        recoveryProviderErrorMessage?: string;
        /**
         * Summary message of the entity.
         */
        summaryMessage?: string;
    }

    /**
     * Implements InnerHealthError class. HealthError object has a list of InnerHealthErrors as child errors. InnerHealthError is used because this will prevent an infinite loop of structures when Hydra tries to auto-generate the contract. We are exposing the related health errors as inner health errors and all API consumers can utilize this in the same fashion as Exception -&gt; InnerException.
     */
    export interface InnerHealthErrorResponse {
        /**
         * Error creation time (UTC)
         */
        creationTimeUtc?: string;
        /**
         * ID of the entity.
         */
        entityId?: string;
        /**
         * Category of error.
         */
        errorCategory?: string;
        /**
         * Error code.
         */
        errorCode?: string;
        /**
         * Level of error.
         */
        errorLevel?: string;
        /**
         * Error message.
         */
        errorMessage?: string;
        /**
         * Source of error.
         */
        errorSource?: string;
        /**
         * Type of error.
         */
        errorType?: string;
        /**
         * Possible causes of error.
         */
        possibleCauses?: string;
        /**
         * Recommended action to resolve error.
         */
        recommendedAction?: string;
        /**
         * DRA error message.
         */
        recoveryProviderErrorMessage?: string;
        /**
         * Summary message of the entity.
         */
        summaryMessage?: string;
    }

    /**
     * Network Mapping Properties.
     */
    export interface NetworkMappingPropertiesResponse {
        /**
         * The fabric specific settings.
         */
        fabricSpecificSettings?: AzureToAzureNetworkMappingSettingsResponse | VmmToAzureNetworkMappingSettingsResponse | VmmToVmmNetworkMappingSettingsResponse;
        /**
         * The primary fabric friendly name.
         */
        primaryFabricFriendlyName?: string;
        /**
         * The primary network friendly name.
         */
        primaryNetworkFriendlyName?: string;
        /**
         * The primary network id for network mapping.
         */
        primaryNetworkId?: string;
        /**
         * The recovery fabric ARM id.
         */
        recoveryFabricArmId?: string;
        /**
         * The recovery fabric friendly name.
         */
        recoveryFabricFriendlyName?: string;
        /**
         * The recovery network friendly name.
         */
        recoveryNetworkFriendlyName?: string;
        /**
         * The recovery network id for network mapping.
         */
        recoveryNetworkId?: string;
        /**
         * The pairing state for network mapping.
         */
        state?: string;
    }

    /**
     * vCenter properties.
     */
    export interface VCenterPropertiesResponse {
        /**
         * The VCenter discovery status.
         */
        discoveryStatus?: string;
        /**
         * The ARM resource name of the fabric containing this VCenter.
         */
        fabricArmResourceName?: string;
        /**
         * Friendly name of the vCenter.
         */
        friendlyName?: string;
        /**
         * The health errors for this VCenter.
         */
        healthErrors?: HealthErrorResponse[];
        /**
         * The infrastructure Id of vCenter.
         */
        infrastructureId?: string;
        /**
         * VCenter internal ID.
         */
        internalId?: string;
        /**
         * The IP address of the vCenter.
         */
        ipAddress?: string;
        /**
         * The time when the last heartbeat was received by vCenter.
         */
        lastHeartbeat?: string;
        /**
         * The port number for discovery.
         */
        port?: string;
        /**
         * The process server Id.
         */
        processServerId?: string;
        /**
         * The account Id which has privileges to discover the vCenter.
         */
        runAsAccountId?: string;
    }

    /**
     * E2A Network Mapping fabric specific settings.
     */
    export interface VmmToAzureNetworkMappingSettingsResponse {
        /**
         * Gets the Instance type.
         * Expected value is 'VmmToAzure'.
         */
        instanceType: "VmmToAzure";
    }

    /**
     * E2E Network Mapping fabric specific settings.
     */
    export interface VmmToVmmNetworkMappingSettingsResponse {
        /**
         * Gets the Instance type.
         * Expected value is 'VmmToVmm'.
         */
        instanceType: "VmmToVmm";
    }
