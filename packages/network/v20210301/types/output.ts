import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Custom IP prefix resource.
     */
    export interface CustomIpPrefixResponse {
        /**
         * Authorization message for WAN validation.
         */
        authorizationMessage?: string;
        /**
         * The list of all Children for IPv6 /48 CustomIpPrefix.
         */
        childCustomIpPrefixes: CustomIpPrefixResponse[];
        /**
         * The prefix range in CIDR notation. Should include the start address and the prefix length.
         */
        cidr?: string;
        /**
         * The commissioned state of the Custom IP Prefix.
         */
        commissionedState?: string;
        /**
         * The Parent CustomIpPrefix for IPv6 /64 CustomIpPrefix.
         */
        customIpPrefixParent?: CustomIpPrefixResponse;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * The extended location of the custom IP prefix.
         */
        extendedLocation?: ExtendedLocationResponse;
        /**
         * The reason why resource is in failed state.
         */
        failedReason: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The provisioning state of the custom IP prefix resource.
         */
        provisioningState: string;
        /**
         * The list of all referenced PublicIpPrefixes.
         */
        publicIpPrefixes: SubResourceResponse[];
        /**
         * The resource GUID property of the custom IP prefix resource.
         */
        resourceGuid: string;
        /**
         * Signed message for WAN validation.
         */
        signedMessage?: string;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
        /**
         * A list of availability zones denoting the IP allocated for the resource needs to come from.
         */
        zones?: string[];
    }

    /**
     * ExpressRoute circuit peering identifier.
     */
    export interface ExpressRouteCircuitPeeringIdResponse {
        /**
         * The ID of the ExpressRoute circuit peering.
         */
        id?: string;
    }

    /**
     * ExpressRouteConnection resource.
     */
    export interface ExpressRouteConnectionResponse {
        /**
         * Authorization key to establish the connection.
         */
        authorizationKey?: string;
        /**
         * Enable internet security.
         */
        enableInternetSecurity?: boolean;
        /**
         * The ExpressRoute circuit peering.
         */
        expressRouteCircuitPeering: ExpressRouteCircuitPeeringIdResponse;
        /**
         * Enable FastPath to vWan Firewall hub.
         */
        expressRouteGatewayBypass?: boolean;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource.
         */
        name: string;
        /**
         * The provisioning state of the express route connection resource.
         */
        provisioningState: string;
        /**
         * The Routing Configuration indicating the associated and propagated route tables on this connection.
         */
        routingConfiguration?: RoutingConfigurationResponse;
        /**
         * The routing weight associated to the connection.
         */
        routingWeight?: number;
    }

    /**
     * Configuration for auto scaling.
     */
    export interface ExpressRouteGatewayPropertiesResponseAutoScaleConfiguration {
        /**
         * Minimum and maximum number of scale units to deploy.
         */
        bounds?: ExpressRouteGatewayPropertiesResponseBounds;
    }

    /**
     * Minimum and maximum number of scale units to deploy.
     */
    export interface ExpressRouteGatewayPropertiesResponseBounds {
        /**
         * Maximum number of scale units deployed for ExpressRoute gateway.
         */
        max?: number;
        /**
         * Minimum number of scale units deployed for ExpressRoute gateway.
         */
        min?: number;
    }

    /**
     * ExtendedLocation complex type.
     */
    export interface ExtendedLocationResponse {
        /**
         * The name of the extended location.
         */
        name?: string;
        /**
         * The type of the extended location.
         */
        type?: string;
    }

    /**
     * The list of RouteTables to advertise the routes to.
     */
    export interface PropagatedRouteTableResponse {
        /**
         * The list of resource ids of all the RouteTables.
         */
        ids?: SubResourceResponse[];
        /**
         * The list of labels.
         */
        labels?: string[];
    }

    /**
     * Routing Configuration indicating the associated and propagated route tables for this connection.
     */
    export interface RoutingConfigurationResponse {
        /**
         * The resource id RouteTable associated with this RoutingConfiguration.
         */
        associatedRouteTable?: SubResourceResponse;
        /**
         * The list of RouteTables to advertise the routes to.
         */
        propagatedRouteTables?: PropagatedRouteTableResponse;
        /**
         * List of routes that control routing from VirtualHub into a virtual network connection.
         */
        vnetRoutes?: VnetRouteResponse;
    }

    /**
     * List of all Static Routes.
     */
    export interface StaticRouteResponse {
        /**
         * List of all address prefixes.
         */
        addressPrefixes?: string[];
        /**
         * The name of the StaticRoute that is unique within a VnetRoute.
         */
        name?: string;
        /**
         * The ip address of the next hop.
         */
        nextHopIpAddress?: string;
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

    /**
     * Virtual Hub identifier.
     */
    export interface VirtualHubIdResponse {
        /**
         * The resource URI for the Virtual Hub where the ExpressRoute gateway is or will be deployed. The Virtual Hub resource and the ExpressRoute gateway resource reside in the same subscription.
         */
        id?: string;
    }

    /**
     * List of routes that control routing from VirtualHub into a virtual network connection.
     */
    export interface VnetRouteResponse {
        /**
         * The list of references to HubBgpConnection objects.
         */
        bgpConnections: SubResourceResponse[];
        /**
         * List of all Static Routes.
         */
        staticRoutes?: StaticRouteResponse[];
    }
