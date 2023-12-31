import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines how resources deployed by a blueprint assignment are locked.
 */
export interface AssignmentLockSettingsArgs {
    /**
     * List of management operations that are excluded from blueprint locks. Up to 200 actions are permitted. If the lock mode is set to 'AllResourcesReadOnly', then the following actions are automatically appended to 'excludedActions': '*&#47;read', 'Microsoft.Network/virtualNetworks/subnets/join/action' and 'Microsoft.Authorization/locks/delete'. If the lock mode is set to 'AllResourcesDoNotDelete', then the following actions are automatically appended to 'excludedActions': 'Microsoft.Authorization/locks/delete'. Duplicate actions will get removed.
     */
    excludedActions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of AAD principals excluded from blueprint locks. Up to 5 principals are permitted.
     */
    excludedPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Lock mode.
     */
    mode?: pulumi.Input<string | enums.AssignmentLockMode>;
}

/**
 * Specifies the link to a Key Vault.
 */
export interface KeyVaultReferenceArgs {
    /**
     * Azure resource ID of the Key Vault.
     */
    id: pulumi.Input<string>;
}

/**
 * Managed identity generic object.
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Azure Active Directory principal ID associated with this Identity.
     */
    principalId?: pulumi.Input<string>;
    /**
     * ID of the Azure Active Directory.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * Type of the managed identity.
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.
     */
    userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserAssignedIdentityArgs>}>;
}

/**
 * Represent a parameter with constrains and metadata.
 */
export interface ParameterDefinitionArgs {
    /**
     * Array of allowed values for this parameter.
     */
    allowedValues?: pulumi.Input<any[]>;
    /**
     * Default Value for this parameter.
     */
    defaultValue?: any;
    /**
     * Description of this parameter/resourceGroup.
     */
    description?: pulumi.Input<string>;
    /**
     * DisplayName of this parameter/resourceGroup.
     */
    displayName?: pulumi.Input<string>;
    /**
     * StrongType for UI to render rich experience during blueprint assignment. Supported strong types are resourceType, principalId and location.
     */
    strongType?: pulumi.Input<string>;
    /**
     * Allowed data types for Resource Manager template parameters.
     */
    type: pulumi.Input<string | enums.TemplateParameterType>;
}

/**
 * Value for the specified parameter. Can be either 'value' or 'reference' but not both.
 */
export interface ParameterValueArgs {
    /**
     * Parameter value as reference type.
     */
    reference?: pulumi.Input<SecretValueReferenceArgs>;
    /**
     * Parameter value. Any valid JSON value is allowed including objects, arrays, strings, numbers and booleans.
     */
    value?: any;
}

/**
 * Represents an Azure resource group in a blueprint definition.
 */
export interface ResourceGroupDefinitionArgs {
    /**
     * Artifacts which need to be deployed before this resource group.
     */
    dependsOn?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Description of this parameter/resourceGroup.
     */
    description?: pulumi.Input<string>;
    /**
     * DisplayName of this parameter/resourceGroup.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Location of this resourceGroup. Leave empty if the resource group location will be specified during the blueprint assignment.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of this resourceGroup. Leave empty if the resource group name will be specified during the blueprint assignment.
     */
    name?: pulumi.Input<string>;
    /**
     * StrongType for UI to render rich experience during blueprint assignment. Supported strong types are resourceType, principalId and location.
     */
    strongType?: pulumi.Input<string>;
    /**
     * Tags to be assigned to this resource group.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Represents an Azure resource group.
 */
export interface ResourceGroupValueArgs {
    /**
     * Location of the resource group.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    name?: pulumi.Input<string>;
}

/**
 * Reference to a Key Vault secret.
 */
export interface SecretValueReferenceArgs {
    /**
     * Specifies the reference to a given Azure Key Vault.
     */
    keyVault: pulumi.Input<KeyVaultReferenceArgs>;
    /**
     * Name of the secret.
     */
    secretName: pulumi.Input<string>;
    /**
     * The version of the secret to use. If left blank, the latest version of the secret is used.
     */
    secretVersion?: pulumi.Input<string>;
}

/**
 * User-assigned managed identity.
 */
export interface UserAssignedIdentityArgs {
    /**
     * Client App Id associated with this identity.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Azure Active Directory principal ID associated with this Identity.
     */
    principalId?: pulumi.Input<string>;
}
