import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Represents the OpenShift networking configuration
     */
    export interface NetworkProfileArgs {
        /**
         * CIDR of subnet used to create PLS needed for management of the cluster
         */
        managementSubnetCidr?: pulumi.Input<string>;
        /**
         * CIDR for the OpenShift Vnet.
         */
        vnetCidr?: pulumi.Input<string>;
        /**
         * ID of the Vnet created for OSA cluster.
         */
        vnetId?: pulumi.Input<string>;
    }
    /**
     * networkProfileArgsProvideDefaults sets the appropriate defaults for NetworkProfileArgs
     */
    export function networkProfileArgsProvideDefaults(val: NetworkProfileArgs): NetworkProfileArgs {
        return {
            ...val,
            vnetCidr: (val.vnetCidr) ?? "10.0.0.0/8",
        };
    }

    /**
     * Defines further properties on the API.
     */
    export interface OpenShiftAPIPropertiesArgs {
        /**
         * Specifies if API server is public or private.
         */
        privateApiServer?: pulumi.Input<boolean>;
    }

    /**
     * Defines the Identity provider for MS AAD.
     */
    export interface OpenShiftManagedClusterAADIdentityProviderArgs {
        /**
         * The clientId password associated with the provider.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The groupId to be granted cluster admin role.
         */
        customerAdminGroupId?: pulumi.Input<string>;
        /**
         * The kind of the provider.
         * Expected value is 'AADIdentityProvider'.
         */
        kind: pulumi.Input<"AADIdentityProvider">;
        /**
         * The secret password associated with the provider.
         */
        secret?: pulumi.Input<string>;
        /**
         * The tenantId associated with the provider.
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Defines the configuration of the OpenShift cluster VMs.
     */
    export interface OpenShiftManagedClusterAgentPoolProfileArgs {
        /**
         * Number of agents (VMs) to host docker containers.
         */
        count: pulumi.Input<number>;
        /**
         * Unique name of the pool profile in the context of the subscription and resource group.
         */
        name: pulumi.Input<string>;
        /**
         * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
         */
        osType?: pulumi.Input<string | enums.OSType>;
        /**
         * Define the role of the AgentPoolProfile.
         */
        role?: pulumi.Input<string | enums.OpenShiftAgentPoolProfileRole>;
        /**
         * Subnet CIDR for the peering.
         */
        subnetCidr?: pulumi.Input<string>;
        /**
         * Size of agent VMs.
         */
        vmSize: pulumi.Input<string | enums.OpenShiftContainerServiceVMSize>;
    }
    /**
     * openShiftManagedClusterAgentPoolProfileArgsProvideDefaults sets the appropriate defaults for OpenShiftManagedClusterAgentPoolProfileArgs
     */
    export function openShiftManagedClusterAgentPoolProfileArgsProvideDefaults(val: OpenShiftManagedClusterAgentPoolProfileArgs): OpenShiftManagedClusterAgentPoolProfileArgs {
        return {
            ...val,
            subnetCidr: (val.subnetCidr) ?? "10.0.0.0/24",
        };
    }

    /**
     * Defines all possible authentication profiles for the OpenShift cluster.
     */
    export interface OpenShiftManagedClusterAuthProfileArgs {
        /**
         * Type of authentication profile to use.
         */
        identityProviders?: pulumi.Input<pulumi.Input<OpenShiftManagedClusterIdentityProviderArgs>[]>;
    }

    /**
     * Defines the configuration of the identity providers to be used in the OpenShift cluster.
     */
    export interface OpenShiftManagedClusterIdentityProviderArgs {
        /**
         * Name of the provider.
         */
        name?: pulumi.Input<string>;
        /**
         * Configuration of the provider.
         */
        provider?: pulumi.Input<OpenShiftManagedClusterAADIdentityProviderArgs>;
    }

    /**
     * OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs.
     */
    export interface OpenShiftManagedClusterMasterPoolProfileArgs {
        /**
         * Defines further properties on the API.
         */
        apiProperties?: pulumi.Input<OpenShiftAPIPropertiesArgs>;
        /**
         * Number of masters (VMs) to host docker containers. The default value is 3.
         */
        count: pulumi.Input<number>;
        /**
         * Subnet CIDR for the peering.
         */
        subnetCidr?: pulumi.Input<string>;
        /**
         * Size of agent VMs.
         */
        vmSize: pulumi.Input<string | enums.OpenShiftContainerServiceVMSize>;
    }

    /**
     * Defines the configuration for Log Analytics integration.
     */
    export interface OpenShiftManagedClusterMonitorProfileArgs {
        /**
         * If the Log analytics integration should be turned on or off
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Azure Resource Manager Resource ID for the Log Analytics workspace to integrate with.
         */
        workspaceResourceID?: pulumi.Input<string>;
    }

    /**
     * Represents an OpenShift router
     */
    export interface OpenShiftRouterProfileArgs {
        /**
         * Name of the router profile.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
     */
    export interface PurchasePlanArgs {
        /**
         * The plan ID.
         */
        name?: pulumi.Input<string>;
        /**
         * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
         */
        product?: pulumi.Input<string>;
        /**
         * The promotion code.
         */
        promotionCode?: pulumi.Input<string>;
        /**
         * The plan ID.
         */
        publisher?: pulumi.Input<string>;
    }
