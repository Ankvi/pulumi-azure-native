import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
