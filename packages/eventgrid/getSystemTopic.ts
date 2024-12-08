import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a system topic.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview.
 */
export function getSystemTopic(args: GetSystemTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemTopicResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getSystemTopic", {
        "resourceGroupName": args.resourceGroupName,
        "systemTopicName": args.systemTopicName,
    }, opts);
}

export interface GetSystemTopicArgs {
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
 * EventGrid System Topic.
 */
export interface GetSystemTopicResult {
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Identity information for the resource.
     */
    readonly identity?: types.outputs.IdentityInfoResponse;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Metric resource id for the system topic.
     */
    readonly metricResourceId: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the system topic.
     */
    readonly provisioningState: string;
    /**
     * Source for the system topic.
     */
    readonly source?: string;
    /**
     * The system metadata relating to System Topic resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * TopicType for the system topic.
     */
    readonly topicType?: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a system topic.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview.
 */
export function getSystemTopicOutput(args: GetSystemTopicOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSystemTopicResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getSystemTopic", {
        "resourceGroupName": args.resourceGroupName,
        "systemTopicName": args.systemTopicName,
    }, opts);
}

export interface GetSystemTopicOutputArgs {
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the system topic.
     */
    systemTopicName: pulumi.Input<string>;
}