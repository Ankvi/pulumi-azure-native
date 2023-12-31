import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List the two keys used to publish to a namespace.
 */
export function listNamespaceSharedAccessKeys(args: ListNamespaceSharedAccessKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListNamespaceSharedAccessKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20231215preview:listNamespaceSharedAccessKeys", {
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
 */
export function listNamespaceSharedAccessKeysOutput(args: ListNamespaceSharedAccessKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListNamespaceSharedAccessKeysResult> {
    return pulumi.output(args).apply((a: any) => listNamespaceSharedAccessKeys(a, opts))
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
