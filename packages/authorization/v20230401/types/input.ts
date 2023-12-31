import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
