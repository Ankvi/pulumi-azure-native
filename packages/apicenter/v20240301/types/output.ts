import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * API specification details.
     */
    export interface ApiDefinitionPropertiesResponseSpecification {
        /**
         * Specification name.
         */
        name?: string;
        /**
         * Specification version.
         */
        version?: string;
    }

    export interface ContactResponse {
        /**
         * Email address of the contact.
         */
        email?: string;
        /**
         * Name of the contact.
         */
        name?: string;
        /**
         * URL for the contact.
         */
        url?: string;
    }

    export interface DeploymentServerResponse {
        /**
         * Base runtime URLs for this deployment.
         */
        runtimeUri?: string[];
    }

    /**
     * Server information of the environment.
     */
    export interface EnvironmentServerResponse {
        managementPortalUri?: string[];
        /**
         * Type of the server that represents the environment.
         */
        type?: string;
    }

    /**
     * Additional, external documentation for the API.
     */
    export interface ExternalDocumentationResponse {
        /**
         * Description of the documentation.
         */
        description?: string;
        /**
         * Title of the documentation.
         */
        title?: string;
        /**
         * URL pointing to the documentation.
         */
        url: string;
    }

    /**
     * The license information for the API.
     */
    export interface LicenseResponse {
        /**
         * SPDX license information for the API. The identifier field is mutually exclusive of the URL field.
         */
        identifier?: string;
        /**
         * Name of the license.
         */
        name?: string;
        /**
         * URL pointing to the license details. The URL field is mutually exclusive of the identifier field.
         */
        url?: string;
    }

    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: string;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    export interface MetadataAssignmentResponse {
        deprecated?: boolean;
        /**
         * The entities this metadata schema component gets applied to.
         */
        entity?: string;
        required?: boolean;
    }

    export interface OnboardingResponse {
        developerPortalUri?: string[];
        /**
         * Onboarding guide.
         */
        instructions?: string;
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
     * Terms of service for the API.
     */
    export interface TermsOfServiceResponse {
        /**
         * URL pointing to the terms of service.
         */
        url: string;
    }

    /**
     * User assigned identity properties
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the assigned identity.
         */
        principalId: string;
    }
