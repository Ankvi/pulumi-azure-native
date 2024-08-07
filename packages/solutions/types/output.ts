import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Managed application artifact.
 */
export interface ApplicationArtifactResponse {
    /**
     * The managed application artifact name.
     */
    name: string;
    /**
     * The managed application artifact type.
     */
    type: string;
    /**
     * The managed application artifact blob uri.
     */
    uri: string;
}

/**
 * The managed application provider authorization.
 */
export interface ApplicationAuthorizationResponse {
    /**
     * The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the managed application resources.
     */
    principalId: string;
    /**
     * The provider's role definition identifier. This role will define all the permissions that the provider must have on the managed application's container resource group. This role definition cannot have permission to delete the resource group.
     */
    roleDefinitionId: string;
}

/**
 * Managed application billing details definition.
 */
export interface ApplicationBillingDetailsDefinitionResponse {
    /**
     * The managed application resource usage Id.
     */
    resourceUsageId?: string;
}

/**
 * The application client details to track the entity creating/updating the managed app resource.
 */
export interface ApplicationClientDetailsResponse {
    /**
     * The client application Id.
     */
    applicationId?: string;
    /**
     * The client Oid.
     */
    oid?: string;
    /**
     * The client Puid
     */
    puid?: string;
}

/**
 * Application definition artifact.
 */
export interface ApplicationDefinitionArtifactResponse {
    /**
     * The managed application definition artifact name.
     */
    name: string;
    /**
     * The managed application definition artifact type.
     */
    type: string;
    /**
     * The managed application definition artifact blob uri.
     */
    uri: string;
}

/**
 * Managed application deployment policy.
 */
export interface ApplicationDeploymentPolicyResponse {
    /**
     * The managed application deployment mode.
     */
    deploymentMode: string;
}

/**
 * Managed application Jit access policy.
 */
export interface ApplicationJitAccessPolicyResponse {
    /**
     * Whether the JIT access is enabled.
     */
    jitAccessEnabled: boolean;
    /**
     * JIT approval mode.
     */
    jitApprovalMode?: string;
    /**
     * The JIT approvers
     */
    jitApprovers?: JitApproverDefinitionResponse[];
    /**
     * The maximum duration JIT access is granted. This is an ISO8601 time period value.
     */
    maximumJitAccessDuration?: string;
}

/**
 * Managed application management policy.
 */
export interface ApplicationManagementPolicyResponse {
    /**
     * The managed application management mode.
     */
    mode?: string;
}

/**
 * Managed application notification endpoint.
 */
export interface ApplicationNotificationEndpointResponse {
    /**
     * The managed application notification endpoint uri.
     */
    uri: string;
}

/**
 * Managed application notification policy.
 */
export interface ApplicationNotificationPolicyResponse {
    /**
     * The managed application notification endpoint.
     */
    notificationEndpoints: ApplicationNotificationEndpointResponse[];
}

/**
 * The application package contact information.
 */
export interface ApplicationPackageContactResponse {
    /**
     * The contact name.
     */
    contactName?: string;
    /**
     * The contact email.
     */
    email: string;
    /**
     * The contact phone number.
     */
    phone: string;
}

/**
 * Managed application locking policy.
 */
export interface ApplicationPackageLockingPolicyDefinitionResponse {
    /**
     * The deny assignment excluded actions.
     */
    allowedActions?: string[];
    /**
     * The deny assignment excluded data actions.
     */
    allowedDataActions?: string[];
}

/**
 * The appliance package support URLs.
 */
export interface ApplicationPackageSupportUrlsResponse {
    /**
     * The government cloud support URL.
     */
    governmentCloud?: string;
    /**
     * The public azure support URL.
     */
    publicAzure?: string;
}

/**
 * Managed application policy.
 */
export interface ApplicationPolicyResponse {
    /**
     * The policy name
     */
    name?: string;
    /**
     * The policy parameters.
     */
    parameters?: string;
    /**
     * The policy definition Id.
     */
    policyDefinitionId?: string;
}

/**
 * Identity for the resource.
 */
export interface IdentityResponse {
    /**
     * The principal ID of resource identity.
     */
    principalId: string;
    /**
     * The tenant ID of resource.
     */
    tenantId: string;
    /**
     * The identity type.
     */
    type?: string;
    /**
     * The list of user identities associated with the resource. The user identity dictionary key references will be resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedResourceIdentityResponse};
}

/**
 * JIT approver definition.
 */
export interface JitApproverDefinitionResponse {
    /**
     * The approver display name.
     */
    displayName?: string;
    /**
     * The approver service principal Id.
     */
    id: string;
    /**
     * The approver type.
     */
    type?: string;
}

/**
 * The JIT authorization policies.
 */
export interface JitAuthorizationPoliciesResponse {
    /**
     * The the principal id that will be granted JIT access.
     */
    principalId: string;
    /**
     * The role definition id that will be granted to the Principal.
     */
    roleDefinitionId: string;
}

/**
 * The JIT scheduling policies.
 */
export interface JitSchedulingPolicyResponse {
    duration: string;
    /**
     * The start time of the request.
     */
    startTime: string;
    /**
     * The type of JIT schedule.
     */
    type: string;
}

/**
 * The managed identity token for the managed app resource.
 */
export interface ManagedIdentityTokenResponse {
    /**
     * The requested access token.
     */
    accessToken?: string;
    /**
     * The aud (audience) the access token was request for. This is the same as what was provided in the listTokens request.
     */
    authorizationAudience?: string;
    /**
     * The number of seconds the access token will be valid.
     */
    expiresIn?: string;
    /**
     * The timespan when the access token expires. This is represented as the number of seconds from epoch.
     */
    expiresOn?: string;
    /**
     * The timespan when the access token takes effect. This is represented as the number of seconds from epoch.
     */
    notBefore?: string;
    /**
     * The Azure resource ID for the issued token. This is either the managed application ID or the user-assigned identity ID.
     */
    resourceId?: string;
    /**
     * The type of the token.
     */
    tokenType?: string;
}

/**
 * Plan for the managed application.
 */
export interface PlanResponse {
    /**
     * The plan name.
     */
    name: string;
    /**
     * The product code.
     */
    product: string;
    /**
     * The promotion code.
     */
    promotionCode?: string;
    /**
     * The publisher ID.
     */
    publisher: string;
    /**
     * The plan's version.
     */
    version: string;
}

/**
 * SKU for the resource.
 */
export interface SkuResponse {
    /**
     * The SKU capacity.
     */
    capacity?: number;
    /**
     * The SKU family.
     */
    family?: string;
    /**
     * The SKU model.
     */
    model?: string;
    /**
     * The SKU name.
     */
    name: string;
    /**
     * The SKU size.
     */
    size?: string;
    /**
     * The SKU tier.
     */
    tier?: string;
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
 * Represents the user assigned identity that is contained within the UserAssignedIdentities dictionary on ResourceIdentity
 */
export interface UserAssignedResourceIdentityResponse {
    /**
     * The principal id of user assigned identity.
     */
    principalId: string;
    /**
     * The tenant id of user assigned identity.
     */
    tenantId: string;
}

