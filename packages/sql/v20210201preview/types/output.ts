import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Properties of a active directory administrator.
     */
    export interface ManagedInstanceExternalAdministratorResponse {
        /**
         * Type of the sever administrator.
         */
        administratorType?: string;
        /**
         * Azure Active Directory only Authentication enabled.
         */
        azureADOnlyAuthentication?: boolean;
        /**
         * Login name of the server administrator.
         */
        login?: string;
        /**
         * Principal Type of the sever administrator.
         */
        principalType?: string;
        /**
         * SID (object ID) of the server administrator.
         */
        sid?: string;
        /**
         * Tenant ID of the administrator.
         */
        tenantId?: string;
    }

    /**
     * A private endpoint connection under a managed instance
     */
    export interface ManagedInstancePecPropertyResponse {
        /**
         * Resource ID.
         */
        id: string;
        /**
         * Private endpoint connection properties
         */
        properties: ManagedInstancePrivateEndpointConnectionPropertiesResponse;
    }

    /**
     * Properties of a private endpoint connection.
     */
    export interface ManagedInstancePrivateEndpointConnectionPropertiesResponse {
        /**
         * Private endpoint which the connection belongs to.
         */
        privateEndpoint?: ManagedInstancePrivateEndpointPropertyResponse;
        /**
         * Connection State of the Private Endpoint Connection.
         */
        privateLinkServiceConnectionState?: ManagedInstancePrivateLinkServiceConnectionStatePropertyResponse;
        /**
         * State of the Private Endpoint Connection.
         */
        provisioningState: string;
    }

    export interface ManagedInstancePrivateEndpointPropertyResponse {
        /**
         * Resource id of the private endpoint.
         */
        id?: string;
    }

    export interface ManagedInstancePrivateLinkServiceConnectionStatePropertyResponse {
        /**
         * The private link service connection description.
         */
        actionsRequired: string;
        /**
         * The private link service connection description.
         */
        description: string;
        /**
         * The private link service connection status.
         */
        status: string;
    }

    /**
     * Azure Active Directory identity configuration for a resource.
     */
    export interface ResourceIdentityResponse {
        /**
         * The Azure Active Directory principal id.
         */
        principalId: string;
        /**
         * The Azure Active Directory tenant id.
         */
        tenantId: string;
        /**
         * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
         */
        type?: string;
        /**
         * The resource ids of the user assigned identities to use
         */
        userAssignedIdentities?: {[key: string]: UserIdentityResponse};
    }

    /**
     * An ARM Resource SKU.
     */
    export interface SkuResponse {
        /**
         * Capacity of the particular SKU.
         */
        capacity?: number;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: string;
        /**
         * The name of the SKU, typically, a letter + Number code, e.g. P3.
         */
        name: string;
        /**
         * Size of the particular SKU
         */
        size?: string;
        /**
         * The tier or edition of the particular SKU, e.g. Basic, Premium.
         */
        tier?: string;
    }

    /**
     * Azure Active Directory identity configuration for a resource.
     */
    export interface UserIdentityResponse {
        /**
         * The Azure Active Directory client id.
         */
        clientId: string;
        /**
         * The Azure Active Directory principal id.
         */
        principalId: string;
    }
