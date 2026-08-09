import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Access Review History Definition Instance.
 */
export interface AccessReviewHistoryInstanceArgs {
    /**
     * The display name for the parent history definition.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Date time when history data report expires and the associated data is deleted.
     */
    expiration?: pulumi.Input<string | undefined>;
    /**
     * Date time when the history data report is scheduled to be generated.
     */
    fulfilledDateTime?: pulumi.Input<string | undefined>;
    /**
     * Date time used when selecting review data, all reviews included in data end on or before this date. For use only with one-time/non-recurring reports.
     */
    reviewHistoryPeriodEndDateTime?: pulumi.Input<string | undefined>;
    /**
     * Date time used when selecting review data, all reviews included in data start on or after this date. For use only with one-time/non-recurring reports.
     */
    reviewHistoryPeriodStartDateTime?: pulumi.Input<string | undefined>;
    /**
     * Date time when the history data report is scheduled to be generated.
     */
    runDateTime?: pulumi.Input<string | undefined>;
}

/**
 * Access Review Instance.
 */
export interface AccessReviewInstanceArgs {
    /**
     * This is the collection of backup reviewers.
     */
    backupReviewers?: pulumi.Input<pulumi.Input<AccessReviewReviewerArgs>[] | undefined>;
    /**
     * The DateTime when the review instance is scheduled to end.
     */
    endDateTime?: pulumi.Input<string | undefined>;
    /**
     * This is the collection of reviewers.
     */
    reviewers?: pulumi.Input<pulumi.Input<AccessReviewReviewerArgs>[] | undefined>;
    /**
     * The DateTime when the review instance is scheduled to be start.
     */
    startDateTime?: pulumi.Input<string | undefined>;
}

/**
 * Recurrence Range of an Access Review Schedule Definition.
 */
export interface AccessReviewRecurrenceRangeArgs {
    /**
     * The DateTime when the review is scheduled to end. Required if type is endDate
     */
    endDate?: pulumi.Input<string | undefined>;
    /**
     * The number of times to repeat the access review. Required and must be positive if type is numbered.
     */
    numberOfOccurrences?: pulumi.Input<number | undefined>;
    /**
     * The DateTime when the review is scheduled to be start. This could be a date in the future. Required on create.
     */
    startDate?: pulumi.Input<string | undefined>;
    /**
     * The recurrence range type. The possible values are: endDate, noEnd, numbered.
     */
    type?: pulumi.Input<string | enums.AccessReviewRecurrenceRangeType | undefined>;
}

/**
 * Descriptor for what needs to be reviewed
 */
export interface AccessReviewReviewerArgs {
    /**
     * The id of the reviewer(user/servicePrincipal)
     */
    principalId?: pulumi.Input<string | undefined>;
}

/**
 * Descriptor for what needs to be reviewed
 */
export interface AccessReviewScopeArgs {
    /**
     * This is used to indicate the resource id(s) to exclude
     */
    excludeResourceId?: pulumi.Input<string | undefined>;
    /**
     * This is used to indicate the role definition id(s) to exclude
     */
    excludeRoleDefinitionId?: pulumi.Input<string | undefined>;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    expandNestedMemberships?: pulumi.Input<boolean | undefined>;
    /**
     * Duration users are inactive for. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
     */
    inactiveDuration?: pulumi.Input<string | undefined>;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    includeAccessBelowResource?: pulumi.Input<boolean | undefined>;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    includeInheritedAccess?: pulumi.Input<boolean | undefined>;
}

/**
 * The approval settings.
 */
export interface ApprovalSettingsArgs {
    /**
     * The type of rule
     */
    approvalMode?: pulumi.Input<string | enums.ApprovalMode | undefined>;
    /**
     * The approval stages of the request.
     */
    approvalStages?: pulumi.Input<pulumi.Input<ApprovalStageArgs>[] | undefined>;
    /**
     * Determines whether approval is required or not.
     */
    isApprovalRequired?: pulumi.Input<boolean | undefined>;
    /**
     * Determines whether approval is required for assignment extension.
     */
    isApprovalRequiredForExtension?: pulumi.Input<boolean | undefined>;
    /**
     * Determine whether requestor justification is required.
     */
    isRequestorJustificationRequired?: pulumi.Input<boolean | undefined>;
}

/**
 * The approval stage.
 */
export interface ApprovalStageArgs {
    /**
     * The time in days when approval request would be timed out
     */
    approvalStageTimeOutInDays?: pulumi.Input<number | undefined>;
    /**
     * The escalation approver of the request.
     */
    escalationApprovers?: pulumi.Input<pulumi.Input<UserSetArgs>[] | undefined>;
    /**
     * The time in minutes when the approval request would be escalated if the primary approver does not approve
     */
    escalationTimeInMinutes?: pulumi.Input<number | undefined>;
    /**
     * Determines whether approver need to provide justification for his decision.
     */
    isApproverJustificationRequired?: pulumi.Input<boolean | undefined>;
    /**
     * The value determine whether escalation feature is enabled.
     */
    isEscalationEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * The primary approver of the request.
     */
    primaryApprovers?: pulumi.Input<pulumi.Input<UserSetArgs>[] | undefined>;
}

/**
 * Deny assignment permissions.
 */
export interface DenyAssignmentPermissionArgs {
    /**
     * Actions to which the deny assignment does not grant access.
     */
    actions?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The conditions on the Deny assignment permission. This limits the resources it applies to.
     */
    condition?: pulumi.Input<string | undefined>;
    /**
     * Version of the condition.
     */
    conditionVersion?: pulumi.Input<string | undefined>;
    /**
     * Data actions to which the deny assignment does not grant access.
     */
    dataActions?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Actions to exclude from that the deny assignment does not grant access.
     */
    notActions?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Data actions to exclude from that the deny assignment does not grant access.
     */
    notDataActions?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Deny assignment principal.
 */
export interface DenyAssignmentPrincipalArgs {
    /**
     * The object ID of the principal.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The type of the principal such as user, group, servicePrincipal, etc.
     */
    type?: pulumi.Input<string | undefined>;
}

/**
 * Identity for the resource.  Policy assignments support a maximum of one identity.  That is either a system assigned identity or a single user assigned identity.
 */
export interface IdentityArgs {
    /**
     * The identity type. This is the only required field when adding a system or user assigned identity to a resource.
     */
    type?: pulumi.Input<enums.ResourceIdentityType | undefined>;
    /**
     * The user identity associated with the policy. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Lock owner properties.
 */
export interface ManagementLockOwnerArgs {
    /**
     * The application ID of the lock owner.
     */
    applicationId?: pulumi.Input<string | undefined>;
}

/**
 * A message that describes why a resource is non-compliant with the policy. This is shown in 'deny' error messages and on resource's non-compliant compliance results.
 */
export interface NonComplianceMessageArgs {
    /**
     * A message that describes why a resource is non-compliant with the policy. This is shown in 'deny' error messages and on resource's non-compliant compliance results.
     */
    message: pulumi.Input<string>;
    /**
     * The policy definition reference ID within a policy set definition the message is intended for. This is only applicable if the policy assignment assigns a policy set definition. If this is not provided the message applies to all policies assigned by this policy assignment.
     */
    policyDefinitionReferenceId?: pulumi.Input<string | undefined>;
}

/**
 * The policy property value override.
 */
export interface OverrideArgs {
    /**
     * The override kind.
     */
    kind?: pulumi.Input<string | enums.OverrideKind | undefined>;
    /**
     * The list of the selector expressions.
     */
    selectors?: pulumi.Input<pulumi.Input<SelectorArgs>[] | undefined>;
    /**
     * The value to override the policy property.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * The PIM Only Mode settings.
 */
export interface PIMOnlyModeSettingsArgs {
    /**
     * The list of excluded assignment types allowed.
     */
    excludedAssignmentTypes?: pulumi.Input<pulumi.Input<string | enums.ExcludedPrincipalTypes>[] | undefined>;
    /**
     * The list of excluded entities that the rule does not apply to.
     */
    excludes?: pulumi.Input<pulumi.Input<UsersOrServicePrincipalSetArgs>[] | undefined>;
    /**
     * Determines whether the setting is enabled, disabled or report only.
     */
    mode?: pulumi.Input<string | enums.PIMOnlyMode | undefined>;
}

/**
 * The definition of a parameter that can be provided to the policy.
 */
export interface ParameterDefinitionsValueArgs {
    /**
     * The allowed values for the parameter.
     */
    allowedValues?: pulumi.Input<any[] | undefined>;
    /**
     * The default value for the parameter if no value is provided.
     */
    defaultValue?: any | undefined;
    /**
     * General metadata for the parameter.
     */
    metadata?: pulumi.Input<ParameterDefinitionsValueMetadataArgs | undefined>;
    /**
     * Provides validation of parameter inputs during assignment using a self-defined JSON schema. This property is only supported for object-type parameters and follows the Json.NET Schema 2019-09 implementation. You can learn more about using schemas at https://json-schema.org/ and test draft schemas at https://www.jsonschemavalidator.net/.
     */
    schema?: any | undefined;
    /**
     * The data type of the parameter.
     */
    type?: pulumi.Input<string | enums.ParameterType | undefined>;
}

/**
 * General metadata for the parameter.
 */
export interface ParameterDefinitionsValueMetadataArgs {
    /**
     * Set to true to have Azure portal create role assignments on the resource ID or resource scope value of this parameter during policy assignment. This property is useful in case you wish to assign permissions outside the assignment scope.
     */
    assignPermissions?: pulumi.Input<boolean | undefined>;
    /**
     * The description of the parameter.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The display name for the parameter.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Used when assigning the policy definition through the portal. Provides a context aware list of values for the user to choose from.
     */
    strongType?: pulumi.Input<string | undefined>;
}

/**
 * The value of a parameter.
 */
export interface ParameterValuesValueArgs {
    /**
     * The value of the parameter.
     */
    value?: any | undefined;
}

/**
 * Role definition permissions.
 */
export interface PermissionArgs {
    /**
     * Allowed actions.
     */
    actions?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Allowed Data actions.
     */
    dataActions?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Denied actions.
     */
    notActions?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Denied Data actions.
     */
    notDataActions?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The policy definition group.
 */
export interface PolicyDefinitionGroupArgs {
    /**
     * A resource ID of a resource that contains additional metadata about the group.
     */
    additionalMetadataId?: pulumi.Input<string | undefined>;
    /**
     * The group's category.
     */
    category?: pulumi.Input<string | undefined>;
    /**
     * The group's description.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The group's display name.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * The name of the group.
     */
    name: pulumi.Input<string>;
}

/**
 * The policy definition reference.
 */
export interface PolicyDefinitionReferenceArgs {
    /**
     * The version of the policy definition to use.
     */
    definitionVersion?: pulumi.Input<string | undefined>;
    /**
     * The name of the groups that this policy definition reference belongs to.
     */
    groupNames?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The parameter values for the referenced policy rule. The keys are the parameter names.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterValuesValueArgs>} | undefined>;
    /**
     * The ID of the policy definition or policy set definition.
     */
    policyDefinitionId: pulumi.Input<string>;
    /**
     * A unique id (within the policy set definition) for this policy definition reference.
     */
    policyDefinitionReferenceId?: pulumi.Input<string | undefined>;
}

/**
 * The variable column.
 */
export interface PolicyVariableColumnArgs {
    /**
     * The name of this policy variable column.
     */
    columnName: pulumi.Input<string>;
}

/**
 * The name value tuple for this variable value column.
 */
export interface PolicyVariableValueColumnValueArgs {
    /**
     * Column name for the variable value
     */
    columnName: pulumi.Input<string>;
    /**
     * Column value for the variable value; this can be an integer, double, boolean, null or a string.
     */
    columnValue: any;
}

export interface PrivateLinkAssociationPropertiesArgs {
    /**
     * The rmpl Resource ID.
     */
    privateLink?: pulumi.Input<string | undefined>;
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessOptions | undefined>;
}

/**
 * The resource selector to filter policies by resource properties.
 */
export interface ResourceSelectorArgs {
    /**
     * The name of the resource selector.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The list of the selector expressions.
     */
    selectors?: pulumi.Input<pulumi.Input<SelectorArgs>[] | undefined>;
}

/**
 * Expiration of the role eligibility schedule
 */
export interface RoleEligibilityScheduleRequestPropertiesExpirationArgs {
    /**
     * Duration of the role eligibility schedule in TimeSpan.
     */
    duration?: pulumi.Input<string | undefined>;
    /**
     * End DateTime of the role eligibility schedule.
     */
    endDateTime?: pulumi.Input<string | undefined>;
    /**
     * Type of the role eligibility schedule expiration
     */
    type?: pulumi.Input<string | enums.Type | undefined>;
}

/**
 * Schedule info of the role eligibility schedule
 */
export interface RoleEligibilityScheduleRequestPropertiesScheduleInfoArgs {
    /**
     * Expiration of the role eligibility schedule
     */
    expiration?: pulumi.Input<RoleEligibilityScheduleRequestPropertiesExpirationArgs | undefined>;
    /**
     * Start DateTime of the role eligibility schedule.
     */
    startDateTime?: pulumi.Input<string | undefined>;
}

/**
 * Ticket Info of the role eligibility
 */
export interface RoleEligibilityScheduleRequestPropertiesTicketInfoArgs {
    /**
     * Ticket number for the role eligibility
     */
    ticketNumber?: pulumi.Input<string | undefined>;
    /**
     * Ticket system name for the role eligibility
     */
    ticketSystem?: pulumi.Input<string | undefined>;
}

/**
 * The role management policy approval rule.
 */
export interface RoleManagementPolicyApprovalRuleArgs {
    /**
     * The id of the rule.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyApprovalRule'.
     */
    ruleType: pulumi.Input<"RoleManagementPolicyApprovalRule">;
    /**
     * The approval setting
     */
    setting?: pulumi.Input<ApprovalSettingsArgs | undefined>;
    /**
     * The target of the current rule.
     */
    target?: pulumi.Input<RoleManagementPolicyRuleTargetArgs | undefined>;
}

/**
 * The role management policy authentication context rule.
 */
export interface RoleManagementPolicyAuthenticationContextRuleArgs {
    /**
     * The claim value.
     */
    claimValue?: pulumi.Input<string | undefined>;
    /**
     * The id of the rule.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The value indicating if rule is enabled.
     */
    isEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyAuthenticationContextRule'.
     */
    ruleType: pulumi.Input<"RoleManagementPolicyAuthenticationContextRule">;
    /**
     * The target of the current rule.
     */
    target?: pulumi.Input<RoleManagementPolicyRuleTargetArgs | undefined>;
}

/**
 * The role management policy enablement rule.
 */
export interface RoleManagementPolicyEnablementRuleArgs {
    /**
     * The list of enabled rules.
     */
    enabledRules?: pulumi.Input<pulumi.Input<string | enums.EnablementRules>[] | undefined>;
    /**
     * The id of the rule.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyEnablementRule'.
     */
    ruleType: pulumi.Input<"RoleManagementPolicyEnablementRule">;
    /**
     * The target of the current rule.
     */
    target?: pulumi.Input<RoleManagementPolicyRuleTargetArgs | undefined>;
}

/**
 * The role management policy expiration rule.
 */
export interface RoleManagementPolicyExpirationRuleArgs {
    /**
     * The members not restricted by expiration rule.
     */
    exceptionMembers?: pulumi.Input<pulumi.Input<UserSetArgs>[] | undefined>;
    /**
     * The id of the rule.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The value indicating whether expiration is required.
     */
    isExpirationRequired?: pulumi.Input<boolean | undefined>;
    /**
     * The maximum duration of expiration in timespan.
     */
    maximumDuration?: pulumi.Input<string | undefined>;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyExpirationRule'.
     */
    ruleType: pulumi.Input<"RoleManagementPolicyExpirationRule">;
    /**
     * The target of the current rule.
     */
    target?: pulumi.Input<RoleManagementPolicyRuleTargetArgs | undefined>;
}

/**
 * The role management policy notification rule.
 */
export interface RoleManagementPolicyNotificationRuleArgs {
    /**
     * The id of the rule.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * Determines if the notification will be sent to the recipient type specified in the policy rule.
     */
    isDefaultRecipientsEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * The notification level.
     */
    notificationLevel?: pulumi.Input<string | enums.NotificationLevel | undefined>;
    /**
     * The list of notification recipients.
     */
    notificationRecipients?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The type of notification.
     */
    notificationType?: pulumi.Input<string | enums.NotificationDeliveryMechanism | undefined>;
    /**
     * The recipient type.
     */
    recipientType?: pulumi.Input<string | enums.RecipientType | undefined>;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyNotificationRule'.
     */
    ruleType: pulumi.Input<"RoleManagementPolicyNotificationRule">;
    /**
     * The target of the current rule.
     */
    target?: pulumi.Input<RoleManagementPolicyRuleTargetArgs | undefined>;
}

/**
 * The role management policy PIM only mode rule.
 */
export interface RoleManagementPolicyPimOnlyModeRuleArgs {
    /**
     * The id of the rule.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The PIM Only Mode settings
     */
    pimOnlyModeSettings?: pulumi.Input<PIMOnlyModeSettingsArgs | undefined>;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyPimOnlyModeRule'.
     */
    ruleType: pulumi.Input<"RoleManagementPolicyPimOnlyModeRule">;
    /**
     * The target of the current rule.
     */
    target?: pulumi.Input<RoleManagementPolicyRuleTargetArgs | undefined>;
}

/**
 * The role management policy rule target.
 */
export interface RoleManagementPolicyRuleTargetArgs {
    /**
     * The caller of the setting.
     */
    caller?: pulumi.Input<string | undefined>;
    /**
     * The list of enforced settings.
     */
    enforcedSettings?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The list of inheritable settings.
     */
    inheritableSettings?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The assignment level to which rule is applied.
     */
    level?: pulumi.Input<string | undefined>;
    /**
     * The type of operation.
     */
    operations?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The list of target objects.
     */
    targetObjects?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The selector expression.
 */
export interface SelectorArgs {
    /**
     * The list of values to filter in.
     */
    in?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The selector kind.
     */
    kind?: pulumi.Input<string | enums.SelectorKind | undefined>;
    /**
     * The list of values to filter out.
     */
    notIn?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The detail of a user.
 */
export interface UserSetArgs {
    /**
     * The description of the user.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The object id of the user.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The value indicating whether the user is a backup fallback approver
     */
    isBackup?: pulumi.Input<boolean | undefined>;
    /**
     * The type of user.
     */
    userType?: pulumi.Input<string | enums.UserType | undefined>;
}

/**
 * The detail of a subject.
 */
export interface UsersOrServicePrincipalSetArgs {
    /**
     * The display Name of the entity.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * The object id of the entity.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The type of user.
     */
    type?: pulumi.Input<string | enums.UsersOrServicePrincipalSetUserType | undefined>;
}
