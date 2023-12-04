import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List the two keys used to publish to a topic.
 */
export function listTopicSharedAccessKeys(args: ListTopicSharedAccessKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListTopicSharedAccessKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20231215preview:listTopicSharedAccessKeys", {
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface ListTopicSharedAccessKeysArgs {
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the topic.
     */
    topicName: string;
}

/**
 * Shared access keys of the Topic
 */
export interface ListTopicSharedAccessKeysResult {
    /**
     * Shared access key1 for the topic.
     */
    readonly key1?: string;
    /**
     * Shared access key2 for the topic.
     */
    readonly key2?: string;
}
/**
 * List the two keys used to publish to a topic.
 */
export function listTopicSharedAccessKeysOutput(args: ListTopicSharedAccessKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListTopicSharedAccessKeysResult> {
    return pulumi.output(args).apply((a: any) => listTopicSharedAccessKeys(a, opts))
}

export interface ListTopicSharedAccessKeysOutputArgs {
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the topic.
     */
    topicName: pulumi.Input<string>;
}