import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The else block of storage task operation
 */
export interface ElseConditionArgs {
    /**
     * List of operations to execute in the else block
     */
    operations: pulumi.Input<pulumi.Input<StorageTaskOperationArgs>[]>;
}

/**
 * The if block of storage task operation
 */
export interface IfConditionArgs {
    /**
     * Condition predicate to evaluate each object. See https://aka.ms/storagetaskconditions for valid properties and operators.
     */
    condition: pulumi.Input<string>;
    /**
     * List of operations to execute when the condition predicate satisfies.
     */
    operations: pulumi.Input<pulumi.Input<StorageTaskOperationArgs>[]>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The storage task action represents conditional statements and operations to be performed on target objects.
 */
export interface StorageTaskActionArgs {
    /**
     * The else block of storage task operation
     */
    else?: pulumi.Input<ElseConditionArgs>;
    /**
     * The if block of storage task operation
     */
    if: pulumi.Input<IfConditionArgs>;
}

/**
 * Represents an operation to be performed on the object
 */
export interface StorageTaskOperationArgs {
    /**
     * The operation to be performed on the object.
     */
    name: pulumi.Input<string | enums.StorageTaskOperationName>;
    /**
     * Action to be taken when the operation fails for a object.
     */
    onFailure?: pulumi.Input<enums.OnFailure>;
    /**
     * Action to be taken when the operation is successful for a object.
     */
    onSuccess?: pulumi.Input<enums.OnSuccess>;
    /**
     * Key-value parameters for the operation.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
