import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the full endpoint URL of a partner destination channel.
 */
export function getChannelFullUrl(args: GetChannelFullUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetChannelFullUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20220615:getChannelFullUrl", {
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
 */
export function getChannelFullUrlOutput(args: GetChannelFullUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetChannelFullUrlResult> {
    return pulumi.output(args).apply((a: any) => getChannelFullUrl(a, opts))
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
