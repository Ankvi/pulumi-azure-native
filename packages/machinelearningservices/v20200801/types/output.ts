import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface EncryptionPropertyResponse {
        /**
         * Customer Key vault properties.
         */
        keyVaultProperties: KeyVaultPropertiesResponse;
        /**
         * Indicates whether or not the encryption is enabled for the workspace.
         */
        status: string;
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
        type: string;
        /**
         * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: IdentityResponseUserAssignedIdentities};
    }

    export interface IdentityResponseUserAssignedIdentities {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }

    export interface KeyVaultPropertiesResponse {
        /**
         * For future use - The client id of the identity which will be used to access key vault.
         */
        identityClientId?: string;
        /**
         * Key vault uri to access the encryption key.
         */
        keyIdentifier: string;
        /**
         * The ArmId of the keyVault where the customer owned encryption key is present.
         */
        keyVaultArmId: string;
    }

    export interface NotebookListCredentialsResultResponse {
        primaryAccessKey?: string;
        secondaryAccessKey?: string;
    }

    export interface NotebookPreparationErrorResponse {
        errorMessage?: string;
        statusCode?: number;
    }

    export interface NotebookResourceInfoResponse {
        fqdn?: string;
        /**
         * The error that occurs when preparing notebook.
         */
        notebookPreparationError?: NotebookPreparationErrorResponse;
        /**
         * the data plane resourceId that used to initialize notebook component
         */
        resourceId?: string;
    }

    export interface PasswordResponse {
        name: string;
        value: string;
    }

    /**
     * The Private Endpoint Connection resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * ResourceId of the private endpoint connection.
         */
        id: string;
        /**
         * Friendly name of the private endpoint connection.
         */
        name: string;
        /**
         * The resource of private end point.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
        /**
         * The provisioning state of the private endpoint connection resource.
         */
        provisioningState: string;
        /**
         * Resource type of private endpoint connection.
         */
        type: string;
    }

    /**
     * The Private Endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint
         */
        id: string;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    export interface RegistryListCredentialsResultResponse {
        location: string;
        passwords?: PasswordResponse[];
        username: string;
    }

    export interface SharedPrivateLinkResourceResponse {
        /**
         * The private link resource group id.
         */
        groupId?: string;
        /**
         * Unique name of the private link.
         */
        name?: string;
        /**
         * The resource id that private link links to.
         */
        privateLinkResourceId?: string;
        /**
         * Request message.
         */
        requestMessage?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * Sku of the resource
     */
    export interface SkuResponse {
        /**
         * Name of the sku
         */
        name?: string;
        /**
         * Tier of the sku like Basic or Enterprise
         */
        tier?: string;
    }
