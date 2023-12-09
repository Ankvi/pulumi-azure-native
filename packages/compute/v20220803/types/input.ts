import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Information of community gallery if current gallery is shared to community
     */
    export interface CommunityGalleryInfoArgs {
        /**
         * End-user license agreement for community gallery image.
         */
        eula?: pulumi.Input<string>;
        /**
         * The prefix of the gallery name that will be displayed publicly. Visible to all users.
         */
        publicNamePrefix?: pulumi.Input<string>;
        /**
         * Community gallery publisher support email. The email address of the publisher. Visible to all users.
         */
        publisherContact?: pulumi.Input<string>;
        /**
         * The link to the publisher website. Visible to all users.
         */
        publisherUri?: pulumi.Input<string>;
    }

    /**
     * Contains encryption settings for a data disk image.
     */
    export interface DataDiskImageEncryptionArgs {
        /**
         * A relative URI containing the resource ID of the disk encryption set.
         */
        diskEncryptionSetId?: pulumi.Input<string>;
        /**
         * This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
         */
        lun: pulumi.Input<number>;
    }

    /**
     * Describes the disallowed disk types.
     */
    export interface DisallowedArgs {
        /**
         * A list of disk types.
         */
        diskTypes?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
     */
    export interface EncryptionImagesArgs {
        /**
         * A list of encryption specifications for data disk images.
         */
        dataDiskImages?: pulumi.Input<pulumi.Input<DataDiskImageEncryptionArgs>[]>;
        /**
         * Contains encryption settings for an OS disk image.
         */
        osDiskImage?: pulumi.Input<OSDiskImageEncryptionArgs>;
    }

    /**
     * A custom action that can be performed with a Gallery Application Version.
     */
    export interface GalleryApplicationCustomActionArgs {
        /**
         * Description to help the users understand what this custom action does.
         */
        description?: pulumi.Input<string>;
        /**
         * The name of the custom action.  Must be unique within the Gallery Application Version.
         */
        name: pulumi.Input<string>;
        /**
         * The parameters that this custom action uses
         */
        parameters?: pulumi.Input<pulumi.Input<GalleryApplicationCustomActionParameterArgs>[]>;
        /**
         * The script to run when executing this custom action.
         */
        script: pulumi.Input<string>;
    }

    /**
     * The definition of a parameter that can be passed to a custom action of a Gallery Application Version.
     */
    export interface GalleryApplicationCustomActionParameterArgs {
        /**
         * The default value of the parameter.  Only applies to string types
         */
        defaultValue?: pulumi.Input<string>;
        /**
         * A description to help users understand what this parameter means
         */
        description?: pulumi.Input<string>;
        /**
         * The name of the custom action.  Must be unique within the Gallery Application Version.
         */
        name: pulumi.Input<string>;
        /**
         * Indicates whether this parameter must be passed when running the custom action.
         */
        required?: pulumi.Input<boolean>;
        /**
         * Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob
         */
        type?: pulumi.Input<enums.GalleryApplicationCustomActionParameterType>;
    }

    /**
     * The publishing profile of a gallery image version.
     */
    export interface GalleryApplicationVersionPublishingProfileArgs {
        /**
         * Optional. Additional settings to pass to the vm-application-manager extension. For advanced use only.
         */
        advancedSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * A list of custom actions that can be performed with this Gallery Application Version.
         */
        customActions?: pulumi.Input<pulumi.Input<GalleryApplicationCustomActionArgs>[]>;
        /**
         * Optional. Whether or not this application reports health.
         */
        enableHealthCheck?: pulumi.Input<boolean>;
        /**
         * The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
         */
        endOfLifeDate?: pulumi.Input<string>;
        /**
         * If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
         */
        excludeFromLatest?: pulumi.Input<boolean>;
        manageActions?: pulumi.Input<UserArtifactManageArgs>;
        /**
         * The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
         */
        replicaCount?: pulumi.Input<number>;
        /**
         * Optional parameter which specifies the mode to be used for replication. This property is not updatable.
         */
        replicationMode?: pulumi.Input<string | enums.ReplicationMode>;
        /**
         * Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set.
         */
        settings?: pulumi.Input<UserArtifactSettingsArgs>;
        /**
         * The source image from which the Image Version is going to be created.
         */
        source: pulumi.Input<UserArtifactSourceArgs>;
        /**
         * Specifies the storage account type to be used to store the image. This property is not updatable.
         */
        storageAccountType?: pulumi.Input<string | enums.StorageAccountType>;
        /**
         * The target extended locations where the Image Version is going to be replicated to. This property is updatable.
         */
        targetExtendedLocations?: pulumi.Input<pulumi.Input<GalleryTargetExtendedLocationArgs>[]>;
        /**
         * The target regions where the Image Version is going to be replicated to. This property is updatable.
         */
        targetRegions?: pulumi.Input<pulumi.Input<TargetRegionArgs>[]>;
    }

    /**
     * The safety profile of the Gallery Application Version.
     */
    export interface GalleryApplicationVersionSafetyProfileArgs {
        /**
         * Indicates whether or not removing this Gallery Image Version from replicated regions is allowed.
         */
        allowDeletionOfReplicatedLocations?: pulumi.Input<boolean>;
    }

    /**
     * The source of the gallery artifact version.
     */
    export interface GalleryArtifactVersionFullSourceArgs {
        /**
         * The resource Id of the source Community Gallery Image.  Only required when using Community Gallery Image as a source.
         */
        communityGalleryImageId?: pulumi.Input<string>;
        /**
         * The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * This is the data disk image.
     */
    export interface GalleryDataDiskImageArgs {
        /**
         * The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
         */
        hostCaching?: pulumi.Input<enums.HostCaching>;
        /**
         * This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
         */
        lun: pulumi.Input<number>;
        /**
         * The source for the disk image.
         */
        source?: pulumi.Input<GalleryDiskImageSourceArgs>;
    }

    /**
     * The source for the disk image.
     */
    export interface GalleryDiskImageSourceArgs {
        /**
         * The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource.
         */
        id?: pulumi.Input<string>;
        /**
         * The Storage Account Id that contains the vhd blob being used as a source for this artifact version.
         */
        storageAccountId?: pulumi.Input<string>;
        /**
         * The uri of the gallery artifact version source. Currently used to specify vhd/blob source.
         */
        uri?: pulumi.Input<string>;
    }

    /**
     * The name of the extended location.
     */
    export interface GalleryExtendedLocationArgs {
        name?: pulumi.Input<string>;
        /**
         * It is type of the extended location.
         */
        type?: pulumi.Input<string | enums.GalleryExtendedLocationType>;
    }

    /**
     * A feature for gallery image.
     */
    export interface GalleryImageFeatureArgs {
        /**
         * The name of the gallery image feature.
         */
        name?: pulumi.Input<string>;
        /**
         * The value of the gallery image feature.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * This is the gallery image definition identifier.
     */
    export interface GalleryImageIdentifierArgs {
        /**
         * The name of the gallery image definition offer.
         */
        offer: pulumi.Input<string>;
        /**
         * The name of the gallery image definition publisher.
         */
        publisher: pulumi.Input<string>;
        /**
         * The name of the gallery image definition SKU.
         */
        sku: pulumi.Input<string>;
    }

    /**
     * The publishing profile of a gallery image Version.
     */
    export interface GalleryImageVersionPublishingProfileArgs {
        /**
         * The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
         */
        endOfLifeDate?: pulumi.Input<string>;
        /**
         * If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
         */
        excludeFromLatest?: pulumi.Input<boolean>;
        /**
         * The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
         */
        replicaCount?: pulumi.Input<number>;
        /**
         * Optional parameter which specifies the mode to be used for replication. This property is not updatable.
         */
        replicationMode?: pulumi.Input<string | enums.ReplicationMode>;
        /**
         * Specifies the storage account type to be used to store the image. This property is not updatable.
         */
        storageAccountType?: pulumi.Input<string | enums.StorageAccountType>;
        /**
         * The target extended locations where the Image Version is going to be replicated to. This property is updatable.
         */
        targetExtendedLocations?: pulumi.Input<pulumi.Input<GalleryTargetExtendedLocationArgs>[]>;
        /**
         * The target regions where the Image Version is going to be replicated to. This property is updatable.
         */
        targetRegions?: pulumi.Input<pulumi.Input<TargetRegionArgs>[]>;
    }

    /**
     * This is the safety profile of the Gallery Image Version.
     */
    export interface GalleryImageVersionSafetyProfileArgs {
        /**
         * Indicates whether or not removing this Gallery Image Version from replicated regions is allowed.
         */
        allowDeletionOfReplicatedLocations?: pulumi.Input<boolean>;
    }

    /**
     * This is the storage profile of a Gallery Image Version.
     */
    export interface GalleryImageVersionStorageProfileArgs {
        /**
         * A list of data disk images.
         */
        dataDiskImages?: pulumi.Input<pulumi.Input<GalleryDataDiskImageArgs>[]>;
        /**
         * This is the OS disk image.
         */
        osDiskImage?: pulumi.Input<GalleryOSDiskImageArgs>;
        /**
         * The source of the gallery artifact version.
         */
        source?: pulumi.Input<GalleryArtifactVersionFullSourceArgs>;
    }

    /**
     * Contains UEFI settings for the image version.
     */
    export interface GalleryImageVersionUefiSettingsArgs {
        /**
         * Additional UEFI key signatures that will be added to the image in addition to the signature templates
         */
        additionalSignatures?: pulumi.Input<UefiKeySignaturesArgs>;
        /**
         * The name of the template(s) that contains default UEFI key signatures that will be added to the image.
         */
        signatureTemplateNames?: pulumi.Input<pulumi.Input<string | enums.UefiSignatureTemplateName>[]>;
    }

    /**
     * This is the OS disk image.
     */
    export interface GalleryOSDiskImageArgs {
        /**
         * The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
         */
        hostCaching?: pulumi.Input<enums.HostCaching>;
        /**
         * The source for the disk image.
         */
        source?: pulumi.Input<GalleryDiskImageSourceArgs>;
    }

    export interface GalleryTargetExtendedLocationArgs {
        /**
         * Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
         */
        encryption?: pulumi.Input<EncryptionImagesArgs>;
        /**
         * The name of the extended location.
         */
        extendedLocation?: pulumi.Input<GalleryExtendedLocationArgs>;
        /**
         * The number of replicas of the Image Version to be created per extended location. This property is updatable.
         */
        extendedLocationReplicaCount?: pulumi.Input<number>;
        /**
         * The name of the region.
         */
        name?: pulumi.Input<string>;
        /**
         * Specifies the storage account type to be used to store the image. This property is not updatable.
         */
        storageAccountType?: pulumi.Input<string | enums.EdgeZoneStorageAccountType>;
    }

    /**
     * Describes the gallery image definition purchase plan. This is used by marketplace images.
     */
    export interface ImagePurchasePlanArgs {
        /**
         * The plan ID.
         */
        name?: pulumi.Input<string>;
        /**
         * The product ID.
         */
        product?: pulumi.Input<string>;
        /**
         * The publisher ID.
         */
        publisher?: pulumi.Input<string>;
    }

    /**
     * The security profile of a gallery image version
     */
    export interface ImageVersionSecurityProfileArgs {
        /**
         * Contains UEFI settings for the image version.
         */
        uefiSettings?: pulumi.Input<GalleryImageVersionUefiSettingsArgs>;
    }

    /**
     * Contains encryption settings for an OS disk image.
     */
    export interface OSDiskImageEncryptionArgs {
        /**
         * A relative URI containing the resource ID of the disk encryption set.
         */
        diskEncryptionSetId?: pulumi.Input<string>;
        /**
         * This property specifies the security profile of an OS disk image.
         */
        securityProfile?: pulumi.Input<OSDiskImageSecurityProfileArgs>;
    }

    /**
     * Contains security profile for an OS disk image.
     */
    export interface OSDiskImageSecurityProfileArgs {
        /**
         * confidential VM encryption types
         */
        confidentialVMEncryptionType?: pulumi.Input<string | enums.ConfidentialVMEncryptionType>;
        /**
         * secure VM disk encryption set id
         */
        secureVMDiskEncryptionSetId?: pulumi.Input<string>;
    }

    /**
     * The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
     */
    export interface RecommendedMachineConfigurationArgs {
        /**
         * Describes the resource range.
         */
        memory?: pulumi.Input<ResourceRangeArgs>;
        /**
         * Describes the resource range.
         */
        vCPUs?: pulumi.Input<ResourceRangeArgs>;
    }

    /**
     * Describes the resource range.
     */
    export interface ResourceRangeArgs {
        /**
         * The maximum number of the resource.
         */
        max?: pulumi.Input<number>;
        /**
         * The minimum number of the resource.
         */
        min?: pulumi.Input<number>;
    }

    /**
     * Profile for gallery sharing to subscription or tenant
     */
    export interface SharingProfileArgs {
        /**
         * Information of community gallery if current gallery is shared to community.
         */
        communityGalleryInfo?: pulumi.Input<CommunityGalleryInfoArgs>;
        /**
         * This property allows you to specify the permission of sharing gallery. Possible values are: **Private,** **Groups,** **Community.**
         */
        permissions?: pulumi.Input<string | enums.GallerySharingPermissionTypes>;
    }

    /**
     * Contains information about the soft deletion policy of the gallery.
     */
    export interface SoftDeletePolicyArgs {
        /**
         * Enables soft-deletion for resources in this gallery, allowing them to be recovered within retention time.
         */
        isSoftDeleteEnabled?: pulumi.Input<boolean>;
    }

    /**
     * Describes the target region information.
     */
    export interface TargetRegionArgs {
        /**
         * Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
         */
        encryption?: pulumi.Input<EncryptionImagesArgs>;
        /**
         * Contains the flag setting to hide an image when users specify version='latest'
         */
        excludeFromLatest?: pulumi.Input<boolean>;
        /**
         * The name of the region.
         */
        name: pulumi.Input<string>;
        /**
         * The number of replicas of the Image Version to be created per region. This property is updatable.
         */
        regionalReplicaCount?: pulumi.Input<number>;
        /**
         * Specifies the storage account type to be used to store the image. This property is not updatable.
         */
        storageAccountType?: pulumi.Input<string | enums.StorageAccountType>;
    }

    /**
     * A UEFI key signature.
     */
    export interface UefiKeyArgs {
        /**
         * The type of key signature.
         */
        type?: pulumi.Input<string | enums.UefiKeyType>;
        /**
         * The value of the key signature.
         */
        value?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Additional UEFI key signatures that will be added to the image in addition to the signature templates
     */
    export interface UefiKeySignaturesArgs {
        /**
         * The database of UEFI keys for this image version.
         */
        db?: pulumi.Input<pulumi.Input<UefiKeyArgs>[]>;
        /**
         * The database of revoked UEFI keys for this image version.
         */
        dbx?: pulumi.Input<pulumi.Input<UefiKeyArgs>[]>;
        /**
         * The Key Encryption Keys of this image version.
         */
        kek?: pulumi.Input<pulumi.Input<UefiKeyArgs>[]>;
        /**
         * The Platform Key of this image version.
         */
        pk?: pulumi.Input<UefiKeyArgs>;
    }

    export interface UserArtifactManageArgs {
        /**
         * Required. The path and arguments to install the gallery application. This is limited to 4096 characters.
         */
        install: pulumi.Input<string>;
        /**
         * Required. The path and arguments to remove the gallery application. This is limited to 4096 characters.
         */
        remove: pulumi.Input<string>;
        /**
         * Optional. The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application. This is limited to 4096 characters.
         */
        update?: pulumi.Input<string>;
    }

    /**
     * Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set.
     */
    export interface UserArtifactSettingsArgs {
        /**
         * Optional. The name to assign the downloaded config file on the VM. This is limited to 4096 characters. If not specified, the config file will be named the Gallery Application name appended with "_config".
         */
        configFileName?: pulumi.Input<string>;
        /**
         * Optional. The name to assign the downloaded package file on the VM. This is limited to 4096 characters. If not specified, the package file will be named the same as the Gallery Application name.
         */
        packageFileName?: pulumi.Input<string>;
    }

    /**
     * The source image from which the Image Version is going to be created.
     */
    export interface UserArtifactSourceArgs {
        /**
         * Optional. The defaultConfigurationLink of the artifact, must be a readable storage page blob.
         */
        defaultConfigurationLink?: pulumi.Input<string>;
        /**
         * Required. The mediaLink of the artifact, must be a readable storage page blob.
         */
        mediaLink: pulumi.Input<string>;
    }
