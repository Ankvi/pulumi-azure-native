import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Asset storage encryption keys used to decrypt content created by version 2 of the Media Services API
 */
export function getAssetEncryptionKey(args: GetAssetEncryptionKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetAssetEncryptionKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media/v20230101:getAssetEncryptionKey", {
        "accountName": args.accountName,
        "assetName": args.assetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssetEncryptionKeyArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The Asset name.
     */
    assetName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Data needed to decrypt asset files encrypted with legacy storage encryption.
 */
export interface GetAssetEncryptionKeyResult {
    /**
     * Asset File encryption metadata.
     */
    readonly assetFileEncryptionMetadata?: types.outputs.AssetFileEncryptionMetadataResponse[];
    /**
     * The Asset File storage encryption key.
     */
    readonly key?: string;
}
/**
 * Gets the Asset storage encryption keys used to decrypt content created by version 2 of the Media Services API
 */
export function getAssetEncryptionKeyOutput(args: GetAssetEncryptionKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAssetEncryptionKeyResult> {
    return pulumi.output(args).apply((a: any) => getAssetEncryptionKey(a, opts))
}

export interface GetAssetEncryptionKeyOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Asset name.
     */
    assetName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}