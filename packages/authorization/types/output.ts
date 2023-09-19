import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Access Review History Definition Instance.
 */
export interface AccessReviewHistoryInstanceResponse {
    /**
     * The display name for the parent history definition.
     */
    displayName?: string;
    /**
     * Uri which can be used to retrieve review history data. To generate this Uri, generateDownloadUri() must be called for a specific accessReviewHistoryDefinitionInstance. The link expires after a 24 hour period. Callers can see the expiration date time by looking at the 'se' parameter in the generated uri.
     */
    downloadUri: string;
    /**
     * Date time when history data report expires and the associated data is deleted.
     */
    expiration?: string;
    /**
     * Date time when the history data report is scheduled to be generated.
     */
    fulfilledDateTime?: string;
    /**
     * The access review history definition instance id.
     */
    id: string;
    /**
     * The access review history definition instance unique id.
     */
    name: string;
    /**
     * Date time used when selecting review data, all reviews included in data end on or before this date. For use only with one-time/non-recurring reports.
     */
    reviewHistoryPeriodEndDateTime?: string;
    /**
     * Date time used when selecting review data, all reviews included in data start on or after this date. For use only with one-time/non-recurring reports.
     */
    reviewHistoryPeriodStartDateTime?: string;
    /**
     * Date time when the history data report is scheduled to be generated.
     */
    runDateTime?: string;
    /**
     * Status of the requested review history instance data. This is either requested, in-progress, done or error. The state transitions are as follows - Requested -> InProgress -> Done -> Expired
     */
    status: string;
    /**
     * The resource type.
     */
    type: string;
}

/**
 * Access Review Instance.
 */
export interface AccessReviewInstanceResponse {
    /**
     * This is the collection of backup reviewers.
     */
    backupReviewers?: AccessReviewReviewerResponse[];
    /**
     * The DateTime when the review instance is scheduled to end.
     */
    endDateTime?: string;
    /**
     * The access review instance id.
     */
    id: string;
    /**
     * The access review instance name.
     */
    name: string;
    /**
     * This is the collection of reviewers.
     */
    reviewers?: AccessReviewReviewerResponse[];
    /**
     * This field specifies the type of reviewers for a review. Usually for a review, reviewers are explicitly assigned. However, in some cases, the reviewers may not be assigned and instead be chosen dynamically. For example managers review or self review.
     */
    reviewersType: string;
    /**
     * The DateTime when the review instance is scheduled to be start.
     */
    startDateTime?: string;
    /**
     * This read-only field specifies the status of an access review instance.
     */
    status: string;
    /**
     * The resource type.
     */
    type: string;
}

/**
 * Descriptor for what needs to be reviewed
 */
export interface AccessReviewReviewerResponse {
    /**
     * The id of the reviewer(user/servicePrincipal)
     */
    principalId?: string;
    /**
     * The identity type : user/servicePrincipal
     */
    principalType: string;
}

/**
 * Descriptor for what needs to be reviewed
 */
export interface AccessReviewScopeResponse {
    /**
     * The role assignment state eligible/active to review
     */
    assignmentState: string;
    /**
     * This is used to indicate the resource id(s) to exclude
     */
    excludeResourceId?: string;
    /**
     * This is used to indicate the role definition id(s) to exclude
     */
    excludeRoleDefinitionId?: string;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    expandNestedMemberships?: boolean;
    /**
     * Duration users are inactive for. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
     */
    inactiveDuration?: string;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    includeAccessBelowResource?: boolean;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    includeInheritedAccess?: boolean;
    /**
     * The identity type user/servicePrincipal to review
     */
    principalType: string;
    /**
     * ResourceId in which this review is getting created
     */
    resourceId: string;
    /**
     * This is used to indicate the role being reviewed
     */
    roleDefinitionId: string;
}

/**
 * The approval settings.
 */
export interface ApprovalSettingsResponse {
    /**
     * The type of rule
     */
    approvalMode?: string;
    /**
     * The approval stages of the request.
     */
    approvalStages?: ApprovalStageResponse[];
    /**
     * Determines whether approval is required or not.
     */
    isApprovalRequired?: boolean;
    /**
     * Determines whether approval is required for assignment extension.
     */
    isApprovalRequiredForExtension?: boolean;
    /**
     * Determine whether requestor justification is required.
     */
    isRequestorJustificationRequired?: boolean;
}

/**
 * The approval stage.
 */
export interface ApprovalStageResponse {
    /**
     * The time in days when approval request would be timed out
     */
    approvalStageTimeOutInDays?: number;
    /**
     * The escalation approver of the request.
     */
    escalationApprovers?: UserSetResponse[];
    /**
     * The time in minutes when the approval request would be escalated if the primary approver does not approve
     */
    escalationTimeInMinutes?: number;
    /**
     * Determines whether approver need to provide justification for his decision.
     */
    isApproverJustificationRequired?: boolean;
    /**
     * The value determine whether escalation feature is enabled.
     */
    isEscalationEnabled?: boolean;
    /**
     * The primary approver of the request.
     */
    primaryApprovers?: UserSetResponse[];
}

/**
 * Identity for the resource.  Policy assignments support a maximum of one identity.  That is either a system assigned identity or a single user assigned identity.
 */
export interface IdentityResponse {
    /**
     * The principal ID of the resource identity.  This property will only be provided for a system assigned identity
     */
    principalId: string;
    /**
     * The tenant ID of the resource identity.  This property will only be provided for a system assigned identity
     */
    tenantId: string;
    /**
     * The identity type. This is the only required field when adding a system or user assigned identity to a resource.
     */
    type?: string;
    /**
     * The user identity associated with the policy. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: {[key: string]: IdentityResponseUserAssignedIdentities};
}

export interface IdentityResponseUserAssignedIdentities {
    /**
     * The client id of user assigned identity.
     */
    clientId: string;
    /**
     * The principal id of user assigned identity.
     */
    principalId: string;
}

/**
 * Lock owner properties.
 */
export interface ManagementLockOwnerResponse {
    /**
     * The application ID of the lock owner.
     */
    applicationId?: string;
}

/**
 * A message that describes why a resource is non-compliant with the policy. This is shown in 'deny' error messages and on resource's non-compliant compliance results.
 */
export interface NonComplianceMessageResponse {
    /**
     * A message that describes why a resource is non-compliant with the policy. This is shown in 'deny' error messages and on resource's non-compliant compliance results.
     */
    message: string;
    /**
     * The policy definition reference ID within a policy set definition the message is intended for. This is only applicable if the policy assignment assigns a policy set definition. If this is not provided the message applies to all policies assigned by this policy assignment.
     */
    policyDefinitionReferenceId?: string;
}

/**
 * The policy property value override.
 */
export interface OverrideResponse {
    /**
     * The override kind.
     */
    kind?: string;
    /**
     * The list of the selector expressions.
     */
    selectors?: SelectorResponse[];
    /**
     * The value to override the policy property.
     */
    value?: string;
}

/**
 * The definition of a parameter that can be provided to the policy.
 */
export interface ParameterDefinitionsValueResponse {
    /**
     * The allowed values for the parameter.
     */
    allowedValues?: any[];
    /**
     * The default value for the parameter if no value is provided.
     */
    defaultValue?: any;
    /**
     * General metadata for the parameter.
     */
    metadata?: ParameterDefinitionsValueResponseMetadata;
    /**
     * Provides validation of parameter inputs during assignment using a self-defined JSON schema. This property is only supported for object-type parameters and follows the Json.NET Schema 2019-09 implementation. You can learn more about using schemas at https://json-schema.org/ and test draft schemas at https://www.jsonschemavalidator.net/.
     */
    schema?: any;
    /**
     * The data type of the parameter.
     */
    type?: string;
}

/**
 * General metadata for the parameter.
 */
export interface ParameterDefinitionsValueResponseMetadata {
    /**
     * Set to true to have Azure portal create role assignments on the resource ID or resource scope value of this parameter during policy assignment. This property is useful in case you wish to assign permissions outside the assignment scope.
     */
    assignPermissions?: boolean;
    /**
     * The description of the parameter.
     */
    description?: string;
    /**
     * The display name for the parameter.
     */
    displayName?: string;
    /**
     * Used when assigning the policy definition through the portal. Provides a context aware list of values for the user to choose from.
     */
    strongType?: string;
}

/**
 * The value of a parameter.
 */
export interface ParameterValuesValueResponse {
    /**
     * The value of the parameter.
     */
    value?: any;
}

/**
 * Role definition permissions.
 */
export interface PermissionResponse {
    /**
     * Allowed actions.
     */
    actions?: string[];
    /**
     * The conditions on the role definition. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
     */
    condition: string;
    /**
     * Version of the condition. Currently the only accepted value is '2.0'
     */
    conditionVersion: string;
    /**
     * Allowed Data actions.
     */
    dataActions?: string[];
    /**
     * Denied actions.
     */
    notActions?: string[];
    /**
     * Denied Data actions.
     */
    notDataActions?: string[];
}

/**
 * Expanded info of resource scope, role definition and policy
 */
export interface PolicyAssignmentPropertiesResponse {
    /**
     * Details of the policy
     */
    policy?: PolicyAssignmentPropertiesResponsePolicy;
    /**
     * Details of role definition
     */
    roleDefinition?: PolicyAssignmentPropertiesResponseRoleDefinition;
    /**
     * Details of the resource scope
     */
    scope?: PolicyAssignmentPropertiesResponseScope;
}

/**
 * Details of the policy
 */
export interface PolicyAssignmentPropertiesResponsePolicy {
    /**
     * Id of the policy
     */
    id?: string;
    /**
     * The name of the entity last modified it
     */
    lastModifiedBy: PrincipalResponse;
    /**
     * The last modified date time.
     */
    lastModifiedDateTime?: string;
}

/**
 * Details of role definition
 */
export interface PolicyAssignmentPropertiesResponseRoleDefinition {
    /**
     * Display name of the role definition
     */
    displayName?: string;
    /**
     * Id of the role definition
     */
    id?: string;
    /**
     * Type of the role definition
     */
    type?: string;
}

/**
 * Details of the resource scope
 */
export interface PolicyAssignmentPropertiesResponseScope {
    /**
     * Display name of the resource
     */
    displayName?: string;
    /**
     * Scope id of the resource
     */
    id?: string;
    /**
     * Type of the resource
     */
    type?: string;
}

/**
 * The policy definition group.
 */
export interface PolicyDefinitionGroupResponse {
    /**
     * A resource ID of a resource that contains additional metadata about the group.
     */
    additionalMetadataId?: string;
    /**
     * The group's category.
     */
    category?: string;
    /**
     * The group's description.
     */
    description?: string;
    /**
     * The group's display name.
     */
    displayName?: string;
    /**
     * The name of the group.
     */
    name: string;
}

/**
 * The policy definition reference.
 */
export interface PolicyDefinitionReferenceResponse {
    /**
     * The name of the groups that this policy definition reference belongs to.
     */
    groupNames?: string[];
    /**
     * The parameter values for the referenced policy rule. The keys are the parameter names.
     */
    parameters?: {[key: string]: ParameterValuesValueResponse};
    /**
     * The ID of the policy definition or policy set definition.
     */
    policyDefinitionId: string;
    /**
     * A unique id (within the policy set definition) for this policy definition reference.
     */
    policyDefinitionReferenceId?: string;
}

/**
 * The ID of the policy definition version.
 */
export interface PolicyDefinitionVersionResponse {
    /**
     * The policy definition description.
     */
    description?: string;
    /**
     * The display name of the policy definition.
     */
    displayName?: string;
    /**
     * The ID of the policy definition version.
     */
    id: string;
    /**
     * The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
     */
    metadata?: any;
    /**
     * The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
     */
    mode?: string;
    /**
     * The name of the policy definition version.
     */
    name: string;
    /**
     * The parameter definitions for parameters used in the policy rule. The keys are the parameter names.
     */
    parameters?: {[key: string]: ParameterDefinitionsValueResponse};
    /**
     * The policy rule.
     */
    policyRule?: any;
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
     */
    policyType?: string;
    /**
     * The system metadata relating to this resource.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource (Microsoft.Authorization/policyDefinitions/versions).
     */
    type: string;
    /**
     * The policy definition version in #.#.# format.
     */
    version?: string;
}
/**
 * policyDefinitionVersionResponseProvideDefaults sets the appropriate defaults for PolicyDefinitionVersionResponse
 */
export function policyDefinitionVersionResponseProvideDefaults(val: PolicyDefinitionVersionResponse): PolicyDefinitionVersionResponse {
    return {
        ...val,
        mode: (val.mode) ?? "Indexed",
    };
}

/**
 * The policy set definition version.
 */
export interface PolicySetDefinitionVersionResponse {
    /**
     * The policy set definition description.
     */
    description?: string;
    /**
     * The display name of the policy set definition.
     */
    displayName?: string;
    /**
     * The ID of the policy set definition version.
     */
    id: string;
    /**
     * The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
     */
    metadata?: any;
    /**
     * The name of the policy set definition version.
     */
    name: string;
    /**
     * The policy set definition parameters that can be used in policy definition references.
     */
    parameters?: {[key: string]: ParameterDefinitionsValueResponse};
    /**
     * The metadata describing groups of policy definition references within the policy set definition.
     */
    policyDefinitionGroups?: PolicyDefinitionGroupResponse[];
    /**
     * An array of policy definition references.
     */
    policyDefinitions: PolicyDefinitionReferenceResponse[];
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
     */
    policyType?: string;
    /**
     * The system metadata relating to this resource.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource (Microsoft.Authorization/policySetDefinitions/versions).
     */
    type: string;
    /**
     * The policy set definition version in #.#.# format.
     */
    version?: string;
}

/**
 * The variable column.
 */
export interface PolicyVariableColumnResponse {
    /**
     * The name of this policy variable column.
     */
    columnName: string;
}

/**
 * The name value tuple for this variable value column.
 */
export interface PolicyVariableValueColumnValueResponse {
    /**
     * Column name for the variable value
     */
    columnName: string;
    /**
     * Column value for the variable value; this can be an integer, double, boolean, null or a string.
     */
    columnValue: any;
}

/**
 * The name of the entity last modified it
 */
export interface PrincipalResponse {
    /**
     * The name of the principal made changes
     */
    displayName?: string;
    /**
     * Email of principal
     */
    email?: string;
    /**
     * The id of the principal made changes
     */
    id?: string;
    /**
     * Type of principal such as user , group etc
     */
    type?: string;
}

/**
 * Private Link Association Properties.
 */
export interface PrivateLinkAssociationPropertiesExpandedResponse {
    /**
     * The rmpl Resource ID.
     */
    privateLink?: string;
    publicNetworkAccess?: string;
    /**
     * The scope of the private link association.
     */
    scope?: string;
    /**
     * The TenantID.
     */
    tenantID?: string;
}

export interface ResourceManagementPrivateLinkEndpointConnectionsResponse {
    /**
     * The private endpoint connections.
     */
    privateEndpointConnections?: string[];
}

/**
 * The resource selector to filter policies by resource properties.
 */
export interface ResourceSelectorResponse {
    /**
     * The name of the resource selector.
     */
    name?: string;
    /**
     * The list of the selector expressions.
     */
    selectors?: SelectorResponse[];
}

/**
 * The role management policy approval rule.
 */
export interface RoleManagementPolicyApprovalRuleResponse {
    /**
     * The id of the rule.
     */
    id?: string;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyApprovalRule'.
     */
    ruleType: "RoleManagementPolicyApprovalRule";
    /**
     * The approval setting
     */
    setting?: ApprovalSettingsResponse;
    /**
     * The target of the current rule.
     */
    target?: RoleManagementPolicyRuleTargetResponse;
}

/**
 * The role management policy authentication context rule.
 */
export interface RoleManagementPolicyAuthenticationContextRuleResponse {
    /**
     * The claim value.
     */
    claimValue?: string;
    /**
     * The id of the rule.
     */
    id?: string;
    /**
     * The value indicating if rule is enabled.
     */
    isEnabled?: boolean;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyAuthenticationContextRule'.
     */
    ruleType: "RoleManagementPolicyAuthenticationContextRule";
    /**
     * The target of the current rule.
     */
    target?: RoleManagementPolicyRuleTargetResponse;
}

/**
 * The role management policy enablement rule.
 */
export interface RoleManagementPolicyEnablementRuleResponse {
    /**
     * The list of enabled rules.
     */
    enabledRules?: string[];
    /**
     * The id of the rule.
     */
    id?: string;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyEnablementRule'.
     */
    ruleType: "RoleManagementPolicyEnablementRule";
    /**
     * The target of the current rule.
     */
    target?: RoleManagementPolicyRuleTargetResponse;
}

/**
 * The role management policy expiration rule.
 */
export interface RoleManagementPolicyExpirationRuleResponse {
    /**
     * The id of the rule.
     */
    id?: string;
    /**
     * The value indicating whether expiration is required.
     */
    isExpirationRequired?: boolean;
    /**
     * The maximum duration of expiration in timespan.
     */
    maximumDuration?: string;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyExpirationRule'.
     */
    ruleType: "RoleManagementPolicyExpirationRule";
    /**
     * The target of the current rule.
     */
    target?: RoleManagementPolicyRuleTargetResponse;
}

/**
 * The role management policy notification rule.
 */
export interface RoleManagementPolicyNotificationRuleResponse {
    /**
     * The id of the rule.
     */
    id?: string;
    /**
     * Determines if the notification will be sent to the recipient type specified in the policy rule.
     */
    isDefaultRecipientsEnabled?: boolean;
    /**
     * The notification level.
     */
    notificationLevel?: string;
    /**
     * The list of notification recipients.
     */
    notificationRecipients?: string[];
    /**
     * The type of notification.
     */
    notificationType?: string;
    /**
     * The recipient type.
     */
    recipientType?: string;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyNotificationRule'.
     */
    ruleType: "RoleManagementPolicyNotificationRule";
    /**
     * The target of the current rule.
     */
    target?: RoleManagementPolicyRuleTargetResponse;
}

/**
 * The role management policy rule target.
 */
export interface RoleManagementPolicyRuleTargetResponse {
    /**
     * The caller of the setting.
     */
    caller?: string;
    /**
     * The list of enforced settings.
     */
    enforcedSettings?: string[];
    /**
     * The list of inheritable settings.
     */
    inheritableSettings?: string[];
    /**
     * The assignment level to which rule is applied.
     */
    level?: string;
    /**
     * The type of operation.
     */
    operations?: string[];
    /**
     * The list of target objects.
     */
    targetObjects?: string[];
}

/**
 * The selector expression.
 */
export interface SelectorResponse {
    /**
     * The list of values to filter in.
     */
    in?: string[];
    /**
     * The selector kind.
     */
    kind?: string;
    /**
     * The list of values to filter out.
     */
    notIn?: string[];
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
 * The detail of a user.
 */
export interface UserSetResponse {
    /**
     * The description of the user.
     */
    description?: string;
    /**
     * The object id of the user.
     */
    id?: string;
    /**
     * The value indicating whether the user is a backup fallback approver
     */
    isBackup?: boolean;
    /**
     * The type of user.
     */
    userType?: string;
}











