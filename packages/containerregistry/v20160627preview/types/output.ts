import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties of a storage account for a container registry.
     */
    export interface StorageAccountPropertiesResponse {
        /**
         * The access key to the storage account.
         */
        accessKey: string;
        /**
         * The name of the storage account.
         */
        name: string;
    }
