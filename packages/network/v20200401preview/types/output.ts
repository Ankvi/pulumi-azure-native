import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * IP configuration.
     */
    export interface InboundEndpointIPConfigurationResponse {
        /**
         * Private IP address of the IP configuration.
         */
        privateIpAddress?: string;
        /**
         * Private IP address allocation method.
         */
        privateIpAllocationMethod?: string;
        /**
         * The reference to the subnet bound to the IP configuration.
         */
        subnet?: SubResourceResponse;
    }
    /**
     * inboundEndpointIPConfigurationResponseProvideDefaults sets the appropriate defaults for InboundEndpointIPConfigurationResponse
     */
    export function inboundEndpointIPConfigurationResponseProvideDefaults(val: InboundEndpointIPConfigurationResponse): InboundEndpointIPConfigurationResponse {
        return {
            ...val,
            privateIpAllocationMethod: (val.privateIpAllocationMethod) ?? "Dynamic",
        };
    }

    /**
     * Reference to another ARM resource.
     */
    export interface SubResourceResponse {
        /**
         * Resource ID.
         */
        id?: string;
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

    /**
     * Reference to DNS forwarding ruleset and associated virtual network link.
     */
    export interface VirtualNetworkDnsForwardingRulesetResponse {
        /**
         * DNS Forwarding Ruleset Resource ID.
         */
        id?: string;
        /**
         * The reference to the virtual network link.
         */
        virtualNetworkLink?: SubResourceResponse;
    }
