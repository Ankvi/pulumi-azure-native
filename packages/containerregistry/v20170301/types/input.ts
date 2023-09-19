import * as pulumi from "@pulumi/pulumi";
    /**
     * The SKU of a container registry.
     */
    export interface SkuArgs {
        /**
         * The SKU name of the container registry. Required for registry creation. Allowed value: Basic.
         */
        name: pulumi.Input<string>;
    }

    /**
     * The parameters of a storage account for a container registry.
     */
    export interface StorageAccountParametersArgs {
        /**
         * The access key to the storage account.
         */
        accessKey: pulumi.Input<string>;
        /**
         * The name of the storage account.
         */
        name: pulumi.Input<string>;
    }
