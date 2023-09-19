import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Encryption properties of a Data Pool
 */
export interface DataPoolEncryptionArgs {
    /**
     * The name of Key Vault key
     */
    keyName: pulumi.Input<string>;
    /**
     * The URI of a soft delete-enabled Key Vault that is in the same location as the Data Pool location
     */
    keyVaultUri: pulumi.Input<string>;
    /**
     * The version of Key Vault key
     */
    keyVersion?: pulumi.Input<string>;
    /**
     * The resource ID of a user-assigned Managed Identity used to access the encryption key in the Key Vault. Requires access to the key operations get, wrap, unwrap, and recover
     */
    userAssignedIdentity: pulumi.Input<string>;
}

/**
 * Location of a Data Pool
 */
export interface DataPoolLocationArgs {
    /**
     * Encryption properties of a Data Pool location
     */
    encryption?: pulumi.Input<DataPoolEncryptionArgs>;
    /**
     * The location name
     */
    name: pulumi.Input<string>;
    /**
     * The amount of storage accounts provisioned per Data Pool. Default: 5
     */
    storageAccountCount?: pulumi.Input<number>;
    /**
     * The Storage SKU. Default: Standard_ZRS.
     */
    storageSku?: pulumi.Input<StorageSkuArgs>;
}

/**
 * The Storage SKU.
 */
export interface StorageSkuArgs {
    /**
     * The SKU name
     */
    name: pulumi.Input<string | enums.StorageSkuName>;
}
