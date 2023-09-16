import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the access keys of the resource.
 */
export function listWebPubSubKeys(args: ListWebPubSubKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWebPubSubKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:webpubsub/v20230801preview:listWebPubSubKeys", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListWebPubSubKeysArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
}

/**
 * A class represents the access keys of the resource.
 */
export interface ListWebPubSubKeysResult {
    /**
     * Connection string constructed via the primaryKey
     */
    readonly primaryConnectionString?: string;
    /**
     * The primary access key.
     */
    readonly primaryKey?: string;
    /**
     * Connection string constructed via the secondaryKey
     */
    readonly secondaryConnectionString?: string;
    /**
     * The secondary access key.
     */
    readonly secondaryKey?: string;
}
/**
 * Get the access keys of the resource.
 */
export function listWebPubSubKeysOutput(args: ListWebPubSubKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebPubSubKeysResult> {
    return pulumi.output(args).apply((a: any) => listWebPubSubKeys(a, opts))
}

export interface ListWebPubSubKeysOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}
