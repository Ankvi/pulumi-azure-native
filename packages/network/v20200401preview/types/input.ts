import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * IP configuration.
     */
    export interface InboundEndpointIPConfigurationArgs {
        /**
         * Private IP address of the IP configuration.
         */
        privateIpAddress?: pulumi.Input<string>;
        /**
         * Private IP address allocation method.
         */
        privateIpAllocationMethod?: pulumi.Input<string | enums.IpAllocationMethod>;
        /**
         * The reference to the subnet bound to the IP configuration.
         */
        subnet?: pulumi.Input<SubResourceArgs>;
    }
    /**
     * inboundEndpointIPConfigurationArgsProvideDefaults sets the appropriate defaults for InboundEndpointIPConfigurationArgs
     */
    export function inboundEndpointIPConfigurationArgsProvideDefaults(val: InboundEndpointIPConfigurationArgs): InboundEndpointIPConfigurationArgs {
        return {
            ...val,
            privateIpAllocationMethod: (val.privateIpAllocationMethod) ?? "Dynamic",
        };
    }

    /**
     * Reference to another ARM resource.
     */
    export interface SubResourceArgs {
        /**
         * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
         * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
         * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
         * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
         */
        id?: pulumi.Input<string>;
    }
