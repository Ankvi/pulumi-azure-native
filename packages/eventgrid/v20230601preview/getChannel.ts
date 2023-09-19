import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a channel.
 */
export function getChannel(args: GetChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetChannelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20230601preview:getChannel", {
        "channelName": args.channelName,
        "partnerNamespaceName": args.partnerNamespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetChannelArgs {
    /**
     * Name of the channel.
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
 * Channel info.
 */
export interface GetChannelResult {
    /**
     * The type of the event channel which represents the direction flow of events.
     */
    readonly channelType?: string;
    /**
     * Expiration time of the channel. If this timer expires while the corresponding partner topic is never activated,
     * the channel and corresponding partner topic are deleted.
     */
    readonly expirationTimeIfNotActivatedUtc?: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Context or helpful message that can be used during the approval process by the subscriber.
     */
    readonly messageForActivation?: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * This property should be populated when channelType is PartnerDestination and represents information about the partner destination resource corresponding to the channel.
     */
    readonly partnerDestinationInfo?: types.outputs.WebhookPartnerDestinationInfoResponse;
    /**
     * This property should be populated when channelType is PartnerTopic and represents information about the partner topic resource corresponding to the channel.
     */
    readonly partnerTopicInfo?: types.outputs.PartnerTopicInfoResponse;
    /**
     * Provisioning state of the channel.
     */
    readonly provisioningState?: string;
    /**
     * The readiness state of the corresponding partner topic.
     */
    readonly readinessState?: string;
    /**
     * The system metadata relating to Channel resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a channel.
 */
export function getChannelOutput(args: GetChannelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetChannelResult> {
    return pulumi.output(args).apply((a: any) => getChannel(a, opts))
}

export interface GetChannelOutputArgs {
    /**
     * Name of the channel.
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
