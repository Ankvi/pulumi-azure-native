import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The authentication info when authType is secret
     */
    export interface SecretAuthInfoResponse {
        /**
         * The authentication type.
         * Expected value is 'secret'.
         */
        authType: "secret";
        /**
         * Username or account name for secret auth.
         */
        name?: string;
        /**
         * Password or account key for secret auth.
         */
        secret?: string;
    }

    /**
     * An option to store secret value in secure place
     */
    export interface SecretStoreResponse {
        /**
         * The key vault id to store secret
         */
        keyVaultId?: string;
    }

    /**
     * The authentication info when authType is servicePrincipal certificate
     */
    export interface ServicePrincipalCertificateAuthInfoResponse {
        /**
         * The authentication type.
         * Expected value is 'servicePrincipalCertificate'.
         */
        authType: "servicePrincipalCertificate";
        /**
         * ServicePrincipal certificate for servicePrincipal auth.
         */
        certificate: string;
        /**
         * Application clientId for servicePrincipal auth.
         */
        clientId: string;
        /**
         * Principal Id for servicePrincipal auth.
         */
        principalId: string;
    }

    /**
     * The authentication info when authType is servicePrincipal secret
     */
    export interface ServicePrincipalSecretAuthInfoResponse {
        /**
         * The authentication type.
         * Expected value is 'servicePrincipalSecret'.
         */
        authType: "servicePrincipalSecret";
        /**
         * ServicePrincipal application clientId for servicePrincipal auth.
         */
        clientId: string;
        /**
         * Principal Id for servicePrincipal auth.
         */
        principalId: string;
        /**
         * Secret for servicePrincipal auth.
         */
        secret: string;
    }

    /**
     * A configuration item for source resource
     */
    export interface SourceConfigurationResponse {
        /**
         * The name of setting.
         */
        name?: string;
        /**
         * The value of setting
         */
        value?: string;
    }

    /**
     * The authentication info when authType is systemAssignedIdentity
     */
    export interface SystemAssignedIdentityAuthInfoResponse {
        /**
         * The authentication type.
         * Expected value is 'systemAssignedIdentity'.
         */
        authType: "systemAssignedIdentity";
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
     * The authentication info when authType is userAssignedIdentity
     */
    export interface UserAssignedIdentityAuthInfoResponse {
        /**
         * The authentication type.
         * Expected value is 'userAssignedIdentity'.
         */
        authType: "userAssignedIdentity";
        /**
         * Client Id for userAssignedIdentity.
         */
        clientId: string;
        /**
         * Subscription id for userAssignedIdentity.
         */
        subscriptionId: string;
    }

    /**
     * The VNet solution for linker
     */
    export interface VNetSolutionResponse {
        /**
         * Type of VNet solution.
         */
        type?: string;
    }
