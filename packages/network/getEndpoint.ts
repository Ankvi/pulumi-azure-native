import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Traffic Manager endpoint.
 * Azure REST API version: 2022-04-01.
 *
 * Other available API versions: 2022-04-01-preview.
 */
export function getEndpoint(args: GetEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getEndpoint", {
        "endpointName": args.endpointName,
        "endpointType": args.endpointType,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEndpointArgs {
    /**
     * The name of the Traffic Manager endpoint.
     */
    endpointName: string;
    /**
     * The type of the Traffic Manager endpoint.
     */
    endpointType: string;
    /**
     * The name of the Traffic Manager profile.
     */
    profileName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Class representing a Traffic Manager endpoint.
 */
export interface GetEndpointResult {
    /**
     * If Always Serve is enabled, probing for endpoint health will be disabled and endpoints will be included in the traffic routing method.
     */
    readonly alwaysServe?: string;
    /**
     * List of custom headers.
     */
    readonly customHeaders?: types.outputs.EndpointPropertiesResponseCustomHeaders[];
    /**
     * Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method.
     */
    readonly endpointLocation?: string;
    /**
     * The monitoring status of the endpoint.
     */
    readonly endpointMonitorStatus?: string;
    /**
     * The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
     */
    readonly endpointStatus?: string;
    /**
     * The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
     */
    readonly geoMapping?: string[];
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
     */
    readonly id?: string;
    /**
     * The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    readonly minChildEndpoints?: number;
    /**
     * The minimum number of IPv4 (DNS record type A) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    readonly minChildEndpointsIPv4?: number;
    /**
     * The minimum number of IPv6 (DNS record type AAAA) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    readonly minChildEndpointsIPv6?: number;
    /**
     * The name of the resource
     */
    readonly name?: string;
    /**
     * The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
     */
    readonly priority?: number;
    /**
     * The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints.
     */
    readonly subnets?: types.outputs.EndpointPropertiesResponseSubnets[];
    /**
     * The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
     */
    readonly target?: string;
    /**
     * The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
     */
    readonly targetResourceId?: string;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    readonly type?: string;
    /**
     * The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
     */
    readonly weight?: number;
}
/**
 * Gets a Traffic Manager endpoint.
 * Azure REST API version: 2022-04-01.
 *
 * Other available API versions: 2022-04-01-preview.
 */
export function getEndpointOutput(args: GetEndpointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getEndpoint", {
        "endpointName": args.endpointName,
        "endpointType": args.endpointType,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEndpointOutputArgs {
    /**
     * The name of the Traffic Manager endpoint.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The type of the Traffic Manager endpoint.
     */
    endpointType: pulumi.Input<string>;
    /**
     * The name of the Traffic Manager profile.
     */
    profileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}