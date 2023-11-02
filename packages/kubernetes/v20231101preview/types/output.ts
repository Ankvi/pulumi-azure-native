import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * AAD Profile specifies attributes for Azure Active Directory integration.
     */
    export interface AadProfileResponse {
        /**
         * The list of AAD group object IDs that will have admin role of the cluster.
         */
        adminGroupObjectIDs?: string[];
        /**
         * Whether to enable Azure RBAC for Kubernetes authorization.
         */
        enableAzureRBAC?: boolean;
        /**
         * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
         */
        tenantID?: string;
    }

    /**
     * Defines the Arc Agent properties for the clusters.
     */
    export interface ArcAgentProfileResponse {
        /**
         * Indicates whether the Arc agents on the be upgraded automatically to the latest version. Defaults to Enabled.
         */
        agentAutoUpgrade?: string;
        /**
         * Version of the Arc agents to be installed on the cluster resource
         */
        desiredAgentVersion?: string;
    }
    /**
     * arcAgentProfileResponseProvideDefaults sets the appropriate defaults for ArcAgentProfileResponse
     */
    export function arcAgentProfileResponseProvideDefaults(val: ArcAgentProfileResponse): ArcAgentProfileResponse {
        return {
            ...val,
            agentAutoUpgrade: (val.agentAutoUpgrade) ?? "Enabled",
        };
    }

    /**
     * Identity for the connected cluster.
     */
    export interface ConnectedClusterIdentityResponse {
        /**
         * The principal id of connected cluster identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant id associated with the connected cluster. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * The type of identity used for the connected cluster. The type 'SystemAssigned, includes a system created identity. The type 'None' means no identity is assigned to the connected cluster.
         */
        type: string;
    }
    /**
     * connectedClusterIdentityResponseProvideDefaults sets the appropriate defaults for ConnectedClusterIdentityResponse
     */
    export function connectedClusterIdentityResponseProvideDefaults(val: ConnectedClusterIdentityResponse): ConnectedClusterIdentityResponse {
        return {
            ...val,
            type: (val.type) ?? "SystemAssigned",
        };
    }

    /**
     * The credential result response.
     */
    export interface CredentialResultResponse {
        /**
         * The name of the credential.
         */
        name: string;
        /**
         * Base64-encoded Kubernetes configuration file.
         */
        value: string;
    }

    /**
     * Contains the REP (rendezvous endpoint) and “Sender” access token.
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
         * Name of the relay.
         */
        relay: string;
        /**
         * Sender access token
         */
        token: string;
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
         * The timestamp of resource modification (UTC).
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
