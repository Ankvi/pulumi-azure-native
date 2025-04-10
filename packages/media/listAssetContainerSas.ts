import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists storage container URLs with shared access signatures (SAS) for uploading and downloading Asset content. The signatures are derived from the storage account keys.
 *
 * Uses Azure REST API version 2023-01-01.
 */
export function listAssetContainerSas(args: ListAssetContainerSasArgs, opts?: pulumi.InvokeOptions): Promise<ListAssetContainerSasResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:listAssetContainerSas", {
        "accountName": args.accountName,
        "assetName": args.assetName,
        "expiryTime": args.expiryTime,
        "permissions": args.permissions,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAssetContainerSasArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The Asset name.
     */
    assetName: string;
    /**
     * The SAS URL expiration time.  This must be less than 24 hours from the current time.
     */
    expiryTime?: string;
    /**
     * The permissions to set on the SAS URL.
     */
    permissions?: string | types.enums.AssetContainerPermission;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * The Asset Storage container SAS URLs.
 */
export interface ListAssetContainerSasResult {
    /**
     * The list of Asset container SAS URLs.
     */
    readonly assetContainerSasUrls?: string[];
}
/**
 * Lists storage container URLs with shared access signatures (SAS) for uploading and downloading Asset content. The signatures are derived from the storage account keys.
 *
 * Uses Azure REST API version 2023-01-01.
 */
export function listAssetContainerSasOutput(args: ListAssetContainerSasOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAssetContainerSasResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:listAssetContainerSas", {
        "accountName": args.accountName,
        "assetName": args.assetName,
        "expiryTime": args.expiryTime,
        "permissions": args.permissions,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAssetContainerSasOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Asset name.
     */
    assetName: pulumi.Input<string>;
    /**
     * The SAS URL expiration time.  This must be less than 24 hours from the current time.
     */
    expiryTime?: pulumi.Input<string>;
    /**
     * The permissions to set on the SAS URL.
     */
    permissions?: pulumi.Input<string | types.enums.AssetContainerPermission>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}