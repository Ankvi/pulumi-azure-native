import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an Event Hubs description for the specified Event Hub.
 *
 * Uses Azure REST API version 2022-10-01-preview.
 *
 * Other available API versions: 2023-01-01-preview, 2024-01-01, 2024-05-01-preview.
 */
export function getEventHub(args: GetEventHubArgs, opts?: pulumi.InvokeOptions): Promise<GetEventHubResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventhub:getEventHub", {
        "eventHubName": args.eventHubName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEventHubArgs {
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
 * Single item in List or Get Event Hub operation
 */
export interface GetEventHubResult {
    /**
     * Properties of capture description
     */
    readonly captureDescription?: types.outputs.CaptureDescriptionResponse;
    /**
     * Exact time the Event Hub was created.
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
     * Number of days to retain the events for this Event Hub, value should be 1 to 7 days
     */
    readonly messageRetentionInDays?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
     */
    readonly partitionCount?: number;
    /**
     * Current number of shards on the Event Hub.
     */
    readonly partitionIds: string[];
    /**
     * Event Hub retention settings
     */
    readonly retentionDescription?: types.outputs.RetentionDescriptionResponse;
    /**
     * Enumerates the possible values for the status of the Event Hub.
     */
    readonly status?: string;
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
}
/**
 * Gets an Event Hubs description for the specified Event Hub.
 *
 * Uses Azure REST API version 2022-10-01-preview.
 *
 * Other available API versions: 2023-01-01-preview, 2024-01-01, 2024-05-01-preview.
 */
export function getEventHubOutput(args: GetEventHubOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEventHubResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventhub:getEventHub", {
        "eventHubName": args.eventHubName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEventHubOutputArgs {
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