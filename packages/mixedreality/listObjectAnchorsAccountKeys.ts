import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List Both of the 2 Keys of an object anchors Account
 * Azure REST API version: 2021-03-01-preview.
 */
export function listObjectAnchorsAccountKeys(args: ListObjectAnchorsAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListObjectAnchorsAccountKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mixedreality:listObjectAnchorsAccountKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListObjectAnchorsAccountKeysArgs {
    /**
     * Name of an Mixed Reality Account.
     */
    accountName: string;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * Developer Keys of account
 */
export interface ListObjectAnchorsAccountKeysResult {
    /**
     * value of primary key.
     */
    readonly primaryKey: string;
    /**
     * value of secondary key.
     */
    readonly secondaryKey: string;
}
/**
 * List Both of the 2 Keys of an object anchors Account
 * Azure REST API version: 2021-03-01-preview.
 */
export function listObjectAnchorsAccountKeysOutput(args: ListObjectAnchorsAccountKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListObjectAnchorsAccountKeysResult> {
    return pulumi.output(args).apply((a: any) => listObjectAnchorsAccountKeys(a, opts))
}

export interface ListObjectAnchorsAccountKeysOutputArgs {
    /**
     * Name of an Mixed Reality Account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
