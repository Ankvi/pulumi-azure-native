import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The else block of storage task operation
 */
export interface ElseConditionResponse {
    /**
     * List of operations to execute in the else block
     */
    operations: StorageTaskOperationResponse[];
}

/**
 * The if block of storage task operation
 */
export interface IfConditionResponse {
    /**
     * The condition predicate which is composed of object properties, eg: blob and container properties.
     */
    condition: string;
    /**
     * List of operations to execute when the condition predicate satisfies.
     */
    operations: StorageTaskOperationResponse[];
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * The storage task action represents conditional statements and operations to be performed on target objects.
 */
export interface StorageTaskActionResponse {
    /**
     * The else block of storage task operation
     */
    else?: ElseConditionResponse;
    /**
     * The if block of storage task operation
     */
    if: IfConditionResponse;
}

/**
 * Represents an operation to be performed on the object
 */
export interface StorageTaskOperationResponse {
    /**
     * The operation to be performed on the object.
     */
    name: string;
    /**
     * Action to be taken when the operation fails for a object.
     */
    onFailure?: string;
    /**
     * Action to be taken when the operation is successful for a object.
     */
    onSuccess?: string;
    /**
     * Key-value parameters for the operation.
     */
    parameters?: {[key: string]: string};
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
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}
