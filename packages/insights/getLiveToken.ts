import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * **Gets an access token for live metrics stream data.**
 *
 * Uses Azure REST API version 2021-10-14.
 *
 * Other available API versions: 2020-06-02-preview.
 */
export function getLiveToken(args: GetLiveTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetLiveTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights:getLiveToken", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetLiveTokenArgs {
    /**
     * The identifier of the resource.
     */
    resourceUri: string;
}

/**
 * The response to a live token query.
 */
export interface GetLiveTokenResult {
    /**
     * JWT token for accessing live metrics stream data.
     */
    readonly liveToken: string;
}
/**
 * **Gets an access token for live metrics stream data.**
 *
 * Uses Azure REST API version 2021-10-14.
 *
 * Other available API versions: 2020-06-02-preview.
 */
export function getLiveTokenOutput(args: GetLiveTokenOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLiveTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:insights:getLiveToken", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetLiveTokenOutputArgs {
    /**
     * The identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}