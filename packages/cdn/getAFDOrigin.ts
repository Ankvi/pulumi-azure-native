import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing origin within an origin group.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview.
 */
export function getAFDOrigin(args: GetAFDOriginArgs, opts?: pulumi.InvokeOptions): Promise<GetAFDOriginResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getAFDOrigin", {
        "originGroupName": args.originGroupName,
        "originName": args.originName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAFDOriginArgs {
    /**
     * Name of the origin group which is unique within the profile.
     */
    originGroupName: string;
    /**
     * Name of the origin which is unique within the profile.
     */
    originName: string;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Azure Front Door origin is the source of the content being delivered via Azure Front Door. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.
 */
export interface GetAFDOriginResult {
    /**
     * Resource reference to the Azure origin resource.
     */
    readonly azureOrigin?: types.outputs.ResourceReferenceResponse;
    readonly deploymentStatus: string;
    /**
     * Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
     */
    readonly enabledState?: string;
    /**
     * Whether to enable certificate name check at origin level
     */
    readonly enforceCertificateNameCheck?: boolean;
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
     * The name of the origin group which contains this origin.
     */
    readonly originGroupName: string;
    /**
     * The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure Front Door origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint
     */
    readonly originHostHeader?: string;
    /**
     * Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5
     */
    readonly priority?: number;
    /**
     * Provisioning status
     */
    readonly provisioningState: string;
    /**
     * The properties of the private link resource for private origin.
     */
    readonly sharedPrivateLinkResource?: types.outputs.SharedPrivateLinkResourcePropertiesResponse;
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
 * Gets an existing origin within an origin group.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview.
 */
export function getAFDOriginOutput(args: GetAFDOriginOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAFDOriginResult> {
    return pulumi.output(args).apply((a: any) => getAFDOrigin(a, opts))
}

export interface GetAFDOriginOutputArgs {
    /**
     * Name of the origin group which is unique within the profile.
     */
    originGroupName: pulumi.Input<string>;
    /**
     * Name of the origin which is unique within the profile.
     */
    originName: pulumi.Input<string>;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}