import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a topic space.
 * Azure REST API version: 2023-06-01-preview.
 */
export function getTopicSpace(args: GetTopicSpaceArgs, opts?: pulumi.InvokeOptions): Promise<GetTopicSpaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getTopicSpace", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "topicSpaceName": args.topicSpaceName,
    }, opts);
}

export interface GetTopicSpaceArgs {
    /**
     * Name of the namespace.
     */
    namespaceName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the Topic space.
     */
    topicSpaceName: string;
}

/**
 * The Topic space resource.
 */
export interface GetTopicSpaceResult {
    /**
     * Description for the Topic Space resource.
     */
    readonly description?: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the TopicSpace resource.
     */
    readonly provisioningState: string;
    /**
     * The system metadata relating to the TopicSpace resource.
     */
    readonly systemData: types.outputs.eventgrid.SystemDataResponse;
    /**
     * The topic filters in the topic space.
     * Example: "topicTemplates": [ 
     *               "devices/foo/bar",
     *               "devices/topic1/+",
     *               "devices/${principal.name}/${principal.attributes.keyName}" ].
     */
    readonly topicTemplates?: string[];
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a topic space.
 * Azure REST API version: 2023-06-01-preview.
 */
export function getTopicSpaceOutput(args: GetTopicSpaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTopicSpaceResult> {
    return pulumi.output(args).apply((a: any) => getTopicSpace(a, opts))
}

export interface GetTopicSpaceOutputArgs {
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Topic space.
     */
    topicSpaceName: pulumi.Input<string>;
}
