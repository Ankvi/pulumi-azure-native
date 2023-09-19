import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The URIs that are the public endpoints of the account.
     */
    export interface AccountPropertiesResponseEndpoints {
        /**
         * Gets the catalog endpoint.
         */
        catalog: string;
        /**
         * Gets the guardian endpoint.
         */
        guardian: string;
        /**
         * Gets the scan endpoint.
         */
        scan: string;
    }

    /**
     * Gets the resource identifiers of the managed resources.
     */
    export interface AccountPropertiesResponseManagedResources {
        /**
         * Gets the managed event hub namespace resource identifier.
         */
        eventHubNamespace: string;
        /**
         * Gets the managed resource group resource identifier. This resource group will host resource dependencies for the account.
         */
        resourceGroup: string;
        /**
         * Gets the managed storage account resource identifier.
         */
        storageAccount: string;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface AccountPropertiesResponseSystemData {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt: string;
        /**
         * The identity that created the resource.
         */
        createdBy: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType: string;
        /**
         * The timestamp of the last modification the resource (UTC).
         */
        lastModifiedAt: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType: string;
    }

    /**
     * Gets or sets the Sku.
     */
    export interface AccountResponseSku {
        /**
         * Gets or sets the sku capacity.
         */
        capacity?: number;
        /**
         * Gets or sets the sku name.
         */
        name?: string;
    }

    export interface CloudConnectorsResponse {
        /**
         * AWS external identifier.
         * Configured in AWS to allow use of the role arn used for scanning
         */
        awsExternalId: string;
    }

    /**
     * The Managed Identity of the resource
     */
    export interface IdentityResponse {
        /**
         * Service principal object Id
         */
        principalId: string;
        /**
         * Tenant Id
         */
        tenantId: string;
        /**
         * Identity Type
         */
        type?: string;
    }

    /**
     * A private endpoint connection class.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Gets or sets the identifier.
         */
        id: string;
        /**
         * Gets or sets the name.
         */
        name: string;
        /**
         * The private endpoint information.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * The private link service connection state.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
        /**
         * The provisioning state.
         */
        provisioningState: string;
        /**
         * Gets or sets the type.
         */
        type: string;
    }

    /**
     * A private endpoint class.
     */
    export interface PrivateEndpointResponse {
        /**
         * The private endpoint identifier.
         */
        id?: string;
    }

    /**
     * The private link service connection state.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * The required actions.
         */
        actionsRequired?: string;
        /**
         * The description.
         */
        description?: string;
        /**
         * The status.
         */
        status?: string;
    }
