import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Custom IP prefix resource.
     */
    export interface CustomIpPrefixArgs {
        /**
         * Authorization message for WAN validation.
         */
        authorizationMessage?: pulumi.Input<string>;
        /**
         * The prefix range in CIDR notation. Should include the start address and the prefix length.
         */
        cidr?: pulumi.Input<string>;
        /**
         * The commissioned state of the Custom IP Prefix.
         */
        commissionedState?: pulumi.Input<string | enums.CommissionedState>;
        /**
         * The Parent CustomIpPrefix for IPv6 /64 CustomIpPrefix.
         */
        customIpPrefixParent?: pulumi.Input<CustomIpPrefixArgs>;
        /**
         * The extended location of the custom IP prefix.
         */
        extendedLocation?: pulumi.Input<ExtendedLocationArgs>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * Signed message for WAN validation.
         */
        signedMessage?: pulumi.Input<string>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * A list of availability zones denoting the IP allocated for the resource needs to come from.
         */
        zones?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Configuration for auto scaling.
     */
    export interface ExpressRouteGatewayPropertiesAutoScaleConfigurationArgs {
        /**
         * Minimum and maximum number of scale units to deploy.
         */
        bounds?: pulumi.Input<ExpressRouteGatewayPropertiesBoundsArgs>;
    }

    /**
     * Minimum and maximum number of scale units to deploy.
     */
    export interface ExpressRouteGatewayPropertiesBoundsArgs {
        /**
         * Maximum number of scale units deployed for ExpressRoute gateway.
         */
        max?: pulumi.Input<number>;
        /**
         * Minimum number of scale units deployed for ExpressRoute gateway.
         */
        min?: pulumi.Input<number>;
    }

    /**
     * ExtendedLocation complex type.
     */
    export interface ExtendedLocationArgs {
        /**
         * The name of the extended location.
         */
        name?: pulumi.Input<string>;
        /**
         * The type of the extended location.
         */
        type?: pulumi.Input<string | enums.ExtendedLocationTypes>;
    }

    /**
     * Virtual Hub identifier.
     */
    export interface VirtualHubIdArgs {
        /**
         * The resource URI for the Virtual Hub where the ExpressRoute gateway is or will be deployed. The Virtual Hub resource and the ExpressRoute gateway resource reside in the same subscription.
         */
        id?: pulumi.Input<string>;
    }
