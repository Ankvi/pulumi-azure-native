export const AccessReviewRecurrencePatternType = {
    Weekly: "weekly",
    AbsoluteMonthly: "absoluteMonthly",
} as const;

/**
 * The recurrence type : weekly, monthly, etc.
 */
export type AccessReviewRecurrencePatternType = (typeof AccessReviewRecurrencePatternType)[keyof typeof AccessReviewRecurrencePatternType];

export const AccessReviewRecurrenceRangeType = {
    EndDate: "endDate",
    NoEnd: "noEnd",
    Numbered: "numbered",
} as const;

/**
 * The recurrence range type. The possible values are: endDate, noEnd, numbered.
 */
export type AccessReviewRecurrenceRangeType = (typeof AccessReviewRecurrenceRangeType)[keyof typeof AccessReviewRecurrenceRangeType];

export const AccessReviewResult = {
    Approve: "Approve",
    Deny: "Deny",
    NotReviewed: "NotReviewed",
    DontKnow: "DontKnow",
    NotNotified: "NotNotified",
} as const;

/**
 * Represents a reviewer's decision for a given review
 */
export type AccessReviewResult = (typeof AccessReviewResult)[keyof typeof AccessReviewResult];

export const ApprovalMode = {
    SingleStage: "SingleStage",
    Serial: "Serial",
    Parallel: "Parallel",
    NoApproval: "NoApproval",
} as const;

/**
 * The type of rule
 */
export type ApprovalMode = (typeof ApprovalMode)[keyof typeof ApprovalMode];

export const AssignmentScopeValidation = {
    /**
     * This option will validate the exemption is at or under the assignment scope.
     */
    Default: "Default",
    /**
     * This option will bypass the validation the exemption scope is at or under the policy assignment scope.
     */
    DoNotValidate: "DoNotValidate",
} as const;

/**
 * The option whether validate the exemption is at or under the assignment scope.
 */
export type AssignmentScopeValidation = (typeof AssignmentScopeValidation)[keyof typeof AssignmentScopeValidation];

export const AssignmentType = {
    NotSpecified: "NotSpecified",
    System: "System",
    SystemHidden: "SystemHidden",
    Custom: "Custom",
} as const;

/**
 * The type of policy assignment. Possible values are NotSpecified, System, SystemHidden, and Custom. Immutable.
 */
export type AssignmentType = (typeof AssignmentType)[keyof typeof AssignmentType];

export const DefaultDecisionType = {
    Approve: "Approve",
    Deny: "Deny",
    Recommendation: "Recommendation",
} as const;

/**
 * This specifies the behavior for the autoReview feature when an access review completes.
 */
export type DefaultDecisionType = (typeof DefaultDecisionType)[keyof typeof DefaultDecisionType];

export const EnablementRules = {
    MultiFactorAuthentication: "MultiFactorAuthentication",
    Justification: "Justification",
    Ticketing: "Ticketing",
} as const;

/**
 * The type of enablement rule
 */
export type EnablementRules = (typeof EnablementRules)[keyof typeof EnablementRules];

export const EnforcementMode = {
    /**
     * The policy effect is enforced during resource creation or update.
     */
    Default: "Default",
    /**
     * The policy effect is not enforced during resource creation or update.
     */
    DoNotEnforce: "DoNotEnforce",
    /**
     * The policy effect is not enforced during resource creation or update until the resource or scope of the resource is enrolled to the assignment instance. Enrollment occurs upon deployment of the policy enrollment resource.
     */
    Enroll: "Enroll",
} as const;

/**
 * The policy assignment enforcement mode. Possible values are Default, DoNotEnforce, and Enroll
 */
export type EnforcementMode = (typeof EnforcementMode)[keyof typeof EnforcementMode];

export const ExcludedPrincipalTypes = {
    ServicePrincipalsAsTarget: "ServicePrincipalsAsTarget",
    ServicePrincipalsAsRequestor: "ServicePrincipalsAsRequestor",
} as const;

export type ExcludedPrincipalTypes = (typeof ExcludedPrincipalTypes)[keyof typeof ExcludedPrincipalTypes];

export const ExemptionCategory = {
    /**
     * This category of exemptions usually means the scope is not applicable for the policy.
     */
    Waiver: "Waiver",
    /**
     * This category of exemptions usually means the mitigation actions have been applied to the scope.
     */
    Mitigated: "Mitigated",
} as const;

/**
 * The policy exemption category. Possible values are Waiver and Mitigated.
 */
export type ExemptionCategory = (typeof ExemptionCategory)[keyof typeof ExemptionCategory];

export const LockLevel = {
    NotSpecified: "NotSpecified",
    CanNotDelete: "CanNotDelete",
    ReadOnly: "ReadOnly",
} as const;

/**
 * The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
 */
export type LockLevel = (typeof LockLevel)[keyof typeof LockLevel];

export const NotificationDeliveryMechanism = {
    Email: "Email",
} as const;

/**
 * The type of notification.
 */
export type NotificationDeliveryMechanism = (typeof NotificationDeliveryMechanism)[keyof typeof NotificationDeliveryMechanism];

export const NotificationLevel = {
    None: "None",
    Critical: "Critical",
    All: "All",
} as const;

/**
 * The notification level.
 */
export type NotificationLevel = (typeof NotificationLevel)[keyof typeof NotificationLevel];

export const OverrideKind = {
    /**
     * It will override the policy effect type.
     */
    PolicyEffect: "policyEffect",
    /**
     * It will override the definition version property value of the policy assignment.
     */
    DefinitionVersion: "definitionVersion",
} as const;

/**
 * The override kind.
 */
export type OverrideKind = (typeof OverrideKind)[keyof typeof OverrideKind];

export const PIMOnlyMode = {
    Disabled: "Disabled",
    Enabled: "Enabled",
    ReportOnly: "ReportOnly",
} as const;

/**
 * Determines whether the setting is enabled, disabled or report only.
 */
export type PIMOnlyMode = (typeof PIMOnlyMode)[keyof typeof PIMOnlyMode];

export const ParameterType = {
    String: "String",
    Array: "Array",
    Object: "Object",
    Boolean: "Boolean",
    Integer: "Integer",
    Float: "Float",
    DateTime: "DateTime",
} as const;

/**
 * The data type of the parameter.
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

export const PolicyType = {
    NotSpecified: "NotSpecified",
    BuiltIn: "BuiltIn",
    Custom: "Custom",
    Static: "Static",
} as const;

/**
 * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

export const PrincipalType = {
    User: "User",
    Group: "Group",
    ServicePrincipal: "ServicePrincipal",
    ForeignGroup: "ForeignGroup",
    Device: "Device",
} as const;

/**
 * The principal type of the assigned principal ID.
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

export const PublicNetworkAccessOptions = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccessOptions = (typeof PublicNetworkAccessOptions)[keyof typeof PublicNetworkAccessOptions];

export const RecipientType = {
    Requestor: "Requestor",
    Approver: "Approver",
    Admin: "Admin",
} as const;

/**
 * The recipient type.
 */
export type RecipientType = (typeof RecipientType)[keyof typeof RecipientType];

export const RequestType = {
    AdminAssign: "AdminAssign",
    AdminRemove: "AdminRemove",
    AdminUpdate: "AdminUpdate",
    AdminExtend: "AdminExtend",
    AdminRenew: "AdminRenew",
    SelfActivate: "SelfActivate",
    SelfDeactivate: "SelfDeactivate",
    SelfExtend: "SelfExtend",
    SelfRenew: "SelfRenew",
} as const;

/**
 * The type of the role assignment schedule request. Eg: SelfActivate, AdminAssign etc
 */
export type RequestType = (typeof RequestType)[keyof typeof RequestType];

export const ResourceIdentityType = {
    /**
     * Indicates that a system assigned identity is associated with the resource.
     */
    SystemAssigned: "SystemAssigned",
    /**
     * Indicates that a system assigned identity is associated with the resource.
     */
    UserAssigned: "UserAssigned",
    /**
     * Indicates that no identity is associated with the resource or that the existing identity should be removed.
     */
    None: "None",
} as const;

/**
 * The identity type. This is the only required field when adding a system or user assigned identity to a resource.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RoleManagementPolicyRuleType = {
    RoleManagementPolicyApprovalRule: "RoleManagementPolicyApprovalRule",
    RoleManagementPolicyAuthenticationContextRule: "RoleManagementPolicyAuthenticationContextRule",
    RoleManagementPolicyEnablementRule: "RoleManagementPolicyEnablementRule",
    RoleManagementPolicyExpirationRule: "RoleManagementPolicyExpirationRule",
    RoleManagementPolicyNotificationRule: "RoleManagementPolicyNotificationRule",
    RoleManagementPolicyPimOnlyModeRule: "RoleManagementPolicyPimOnlyModeRule",
} as const;

/**
 * The type of rule
 */
export type RoleManagementPolicyRuleType = (typeof RoleManagementPolicyRuleType)[keyof typeof RoleManagementPolicyRuleType];

export const SelectorKind = {
    /**
     * The selector kind to filter policies by the resource location.
     */
    ResourceLocation: "resourceLocation",
    /**
     * The selector kind to filter policies by the resource type.
     */
    ResourceType: "resourceType",
    /**
     * The selector kind to filter policies by the resource without location.
     */
    ResourceWithoutLocation: "resourceWithoutLocation",
    /**
     * The selector kind to filter policies by the policy definition reference ID.
     */
    PolicyDefinitionReferenceId: "policyDefinitionReferenceId",
} as const;

/**
 * The selector kind.
 */
export type SelectorKind = (typeof SelectorKind)[keyof typeof SelectorKind];

export const Type = {
    AfterDuration: "AfterDuration",
    AfterDateTime: "AfterDateTime",
    NoExpiration: "NoExpiration",
} as const;

/**
 * Type of the role eligibility schedule expiration
 */
export type Type = (typeof Type)[keyof typeof Type];

export const UserType = {
    User: "User",
    Group: "Group",
    ServicePrincipal: "ServicePrincipal",
} as const;

/**
 * The type of user.
 */
export type UserType = (typeof UserType)[keyof typeof UserType];
