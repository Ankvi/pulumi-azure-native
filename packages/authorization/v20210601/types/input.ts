import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
