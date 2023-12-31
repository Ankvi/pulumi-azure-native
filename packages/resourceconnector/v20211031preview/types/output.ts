import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Cluster User Credential appliance.
     */
    export interface ApplianceCredentialKubeconfigResponse {
        /**
         * Name which contains the role of the kubeconfig.
         */
        name: string;
        /**
         * Contains the kubeconfig value.
         */
        value: string;
    }

    /**
     * Contains infrastructure information about the Appliance
     */
    export interface AppliancePropertiesResponseInfrastructureConfig {
        /**
         * Information about the connected appliance.
         */
        provider?: string;
    }

    /**
     * Contains the REP (rendezvous endpoint) and “Listener” access token from notification service (NS).
     */
    export interface HybridConnectionConfigResponse {
        /**
         * Timestamp when this token will be expired.
         */
        expirationTime: number;
        /**
         * Name of the connection
         */
        hybridConnectionName: string;
        /**
         * Name of the notification service.
         */
        relay: string;
        /**
         * Listener access token
         */
        token: string;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type?: string;
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
