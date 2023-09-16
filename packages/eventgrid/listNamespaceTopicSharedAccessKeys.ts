import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List the two keys used to publish to a namespace topic.
 * Azure REST API version: 2023-06-01-preview.
 */
export function listNamespaceTopicSharedAccessKeys(args: ListNamespaceTopicSharedAccessKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListNamespaceTopicSharedAccessKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:listNamespaceTopicSharedAccessKeys", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface ListNamespaceTopicSharedAccessKeysArgs {
    /**
     * Name of the namespace.
     */
    namespaceName: string;
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
export interface ListNamespaceTopicSharedAccessKeysResult {
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
 * List the two keys used to publish to a namespace topic.
 * Azure REST API version: 2023-06-01-preview.
 */
export function listNamespaceTopicSharedAccessKeysOutput(args: ListNamespaceTopicSharedAccessKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListNamespaceTopicSharedAccessKeysResult> {
    return pulumi.output(args).apply((a: any) => listNamespaceTopicSharedAccessKeys(a, opts))
}

export interface ListNamespaceTopicSharedAccessKeysOutputArgs {
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the topic.
     */
    topicName: pulumi.Input<string>;
}
