import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace autonomousdevelopmentplatform {
    /**
     * Encryption properties of a Data Pool
     */
    export interface DataPoolEncryptionResponse {
        /**
         * The name of Key Vault key
         */
        keyName: string;
        /**
         * The URI of a soft delete-enabled Key Vault that is in the same location as the Data Pool location
         */
        keyVaultUri: string;
        /**
         * The version of Key Vault key
         */
        keyVersion?: string;
        /**
         * The resource ID of a user-assigned Managed Identity used to access the encryption key in the Key Vault. Requires access to the key operations get, wrap, unwrap, and recover
         */
        userAssignedIdentity: string;
    }

    /**
     * Location of a Data Pool
     */
    export interface DataPoolLocationResponse {
        /**
         * Encryption properties of a Data Pool location
         */
        encryption?: DataPoolEncryptionResponse;
        /**
         * The location name
         */
        name: string;
        /**
         * The amount of storage accounts provisioned per Data Pool. Default: 5
         */
        storageAccountCount?: number;
        /**
         * The Storage SKU. Default: Standard_ZRS.
         */
        storageSku?: StorageSkuResponse;
    }

    /**
     * The Storage SKU.
     */
    export interface StorageSkuResponse {
        /**
         * The SKU name
         */
        name: string;
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

    export namespace v20211101preview {
        /**
         * Encryption properties of a Data Pool
         */
        export interface DataPoolEncryptionResponse {
            /**
             * The name of Key Vault key
             */
            keyName: string;
            /**
             * The URI of a soft delete-enabled Key Vault that is in the same location as the Data Pool location
             */
            keyVaultUri: string;
            /**
             * The version of Key Vault key
             */
            keyVersion?: string;
            /**
             * The resource ID of a user-assigned Managed Identity used to access the encryption key in the Key Vault. Requires access to the key operations get, wrap, unwrap, and recover
             */
            userAssignedIdentity: string;
        }

        /**
         * Location of a Data Pool
         */
        export interface DataPoolLocationResponse {
            /**
             * Encryption properties of a Data Pool location
             */
            encryption?: v20211101preview.DataPoolEncryptionResponse;
            /**
             * The location name
             */
            name: string;
            /**
             * The amount of storage accounts provisioned per Data Pool. Default: 5
             */
            storageAccountCount?: number;
            /**
             * The Storage SKU. Default: Standard_ZRS.
             */
            storageSku?: v20211101preview.StorageSkuResponse;
        }

        /**
         * The Storage SKU.
         */
        export interface StorageSkuResponse {
            /**
             * The SKU name
             */
            name: string;
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

    }
}
