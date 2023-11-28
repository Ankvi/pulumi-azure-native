import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a namespace topic.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-12-15-preview.
 */
export function getNamespaceTopic(args: GetNamespaceTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceTopicResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getNamespaceTopic", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetNamespaceTopicArgs {
    /**
     * Name of the namespace.
     */
    namespaceName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the namespace topic.
     */
    topicName: string;
}

/**
 * Namespace topic details.
 */
export interface GetNamespaceTopicResult {
    /**
     * Event retention for the namespace topic expressed in days. The property default value is 1 day.
     * Min event retention duration value is 1 day and max event retention duration value is 1 day.
     */
    readonly eventRetentionInDays?: number;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * This determines the format that is expected for incoming events published to the topic.
     */
    readonly inputSchema?: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the namespace topic.
     */
    readonly provisioningState: string;
    /**
     * Publisher type of the namespace topic.
     */
    readonly publisherType?: string;
    /**
     * The system metadata relating to namespace topic resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a namespace topic.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-12-15-preview.
 */
export function getNamespaceTopicOutput(args: GetNamespaceTopicOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceTopicResult> {
    return pulumi.output(args).apply((a: any) => getNamespaceTopic(a, opts))
}

export interface GetNamespaceTopicOutputArgs {
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the namespace topic.
     */
    topicName: pulumi.Input<string>;
}
