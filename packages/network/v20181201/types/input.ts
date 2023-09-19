import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Authorization in an ExpressRouteCircuit resource.
     */
    export interface ExpressRouteCircuitAuthorizationArgs {
        /**
         * The authorization key.
         */
        authorizationKey?: pulumi.Input<string>;
        /**
         * AuthorizationUseStatus. Possible values are: 'Available' and 'InUse'.
         */
        authorizationUseStatus?: pulumi.Input<string | enums.AuthorizationUseStatus>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
    }

    /**
     * Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
     */
    export interface ExpressRouteCircuitConnectionArgs {
        /**
         * /29 IP address space to carve out Customer addresses for tunnels.
         */
        addressPrefix?: pulumi.Input<string>;
        /**
         * The authorization key.
         */
        authorizationKey?: pulumi.Input<string>;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
         */
        expressRouteCircuitPeering?: pulumi.Input<SubResourceArgs>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
         */
        peerExpressRouteCircuitPeering?: pulumi.Input<SubResourceArgs>;
    }

    /**
     * Peering in an ExpressRouteCircuit resource.
     */
    export interface ExpressRouteCircuitPeeringArgs {
        /**
         * The Azure ASN.
         */
        azureASN?: pulumi.Input<number>;
        /**
         * The list of circuit connections associated with Azure Private Peering for this circuit.
         */
        connections?: pulumi.Input<pulumi.Input<ExpressRouteCircuitConnectionArgs>[]>;
        /**
         * The GatewayManager Etag.
         */
        gatewayManagerEtag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The IPv6 peering configuration.
         */
        ipv6PeeringConfig?: pulumi.Input<Ipv6ExpressRouteCircuitPeeringConfigArgs>;
        /**
         * Gets whether the provider or the customer last modified the peering.
         */
        lastModifiedBy?: pulumi.Input<string>;
        /**
         * The Microsoft peering configuration.
         */
        microsoftPeeringConfig?: pulumi.Input<ExpressRouteCircuitPeeringConfigArgs>;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The peer ASN.
         */
        peerASN?: pulumi.Input<number>;
        /**
         * The peering type.
         */
        peeringType?: pulumi.Input<string | enums.ExpressRoutePeeringType>;
        /**
         * The primary port.
         */
        primaryAzurePort?: pulumi.Input<string>;
        /**
         * The primary address prefix.
         */
        primaryPeerAddressPrefix?: pulumi.Input<string>;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
        /**
         * The reference of the RouteFilter resource.
         */
        routeFilter?: pulumi.Input<RouteFilterArgs>;
        /**
         * The secondary port.
         */
        secondaryAzurePort?: pulumi.Input<string>;
        /**
         * The secondary address prefix.
         */
        secondaryPeerAddressPrefix?: pulumi.Input<string>;
        /**
         * The shared key.
         */
        sharedKey?: pulumi.Input<string>;
        /**
         * The peering state.
         */
        state?: pulumi.Input<string | enums.ExpressRoutePeeringState>;
        /**
         * Gets peering stats.
         */
        stats?: pulumi.Input<ExpressRouteCircuitStatsArgs>;
        /**
         * The VLAN ID.
         */
        vlanId?: pulumi.Input<number>;
    }

    /**
     * Specifies the peering configuration.
     */
    export interface ExpressRouteCircuitPeeringConfigArgs {
        /**
         * The communities of bgp peering. Specified for microsoft peering
         */
        advertisedCommunities?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The reference of AdvertisedPublicPrefixes.
         */
        advertisedPublicPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * AdvertisedPublicPrefixState of the Peering resource. Possible values are 'NotConfigured', 'Configuring', 'Configured', and 'ValidationNeeded'.
         */
        advertisedPublicPrefixesState?: pulumi.Input<string | enums.ExpressRouteCircuitPeeringAdvertisedPublicPrefixState>;
        /**
         * The CustomerASN of the peering.
         */
        customerASN?: pulumi.Input<number>;
        /**
         * The legacy mode of the peering.
         */
        legacyMode?: pulumi.Input<number>;
        /**
         * The RoutingRegistryName of the configuration.
         */
        routingRegistryName?: pulumi.Input<string>;
    }

    /**
     * Contains ServiceProviderProperties in an ExpressRouteCircuit.
     */
    export interface ExpressRouteCircuitServiceProviderPropertiesArgs {
        /**
         * The BandwidthInMbps.
         */
        bandwidthInMbps?: pulumi.Input<number>;
        /**
         * The peering location.
         */
        peeringLocation?: pulumi.Input<string>;
        /**
         * The serviceProviderName.
         */
        serviceProviderName?: pulumi.Input<string>;
    }

    /**
     * Contains SKU in an ExpressRouteCircuit.
     */
    export interface ExpressRouteCircuitSkuArgs {
        /**
         * The family of the SKU. Possible values are: 'UnlimitedData' and 'MeteredData'.
         */
        family?: pulumi.Input<string | enums.ExpressRouteCircuitSkuFamily>;
        /**
         * The name of the SKU.
         */
        name?: pulumi.Input<string>;
        /**
         * The tier of the SKU. Possible values are 'Standard', 'Premium' or 'Local'.
         */
        tier?: pulumi.Input<string | enums.ExpressRouteCircuitSkuTier>;
    }

    /**
     * Contains stats associated with the peering.
     */
    export interface ExpressRouteCircuitStatsArgs {
        /**
         * Gets BytesIn of the peering.
         */
        primarybytesIn?: pulumi.Input<number>;
        /**
         * Gets BytesOut of the peering.
         */
        primarybytesOut?: pulumi.Input<number>;
        /**
         * Gets BytesIn of the peering.
         */
        secondarybytesIn?: pulumi.Input<number>;
        /**
         * Gets BytesOut of the peering.
         */
        secondarybytesOut?: pulumi.Input<number>;
    }

    /**
     * Contains IPv6 peering config.
     */
    export interface Ipv6ExpressRouteCircuitPeeringConfigArgs {
        /**
         * The Microsoft peering configuration.
         */
        microsoftPeeringConfig?: pulumi.Input<ExpressRouteCircuitPeeringConfigArgs>;
        /**
         * The primary address prefix.
         */
        primaryPeerAddressPrefix?: pulumi.Input<string>;
        /**
         * The reference of the RouteFilter resource.
         */
        routeFilter?: pulumi.Input<RouteFilterArgs>;
        /**
         * The secondary address prefix.
         */
        secondaryPeerAddressPrefix?: pulumi.Input<string>;
        /**
         * The state of peering. Possible values are: 'Disabled' and 'Enabled'
         */
        state?: pulumi.Input<string | enums.ExpressRouteCircuitPeeringState>;
    }

    /**
     * Route Filter Resource.
     */
    export interface RouteFilterArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location: pulumi.Input<string>;
        /**
         * A collection of references to express route circuit peerings.
         */
        peerings?: pulumi.Input<pulumi.Input<ExpressRouteCircuitPeeringArgs>[]>;
        /**
         * Collection of RouteFilterRules contained within a route filter.
         */
        rules?: pulumi.Input<pulumi.Input<RouteFilterRuleArgs>[]>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Route Filter Rule Resource
     */
    export interface RouteFilterRuleArgs {
        /**
         * The access type of the rule. Valid values are: 'Allow', 'Deny'
         */
        access: pulumi.Input<string | enums.Access>;
        /**
         * The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']
         */
        communities: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The rule type of the rule. Valid value is: 'Community'
         */
        routeFilterRuleType: pulumi.Input<string | enums.RouteFilterRuleType>;
    }

    /**
     * Reference to another subresource.
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
