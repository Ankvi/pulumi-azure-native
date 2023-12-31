import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The Azure Active Directory principal identifier and Azure built-in role that describes the access the principal will receive on the delegated resource in the managed tenant.
 */
export interface AuthorizationArgs {
    /**
     * The delegatedRoleDefinitionIds field is required when the roleDefinitionId refers to the User Access Administrator Role. It is the list of role definition ids which define all the permissions that the user in the authorization can assign to other principals.
     */
    delegatedRoleDefinitionIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The identifier of the Azure Active Directory principal.
     */
    principalId: pulumi.Input<string>;
    /**
     * The display name of the Azure Active Directory principal.
     */
    principalIdDisplayName?: pulumi.Input<string>;
    /**
     * The identifier of the Azure built-in role that defines the permissions that the Azure Active Directory principal will have on the projected scope.
     */
    roleDefinitionId: pulumi.Input<string>;
}

/**
 * Defines the Azure Active Directory principal that can approve any just-in-time access requests by the principal defined in the EligibleAuthorization.
 */
export interface EligibleApproverArgs {
    /**
     * The identifier of the Azure Active Directory principal.
     */
    principalId: pulumi.Input<string>;
    /**
     * The display name of the Azure Active Directory principal.
     */
    principalIdDisplayName?: pulumi.Input<string>;
}

/**
 * The Azure Active Directory principal identifier, Azure built-in role, and just-in-time access policy that describes the just-in-time access the principal will receive on the delegated resource in the managed tenant.
 */
export interface EligibleAuthorizationArgs {
    /**
     * The just-in-time access policy setting.
     */
    justInTimeAccessPolicy?: pulumi.Input<JustInTimeAccessPolicyArgs>;
    /**
     * The identifier of the Azure Active Directory principal.
     */
    principalId: pulumi.Input<string>;
    /**
     * The display name of the Azure Active Directory principal.
     */
    principalIdDisplayName?: pulumi.Input<string>;
    /**
     * The identifier of the Azure built-in role that defines the permissions that the Azure Active Directory principal will have on the projected scope.
     */
    roleDefinitionId: pulumi.Input<string>;
}
/**
 * eligibleAuthorizationArgsProvideDefaults sets the appropriate defaults for EligibleAuthorizationArgs
 */
export function eligibleAuthorizationArgsProvideDefaults(val: EligibleAuthorizationArgs): EligibleAuthorizationArgs {
    return {
        ...val,
        justInTimeAccessPolicy: (val.justInTimeAccessPolicy ? pulumi.output(val.justInTimeAccessPolicy).apply(justInTimeAccessPolicyArgsProvideDefaults) : undefined),
    };
}

/**
 * Just-in-time access policy setting.
 */
export interface JustInTimeAccessPolicyArgs {
    /**
     * The list of managedByTenant approvers for the eligible authorization.
     */
    managedByTenantApprovers?: pulumi.Input<pulumi.Input<EligibleApproverArgs>[]>;
    /**
     * The maximum access duration in ISO 8601 format for just-in-time access requests.
     */
    maximumActivationDuration?: pulumi.Input<string>;
    /**
     * The multi-factor authorization provider to be used for just-in-time access requests.
     */
    multiFactorAuthProvider: pulumi.Input<string | enums.MultiFactorAuthProvider>;
}
/**
 * justInTimeAccessPolicyArgsProvideDefaults sets the appropriate defaults for JustInTimeAccessPolicyArgs
 */
export function justInTimeAccessPolicyArgsProvideDefaults(val: JustInTimeAccessPolicyArgs): JustInTimeAccessPolicyArgs {
    return {
        ...val,
        maximumActivationDuration: (val.maximumActivationDuration) ?? "PT8H",
        multiFactorAuthProvider: (val.multiFactorAuthProvider) ?? "None",
    };
}

/**
 * The details for the Managed Services offer’s plan in Azure Marketplace.
 */
export interface PlanArgs {
    /**
     * Azure Marketplace plan name.
     */
    name: pulumi.Input<string>;
    /**
     * Azure Marketplace product code.
     */
    product: pulumi.Input<string>;
    /**
     * Azure Marketplace publisher ID.
     */
    publisher: pulumi.Input<string>;
    /**
     * Azure Marketplace plan's version.
     */
    version: pulumi.Input<string>;
}

/**
 * The properties of the registration assignment.
 */
export interface RegistrationAssignmentPropertiesArgs {
    /**
     * The fully qualified path of the registration definition.
     */
    registrationDefinitionId: pulumi.Input<string>;
}

/**
 * The properties of a registration definition.
 */
export interface RegistrationDefinitionPropertiesArgs {
    /**
     * The collection of authorization objects describing the access Azure Active Directory principals in the managedBy tenant will receive on the delegated resource in the managed tenant.
     */
    authorizations: pulumi.Input<pulumi.Input<AuthorizationArgs>[]>;
    /**
     * The description of the registration definition.
     */
    description?: pulumi.Input<string>;
    /**
     * The collection of eligible authorization objects describing the just-in-time access Azure Active Directory principals in the managedBy tenant will receive on the delegated resource in the managed tenant.
     */
    eligibleAuthorizations?: pulumi.Input<pulumi.Input<EligibleAuthorizationArgs>[]>;
    /**
     * The identifier of the managedBy tenant.
     */
    managedByTenantId: pulumi.Input<string>;
    /**
     * The name of the registration definition.
     */
    registrationDefinitionName?: pulumi.Input<string>;
}
