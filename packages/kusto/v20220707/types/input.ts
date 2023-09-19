import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Represents an accepted audience trusted by the cluster.
     */
    export interface AcceptedAudiencesArgs {
        /**
         * GUID or valid URL representing an accepted audience.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Azure SKU definition.
     */
    export interface AzureSkuArgs {
        /**
         * The number of instances of the cluster.
         */
        capacity?: pulumi.Input<number>;
        /**
         * SKU name.
         */
        name: pulumi.Input<string | enums.AzureSkuName>;
        /**
         * SKU tier.
         */
        tier: pulumi.Input<string | enums.AzureSkuTier>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove all identities.
         */
        type: pulumi.Input<string | enums.IdentityType>;
        /**
         * The list of user identities associated with the Kusto cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Properties of the key vault.
     */
    export interface KeyVaultPropertiesArgs {
        /**
         * The name of the key vault key.
         */
        keyName?: pulumi.Input<string>;
        /**
         * The Uri of the key vault.
         */
        keyVaultUri?: pulumi.Input<string>;
        /**
         * The version of the key vault key.
         */
        keyVersion?: pulumi.Input<string>;
        /**
         * The user assigned identity (ARM resource id) that has access to the key.
         */
        userIdentity?: pulumi.Input<string>;
    }

    /**
     * A class that contains the optimized auto scale definition.
     */
    export interface OptimizedAutoscaleArgs {
        /**
         * A boolean value that indicate if the optimized autoscale feature is enabled or not.
         */
        isEnabled: pulumi.Input<boolean>;
        /**
         * Maximum allowed instances count.
         */
        maximum: pulumi.Input<number>;
        /**
         * Minimum allowed instances count.
         */
        minimum: pulumi.Input<number>;
        /**
         * The version of the template defined, for instance 1.
         */
        version: pulumi.Input<number>;
    }

    /**
     * Represents a tenant ID that is trusted by the cluster.
     */
    export interface TrustedExternalTenantArgs {
        /**
         * GUID representing an external tenant.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * A class that contains virtual network definition.
     */
    export interface VirtualNetworkConfigurationArgs {
        /**
         * Data management's service public IP address resource id.
         */
        dataManagementPublicIpId: pulumi.Input<string>;
        /**
         * Engine service's public IP address resource id.
         */
        enginePublicIpId: pulumi.Input<string>;
        /**
         * The subnet resource id.
         */
        subnetId: pulumi.Input<string>;
    }
