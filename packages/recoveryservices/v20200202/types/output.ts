import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The details of the identity used for CMK
     */
    export interface CmkKekIdentityResponse {
        /**
         * Indicate that system assigned identity should be used. Mutually exclusive with 'userAssignedIdentity' field
         */
        useSystemAssignedIdentity?: boolean;
        /**
         * The user assigned identity to be used to grant permissions in case the type of identity used is UserAssigned
         */
        userAssignedIdentity?: string;
    }

    /**
     * The properties of the Key Vault which hosts CMK
     */
    export interface CmkKeyVaultPropertiesResponse {
        /**
         * The key uri of the Customer Managed Key
         */
        keyUri?: string;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityDataResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
         */
        type: string;
        /**
         * The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: UserIdentityResponse};
    }

    /**
     * Information to be stored in Vault properties as an element of privateEndpointConnections List.
     */
    export interface PrivateEndpointConnectionVaultPropertiesResponse {
        /**
         * Format of id subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.[Service]/{resource}/{resourceName}/privateEndpointConnections/{connectionName}.
         */
        id: string;
        /**
         * Private Endpoint Connection Response Properties.
         */
        properties: VaultPrivateEndpointConnectionResponse;
    }

    /**
     * The Private Endpoint network resource that is linked to the Private Endpoint connection.
     */
    export interface PrivateEndpointResponse {
        /**
         * Gets or sets id.
         */
        id: string;
    }

    /**
     * Identifies the unique system identifier for each Azure resource.
     */
    export interface SkuResponse {
        /**
         * The Sku name.
         */
        name: string;
    }

    /**
     * Details for upgrading vault.
     */
    export interface UpgradeDetailsResponse {
        /**
         * UTC time at which the upgrade operation has ended.
         */
        endTimeUtc: string;
        /**
         * UTC time at which the upgrade operation status was last updated.
         */
        lastUpdatedTimeUtc: string;
        /**
         * Message to the user containing information about the upgrade operation.
         */
        message: string;
        /**
         * ID of the vault upgrade operation.
         */
        operationId: string;
        /**
         * Resource ID of the vault before the upgrade.
         */
        previousResourceId: string;
        /**
         * UTC time at which the upgrade operation has started.
         */
        startTimeUtc: string;
        /**
         * Status of the vault upgrade operation.
         */
        status: string;
        /**
         * The way the vault upgrade was triggered.
         */
        triggerType: string;
        /**
         * Resource ID of the upgraded vault.
         */
        upgradedResourceId: string;
    }

    /**
     * A resource identity that is managed by the user of the service.
     */
    export interface UserIdentityResponse {
        /**
         * The client ID of the user-assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the user-assigned identity.
         */
        principalId: string;
    }

    /**
     * Private Endpoint Connection Response Properties.
     */
    export interface VaultPrivateEndpointConnectionResponse {
        /**
         * The Private Endpoint network resource that is linked to the Private Endpoint connection.
         */
        privateEndpoint: PrivateEndpointResponse;
        /**
         * Gets or sets private link service connection state.
         */
        privateLinkServiceConnectionState: VaultPrivateLinkServiceConnectionStateResponse;
        /**
         * Gets or sets provisioning state of the private endpoint connection.
         */
        provisioningState: string;
    }

    /**
     * Gets or sets private link service connection state.
     */
    export interface VaultPrivateLinkServiceConnectionStateResponse {
        /**
         * Gets or sets actions required.
         */
        actionsRequired: string;
        /**
         * Gets or sets description.
         */
        description: string;
        /**
         * Gets or sets the status.
         */
        status: string;
    }

    /**
     * Properties of the vault.
     */
    export interface VaultPropertiesResponse {
        /**
         * Customer Managed Key details of the resource.
         */
        encryption?: VaultPropertiesResponseEncryption;
        /**
         * List of private endpoint connection.
         */
        privateEndpointConnections: PrivateEndpointConnectionVaultPropertiesResponse[];
        /**
         * Private endpoint state for backup.
         */
        privateEndpointStateForBackup: string;
        /**
         * Private endpoint state for site recovery.
         */
        privateEndpointStateForSiteRecovery: string;
        /**
         * Provisioning State.
         */
        provisioningState: string;
        /**
         * Details for upgrading vault.
         */
        upgradeDetails?: UpgradeDetailsResponse;
    }

    /**
     * Customer Managed Key details of the resource.
     */
    export interface VaultPropertiesResponseEncryption {
        /**
         * Enabling/Disabling the Double Encryption state
         */
        infrastructureEncryption?: string;
        /**
         * The details of the identity used for CMK
         */
        kekIdentity?: CmkKekIdentityResponse;
        /**
         * The properties of the Key Vault which hosts CMK
         */
        keyVaultProperties?: CmkKeyVaultPropertiesResponse;
    }
