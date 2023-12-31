import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The authentication info when authType is secret
     */
    export interface SecretAuthInfoArgs {
        /**
         * The authentication type.
         * Expected value is 'secret'.
         */
        authType: pulumi.Input<"secret">;
        /**
         * Username or account name for secret auth.
         */
        name?: pulumi.Input<string>;
        /**
         * Password or account key for secret auth.
         */
        secret?: pulumi.Input<string>;
    }

    /**
     * An option to store secret value in secure place
     */
    export interface SecretStoreArgs {
        /**
         * The key vault id to store secret
         */
        keyVaultId?: pulumi.Input<string>;
    }

    /**
     * The authentication info when authType is servicePrincipal certificate
     */
    export interface ServicePrincipalCertificateAuthInfoArgs {
        /**
         * The authentication type.
         * Expected value is 'servicePrincipalCertificate'.
         */
        authType: pulumi.Input<"servicePrincipalCertificate">;
        /**
         * ServicePrincipal certificate for servicePrincipal auth.
         */
        certificate: pulumi.Input<string>;
        /**
         * Application clientId for servicePrincipal auth.
         */
        clientId: pulumi.Input<string>;
        /**
         * Principal Id for servicePrincipal auth.
         */
        principalId: pulumi.Input<string>;
    }

    /**
     * The authentication info when authType is servicePrincipal secret
     */
    export interface ServicePrincipalSecretAuthInfoArgs {
        /**
         * The authentication type.
         * Expected value is 'servicePrincipalSecret'.
         */
        authType: pulumi.Input<"servicePrincipalSecret">;
        /**
         * ServicePrincipal application clientId for servicePrincipal auth.
         */
        clientId: pulumi.Input<string>;
        /**
         * Principal Id for servicePrincipal auth.
         */
        principalId: pulumi.Input<string>;
        /**
         * Secret for servicePrincipal auth.
         */
        secret: pulumi.Input<string>;
    }

    /**
     * The authentication info when authType is systemAssignedIdentity
     */
    export interface SystemAssignedIdentityAuthInfoArgs {
        /**
         * The authentication type.
         * Expected value is 'systemAssignedIdentity'.
         */
        authType: pulumi.Input<"systemAssignedIdentity">;
    }

    /**
     * The authentication info when authType is userAssignedIdentity
     */
    export interface UserAssignedIdentityAuthInfoArgs {
        /**
         * The authentication type.
         * Expected value is 'userAssignedIdentity'.
         */
        authType: pulumi.Input<"userAssignedIdentity">;
        /**
         * Client Id for userAssignedIdentity.
         */
        clientId: pulumi.Input<string>;
        /**
         * Subscription id for userAssignedIdentity.
         */
        subscriptionId: pulumi.Input<string>;
    }

    /**
     * The VNet solution for linker
     */
    export interface VNetSolutionArgs {
        /**
         * Type of VNet solution.
         */
        type?: pulumi.Input<string | enums.VNetSolutionType>;
    }
