import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties of a storage account for a container registry.
     */
    export interface StorageAccountPropertiesArgs {
        /**
         * The access key to the storage account.
         */
        accessKey: pulumi.Input<string>;
        /**
         * The name of the storage account.
         */
        name: pulumi.Input<string>;
    }
