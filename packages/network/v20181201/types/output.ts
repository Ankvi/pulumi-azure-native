import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Authorization in an ExpressRouteCircuit resource.
     */
    export interface ExpressRouteCircuitAuthorizationResponse {
        /**
         * The authorization key.
         */
        authorizationKey?: string;
        /**
         * AuthorizationUseStatus. Possible values are: 'Available' and 'InUse'.
         */
        authorizationUseStatus?: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
    }

    /**
     * Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
     */
    export interface ExpressRouteCircuitConnectionResponse {
        /**
         * /29 IP address space to carve out Customer addresses for tunnels.
         */
        addressPrefix?: string;
        /**
         * The authorization key.
         */
        authorizationKey?: string;
        /**
         * Express Route Circuit Connection State. Possible values are: 'Connected' and 'Disconnected'.
         */
        circuitConnectionStatus: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
         */
        expressRouteCircuitPeering?: SubResourceResponse;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
         */
        peerExpressRouteCircuitPeering?: SubResourceResponse;
        /**
         * Provisioning state of the circuit connection resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
    }

    /**
     * Specifies the peering configuration.
     */
    export interface ExpressRouteCircuitPeeringConfigResponse {
        /**
         * The communities of bgp peering. Specified for microsoft peering
         */
        advertisedCommunities?: string[];
        /**
         * The reference of AdvertisedPublicPrefixes.
         */
        advertisedPublicPrefixes?: string[];
        /**
         * AdvertisedPublicPrefixState of the Peering resource. Possible values are 'NotConfigured', 'Configuring', 'Configured', and 'ValidationNeeded'.
         */
        advertisedPublicPrefixesState?: string;
        /**
         * The CustomerASN of the peering.
         */
        customerASN?: number;
        /**
         * The legacy mode of the peering.
         */
        legacyMode?: number;
        /**
         * The RoutingRegistryName of the configuration.
         */
        routingRegistryName?: string;
    }

    /**
     * Peering in an ExpressRouteCircuit resource.
     */
    export interface ExpressRouteCircuitPeeringResponse {
        /**
         * The Azure ASN.
         */
        azureASN?: number;
        /**
         * The list of circuit connections associated with Azure Private Peering for this circuit.
         */
        connections?: ExpressRouteCircuitConnectionResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * The ExpressRoute connection.
         */
        expressRouteConnection?: ExpressRouteConnectionIdResponse;
        /**
         * The GatewayManager Etag.
         */
        gatewayManagerEtag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The IPv6 peering configuration.
         */
        ipv6PeeringConfig?: Ipv6ExpressRouteCircuitPeeringConfigResponse;
        /**
         * Gets whether the provider or the customer last modified the peering.
         */
        lastModifiedBy?: string;
        /**
         * The Microsoft peering configuration.
         */
        microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfigResponse;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The peer ASN.
         */
        peerASN?: number;
        /**
         * The list of peered circuit connections associated with Azure Private Peering for this circuit.
         */
        peeredConnections: PeerExpressRouteCircuitConnectionResponse[];
        /**
         * The peering type.
         */
        peeringType?: string;
        /**
         * The primary port.
         */
        primaryAzurePort?: string;
        /**
         * The primary address prefix.
         */
        primaryPeerAddressPrefix?: string;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The reference of the RouteFilter resource.
         */
        routeFilter?: RouteFilterResponse;
        /**
         * The secondary port.
         */
        secondaryAzurePort?: string;
        /**
         * The secondary address prefix.
         */
        secondaryPeerAddressPrefix?: string;
        /**
         * The shared key.
         */
        sharedKey?: string;
        /**
         * The peering state.
         */
        state?: string;
        /**
         * Gets peering stats.
         */
        stats?: ExpressRouteCircuitStatsResponse;
        /**
         * The VLAN ID.
         */
        vlanId?: number;
    }

    /**
     * Contains ServiceProviderProperties in an ExpressRouteCircuit.
     */
    export interface ExpressRouteCircuitServiceProviderPropertiesResponse {
        /**
         * The BandwidthInMbps.
         */
        bandwidthInMbps?: number;
        /**
         * The peering location.
         */
        peeringLocation?: string;
        /**
         * The serviceProviderName.
         */
        serviceProviderName?: string;
    }

    /**
     * Contains SKU in an ExpressRouteCircuit.
     */
    export interface ExpressRouteCircuitSkuResponse {
        /**
         * The family of the SKU. Possible values are: 'UnlimitedData' and 'MeteredData'.
         */
        family?: string;
        /**
         * The name of the SKU.
         */
        name?: string;
        /**
         * The tier of the SKU. Possible values are 'Standard', 'Premium' or 'Local'.
         */
        tier?: string;
    }

    /**
     * Contains stats associated with the peering.
     */
    export interface ExpressRouteCircuitStatsResponse {
        /**
         * Gets BytesIn of the peering.
         */
        primarybytesIn?: number;
        /**
         * Gets BytesOut of the peering.
         */
        primarybytesOut?: number;
        /**
         * Gets BytesIn of the peering.
         */
        secondarybytesIn?: number;
        /**
         * Gets BytesOut of the peering.
         */
        secondarybytesOut?: number;
    }

    /**
     * The ID of the ExpressRouteConnection.
     */
    export interface ExpressRouteConnectionIdResponse {
        /**
         * The ID of the ExpressRouteConnection.
         */
        id: string;
    }

    /**
     * Contains IPv6 peering config.
     */
    export interface Ipv6ExpressRouteCircuitPeeringConfigResponse {
        /**
         * The Microsoft peering configuration.
         */
        microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfigResponse;
        /**
         * The primary address prefix.
         */
        primaryPeerAddressPrefix?: string;
        /**
         * The reference of the RouteFilter resource.
         */
        routeFilter?: RouteFilterResponse;
        /**
         * The secondary address prefix.
         */
        secondaryPeerAddressPrefix?: string;
        /**
         * The state of peering. Possible values are: 'Disabled' and 'Enabled'
         */
        state?: string;
    }

    /**
     * Peer Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
     */
    export interface PeerExpressRouteCircuitConnectionResponse {
        /**
         * /29 IP address space to carve out Customer addresses for tunnels.
         */
        addressPrefix?: string;
        /**
         * The resource guid of the authorization used for the express route circuit connection.
         */
        authResourceGuid?: string;
        /**
         * Express Route Circuit Connection State. Possible values are: 'Connected' and 'Disconnected'.
         */
        circuitConnectionStatus: string;
        /**
         * The name of the express route circuit connection resource.
         */
        connectionName?: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the circuit.
         */
        expressRouteCircuitPeering?: SubResourceResponse;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
         */
        peerExpressRouteCircuitPeering?: SubResourceResponse;
        /**
         * Provisioning state of the peer express route circuit connection resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
    }

    /**
     * Route Filter Resource.
     */
    export interface RouteFilterResponse {
        /**
         * Gets a unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * A collection of references to express route circuit peerings.
         */
        peerings?: ExpressRouteCircuitPeeringResponse[];
        /**
         * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
         */
        provisioningState: string;
        /**
         * Collection of RouteFilterRules contained within a route filter.
         */
        rules?: RouteFilterRuleResponse[];
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Route Filter Rule Resource
     */
    export interface RouteFilterRuleResponse {
        /**
         * The access type of the rule. Valid values are: 'Allow', 'Deny'
         */
        access: string;
        /**
         * The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']
         */
        communities: string[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
         */
        provisioningState: string;
        /**
         * The rule type of the rule. Valid value is: 'Community'
         */
        routeFilterRuleType: string;
    }

    /**
     * Reference to another subresource.
     */
    export interface SubResourceResponse {
        /**
         * Resource ID.
         */
        id?: string;
    }
