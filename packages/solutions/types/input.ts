import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The managed application provider authorization.
 */
export interface ApplicationAuthorizationArgs {
    /**
     * The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the managed application resources.
     */
    principalId: pulumi.Input<string>;
    /**
     * The provider's role definition identifier. This role will define all the permissions that the provider must have on the managed application's container resource group. This role definition cannot have permission to delete the resource group.
     */
    roleDefinitionId: pulumi.Input<string>;
}

/**
 * Application definition artifact.
 */
export interface ApplicationDefinitionArtifactArgs {
    /**
     * The managed application definition artifact name.
     */
    name: pulumi.Input<string | enums.ApplicationDefinitionArtifactName>;
    /**
     * The managed application definition artifact type.
     */
    type: pulumi.Input<enums.ApplicationArtifactType>;
    /**
     * The managed application definition artifact blob uri.
     */
    uri: pulumi.Input<string>;
}

/**
 * Managed application deployment policy.
 */
export interface ApplicationDeploymentPolicyArgs {
    /**
     * The managed application deployment mode.
     */
    deploymentMode: pulumi.Input<string | enums.DeploymentMode>;
}

/**
 * Managed application Jit access policy.
 */
export interface ApplicationJitAccessPolicyArgs {
    /**
     * Whether the JIT access is enabled.
     */
    jitAccessEnabled: pulumi.Input<boolean>;
    /**
     * JIT approval mode.
     */
    jitApprovalMode?: pulumi.Input<string | enums.JitApprovalMode>;
    /**
     * The JIT approvers
     */
    jitApprovers?: pulumi.Input<pulumi.Input<JitApproverDefinitionArgs>[]>;
    /**
     * The maximum duration JIT access is granted. This is an ISO8601 time period value.
     */
    maximumJitAccessDuration?: pulumi.Input<string>;
}

/**
 * Managed application management policy.
 */
export interface ApplicationManagementPolicyArgs {
    /**
     * The managed application management mode.
     */
    mode?: pulumi.Input<string | enums.ApplicationManagementMode>;
}

/**
 * Managed application notification endpoint.
 */
export interface ApplicationNotificationEndpointArgs {
    /**
     * The managed application notification endpoint uri.
     */
    uri: pulumi.Input<string>;
}

/**
 * Managed application notification policy.
 */
export interface ApplicationNotificationPolicyArgs {
    /**
     * The managed application notification endpoint.
     */
    notificationEndpoints: pulumi.Input<pulumi.Input<ApplicationNotificationEndpointArgs>[]>;
}

/**
 * Managed application locking policy.
 */
export interface ApplicationPackageLockingPolicyDefinitionArgs {
    /**
     * The deny assignment excluded actions.
     */
    allowedActions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The deny assignment excluded data actions.
     */
    allowedDataActions?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Managed application policy.
 */
export interface ApplicationPolicyArgs {
    /**
     * The policy name
     */
    name?: pulumi.Input<string>;
    /**
     * The policy parameters.
     */
    parameters?: pulumi.Input<string>;
    /**
     * The policy definition Id.
     */
    policyDefinitionId?: pulumi.Input<string>;
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
    /**
     * The list of user identities associated with the resource. The user identity dictionary key references will be resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * JIT approver definition.
 */
export interface JitApproverDefinitionArgs {
    /**
     * The approver display name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The approver service principal Id.
     */
    id: pulumi.Input<string>;
    /**
     * The approver type.
     */
    type?: pulumi.Input<string | enums.JitApproverType>;
}

/**
 * The JIT authorization policies.
 */
export interface JitAuthorizationPoliciesArgs {
    /**
     * The the principal id that will be granted JIT access.
     */
    principalId: pulumi.Input<string>;
    /**
     * The role definition id that will be granted to the Principal.
     */
    roleDefinitionId: pulumi.Input<string>;
}

/**
 * The JIT scheduling policies.
 */
export interface JitSchedulingPolicyArgs {
    duration: pulumi.Input<string>;
    /**
     * The start time of the request.
     */
    startTime: pulumi.Input<string>;
    /**
     * The type of JIT schedule.
     */
    type: pulumi.Input<string | enums.JitSchedulingType>;
}

/**
 * Plan for the managed application.
 */
export interface PlanArgs {
    /**
     * The plan name.
     */
    name: pulumi.Input<string>;
    /**
     * The product code.
     */
    product: pulumi.Input<string>;
    /**
     * The promotion code.
     */
    promotionCode?: pulumi.Input<string>;
    /**
     * The publisher ID.
     */
    publisher: pulumi.Input<string>;
    /**
     * The plan's version.
     */
    version: pulumi.Input<string>;
}

/**
 * SKU for the resource.
 */
export interface SkuArgs {
    /**
     * The SKU capacity.
     */
    capacity?: pulumi.Input<number>;
    /**
     * The SKU family.
     */
    family?: pulumi.Input<string>;
    /**
     * The SKU model.
     */
    model?: pulumi.Input<string>;
    /**
     * The SKU name.
     */
    name: pulumi.Input<string>;
    /**
     * The SKU size.
     */
    size?: pulumi.Input<string>;
    /**
     * The SKU tier.
     */
    tier?: pulumi.Input<string>;
}

