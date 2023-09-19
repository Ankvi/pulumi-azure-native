import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
