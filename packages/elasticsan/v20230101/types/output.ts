import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Encryption identity for the volume group.
     */
    export interface EncryptionIdentityResponse {
        /**
         * Resource identifier of the UserAssigned identity to be associated with server-side encryption on the volume group.
         */
        encryptionUserAssignedIdentity?: string;
    }

    /**
     * The encryption settings on the volume group.
     */
    export interface EncryptionPropertiesResponse {
        /**
         * The identity to be used with service-side encryption at rest.
         */
        encryptionIdentity?: EncryptionIdentityResponse;
        /**
         * Properties provided by key vault.
         */
        keyVaultProperties?: KeyVaultPropertiesResponse;
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
         * Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this volume group. The key is the ARM resource identifier of the identity.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Iscsi target information
     */
    export interface IscsiTargetInfoResponse {
        /**
         * State of the operation on the resource.
         */
        provisioningState: string;
        /**
         * Operational status of the iSCSI Target.
         */
        status?: string;
        /**
         * iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server".
         */
        targetIqn: string;
        /**
         * iSCSI Target Portal Host Name
         */
        targetPortalHostname: string;
        /**
         * iSCSI Target Portal Port
         */
        targetPortalPort: number;
    }

    /**
     * Properties of key vault.
     */
    export interface KeyVaultPropertiesResponse {
        /**
         * This is a read only property that represents the expiration time of the current version of the customer managed key used for encryption.
         */
        currentVersionedKeyExpirationTimestamp: string;
        /**
         * The object identifier of the current versioned Key Vault Key in use.
         */
        currentVersionedKeyIdentifier: string;
        /**
         * The name of KeyVault key.
         */
        keyName?: string;
        /**
         * The Uri of KeyVault.
         */
        keyVaultUri?: string;
        /**
         * The version of KeyVault key.
         */
        keyVersion?: string;
        /**
         * Timestamp of last rotation of the Key Vault Key.
         */
        lastKeyRotationTimestamp: string;
    }

    /**
     * Parent resource information.
     */
    export interface ManagedByInfoResponse {
        /**
         * Resource ID of the resource managing the volume, this is a restricted field and can only be set for internal use.
         */
        resourceId?: string;
    }

    /**
     * A set of rules governing the network accessibility.
     */
    export interface NetworkRuleSetResponse {
        /**
         * The list of virtual network rules.
         */
        virtualNetworkRules?: VirtualNetworkRuleResponse[];
    }

    /**
     *  Response for PrivateEndpoint Connection object
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         *  List of resources private endpoint is mapped
         */
        groupIds?: string[];
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * Private Endpoint resource
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * Private Link Service Connection State.
         */
        privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
        /**
         * Provisioning State of Private Endpoint connection resource
         */
        provisioningState: string;
        /**
         * Azure Resource Manager metadata containing createdBy and modifiedBy information.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * Response for PrivateEndpoint
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint
         */
        id: string;
    }

    /**
     * Response for Private Link Service Connection state
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

    /**
     * The SKU name. Required for account creation; optional for update.
     */
    export interface SkuResponse {
        /**
         * The sku name.
         */
        name: string;
        /**
         * The sku tier.
         */
        tier?: string;
    }

    /**
     * Data used when creating a volume snapshot.
     */
    export interface SnapshotCreationDataResponse {
        /**
         * Fully qualified resource ID of the volume. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}"
         */
        sourceId: string;
    }

    /**
     * Data source used when creating the volume.
     */
    export interface SourceCreationDataResponse {
        /**
         * This enumerates the possible sources of a volume creation.
         */
        createSource?: string;
        /**
         * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
         */
        sourceId?: string;
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
     * UserAssignedIdentity for the resource.
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the identity.
         */
        clientId: string;
        /**
         * The principal ID of the identity.
         */
        principalId: string;
    }

    /**
     * Virtual Network rule.
     */
    export interface VirtualNetworkRuleResponse {
        /**
         * The action of virtual network rule.
         */
        action?: string;
        /**
         * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
         */
        virtualNetworkResourceId: string;
    }
    /**
     * virtualNetworkRuleResponseProvideDefaults sets the appropriate defaults for VirtualNetworkRuleResponse
     */
    export function virtualNetworkRuleResponseProvideDefaults(val: VirtualNetworkRuleResponse): VirtualNetworkRuleResponse {
        return {
            ...val,
            action: (val.action) ?? "Allow",
        };
    }
