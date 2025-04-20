import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of Blob StorageClass
 */
export interface BlobStorageClassTypePropertiesResponse {
    /**
     * Azure Storage Account Key
     */
    azureStorageAccountKey: string;
    /**
     * Azure Storage Account Name
     */
    azureStorageAccountName: string;
    /**
     * Type of a storage class
     * Expected value is 'Blob'.
     */
    type: "Blob";
}

/**
 * The properties of Native StorageClass
 */
export interface NativeStorageClassTypePropertiesResponse {
    /**
     * Type of a storage class
     * Expected value is 'Native'.
     */
    type: "Native";
}

/**
 * The properties of NFS StorageClass
 */
export interface NfsStorageClassTypePropertiesResponse {
    /**
     * Mounted folder permissions. Default is 0. If set as non-zero, driver will perform `chmod` after mount
     */
    mountPermissions?: string;
    /**
     * The action to take when a NFS volume is deleted. Default is Delete
     */
    onDelete?: string;
    /**
     * NFS Server
     */
    server: string;
    /**
     * NFS share
     */
    share: string;
    /**
     * Sub directory under share. If the sub directory doesn't exist, driver will create it
     */
    subDir?: string;
    /**
     * Type of a storage class
     * Expected value is 'NFS'.
     */
    type: "NFS";
}

/**
 * The properties of RWX StorageClass
 */
export interface RwxStorageClassTypePropertiesResponse {
    /**
     * The backing storageclass used to create new storageclass
     */
    backingStorageClassName: string;
    /**
     * Type of a storage class
     * Expected value is 'RWX'.
     */
    type: "RWX";
}

/**
 * The properties of SMB StorageClass
 */
export interface SmbStorageClassTypePropertiesResponse {
    /**
     * Server domain
     */
    domain?: string;
    /**
     * Server password
     */
    password?: string;
    /**
     * SMB Source
     */
    source: string;
    /**
     * Sub directory under share. If the sub directory doesn't exist, driver will create it
     */
    subDir?: string;
    /**
     * Type of a storage class
     * Expected value is 'SMB'.
     */
    type: "SMB";
    /**
     * Server username
     */
    username?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}
