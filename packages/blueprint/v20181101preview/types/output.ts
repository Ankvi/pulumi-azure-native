import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines how resources deployed by a blueprint assignment are locked.
     */
    export interface AssignmentLockSettingsResponse {
        /**
         * List of management operations that are excluded from blueprint locks. Up to 200 actions are permitted. If the lock mode is set to 'AllResourcesReadOnly', then the following actions are automatically appended to 'excludedActions': '*&#47;read', 'Microsoft.Network/virtualNetworks/subnets/join/action' and 'Microsoft.Authorization/locks/delete'. If the lock mode is set to 'AllResourcesDoNotDelete', then the following actions are automatically appended to 'excludedActions': 'Microsoft.Authorization/locks/delete'. Duplicate actions will get removed.
         */
        excludedActions?: string[];
        /**
         * List of AAD principals excluded from blueprint locks. Up to 5 principals are permitted.
         */
        excludedPrincipals?: string[];
        /**
         * Lock mode.
         */
        mode?: string;
    }

    /**
     * The status of a blueprint assignment. This field is readonly.
     */
    export interface AssignmentStatusResponse {
        /**
         * Last modified time of this blueprint definition.
         */
        lastModified: string;
        /**
         * List of resources that were created by the blueprint assignment.
         */
        managedResources: string[];
        /**
         * Creation time of this blueprint definition.
         */
        timeCreated: string;
    }

    /**
     * The status of the blueprint. This field is readonly.
     */
    export interface BlueprintStatusResponse {
        /**
         * Last modified time of this blueprint definition.
         */
        lastModified: string;
        /**
         * Creation time of this blueprint definition.
         */
        timeCreated: string;
    }

    /**
     * Specifies the link to a Key Vault.
     */
    export interface KeyVaultReferenceResponse {
        /**
         * Azure resource ID of the Key Vault.
         */
        id: string;
    }

    /**
     * Managed identity generic object.
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * Azure Active Directory principal ID associated with this Identity.
         */
        principalId?: string;
        /**
         * ID of the Azure Active Directory.
         */
        tenantId?: string;
        /**
         * Type of the managed identity.
         */
        type: string;
        /**
         * The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Represent a parameter with constrains and metadata.
     */
    export interface ParameterDefinitionResponse {
        /**
         * Array of allowed values for this parameter.
         */
        allowedValues?: any[];
        /**
         * Default Value for this parameter.
         */
        defaultValue?: any;
        /**
         * Description of this parameter/resourceGroup.
         */
        description?: string;
        /**
         * DisplayName of this parameter/resourceGroup.
         */
        displayName?: string;
        /**
         * StrongType for UI to render rich experience during blueprint assignment. Supported strong types are resourceType, principalId and location.
         */
        strongType?: string;
        /**
         * Allowed data types for Resource Manager template parameters.
         */
        type: string;
    }

    /**
     * Value for the specified parameter. Can be either 'value' or 'reference' but not both.
     */
    export interface ParameterValueResponse {
        /**
         * Parameter value as reference type.
         */
        reference?: SecretValueReferenceResponse;
        /**
         * Parameter value. Any valid JSON value is allowed including objects, arrays, strings, numbers and booleans.
         */
        value?: any;
    }

    /**
     * Represents an Azure resource group in a blueprint definition.
     */
    export interface ResourceGroupDefinitionResponse {
        /**
         * Artifacts which need to be deployed before this resource group.
         */
        dependsOn?: string[];
        /**
         * Description of this parameter/resourceGroup.
         */
        description?: string;
        /**
         * DisplayName of this parameter/resourceGroup.
         */
        displayName?: string;
        /**
         * Location of this resourceGroup. Leave empty if the resource group location will be specified during the blueprint assignment.
         */
        location?: string;
        /**
         * Name of this resourceGroup. Leave empty if the resource group name will be specified during the blueprint assignment.
         */
        name?: string;
        /**
         * StrongType for UI to render rich experience during blueprint assignment. Supported strong types are resourceType, principalId and location.
         */
        strongType?: string;
        /**
         * Tags to be assigned to this resource group.
         */
        tags?: {[key: string]: string};
    }

    /**
     * Represents an Azure resource group.
     */
    export interface ResourceGroupValueResponse {
        /**
         * Location of the resource group.
         */
        location?: string;
        /**
         * Name of the resource group.
         */
        name?: string;
    }

    /**
     * Reference to a Key Vault secret.
     */
    export interface SecretValueReferenceResponse {
        /**
         * Specifies the reference to a given Azure Key Vault.
         */
        keyVault: KeyVaultReferenceResponse;
        /**
         * Name of the secret.
         */
        secretName: string;
        /**
         * The version of the secret to use. If left blank, the latest version of the secret is used.
         */
        secretVersion?: string;
    }

    /**
     * User-assigned managed identity.
     */
    export interface UserAssignedIdentityResponse {
        /**
         * Client App Id associated with this identity.
         */
        clientId?: string;
        /**
         * Azure Active Directory principal ID associated with this Identity.
         */
        principalId?: string;
    }
