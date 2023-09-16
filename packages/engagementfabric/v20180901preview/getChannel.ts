import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The EngagementFabric channel
 */
export function getChannel(args: GetChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetChannelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:engagementfabric/v20180901preview:getChannel", {
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
 */
export function getChannelOutput(args: GetChannelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetChannelResult> {
    return pulumi.output(args).apply((a: any) => getChannel(a, opts))
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
