import * as pulumi from "@pulumi/pulumi";
    export interface PrivateEndpointConnectionPropertiesResponse {
        privateEndpoint: ResourceIdResponse;
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
        provisioningState: string;
    }

    export interface PrivateLinkServiceConnectionStateResponse {
        actionsRequired?: string;
        description?: string;
        status?: string;
    }

    export interface ResourceIdResponse {
        id: string;
    }

    /**
     * Class for site agent properties.
     */
    export interface SiteAgentPropertiesResponse {
        /**
         * ID of the agent.
         */
        id: string;
        /**
         * Key vault ARM Id.
         */
        keyVaultId?: string;
        /**
         * Key vault URI.
         */
        keyVaultUri?: string;
        /**
         * Last heartbeat time of the agent in UTC.
         */
        lastHeartBeatUtc: string;
        /**
         * Version of the agent.
         */
        version: string;
    }

    /**
     * Class for site properties.
     */
    export interface SitePropertiesResponse {
        /**
         * On-premises agent details.
         */
        agentDetails?: SiteAgentPropertiesResponse;
        /**
         * Appliance Name.
         */
        applianceName?: string;
        /**
         * ARM ID of migration hub solution for SDS.
         */
        discoverySolutionId?: string;
        /**
         * Service endpoint.
         */
        serviceEndpoint: string;
        /**
         * Service principal identity details used by agent for communication to the service.
         */
        servicePrincipalIdentityDetails?: SiteSpnPropertiesResponse;
    }

    /**
     * Class for site properties.
     */
    export interface SiteSpnPropertiesResponse {
        /**
         * AAD Authority URL which was used to request the token for the service principal.
         */
        aadAuthority?: string;
        /**
         * Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        applicationId?: string;
        /**
         * Intended audience for the service principal.
         */
        audience?: string;
        /**
         * Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        objectId?: string;
        /**
         * Raw certificate data for building certificate expiry flows.
         */
        rawCertData?: string;
        /**
         * Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        tenantId?: string;
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
         * The type of identity that last modified the resource.
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
