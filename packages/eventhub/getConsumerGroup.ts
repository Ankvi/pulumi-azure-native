import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a description for the specified consumer group.
 * Azure REST API version: 2022-10-01-preview.
 *
 * Other available API versions: 2015-08-01, 2023-01-01-preview, 2024-01-01, 2024-05-01-preview.
 */
export function getConsumerGroup(args: GetConsumerGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetConsumerGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventhub:getConsumerGroup", {
        "consumerGroupName": args.consumerGroupName,
        "eventHubName": args.eventHubName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConsumerGroupArgs {
    /**
     * The consumer group name
     */
    consumerGroupName: string;
    /**
     * The Event Hub name
     */
    eventHubName: string;
    /**
     * The Namespace name
     */
    namespaceName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Single item in List or Get Consumer group operation
 */
export interface GetConsumerGroupResult {
    /**
     * Exact time the message was created.
     */
    readonly createdAt: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    readonly type: string;
    /**
     * The exact time the message was updated.
     */
    readonly updatedAt: string;
    /**
     * User Metadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.
     */
    readonly userMetadata?: string;
}
/**
 * Gets a description for the specified consumer group.
 * Azure REST API version: 2022-10-01-preview.
 *
 * Other available API versions: 2015-08-01, 2023-01-01-preview, 2024-01-01, 2024-05-01-preview.
 */
export function getConsumerGroupOutput(args: GetConsumerGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConsumerGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventhub:getConsumerGroup", {
        "consumerGroupName": args.consumerGroupName,
        "eventHubName": args.eventHubName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConsumerGroupOutputArgs {
    /**
     * The consumer group name
     */
    consumerGroupName: pulumi.Input<string>;
    /**
     * The Event Hub name
     */
    eventHubName: pulumi.Input<string>;
    /**
     * The Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}