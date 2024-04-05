import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
 */
export function getIotHubResourceEventHubConsumerGroup(args: GetIotHubResourceEventHubConsumerGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetIotHubResourceEventHubConsumerGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devices/v20230630:getIotHubResourceEventHubConsumerGroup", {
        "eventHubEndpointName": args.eventHubEndpointName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetIotHubResourceEventHubConsumerGroupArgs {
    /**
     * The name of the Event Hub-compatible endpoint in the IoT hub.
     */
    eventHubEndpointName: string;
    /**
     * The name of the consumer group to retrieve.
     */
    name: string;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: string;
    /**
     * The name of the IoT hub.
     */
    resourceName: string;
}

/**
 * The properties of the EventHubConsumerGroupInfo object.
 */
export interface GetIotHubResourceEventHubConsumerGroupResult {
    /**
     * The etag.
     */
    readonly etag: string;
    /**
     * The Event Hub-compatible consumer group identifier.
     */
    readonly id: string;
    /**
     * The Event Hub-compatible consumer group name.
     */
    readonly name: string;
    /**
     * The tags.
     */
    readonly properties: any;
    /**
     * the resource type.
     */
    readonly type: string;
}
/**
 * Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
 */
export function getIotHubResourceEventHubConsumerGroupOutput(args: GetIotHubResourceEventHubConsumerGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotHubResourceEventHubConsumerGroupResult> {
    return pulumi.output(args).apply((a: any) => getIotHubResourceEventHubConsumerGroup(a, opts))
}

export interface GetIotHubResourceEventHubConsumerGroupOutputArgs {
    /**
     * The name of the Event Hub-compatible endpoint in the IoT hub.
     */
    eventHubEndpointName: pulumi.Input<string>;
    /**
     * The name of the consumer group to retrieve.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT hub.
     */
    resourceName: pulumi.Input<string>;
}