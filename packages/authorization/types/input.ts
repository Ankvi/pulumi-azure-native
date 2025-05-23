import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Access Review History Definition Instance.
 */
export interface AccessReviewHistoryInstanceArgs {
    /**
     * The display name for the parent history definition.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Date time when history data report expires and the associated data is deleted.
     */
    expiration?: pulumi.Input<string>;
    /**
     * Date time when the history data report is scheduled to be generated.
     */
    fulfilledDateTime?: pulumi.Input<string>;
    /**
     * Date time used when selecting review data, all reviews included in data end on or before this date. For use only with one-time/non-recurring reports.
     */
    reviewHistoryPeriodEndDateTime?: pulumi.Input<string>;
    /**
     * Date time used when selecting review data, all reviews included in data start on or after this date. For use only with one-time/non-recurring reports.
     */
    reviewHistoryPeriodStartDateTime?: pulumi.Input<string>;
    /**
     * Date time when the history data report is scheduled to be generated.
     */
    runDateTime?: pulumi.Input<string>;
}

/**
 * Access Review Instance.
 */
export interface AccessReviewInstanceArgs {
    /**
     * This is the collection of backup reviewers.
     */
    backupReviewers?: pulumi.Input<pulumi.Input<AccessReviewReviewerArgs>[]>;
    /**
     * The DateTime when the review instance is scheduled to end.
     */
    endDateTime?: pulumi.Input<string>;
    /**
     * This is the collection of reviewers.
     */
    reviewers?: pulumi.Input<pulumi.Input<AccessReviewReviewerArgs>[]>;
    /**
     * The DateTime when the review instance is scheduled to be start.
     */
    startDateTime?: pulumi.Input<string>;
}

/**
 * Recurrence Range of an Access Review Schedule Definition.
 */
export interface AccessReviewRecurrenceRangeArgs {
    /**
     * The DateTime when the review is scheduled to end. Required if type is endDate
     */
    endDate?: pulumi.Input<string>;
    /**
     * The number of times to repeat the access review. Required and must be positive if type is numbered.
     */
    numberOfOccurrences?: pulumi.Input<number>;
    /**
     * The DateTime when the review is scheduled to be start. This could be a date in the future. Required on create.
     */
    startDate?: pulumi.Input<string>;
    /**
     * The recurrence range type. The possible values are: endDate, noEnd, numbered.
     */
    type?: pulumi.Input<string | enums.AccessReviewRecurrenceRangeType>;
}

/**
 * Descriptor for what needs to be reviewed
 */
export interface AccessReviewReviewerArgs {
    /**
     * The id of the reviewer(user/servicePrincipal)
     */
    principalId?: pulumi.Input<string>;
}

/**
 * Descriptor for what needs to be reviewed
 */
export interface AccessReviewScopeArgs {
    /**
     * This is used to indicate the resource id(s) to exclude
     */
    excludeResourceId?: pulumi.Input<string>;
    /**
     * This is used to indicate the role definition id(s) to exclude
     */
    excludeRoleDefinitionId?: pulumi.Input<string>;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    expandNestedMemberships?: pulumi.Input<boolean>;
    /**
     * Duration users are inactive for. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
     */
    inactiveDuration?: pulumi.Input<string>;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    includeAccessBelowResource?: pulumi.Input<boolean>;
    /**
     * Flag to indicate whether to expand nested memberships or not.
     */
    includeInheritedAccess?: pulumi.Input<boolean>;
}

/**
 * The approval settings.
 */
export interface ApprovalSettingsArgs {
    /**
     * The type of rule
     */
    approvalMode?: pulumi.Input<string | enums.ApprovalMode>;
    /**
     * The approval stages of the request.
     */
    approvalStages?: pulumi.Input<pulumi.Input<ApprovalStageArgs>[]>;
    /**
     * Determines whether approval is required or not.
     */
    isApprovalRequired?: pulumi.Input<boolean>;
    /**
     * Determines whether approval is required for assignment extension.
     */
    isApprovalRequiredForExtension?: pulumi.Input<boolean>;
    /**
     * Determine whether requestor justification is required.
     */
    isRequestorJustificationRequired?: pulumi.Input<boolean>;
}

/**
 * The approval stage.
 */
export interface ApprovalStageArgs {
    /**
     * The time in days when approval request would be timed out
     */
    approvalStageTimeOutInDays?: pulumi.Input<number>;
    /**
     * The escalation approver of the request.
     */
    escalationApprovers?: pulumi.Input<pulumi.Input<UserSetArgs>[]>;
    /**
     * The time in minutes when the approval request would be escalated if the primary approver does not approve
     */
    escalationTimeInMinutes?: pulumi.Input<number>;
    /**
     * Determines whether approver need to provide justification for his decision.
     */
    isApproverJustificationRequired?: pulumi.Input<boolean>;
    /**
     * The value determine whether escalation feature is enabled.
     */
    isEscalationEnabled?: pulumi.Input<boolean>;
    /**
     * The primary approver of the request.
     */
    primaryApprovers?: pulumi.Input<pulumi.Input<UserSetArgs>[]>;
}

/**
 * Identity for the resource.  Policy assignments support a maximum of one identity.  That is either a system assigned identity or a single user assigned identity.
 */
export interface IdentityArgs {
    /**
     * The identity type. This is the only required field when adding a system or user assigned identity to a resource.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
    /**
     * The user identity associated with the policy. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Lock owner properties.
 */
export interface ManagementLockOwnerArgs {
    /**
     * The application ID of the lock owner.
     */
    applicationId?: pulumi.Input<string>;
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
    policyDefinitionReferenceId?: pulumi.Input<string>;
}

/**
 * The policy property value override.
 */
export interface OverrideArgs {
    /**
     * The override kind.
     */
    kind?: pulumi.Input<string | enums.OverrideKind>;
    /**
     * The list of the selector expressions.
     */
    selectors?: pulumi.Input<pulumi.Input<SelectorArgs>[]>;
    /**
     * The value to override the policy property.
     */
    value?: pulumi.Input<string>;
}

/**
 * The PIM Only Mode settings.
 */
export interface PIMOnlyModeSettingsArgs {
    /**
     * The list of excluded assignment types allowed.
     */
    excludedAssignmentTypes?: pulumi.Input<pulumi.Input<string | enums.ExcludedPrincipalTypes>[]>;
    /**
     * The list of excluded entities that the rule does not apply to.
     */
    excludes?: pulumi.Input<pulumi.Input<UsersOrServicePrincipalSetArgs>[]>;
    /**
     * Determines whether the setting is enabled, disabled or report only.
     */
    mode?: pulumi.Input<string | enums.PIMOnlyMode>;
}

/**
 * The definition of a parameter that can be provided to the policy.
 */
export interface ParameterDefinitionsValueArgs {
    /**
     * The allowed values for the parameter.
     */
    allowedValues?: pulumi.Input<any[]>;
    /**
     * The default value for the parameter if no value is provided.
     */
    defaultValue?: any;
    /**
     * General metadata for the parameter.
     */
    metadata?: pulumi.Input<ParameterDefinitionsValueMetadataArgs>;
    /**
     * Provides validation of parameter inputs during assignment using a self-defined JSON schema. This property is only supported for object-type parameters and follows the Json.NET Schema 2019-09 implementation. You can learn more about using schemas at https://json-schema.org/ and test draft schemas at https://www.jsonschemavalidator.net/.
     */
    schema?: any;
    /**
     * The data type of the parameter.
     */
    type?: pulumi.Input<string | enums.ParameterType>;
}

/**
 * General metadata for the parameter.
 */
export interface ParameterDefinitionsValueMetadataArgs {
    /**
     * Set to true to have Azure portal create role assignments on the resource ID or resource scope value of this parameter during policy assignment. This property is useful in case you wish to assign permissions outside the assignment scope.
     */
    assignPermissions?: pulumi.Input<boolean>;
    /**
     * The description of the parameter.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name for the parameter.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Used when assigning the policy definition through the portal. Provides a context aware list of values for the user to choose from.
     */
    strongType?: pulumi.Input<string>;
}

/**
 * The value of a parameter.
 */
export interface ParameterValuesValueArgs {
    /**
     * The value of the parameter.
     */
    value?: any;
}

/**
 * Role definition permissions.
 */
export interface PermissionArgs {
    /**
     * Allowed actions.
     */
    actions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Allowed Data actions.
     */
    dataActions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Denied actions.
     */
    notActions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Denied Data actions.
     */
    notDataActions?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The policy definition group.
 */
export interface PolicyDefinitionGroupArgs {
    /**
     * A resource ID of a resource that contains additional metadata about the group.
     */
    additionalMetadataId?: pulumi.Input<string>;
    /**
     * The group's category.
     */
    category?: pulumi.Input<string>;
    /**
     * The group's description.
     */
    description?: pulumi.Input<string>;
    /**
     * The group's display name.
     */
    displayName?: pulumi.Input<string>;
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
    definitionVersion?: pulumi.Input<string>;
    /**
     * The name of the groups that this policy definition reference belongs to.
     */
    groupNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The parameter values for the referenced policy rule. The keys are the parameter names.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<ParameterValuesValueArgs>}>;
    /**
     * The ID of the policy definition or policy set definition.
     */
    policyDefinitionId: pulumi.Input<string>;
    /**
     * A unique id (within the policy set definition) for this policy definition reference.
     */
    policyDefinitionReferenceId?: pulumi.Input<string>;
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
    privateLink?: pulumi.Input<string>;
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessOptions>;
}

/**
 * The resource selector to filter policies by resource properties.
 */
export interface ResourceSelectorArgs {
    /**
     * The name of the resource selector.
     */
    name?: pulumi.Input<string>;
    /**
     * The list of the selector expressions.
     */
    selectors?: pulumi.Input<pulumi.Input<SelectorArgs>[]>;
}

/**
 * Expiration of the role eligibility schedule
 */
export interface RoleEligibilityScheduleRequestPropertiesExpirationArgs {
    /**
     * Duration of the role eligibility schedule in TimeSpan.
     */
    duration?: pulumi.Input<string>;
    /**
     * End DateTime of the role eligibility schedule.
     */
    endDateTime?: pulumi.Input<string>;
    /**
     * Type of the role eligibility schedule expiration
     */
    type?: pulumi.Input<string | enums.Type>;
}

/**
 * Schedule info of the role eligibility schedule
 */
export interface RoleEligibilityScheduleRequestPropertiesScheduleInfoArgs {
    /**
     * Expiration of the role eligibility schedule
     */
    expiration?: pulumi.Input<RoleEligibilityScheduleRequestPropertiesExpirationArgs>;
    /**
     * Start DateTime of the role eligibility schedule.
     */
    startDateTime?: pulumi.Input<string>;
}

/**
 * Ticket Info of the role eligibility
 */
export interface RoleEligibilityScheduleRequestPropertiesTicketInfoArgs {
    /**
     * Ticket number for the role eligibility
     */
    ticketNumber?: pulumi.Input<string>;
    /**
     * Ticket system name for the role eligibility
     */
    ticketSystem?: pulumi.Input<string>;
}

/**
 * The role management policy approval rule.
 */
export interface RoleManagementPolicyApprovalRuleArgs {
    /**
     * The id of the rule.
     */
    id?: pulumi.Input<string>;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyApprovalRule'.
     */
    ruleType: pulumi.Input<"RoleManagementPolicyApprovalRule">;
    /**
     * The approval setting
     */
    setting?: pulumi.Input<ApprovalSettingsArgs>;
    /**
     * The target of the current rule.
     */
    target?: pulumi.Input<RoleManagementPolicyRuleTargetArgs>;
}

/**
 * The role management policy authentication context rule.
 */
export interface RoleManagementPolicyAuthenticationContextRuleArgs {
    /**
     * The claim value.
     */
    claimValue?: pulumi.Input<string>;
    /**
     * The id of the rule.
     */
    id?: pulumi.Input<string>;
    /**
     * The value indicating if rule is enabled.
     */
    isEnabled?: pulumi.Input<boolean>;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyAuthenticationContextRule'.
     */
    ruleType: pulumi.Input<"RoleManagementPolicyAuthenticationContextRule">;
    /**
     * The target of the current rule.
     */
    target?: pulumi.Input<RoleManagementPolicyRuleTargetArgs>;
}

/**
 * The role management policy enablement rule.
 */
export interface RoleManagementPolicyEnablementRuleArgs {
    /**
     * The list of enabled rules.
     */
    enabledRules?: pulumi.Input<pulumi.Input<string | enums.EnablementRules>[]>;
    /**
     * The id of the rule.
     */
    id?: pulumi.Input<string>;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyEnablementRule'.
     */
    ruleType: pulumi.Input<"RoleManagementPolicyEnablementRule">;
    /**
     * The target of the current rule.
     */
    target?: pulumi.Input<RoleManagementPolicyRuleTargetArgs>;
}

/**
 * The role management policy expiration rule.
 */
export interface RoleManagementPolicyExpirationRuleArgs {
    /**
     * The members not restricted by expiration rule.
     */
    exceptionMembers?: pulumi.Input<pulumi.Input<UserSetArgs>[]>;
    /**
     * The id of the rule.
     */
    id?: pulumi.Input<string>;
    /**
     * The value indicating whether expiration is required.
     */
    isExpirationRequired?: pulumi.Input<boolean>;
    /**
     * The maximum duration of expiration in timespan.
     */
    maximumDuration?: pulumi.Input<string>;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyExpirationRule'.
     */
    ruleType: pulumi.Input<"RoleManagementPolicyExpirationRule">;
    /**
     * The target of the current rule.
     */
    target?: pulumi.Input<RoleManagementPolicyRuleTargetArgs>;
}

/**
 * The role management policy notification rule.
 */
export interface RoleManagementPolicyNotificationRuleArgs {
    /**
     * The id of the rule.
     */
    id?: pulumi.Input<string>;
    /**
     * Determines if the notification will be sent to the recipient type specified in the policy rule.
     */
    isDefaultRecipientsEnabled?: pulumi.Input<boolean>;
    /**
     * The notification level.
     */
    notificationLevel?: pulumi.Input<string | enums.NotificationLevel>;
    /**
     * The list of notification recipients.
     */
    notificationRecipients?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of notification.
     */
    notificationType?: pulumi.Input<string | enums.NotificationDeliveryMechanism>;
    /**
     * The recipient type.
     */
    recipientType?: pulumi.Input<string | enums.RecipientType>;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyNotificationRule'.
     */
    ruleType: pulumi.Input<"RoleManagementPolicyNotificationRule">;
    /**
     * The target of the current rule.
     */
    target?: pulumi.Input<RoleManagementPolicyRuleTargetArgs>;
}

/**
 * The role management policy PIM only mode rule.
 */
export interface RoleManagementPolicyPimOnlyModeRuleArgs {
    /**
     * The id of the rule.
     */
    id?: pulumi.Input<string>;
    /**
     * The PIM Only Mode settings
     */
    pimOnlyModeSettings?: pulumi.Input<PIMOnlyModeSettingsArgs>;
    /**
     * The type of rule
     * Expected value is 'RoleManagementPolicyPimOnlyModeRule'.
     */
    ruleType: pulumi.Input<"RoleManagementPolicyPimOnlyModeRule">;
    /**
     * The target of the current rule.
     */
    target?: pulumi.Input<RoleManagementPolicyRuleTargetArgs>;
}

/**
 * The role management policy rule target.
 */
export interface RoleManagementPolicyRuleTargetArgs {
    /**
     * The caller of the setting.
     */
    caller?: pulumi.Input<string>;
    /**
     * The list of enforced settings.
     */
    enforcedSettings?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of inheritable settings.
     */
    inheritableSettings?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The assignment level to which rule is applied.
     */
    level?: pulumi.Input<string>;
    /**
     * The type of operation.
     */
    operations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of target objects.
     */
    targetObjects?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The selector expression.
 */
export interface SelectorArgs {
    /**
     * The list of values to filter in.
     */
    in?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The selector kind.
     */
    kind?: pulumi.Input<string | enums.SelectorKind>;
    /**
     * The list of values to filter out.
     */
    notIn?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The detail of a user.
 */
export interface UserSetArgs {
    /**
     * The description of the user.
     */
    description?: pulumi.Input<string>;
    /**
     * The object id of the user.
     */
    id?: pulumi.Input<string>;
    /**
     * The value indicating whether the user is a backup fallback approver
     */
    isBackup?: pulumi.Input<boolean>;
    /**
     * The type of user.
     */
    userType?: pulumi.Input<string | enums.UserType>;
}

/**
 * The detail of a subject.
 */
export interface UsersOrServicePrincipalSetArgs {
    /**
     * The display Name of the entity.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The object id of the entity.
     */
    id?: pulumi.Input<string>;
    /**
     * The type of user.
     */
    type?: pulumi.Input<string | enums.UserType>;
}
