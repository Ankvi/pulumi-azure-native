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














