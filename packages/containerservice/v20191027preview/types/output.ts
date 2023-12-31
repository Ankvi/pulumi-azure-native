import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Represents the OpenShift networking configuration
     */
    export interface NetworkProfileResponse {
        /**
         * CIDR of subnet used to create PLS needed for management of the cluster
         */
        managementSubnetCidr?: string;
        /**
         * CIDR for the OpenShift Vnet.
         */
        vnetCidr?: string;
        /**
         * ID of the Vnet created for OSA cluster.
         */
        vnetId?: string;
    }
    /**
     * networkProfileResponseProvideDefaults sets the appropriate defaults for NetworkProfileResponse
     */
    export function networkProfileResponseProvideDefaults(val: NetworkProfileResponse): NetworkProfileResponse {
        return {
            ...val,
            vnetCidr: (val.vnetCidr) ?? "10.0.0.0/8",
        };
    }

    /**
     * Defines further properties on the API.
     */
    export interface OpenShiftAPIPropertiesResponse {
        /**
         * Specifies if API server is public or private.
         */
        privateApiServer?: boolean;
    }

    /**
     * Defines the Identity provider for MS AAD.
     */
    export interface OpenShiftManagedClusterAADIdentityProviderResponse {
        /**
         * The clientId password associated with the provider.
         */
        clientId?: string;
        /**
         * The groupId to be granted cluster admin role.
         */
        customerAdminGroupId?: string;
        /**
         * The kind of the provider.
         * Expected value is 'AADIdentityProvider'.
         */
        kind: "AADIdentityProvider";
        /**
         * The secret password associated with the provider.
         */
        secret?: string;
        /**
         * The tenantId associated with the provider.
         */
        tenantId?: string;
    }

    /**
     * Defines the configuration of the OpenShift cluster VMs.
     */
    export interface OpenShiftManagedClusterAgentPoolProfileResponse {
        /**
         * Number of agents (VMs) to host docker containers.
         */
        count: number;
        /**
         * Unique name of the pool profile in the context of the subscription and resource group.
         */
        name: string;
        /**
         * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
         */
        osType?: string;
        /**
         * Define the role of the AgentPoolProfile.
         */
        role?: string;
        /**
         * Subnet CIDR for the peering.
         */
        subnetCidr?: string;
        /**
         * Size of agent VMs.
         */
        vmSize: string;
    }
    /**
     * openShiftManagedClusterAgentPoolProfileResponseProvideDefaults sets the appropriate defaults for OpenShiftManagedClusterAgentPoolProfileResponse
     */
    export function openShiftManagedClusterAgentPoolProfileResponseProvideDefaults(val: OpenShiftManagedClusterAgentPoolProfileResponse): OpenShiftManagedClusterAgentPoolProfileResponse {
        return {
            ...val,
            subnetCidr: (val.subnetCidr) ?? "10.0.0.0/24",
        };
    }

    /**
     * Defines all possible authentication profiles for the OpenShift cluster.
     */
    export interface OpenShiftManagedClusterAuthProfileResponse {
        /**
         * Type of authentication profile to use.
         */
        identityProviders?: OpenShiftManagedClusterIdentityProviderResponse[];
    }

    /**
     * Defines the configuration of the identity providers to be used in the OpenShift cluster.
     */
    export interface OpenShiftManagedClusterIdentityProviderResponse {
        /**
         * Name of the provider.
         */
        name?: string;
        /**
         * Configuration of the provider.
         */
        provider?: OpenShiftManagedClusterAADIdentityProviderResponse;
    }

    /**
     * OpenShiftManagedClusterMaterPoolProfile contains configuration for OpenShift master VMs.
     */
    export interface OpenShiftManagedClusterMasterPoolProfileResponse {
        /**
         * Defines further properties on the API.
         */
        apiProperties?: OpenShiftAPIPropertiesResponse;
        /**
         * Number of masters (VMs) to host docker containers. The default value is 3.
         */
        count: number;
        /**
         * Subnet CIDR for the peering.
         */
        subnetCidr?: string;
        /**
         * Size of agent VMs.
         */
        vmSize: string;
    }

    /**
     * Defines the configuration for Log Analytics integration.
     */
    export interface OpenShiftManagedClusterMonitorProfileResponse {
        /**
         * If the Log analytics integration should be turned on or off
         */
        enabled?: boolean;
        /**
         * Azure Resource Manager Resource ID for the Log Analytics workspace to integrate with.
         */
        workspaceResourceID?: string;
    }

    /**
     * Represents an OpenShift router
     */
    export interface OpenShiftRouterProfileResponse {
        /**
         * Auto-allocated FQDN for the OpenShift router.
         */
        fqdn: string;
        /**
         * Name of the router profile.
         */
        name?: string;
        /**
         * DNS subdomain for OpenShift router.
         */
        publicSubdomain: string;
    }

    /**
     * Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
     */
    export interface PurchasePlanResponse {
        /**
         * The plan ID.
         */
        name?: string;
        /**
         * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
         */
        product?: string;
        /**
         * The promotion code.
         */
        promotionCode?: string;
        /**
         * The plan ID.
         */
        publisher?: string;
    }
