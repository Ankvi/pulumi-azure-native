import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Indicates the error details if the background copy of a resource created via the CopyStart operation fails.
     */
    export interface CopyCompletionErrorArgs {
        /**
         * Indicates the error code if the background copy of a resource created via the CopyStart operation fails.
         */
        errorCode: pulumi.Input<string | enums.CopyCompletionErrorReason>;
        /**
         * Indicates the error message if the background copy of a resource created via the CopyStart operation fails.
         */
        errorMessage: pulumi.Input<string>;
    }

    /**
     * Data used when creating a disk.
     */
    export interface CreationDataArgs {
        /**
         * This enumerates the possible sources of a disk's creation.
         */
        createOption: pulumi.Input<string | enums.DiskCreateOption>;
        /**
         * Required if creating from a Gallery Image. The id/sharedGalleryImageId/communityGalleryImageId of the ImageDiskReference will be the ARM id of the shared galley image version from which to create a disk.
         */
        galleryImageReference?: pulumi.Input<ImageDiskReferenceArgs>;
        /**
         * Disk source information for PIR or user images.
         */
        imageReference?: pulumi.Input<ImageDiskReferenceArgs>;
        /**
         * Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default.
         */
        logicalSectorSize?: pulumi.Input<number>;
        /**
         * Set this flag to true to get a boost on the performance target of the disk deployed, see here on the respective performance target. This flag can only be set on disk creation time and cannot be disabled after enabled.
         */
        performancePlus?: pulumi.Input<boolean>;
        /**
         * If createOption is ImportSecure, this is the URI of a blob to be imported into VM guest state.
         */
        securityDataUri?: pulumi.Input<string>;
        /**
         * If createOption is Copy, this is the ARM id of the source snapshot or disk.
         */
        sourceResourceId?: pulumi.Input<string>;
        /**
         * If createOption is Import, this is the URI of a blob to be imported into a managed disk.
         */
        sourceUri?: pulumi.Input<string>;
        /**
         * Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk.
         */
        storageAccountId?: pulumi.Input<string>;
        /**
         * If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer).
         */
        uploadSizeBytes?: pulumi.Input<number>;
    }

    /**
     * Contains the security related information for the resource.
     */
    export interface DiskSecurityProfileArgs {
        /**
         * ResourceId of the disk encryption set associated to Confidential VM supported disk encrypted with customer managed key
         */
        secureVMDiskEncryptionSetId?: pulumi.Input<string>;
        /**
         * Specifies the SecurityType of the VM. Applicable for OS disks only.
         */
        securityType?: pulumi.Input<string | enums.DiskSecurityTypes>;
    }

    /**
     * The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, or PremiumV2_LRS.
     */
    export interface DiskSkuArgs {
        /**
         * The sku name.
         */
        name?: pulumi.Input<string | enums.DiskStorageAccountTypes>;
    }

    /**
     * Encryption at rest settings for disk or snapshot
     */
    export interface EncryptionArgs {
        /**
         * ResourceId of the disk encryption set to use for enabling encryption at rest.
         */
        diskEncryptionSetId?: pulumi.Input<string>;
        /**
         * The type of key used to encrypt the data of the disk.
         */
        type?: pulumi.Input<string | enums.EncryptionType>;
    }

    /**
     * The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
     */
    export interface EncryptionSetIdentityArgs {
        /**
         * The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported for new creations. Disk Encryption Sets can be updated with Identity type None during migration of subscription to a new Azure Active Directory tenant; it will cause the encrypted resources to lose access to the keys.
         */
        type?: pulumi.Input<string | enums.DiskEncryptionSetIdentityType>;
        /**
         * The list of user identities associated with the disk encryption set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Encryption settings for disk or snapshot
     */
    export interface EncryptionSettingsCollectionArgs {
        /**
         * Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
         */
        enabled: pulumi.Input<boolean>;
        /**
         * A collection of encryption settings, one for each disk volume.
         */
        encryptionSettings?: pulumi.Input<pulumi.Input<EncryptionSettingsElementArgs>[]>;
        /**
         * Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption.
         */
        encryptionSettingsVersion?: pulumi.Input<string>;
    }

    /**
     * Encryption settings for one disk volume.
     */
    export interface EncryptionSettingsElementArgs {
        /**
         * Key Vault Secret Url and vault id of the disk encryption key
         */
        diskEncryptionKey?: pulumi.Input<KeyVaultAndSecretReferenceArgs>;
        /**
         * Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key.
         */
        keyEncryptionKey?: pulumi.Input<KeyVaultAndKeyReferenceArgs>;
    }

    /**
     * The complex type of the extended location.
     */
    export interface ExtendedLocationArgs {
        /**
         * The name of the extended location.
         */
        name?: pulumi.Input<string>;
        /**
         * The type of the extended location.
         */
        type?: pulumi.Input<string | enums.ExtendedLocationTypes>;
    }

    /**
     * The source image used for creating the disk.
     */
    export interface ImageDiskReferenceArgs {
        /**
         * A relative uri containing a community Azure Compute Gallery image reference.
         */
        communityGalleryImageId?: pulumi.Input<string>;
        /**
         * A relative uri containing either a Platform Image Repository, user image, or Azure Compute Gallery image reference.
         */
        id?: pulumi.Input<string>;
        /**
         * If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.
         */
        lun?: pulumi.Input<number>;
        /**
         * A relative uri containing a direct shared Azure Compute Gallery image reference.
         */
        sharedGalleryImageId?: pulumi.Input<string>;
    }

    /**
     * Key Vault Key Url to be used for server side encryption of Managed Disks and Snapshots
     */
    export interface KeyForDiskEncryptionSetArgs {
        /**
         * Fully versioned Key Url pointing to a key in KeyVault. Version segment of the Url is required regardless of rotationToLatestKeyVersionEnabled value.
         */
        keyUrl: pulumi.Input<string>;
        /**
         * Resource id of the KeyVault containing the key or secret. This property is optional and cannot be used if the KeyVault subscription is not the same as the Disk Encryption Set subscription.
         */
        sourceVault?: pulumi.Input<SourceVaultArgs>;
    }

    /**
     * Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey
     */
    export interface KeyVaultAndKeyReferenceArgs {
        /**
         * Url pointing to a key or secret in KeyVault
         */
        keyUrl: pulumi.Input<string>;
        /**
         * Resource id of the KeyVault containing the key or secret
         */
        sourceVault: pulumi.Input<SourceVaultArgs>;
    }

    /**
     * Key Vault Secret Url and vault id of the encryption key 
     */
    export interface KeyVaultAndSecretReferenceArgs {
        /**
         * Url pointing to a key or secret in KeyVault
         */
        secretUrl: pulumi.Input<string>;
        /**
         * Resource id of the KeyVault containing the key or secret
         */
        sourceVault: pulumi.Input<SourceVaultArgs>;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }

    /**
     * Used for establishing the purchase context of any 3rd Party artifact through MarketPlace.
     */
    export interface PurchasePlanArgs {
        /**
         * The plan ID.
         */
        name: pulumi.Input<string>;
        /**
         * Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
         */
        product: pulumi.Input<string>;
        /**
         * The Offer Promotion Code.
         */
        promotionCode?: pulumi.Input<string>;
        /**
         * The publisher ID.
         */
        publisher: pulumi.Input<string>;
    }

    /**
     * The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. This is an optional parameter for incremental snapshot and the default behavior is the SKU will be set to the same sku as the previous snapshot
     */
    export interface SnapshotSkuArgs {
        /**
         * The sku name.
         */
        name?: pulumi.Input<string | enums.SnapshotStorageAccountTypes>;
    }

    /**
     * The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
     */
    export interface SourceVaultArgs {
        /**
         * Resource Id
         */
        id?: pulumi.Input<string>;
    }

    /**
     * List of supported capabilities persisted on the disk resource for VM use.
     */
    export interface SupportedCapabilitiesArgs {
        /**
         * True if the image from which the OS disk is created supports accelerated networking.
         */
        acceleratedNetwork?: pulumi.Input<boolean>;
        /**
         * CPU architecture supported by an OS disk.
         */
        architecture?: pulumi.Input<string | enums.Architecture>;
        /**
         * The disk controllers that an OS disk supports. If set it can be SCSI or SCSI, NVME or NVME, SCSI.
         */
        diskControllerTypes?: pulumi.Input<string>;
    }
