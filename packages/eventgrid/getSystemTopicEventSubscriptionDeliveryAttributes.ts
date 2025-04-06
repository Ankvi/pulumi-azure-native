import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get all delivery attributes for an event subscription.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2022-06-15, 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSystemTopicEventSubscriptionDeliveryAttributes(args: GetSystemTopicEventSubscriptionDeliveryAttributesArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemTopicEventSubscriptionDeliveryAttributesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getSystemTopicEventSubscriptionDeliveryAttributes", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "resourceGroupName": args.resourceGroupName,
        "systemTopicName": args.systemTopicName,
    }, opts);
}

export interface GetSystemTopicEventSubscriptionDeliveryAttributesArgs {
    /**
     * Name of the event subscription.
     */
    eventSubscriptionName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the system topic.
     */
    systemTopicName: string;
}

/**
 * Result of the Get delivery attributes operation.
 */
export interface GetSystemTopicEventSubscriptionDeliveryAttributesResult {
    /**
     * A collection of DeliveryAttributeMapping
     */
    readonly value?: (types.outputs.DynamicDeliveryAttributeMappingResponse | types.outputs.StaticDeliveryAttributeMappingResponse)[];
}
/**
 * Get all delivery attributes for an event subscription.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2022-06-15, 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSystemTopicEventSubscriptionDeliveryAttributesOutput(args: GetSystemTopicEventSubscriptionDeliveryAttributesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSystemTopicEventSubscriptionDeliveryAttributesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getSystemTopicEventSubscriptionDeliveryAttributes", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "resourceGroupName": args.resourceGroupName,
        "systemTopicName": args.systemTopicName,
    }, opts);
}

export interface GetSystemTopicEventSubscriptionDeliveryAttributesOutputArgs {
    /**
     * Name of the event subscription.
     */
    eventSubscriptionName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the system topic.
     */
    systemTopicName: pulumi.Input<string>;
}