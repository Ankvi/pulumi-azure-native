import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List the two keys used to publish to a partner namespace.
 */
export function listPartnerNamespaceSharedAccessKeys(args: ListPartnerNamespaceSharedAccessKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListPartnerNamespaceSharedAccessKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20231215preview:listPartnerNamespaceSharedAccessKeys", {
        "partnerNamespaceName": args.partnerNamespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListPartnerNamespaceSharedAccessKeysArgs {
    /**
     * Name of the partner namespace.
     */
    partnerNamespaceName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * Shared access keys of the partner namespace.
 */
export interface ListPartnerNamespaceSharedAccessKeysResult {
    /**
     * Shared access key1 for the partner namespace.
     */
    readonly key1?: string;
    /**
     * Shared access key2 for the partner namespace.
     */
    readonly key2?: string;
}
/**
 * List the two keys used to publish to a partner namespace.
 */
export function listPartnerNamespaceSharedAccessKeysOutput(args: ListPartnerNamespaceSharedAccessKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListPartnerNamespaceSharedAccessKeysResult> {
    return pulumi.output(args).apply((a: any) => listPartnerNamespaceSharedAccessKeys(a, opts))
}

export interface ListPartnerNamespaceSharedAccessKeysOutputArgs {
    /**
     * Name of the partner namespace.
     */
    partnerNamespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
