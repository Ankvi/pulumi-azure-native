import * as pulumi from "@pulumi/pulumi";
    /**
     * Role definition permissions.
     */
    export interface PermissionResponse {
        /**
         * Allowed actions.
         */
        actions?: string[];
        /**
         * The conditions on the role definition. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
         */
        condition: string;
        /**
         * Version of the condition. Currently the only accepted value is '2.0'
         */
        conditionVersion: string;
        /**
         * Allowed Data actions.
         */
        dataActions?: string[];
        /**
         * Denied actions.
         */
        notActions?: string[];
        /**
         * Denied Data actions.
         */
        notDataActions?: string[];
    }
