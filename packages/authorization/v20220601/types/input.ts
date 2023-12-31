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
     * The value of a parameter.
     */
    export interface ParameterValuesValueArgs {
        /**
         * The value of the parameter.
         */
        value?: any;
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
