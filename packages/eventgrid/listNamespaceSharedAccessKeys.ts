import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List the two keys used to publish to a namespace.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-12-15-preview, 2024-06-01-preview.
 */
export function listNamespaceSharedAccessKeys(args: ListNamespaceSharedAccessKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListNamespaceSharedAccessKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:listNamespaceSharedAccessKeys", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListNamespaceSharedAccessKeysArgs {
    /**
     * Name of the namespace.
     */
    namespaceName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * Shared access keys of the Namespace.
 */
export interface ListNamespaceSharedAccessKeysResult {
    /**
     * Shared access key1 for the namespace.
     */
    readonly key1?: string;
    /**
     * Shared access key2 for the namespace.
     */
    readonly key2?: string;
}
/**
 * List the two keys used to publish to a namespace.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-12-15-preview, 2024-06-01-preview.
 */
export function listNamespaceSharedAccessKeysOutput(args: ListNamespaceSharedAccessKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListNamespaceSharedAccessKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:listNamespaceSharedAccessKeys", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListNamespaceSharedAccessKeysOutputArgs {
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}