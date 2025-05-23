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
 * Appliance ArtifactProfile definition.
 */
export interface ArtifactProfileResponse {
    /**
     * Endpoint is the URL to upload artifacts to.
     */
    endpoint: string;
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
 * Appliance SSHKey definition.
 */
export interface SSHKeyResponse {
    /**
     * Certificate associated with the public key if the key is signed.
     */
    certificate: string;
    /**
     * Certificate creation timestamp (Unix).
     */
    creationTimeStamp: number;
    /**
     * Certificate expiration timestamp (Unix).
     */
    expirationTimeStamp: number;
    /**
     * Private Key.
     */
    privateKey: string;
    /**
     * Public Key.
     */
    publicKey: string;
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
