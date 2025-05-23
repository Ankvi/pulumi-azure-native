import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a streaming endpoint.
 *
 * Uses Azure REST API version 2022-11-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2019-05-01-preview, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStreamingEndpoint(args: GetStreamingEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetStreamingEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getStreamingEndpoint", {
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
     * The name of the streaming endpoint, maximum length is 24.
     */
    streamingEndpointName: string;
}

/**
 * The streaming endpoint.
 */
export interface GetStreamingEndpointResult {
    /**
     * The access control definition of the streaming endpoint.
     */
    readonly accessControl?: types.outputs.StreamingEndpointAccessControlResponse;
    /**
     * This feature is deprecated, do not set a value for this property.
     */
    readonly availabilitySetName?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * The exact time the streaming endpoint was created.
     */
    readonly created: string;
    /**
     * The streaming endpoint access policies.
     */
    readonly crossSiteAccessPolicies?: types.outputs.CrossSiteAccessPoliciesResponse;
    /**
     * The custom host names of the streaming endpoint
     */
    readonly customHostNames?: string[];
    /**
     * The streaming endpoint description.
     */
    readonly description?: string;
    /**
     * The free trial expiration time.
     */
    readonly freeTrialEndTime: string;
    /**
     * The streaming endpoint host name.
     */
    readonly hostName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The exact time the streaming endpoint was last modified.
     */
    readonly lastModified: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Max cache age
     */
    readonly maxCacheAge?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the streaming endpoint.
     */
    readonly provisioningState: string;
    /**
     * The resource state of the streaming endpoint.
     */
    readonly resourceState: string;
    /**
     * The number of scale units. Use the Scale operation to adjust this value.
     */
    readonly scaleUnits: number;
    /**
     * The streaming endpoint sku.
     */
    readonly sku?: types.outputs.ArmStreamingEndpointCurrentSkuResponse;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a streaming endpoint.
 *
 * Uses Azure REST API version 2022-11-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2019-05-01-preview, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStreamingEndpointOutput(args: GetStreamingEndpointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStreamingEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:getStreamingEndpoint", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "streamingEndpointName": args.streamingEndpointName,
    }, opts);
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
     * The name of the streaming endpoint, maximum length is 24.
     */
    streamingEndpointName: pulumi.Input<string>;
}