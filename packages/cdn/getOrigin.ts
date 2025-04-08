import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing origin within an endpoint.
 *
 * Uses Azure REST API version 2023-05-01.
 *
 * Other available API versions: 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-09-01.
 */
export function getOrigin(args: GetOriginArgs, opts?: pulumi.InvokeOptions): Promise<GetOriginResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getOrigin", {
        "endpointName": args.endpointName,
        "originName": args.originName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOriginArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: string;
    /**
     * Name of the origin which is unique within the endpoint.
     */
    originName: string;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * CDN origin is the source of the content being delivered via CDN. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.
 */
export interface GetOriginResult {
    /**
     * Origin is enabled for load balancing or not
     */
    readonly enabled?: boolean;
    /**
     * The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint.
     */
    readonly hostName: string;
    /**
     * The value of the HTTP port. Must be between 1 and 65535.
     */
    readonly httpPort?: number;
    /**
     * The value of the HTTPS port. Must be between 1 and 65535.
     */
    readonly httpsPort?: number;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
     */
    readonly originHostHeader?: string;
    /**
     * Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
     */
    readonly priority?: number;
    /**
     * The approval status for the connection to the Private Link
     */
    readonly privateEndpointStatus: string;
    /**
     * The Alias of the Private Link resource. Populating this optional field indicates that this origin is 'Private'
     */
    readonly privateLinkAlias?: string;
    /**
     * A custom message to be included in the approval request to connect to the Private Link.
     */
    readonly privateLinkApprovalMessage?: string;
    /**
     * The location of the Private Link resource. Required only if 'privateLinkResourceId' is populated
     */
    readonly privateLinkLocation?: string;
    /**
     * The Resource Id of the Private Link resource. Populating this optional field indicates that this backend is 'Private'
     */
    readonly privateLinkResourceId?: string;
    /**
     * Provisioning status of the origin.
     */
    readonly provisioningState: string;
    /**
     * Resource status of the origin.
     */
    readonly resourceState: string;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Weight of the origin in given origin group for load balancing. Must be between 1 and 1000
     */
    readonly weight?: number;
}
/**
 * Gets an existing origin within an endpoint.
 *
 * Uses Azure REST API version 2023-05-01.
 *
 * Other available API versions: 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-09-01.
 */
export function getOriginOutput(args: GetOriginOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOriginResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cdn:getOrigin", {
        "endpointName": args.endpointName,
        "originName": args.originName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOriginOutputArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: pulumi.Input<string>;
    /**
     * Name of the origin which is unique within the endpoint.
     */
    originName: pulumi.Input<string>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}