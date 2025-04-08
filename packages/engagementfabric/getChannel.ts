import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The EngagementFabric channel
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getChannel(args: GetChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetChannelResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:engagementfabric:getChannel", {
        "accountName": args.accountName,
        "channelName": args.channelName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetChannelArgs {
    /**
     * Account Name
     */
    accountName: string;
    /**
     * Channel Name
     */
    channelName: string;
    /**
     * Resource Group Name
     */
    resourceGroupName: string;
}

/**
 * The EngagementFabric channel
 */
export interface GetChannelResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The functions to be enabled for the channel
     */
    readonly channelFunctions?: string[];
    /**
     * The channel type
     */
    readonly channelType: string;
    /**
     * The channel credentials
     */
    readonly credentials?: {[key: string]: string};
    /**
     * The ID of the resource
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The fully qualified type of the resource
     */
    readonly type: string;
}
/**
 * The EngagementFabric channel
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getChannelOutput(args: GetChannelOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetChannelResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:engagementfabric:getChannel", {
        "accountName": args.accountName,
        "channelName": args.channelName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetChannelOutputArgs {
    /**
     * Account Name
     */
    accountName: pulumi.Input<string>;
    /**
     * Channel Name
     */
    channelName: pulumi.Input<string>;
    /**
     * Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
}