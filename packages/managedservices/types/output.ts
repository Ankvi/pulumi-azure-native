import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The Azure Active Directory principal identifier and Azure built-in role that describes the access the principal will receive on the delegated resource in the managed tenant.
 */
export interface AuthorizationResponse {
    /**
     * The delegatedRoleDefinitionIds field is required when the roleDefinitionId refers to the User Access Administrator Role. It is the list of role definition ids which define all the permissions that the user in the authorization can assign to other principals.
     */
    delegatedRoleDefinitionIds?: string[];
    /**
     * The identifier of the Azure Active Directory principal.
     */
    principalId: string;
    /**
     * The display name of the Azure Active Directory principal.
     */
    principalIdDisplayName?: string;
    /**
     * The identifier of the Azure built-in role that defines the permissions that the Azure Active Directory principal will have on the projected scope.
     */
    roleDefinitionId: string;
}

/**
 * Defines the Azure Active Directory principal that can approve any just-in-time access requests by the principal defined in the EligibleAuthorization.
 */
export interface EligibleApproverResponse {
    /**
     * The identifier of the Azure Active Directory principal.
     */
    principalId: string;
    /**
     * The display name of the Azure Active Directory principal.
     */
    principalIdDisplayName?: string;
}

/**
 * The Azure Active Directory principal identifier, Azure built-in role, and just-in-time access policy that describes the just-in-time access the principal will receive on the delegated resource in the managed tenant.
 */
export interface EligibleAuthorizationResponse {
    /**
     * The just-in-time access policy setting.
     */
    justInTimeAccessPolicy?: JustInTimeAccessPolicyResponse;
    /**
     * The identifier of the Azure Active Directory principal.
     */
    principalId: string;
    /**
     * The display name of the Azure Active Directory principal.
     */
    principalIdDisplayName?: string;
    /**
     * The identifier of the Azure built-in role that defines the permissions that the Azure Active Directory principal will have on the projected scope.
     */
    roleDefinitionId: string;
}
/**
 * eligibleAuthorizationResponseProvideDefaults sets the appropriate defaults for EligibleAuthorizationResponse
 */
export function eligibleAuthorizationResponseProvideDefaults(val: EligibleAuthorizationResponse): EligibleAuthorizationResponse {
    return {
        ...val,
        justInTimeAccessPolicy: (val.justInTimeAccessPolicy ? justInTimeAccessPolicyResponseProvideDefaults(val.justInTimeAccessPolicy) : undefined),
    };
}

/**
 * Just-in-time access policy setting.
 */
export interface JustInTimeAccessPolicyResponse {
    /**
     * The list of managedByTenant approvers for the eligible authorization.
     */
    managedByTenantApprovers?: EligibleApproverResponse[];
    /**
     * The maximum access duration in ISO 8601 format for just-in-time access requests.
     */
    maximumActivationDuration?: string;
    /**
     * The multi-factor authorization provider to be used for just-in-time access requests.
     */
    multiFactorAuthProvider: string;
}
/**
 * justInTimeAccessPolicyResponseProvideDefaults sets the appropriate defaults for JustInTimeAccessPolicyResponse
 */
export function justInTimeAccessPolicyResponseProvideDefaults(val: JustInTimeAccessPolicyResponse): JustInTimeAccessPolicyResponse {
    return {
        ...val,
        maximumActivationDuration: (val.maximumActivationDuration) ?? "PT8H",
        multiFactorAuthProvider: (val.multiFactorAuthProvider) ?? "None",
    };
}

/**
 * The details for the Managed Services offer’s plan in Azure Marketplace.
 */
export interface PlanResponse {
    /**
     * Azure Marketplace plan name.
     */
    name: string;
    /**
     * Azure Marketplace product code.
     */
    product: string;
    /**
     * Azure Marketplace publisher ID.
     */
    publisher: string;
    /**
     * Azure Marketplace plan's version.
     */
    version: string;
}

/**
 * The properties of the registration assignment.
 */
export interface RegistrationAssignmentPropertiesResponse {
    /**
     * The current provisioning state of the registration assignment.
     */
    provisioningState: string;
    /**
     * The registration definition associated with the registration assignment.
     */
    registrationDefinition: RegistrationAssignmentPropertiesResponseRegistrationDefinition;
    /**
     * The fully qualified path of the registration definition.
     */
    registrationDefinitionId: string;
}

/**
 * The properties of the registration definition associated with the registration assignment.
 */
export interface RegistrationAssignmentPropertiesResponseProperties {
    /**
     * The collection of authorization objects describing the access Azure Active Directory principals in the managedBy tenant will receive on the delegated resource in the managed tenant.
     */
    authorizations?: AuthorizationResponse[];
    /**
     * The description of the registration definition.
     */
    description?: string;
    /**
     * The collection of eligible authorization objects describing the just-in-time access Azure Active Directory principals in the managedBy tenant will receive on the delegated resource in the managed tenant.
     */
    eligibleAuthorizations?: EligibleAuthorizationResponse[];
    /**
     * The identifier of the managedBy tenant.
     */
    managedByTenantId?: string;
    /**
     * The name of the managedBy tenant.
     */
    managedByTenantName?: string;
    /**
     * The identifier of the managed tenant.
     */
    manageeTenantId?: string;
    /**
     * The name of the managed tenant.
     */
    manageeTenantName?: string;
    /**
     * The current provisioning state of the registration definition.
     */
    provisioningState?: string;
    /**
     * The name of the registration definition.
     */
    registrationDefinitionName?: string;
}

/**
 * The registration definition associated with the registration assignment.
 */
export interface RegistrationAssignmentPropertiesResponseRegistrationDefinition {
    /**
     * The fully qualified path of the registration definition.
     */
    id: string;
    /**
     * The name of the registration definition.
     */
    name: string;
    /**
     * The details for the Managed Services offer’s plan in Azure Marketplace.
     */
    plan?: PlanResponse;
    /**
     * The properties of the registration definition associated with the registration assignment.
     */
    properties?: RegistrationAssignmentPropertiesResponseProperties;
    /**
     * The metadata for the registration definition resource.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the Azure resource (Microsoft.ManagedServices/registrationDefinitions).
     */
    type: string;
}

/**
 * The properties of a registration definition.
 */
export interface RegistrationDefinitionPropertiesResponse {
    /**
     * The collection of authorization objects describing the access Azure Active Directory principals in the managedBy tenant will receive on the delegated resource in the managed tenant.
     */
    authorizations: AuthorizationResponse[];
    /**
     * The description of the registration definition.
     */
    description?: string;
    /**
     * The collection of eligible authorization objects describing the just-in-time access Azure Active Directory principals in the managedBy tenant will receive on the delegated resource in the managed tenant.
     */
    eligibleAuthorizations?: EligibleAuthorizationResponse[];
    /**
     * The identifier of the managedBy tenant.
     */
    managedByTenantId: string;
    /**
     * The name of the managedBy tenant.
     */
    managedByTenantName: string;
    /**
     * The identifier of the managed tenant.
     */
    manageeTenantId: string;
    /**
     * The name of the managed tenant.
     */
    manageeTenantName: string;
    /**
     * The current provisioning state of the registration definition.
     */
    provisioningState: string;
    /**
     * The name of the registration definition.
     */
    registrationDefinitionName?: string;
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
