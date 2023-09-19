import * as pulumi from "@pulumi/pulumi";
    /**
     * The login password for the container registry.
     */
    export interface RegistryPasswordResponse {
        /**
         * The password name.
         */
        name?: string;
        /**
         * The password value.
         */
        value?: string;
    }

    /**
     * The SKU of a container registry.
     */
    export interface SkuResponse {
        /**
         * The SKU name of the container registry. Required for registry creation. Allowed value: Basic.
         */
        name: string;
        /**
         * The SKU tier based on the SKU name.
         */
        tier: string;
    }

    /**
     * The properties of a storage account for a container registry.
     */
    export interface StorageAccountPropertiesResponse {
        /**
         * The name of the storage account.
         */
        name?: string;
    }
