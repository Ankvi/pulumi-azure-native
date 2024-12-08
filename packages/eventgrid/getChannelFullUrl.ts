import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the full endpoint URL of a partner destination channel.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview.
 */
export function getChannelFullUrl(args: GetChannelFullUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetChannelFullUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getChannelFullUrl", {
        "channelName": args.channelName,
        "partnerNamespaceName": args.partnerNamespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetChannelFullUrlArgs {
    /**
     * Name of the Channel.
     */
    channelName: string;
    /**
     * Name of the partner namespace.
     */
    partnerNamespaceName: string;
    /**
     * The name of the resource group within the partners subscription.
     */
    resourceGroupName: string;
}

/**
 * Full endpoint url of an event subscription
 */
export interface GetChannelFullUrlResult {
    /**
     * The URL that represents the endpoint of the destination of an event subscription.
     */
    readonly endpointUrl?: string;
}
/**
 * Get the full endpoint URL of a partner destination channel.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview.
 */
export function getChannelFullUrlOutput(args: GetChannelFullUrlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetChannelFullUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getChannelFullUrl", {
        "channelName": args.channelName,
        "partnerNamespaceName": args.partnerNamespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetChannelFullUrlOutputArgs {
    /**
     * Name of the Channel.
     */
    channelName: pulumi.Input<string>;
    /**
     * Name of the partner namespace.
     */
    partnerNamespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the partners subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}