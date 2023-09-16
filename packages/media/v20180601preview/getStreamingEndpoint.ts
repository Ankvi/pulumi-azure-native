import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a StreamingEndpoint.
 */
export function getStreamingEndpoint(args: GetStreamingEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetStreamingEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media/v20180601preview:getStreamingEndpoint", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "streamingEndpointName": args.streamingEndpointName,
    }, opts);
}

export interface GetStreamingEndpointArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * The name of the StreamingEndpoint.
     */
    streamingEndpointName: string;
}

/**
 * The StreamingEndpoint.
 */
export interface GetStreamingEndpointResult {
    /**
     * The access control definition of the StreamingEndpoint.
     */
    readonly accessControl?: types.outputs.media.v20180601preview.StreamingEndpointAccessControlResponse;
    /**
     * AvailabilitySet name
     */
    readonly availabilitySetName?: string;
    /**
     * The CDN enabled flag.
     */
    readonly cdnEnabled?: boolean;
    /**
     * The CDN profile name.
     */
    readonly cdnProfile?: string;
    /**
     * The CDN provider name.
     */
    readonly cdnProvider?: string;
    /**
     * The exact time the StreamingEndpoint was created.
     */
    readonly created: string;
    /**
     * The StreamingEndpoint access policies.
     */
    readonly crossSiteAccessPolicies?: types.outputs.media.v20180601preview.CrossSiteAccessPoliciesResponse;
    /**
     * The custom host names of the StreamingEndpoint
     */
    readonly customHostNames?: string[];
    /**
     * The StreamingEndpoint description.
     */
    readonly description?: string;
    /**
     * The free trial expiration time.
     */
    readonly freeTrialEndTime: string;
    /**
     * The StreamingEndpoint host name.
     */
    readonly hostName: string;
    /**
     * Fully qualified resource ID for the resource.
     */
    readonly id: string;
    /**
     * The exact time the StreamingEndpoint was last modified.
     */
    readonly lastModified: string;
    /**
     * The Azure Region of the resource.
     */
    readonly location?: string;
    /**
     * Max cache age
     */
    readonly maxCacheAge?: number;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning state of the StreamingEndpoint.
     */
    readonly provisioningState: string;
    /**
     * The resource state of the StreamingEndpoint.
     */
    readonly resourceState: string;
    /**
     * The number of scale units.
     */
    readonly scaleUnits?: number;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets a StreamingEndpoint.
 */
export function getStreamingEndpointOutput(args: GetStreamingEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStreamingEndpointResult> {
    return pulumi.output(args).apply((a: any) => getStreamingEndpoint(a, opts))
}

export interface GetStreamingEndpointOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the StreamingEndpoint.
     */
    streamingEndpointName: pulumi.Input<string>;
}
