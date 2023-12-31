import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Settings to customize ACI container instance.
     */
    export interface ContainerConfigurationArgs {
        /**
         * Container group name, if not specified then the name will get auto-generated. Not specifying a 'containerGroupName' indicates the system to generate a unique name which might end up flagging an Azure Policy as non-compliant. Use 'containerGroupName' when you have an Azure Policy that expects a specific naming convention or when you want to fully control the name. 'containerGroupName' property must be between 1 and 63 characters long, must contain only lowercase letters, numbers, and dashes and it cannot start or end with a dash and consecutive dashes are not allowed. To specify a 'containerGroupName', add the following object to properties: { "containerSettings": { "containerGroupName": "contoso-container" } }. If you do not want to specify a 'containerGroupName' then do not add 'containerSettings' property.
         */
        containerGroupName?: pulumi.Input<string>;
    }

    /**
     * The environment variable to pass to the script in the container instance.
     */
    export interface EnvironmentVariableArgs {
        /**
         * The name of the environment variable.
         */
        name: pulumi.Input<string>;
        /**
         * The value of the secure environment variable.
         */
        secureValue?: pulumi.Input<string>;
        /**
         * The value of the environment variable.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Managed identity generic object.
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * Type of the managed identity.
         */
        type?: pulumi.Input<string | enums.ManagedServiceIdentityType>;
        /**
         * The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Settings to use an existing storage account. Valid storage account kinds are: Storage, StorageV2 and FileStorage
     */
    export interface StorageAccountConfigurationArgs {
        /**
         * The storage account access key.
         */
        storageAccountKey?: pulumi.Input<string>;
        /**
         * The storage account name.
         */
        storageAccountName?: pulumi.Input<string>;
    }
