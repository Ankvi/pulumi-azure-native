import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface ContactArgs {
    /**
     * Email address of the contact.
     */
    email?: pulumi.Input<string>;
    /**
     * Name of the contact.
     */
    name?: pulumi.Input<string>;
    /**
     * URL for the contact.
     */
    url?: pulumi.Input<string>;
}

export interface DeploymentServerArgs {
    /**
     * Base runtime URLs for this deployment.
     */
    runtimeUri?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Server information of the environment.
 */
export interface EnvironmentServerArgs {
    managementPortalUri?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Type of the server that represents the environment.
     */
    type?: pulumi.Input<string | enums.EnvironmentServerType>;
}

/**
 * Additional, external documentation for the API.
 */
export interface ExternalDocumentationArgs {
    /**
     * Description of the documentation.
     */
    description?: pulumi.Input<string>;
    /**
     * Title of the documentation.
     */
    title?: pulumi.Input<string>;
    /**
     * URL pointing to the documentation.
     */
    url: pulumi.Input<string>;
}

/**
 * The license information for the API.
 */
export interface LicenseArgs {
    /**
     * SPDX license information for the API. The identifier field is mutually exclusive of the URL field.
     */
    identifier?: pulumi.Input<string>;
    /**
     * Name of the license.
     */
    name?: pulumi.Input<string>;
    /**
     * URL pointing to the license details. The URL field is mutually exclusive of the identifier field.
     */
    url?: pulumi.Input<string>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface MetadataAssignmentArgs {
    deprecated?: pulumi.Input<boolean>;
    /**
     * The entities this metadata schema component gets applied to.
     */
    entity?: pulumi.Input<string | enums.MetadataAssignmentEntity>;
    required?: pulumi.Input<boolean>;
}

export interface OnboardingArgs {
    developerPortalUri?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Onboarding guide.
     */
    instructions?: pulumi.Input<string>;
}

/**
 * Terms of service for the API.
 */
export interface TermsOfServiceArgs {
    /**
     * URL pointing to the terms of service.
     */
    url: pulumi.Input<string>;
}

