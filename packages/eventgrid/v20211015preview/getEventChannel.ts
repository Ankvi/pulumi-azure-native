import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of an event channel.
 */
export function getEventChannel(args: GetEventChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetEventChannelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20211015preview:getEventChannel", {
        "eventChannelName": args.eventChannelName,
        "partnerNamespaceName": args.partnerNamespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEventChannelArgs {
    /**
     * Name of the event channel.
     */
    eventChannelName: string;
    /**
     * Name of the partner namespace.
     */
    partnerNamespaceName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * Event Channel.
 */
export interface GetEventChannelResult {
    /**
     * Represents the destination of an event channel.
     */
    readonly destination?: types.outputs.EventChannelDestinationResponse;
    /**
     * Expiration time of the event channel. If this timer expires while the corresponding partner topic is never activated,
     * the event channel and corresponding partner topic are deleted.
     */
    readonly expirationTimeIfNotActivatedUtc?: string;
    /**
     * Information about the filter for the event channel.
     */
    readonly filter?: types.outputs.EventChannelFilterResponse;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.
     * This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer.
     */
    readonly partnerTopicFriendlyDescription?: string;
    /**
     * The readiness state of the corresponding partner topic.
     */
    readonly partnerTopicReadinessState: string;
    /**
     * Provisioning state of the event channel.
     */
    readonly provisioningState: string;
    /**
     * Source of the event channel. This represents a unique resource in the partner's resource model.
     */
    readonly source?: types.outputs.EventChannelSourceResponse;
    /**
     * The system metadata relating to Event Channel resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of an event channel.
 */
export function getEventChannelOutput(args: GetEventChannelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEventChannelResult> {
    return pulumi.output(args).apply((a: any) => getEventChannel(a, opts))
}

export interface GetEventChannelOutputArgs {
    /**
     * Name of the event channel.
     */
    eventChannelName: pulumi.Input<string>;
    /**
     * Name of the partner namespace.
     */
    partnerNamespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}