import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Api error base.
     */
    export interface ApiErrorBaseResponse {
        /**
         * The error code.
         */
        code?: string;
        /**
         * The error message.
         */
        message?: string;
        /**
         * The target of the particular error.
         */
        target?: string;
    }

    /**
     * Api error.
     */
    export interface ApiErrorResponse {
        /**
         * The error code.
         */
        code?: string;
        /**
         * The Api error details
         */
        details?: ApiErrorBaseResponse[];
        /**
         * The Api inner error
         */
        innererror?: InnerErrorResponse;
        /**
         * The error message.
         */
        message?: string;
        /**
         * The target of the particular error.
         */
        target?: string;
    }

    /**
     * Indicates the error details if the background copy of a resource created via the CopyStart operation fails.
     */
    export interface CopyCompletionErrorResponse {
        /**
         * Indicates the error code if the background copy of a resource created via the CopyStart operation fails.
         */
        errorCode: string;
        /**
         * Indicates the error message if the background copy of a resource created via the CopyStart operation fails.
         */
        errorMessage: string;
    }

    /**
     * Data used when creating a disk.
     */
    export interface CreationDataResponse {
        /**
         * This enumerates the possible sources of a disk's creation.
         */
        createOption: string;
        /**
         * Required if creating from a Gallery Image. The id/sharedGalleryImageId/communityGalleryImageId of the ImageDiskReference will be the ARM id of the shared galley image version from which to create a disk.
         */
        galleryImageReference?: ImageDiskReferenceResponse;
        /**
         * Disk source information for PIR or user images.
         */
        imageReference?: ImageDiskReferenceResponse;
        /**
         * Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default.
         */
        logicalSectorSize?: number;
        /**
         * Set this flag to true to get a boost on the performance target of the disk deployed, see here on the respective performance target. This flag can only be set on disk creation time and cannot be disabled after enabled.
         */
        performancePlus?: boolean;
        /**
         * If createOption is ImportSecure, this is the URI of a blob to be imported into VM guest state.
         */
        securityDataUri?: string;
        /**
         * If createOption is Copy, this is the ARM id of the source snapshot or disk.
         */
        sourceResourceId?: string;
        /**
         * If this field is set, this is the unique id identifying the source of this resource.
         */
        sourceUniqueId: string;
        /**
         * If createOption is Import, this is the URI of a blob to be imported into a managed disk.
         */
        sourceUri?: string;
        /**
         * Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk.
         */
        storageAccountId?: string;
        /**
         * If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer).
         */
        uploadSizeBytes?: number;
    }

    /**
     * Contains the security related information for the resource.
     */
    export interface DiskSecurityProfileResponse {
        /**
         * ResourceId of the disk encryption set associated to Confidential VM supported disk encrypted with customer managed key
         */
        secureVMDiskEncryptionSetId?: string;
        /**
         * Specifies the SecurityType of the VM. Applicable for OS disks only.
         */
        securityType?: string;
    }

    /**
     * The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, or PremiumV2_LRS.
     */
    export interface DiskSkuResponse {
        /**
         * The sku name.
         */
        name?: string;
        /**
         * The sku tier.
         */
        tier: string;
    }

    /**
     * Encryption at rest settings for disk or snapshot
     */
    export interface EncryptionResponse {
        /**
         * ResourceId of the disk encryption set to use for enabling encryption at rest.
         */
        diskEncryptionSetId?: string;
        /**
         * The type of key used to encrypt the data of the disk.
         */
        type?: string;
    }

    /**
     * The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
     */
    export interface EncryptionSetIdentityResponse {
        /**
         * The object id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-identity-principal-id header in the PUT request if the resource has a systemAssigned(implicit) identity
         */
        principalId: string;
        /**
         * The tenant id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-client-tenant-id header in the PUT request if the resource has a systemAssigned(implicit) identity
         */
        tenantId: string;
        /**
         * The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported for new creations. Disk Encryption Sets can be updated with Identity type None during migration of subscription to a new Azure Active Directory tenant; it will cause the encrypted resources to lose access to the keys.
         */
        type?: string;
        /**
         * The list of user identities associated with the disk encryption set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentitiesResponseUserAssignedIdentities};
    }

    /**
     * Encryption settings for disk or snapshot
     */
    export interface EncryptionSettingsCollectionResponse {
        /**
         * Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
         */
        enabled: boolean;
        /**
         * A collection of encryption settings, one for each disk volume.
         */
        encryptionSettings?: EncryptionSettingsElementResponse[];
        /**
         * Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption.
         */
        encryptionSettingsVersion?: string;
    }

    /**
     * Encryption settings for one disk volume.
     */
    export interface EncryptionSettingsElementResponse {
        /**
         * Key Vault Secret Url and vault id of the disk encryption key
         */
        diskEncryptionKey?: KeyVaultAndSecretReferenceResponse;
        /**
         * Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key.
         */
        keyEncryptionKey?: KeyVaultAndKeyReferenceResponse;
    }

    /**
     * The complex type of the extended location.
     */
    export interface ExtendedLocationResponse {
        /**
         * The name of the extended location.
         */
        name?: string;
        /**
         * The type of the extended location.
         */
        type?: string;
    }

    /**
     * The source image used for creating the disk.
     */
    export interface ImageDiskReferenceResponse {
        /**
         * A relative uri containing a community Azure Compute Gallery image reference.
         */
        communityGalleryImageId?: string;
        /**
         * A relative uri containing either a Platform Image Repository, user image, or Azure Compute Gallery image reference.
         */
        id?: string;
        /**
         * If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.
         */
        lun?: number;
        /**
         * A relative uri containing a direct shared Azure Compute Gallery image reference.
         */
        sharedGalleryImageId?: string;
    }

    /**
     * Inner error details.
     */
    export interface InnerErrorResponse {
        /**
         * The internal error message or exception dump.
         */
        errordetail?: string;
        /**
         * The exception type.
         */
        exceptiontype?: string;
    }

    /**
     * Key Vault Key Url to be used for server side encryption of Managed Disks and Snapshots
     */
    export interface KeyForDiskEncryptionSetResponse {
        /**
         * Fully versioned Key Url pointing to a key in KeyVault. Version segment of the Url is required regardless of rotationToLatestKeyVersionEnabled value.
         */
        keyUrl: string;
        /**
         * Resource id of the KeyVault containing the key or secret. This property is optional and cannot be used if the KeyVault subscription is not the same as the Disk Encryption Set subscription.
         */
        sourceVault?: SourceVaultResponse;
    }

    /**
     * Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey
     */
    export interface KeyVaultAndKeyReferenceResponse {
        /**
         * Url pointing to a key or secret in KeyVault
         */
        keyUrl: string;
        /**
         * Resource id of the KeyVault containing the key or secret
         */
        sourceVault: SourceVaultResponse;
    }

    /**
     * Key Vault Secret Url and vault id of the encryption key 
     */
    export interface KeyVaultAndSecretReferenceResponse {
        /**
         * Url pointing to a key or secret in KeyVault
         */
        secretUrl: string;
        /**
         * Resource id of the KeyVault containing the key or secret
         */
        sourceVault: SourceVaultResponse;
    }

    /**
     * The Private Endpoint Connection resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * private endpoint connection Id
         */
        id: string;
        /**
         * private endpoint connection name
         */
        name: string;
        /**
         * The resource of private end point.
         */
        privateEndpoint: PrivateEndpointResponse;
        /**
         * A collection of information about the state of the connection between DiskAccess and Virtual Network.
         */
        privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
        /**
         * The provisioning state of the private endpoint connection resource.
         */
        provisioningState: string;
        /**
         * private endpoint connection type
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

    /**
     * Properties of the disk for which update is pending.
     */
    export interface PropertyUpdatesInProgressResponse {
        /**
         * The target performance tier of the disk if a tier change operation is in progress.
         */
        targetTier?: string;
    }

    /**
     * Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
     */
    export interface PurchasePlanResponse {
        /**
         * The plan ID.
         */
        name: string;
        /**
         * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
         */
        product: string;
        /**
         * The Offer Promotion Code.
         */
        promotionCode?: string;
        /**
         * The publisher ID.
         */
        publisher: string;
    }

    export interface ShareInfoElementResponse {
        /**
         * A relative URI containing the ID of the VM that has the disk attached.
         */
        vmUri: string;
    }

    /**
     * The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. This is an optional parameter for incremental snapshot and the default behavior is the SKU will be set to the same sku as the previous snapshot
     */
    export interface SnapshotSkuResponse {
        /**
         * The sku name.
         */
        name?: string;
        /**
         * The sku tier.
         */
        tier: string;
    }

    /**
     * The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     */
    export interface SourceVaultResponse {
        /**
         * Resource Id
         */
        id?: string;
    }

    /**
     * List of supported capabilities persisted on the disk resource for VM use.
     */
    export interface SupportedCapabilitiesResponse {
        /**
         * True if the image from which the OS disk is created supports accelerated networking.
         */
        acceleratedNetwork?: boolean;
        /**
         * CPU architecture supported by an OS disk.
         */
        architecture?: string;
        /**
         * The disk controllers that an OS disk supports. If set it can be SCSI or SCSI, NVME or NVME, SCSI.
         */
        diskControllerTypes?: string;
    }

    export interface UserAssignedIdentitiesResponseUserAssignedIdentities {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }
