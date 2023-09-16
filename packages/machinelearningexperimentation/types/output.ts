import * as pulumi from "@pulumi/pulumi";
export namespace machinelearningexperimentation {
    /**
     * The properties of a storage account for a machine learning team account.
     */
    export interface StorageAccountPropertiesResponse {
        /**
         * The access key to the storage account.
         */
        accessKey: string;
        /**
         * The fully qualified arm Id of the storage account.
         */
        storageAccountId: string;
    }

    export namespace v20170501preview {
        /**
         * The properties of a storage account for a machine learning team account.
         */
        export interface StorageAccountPropertiesResponse {
            /**
             * The access key to the storage account.
             */
            accessKey: string;
            /**
             * The fully qualified arm Id of the storage account.
             */
            storageAccountId: string;
        }

    }
}
