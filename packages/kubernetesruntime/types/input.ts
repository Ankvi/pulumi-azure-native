import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of Blob StorageClass
 */
export interface BlobStorageClassTypePropertiesArgs {
    /**
     * Azure Storage Account Key
     */
    azureStorageAccountKey: pulumi.Input<string>;
    /**
     * Azure Storage Account Name
     */
    azureStorageAccountName: pulumi.Input<string>;
    /**
     * Type of a storage class
     * Expected value is 'Blob'.
     */
    type: pulumi.Input<"Blob">;
}

/**
 * The properties of Native StorageClass
 */
export interface NativeStorageClassTypePropertiesArgs {
    /**
     * Type of a storage class
     * Expected value is 'Native'.
     */
    type: pulumi.Input<"Native">;
}

/**
 * The properties of NFS StorageClass
 */
export interface NfsStorageClassTypePropertiesArgs {
    /**
     * Mounted folder permissions. Default is 0. If set as non-zero, driver will perform `chmod` after mount
     */
    mountPermissions?: pulumi.Input<string>;
    /**
     * The action to take when a NFS volume is deleted. Default is Delete
     */
    onDelete?: pulumi.Input<string | enums.NfsDirectoryActionOnVolumeDeletion>;
    /**
     * NFS Server
     */
    server: pulumi.Input<string>;
    /**
     * NFS share
     */
    share: pulumi.Input<string>;
    /**
     * Sub directory under share. If the sub directory doesn't exist, driver will create it
     */
    subDir?: pulumi.Input<string>;
    /**
     * Type of a storage class
     * Expected value is 'NFS'.
     */
    type: pulumi.Input<"NFS">;
}

/**
 * The properties of RWX StorageClass
 */
export interface RwxStorageClassTypePropertiesArgs {
    /**
     * The backing storageclass used to create new storageclass
     */
    backingStorageClassName: pulumi.Input<string>;
    /**
     * Type of a storage class
     * Expected value is 'RWX'.
     */
    type: pulumi.Input<"RWX">;
}

/**
 * The properties of SMB StorageClass
 */
export interface SmbStorageClassTypePropertiesArgs {
    /**
     * Server domain
     */
    domain?: pulumi.Input<string>;
    /**
     * Server password
     */
    password?: pulumi.Input<string>;
    /**
     * SMB Source
     */
    source: pulumi.Input<string>;
    /**
     * Sub directory under share. If the sub directory doesn't exist, driver will create it
     */
    subDir?: pulumi.Input<string>;
    /**
     * Type of a storage class
     * Expected value is 'SMB'.
     */
    type: pulumi.Input<"SMB">;
    /**
     * Server username
     */
    username?: pulumi.Input<string>;
}
