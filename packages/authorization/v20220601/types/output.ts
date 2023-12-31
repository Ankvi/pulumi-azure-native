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
     * The value of a parameter.
     */
    export interface ParameterValuesValueResponse {
        /**
         * The value of the parameter.
         */
        value?: any;
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
