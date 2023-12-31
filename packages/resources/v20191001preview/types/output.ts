import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Settings to customize ACI container instance.
     */
    export interface ContainerConfigurationResponse {
        /**
         * Container group name, if not specified then the name will get auto-generated. Not specifying a 'containerGroupName' indicates the system to generate a unique name which might end up flagging an Azure Policy as non-compliant. Use 'containerGroupName' when you have an Azure Policy that expects a specific naming convention or when you want to fully control the name. 'containerGroupName' property must be between 1 and 63 characters long, must contain only lowercase letters, numbers, and dashes and it cannot start or end with a dash and consecutive dashes are not allowed. To specify a 'containerGroupName', add the following object to properties: { "containerSettings": { "containerGroupName": "contoso-container" } }. If you do not want to specify a 'containerGroupName' then do not add 'containerSettings' property.
         */
        containerGroupName?: string;
    }

    /**
     * The environment variable to pass to the script in the container instance.
     */
    export interface EnvironmentVariableResponse {
        /**
         * The name of the environment variable.
         */
        name: string;
        /**
         * The value of the secure environment variable.
         */
        secureValue?: string;
        /**
         * The value of the environment variable.
         */
        value?: string;
    }

    /**
     * The resource management error additional info.
     */
    export interface ErrorAdditionalInfoResponse {
        /**
         * The additional info.
         */
        info: any;
        /**
         * The additional info type.
         */
        type: string;
    }

    /**
     * Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.)
     */
    export interface ErrorResponseResponse {
        /**
         * The error additional info.
         */
        additionalInfo: ErrorAdditionalInfoResponse[];
        /**
         * The error code.
         */
        code: string;
        /**
         * The error details.
         */
        details: ErrorResponseResponse[];
        /**
         * The error message.
         */
        message: string;
        /**
         * The error target.
         */
        target: string;
    }

    /**
     * Managed identity generic object.
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * ID of the Azure Active Directory.
         */
        tenantId: string;
        /**
         * Type of the managed identity.
         */
        type?: string;
        /**
         * The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Generic object modeling results of script execution.
     */
    export interface ScriptStatusResponse {
        /**
         * ACI resource Id.
         */
        containerInstanceId: string;
        /**
         * End time of the script execution.
         */
        endTime: string;
        /**
         * Error that is relayed from the script execution.
         */
        error?: ErrorResponseResponse;
        /**
         * Time the deployment script resource will expire.
         */
        expirationTime: string;
        /**
         * Start time of the script execution.
         */
        startTime: string;
        /**
         * Storage account resource Id.
         */
        storageAccountId: string;
    }

    /**
     * Settings to use an existing storage account. Valid storage account kinds are: Storage, StorageV2 and FileStorage
     */
    export interface StorageAccountConfigurationResponse {
        /**
         * The storage account access key.
         */
        storageAccountKey?: string;
        /**
         * The storage account name.
         */
        storageAccountName?: string;
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

    /**
     * User-assigned managed identity.
     */
    export interface UserAssignedIdentityResponse {
        /**
         * Client App Id associated with this identity.
         */
        clientId: string;
        /**
         * Azure Active Directory principal ID associated with this identity.
         */
        principalId: string;
    }
