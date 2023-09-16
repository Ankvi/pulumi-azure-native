import * as pulumi from "@pulumi/pulumi";
export namespace machinelearningexperimentation {
    /**
     * The properties of a storage account for a machine learning team account.
     */
    export interface StorageAccountPropertiesArgs {
        /**
         * The access key to the storage account.
         */
        accessKey: pulumi.Input<string>;
        /**
         * The fully qualified arm Id of the storage account.
         */
        storageAccountId: pulumi.Input<string>;
    }

    export namespace v20170501preview {
        /**
         * The properties of a storage account for a machine learning team account.
         */
        export interface StorageAccountPropertiesArgs {
            /**
             * The access key to the storage account.
             */
            accessKey: pulumi.Input<string>;
            /**
             * The fully qualified arm Id of the storage account.
             */
            storageAccountId: pulumi.Input<string>;
        }

    }
}
