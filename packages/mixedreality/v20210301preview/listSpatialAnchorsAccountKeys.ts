import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List Both of the 2 Keys of a Spatial Anchors Account
 */
export function listSpatialAnchorsAccountKeys(args: ListSpatialAnchorsAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListSpatialAnchorsAccountKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mixedreality/v20210301preview:listSpatialAnchorsAccountKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListSpatialAnchorsAccountKeysArgs {
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
export interface ListSpatialAnchorsAccountKeysResult {
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
 * List Both of the 2 Keys of a Spatial Anchors Account
 */
export function listSpatialAnchorsAccountKeysOutput(args: ListSpatialAnchorsAccountKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListSpatialAnchorsAccountKeysResult> {
    return pulumi.output(args).apply((a: any) => listSpatialAnchorsAccountKeys(a, opts))
}

export interface ListSpatialAnchorsAccountKeysOutputArgs {
    /**
     * Name of an Mixed Reality Account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}