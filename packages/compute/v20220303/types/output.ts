import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Information of community gallery if current gallery is shared to community
     */
    export interface CommunityGalleryInfoResponse {
        /**
         * Contains info about whether community gallery sharing is enabled.
         */
        communityGalleryEnabled: boolean;
        /**
         * End-user license agreement for community gallery image.
         */
        eula?: string;
        /**
         * The prefix of the gallery name that will be displayed publicly. Visible to all users.
         */
        publicNamePrefix?: string;
        /**
         * Community gallery public name list.
         */
        publicNames: string[];
        /**
         * Community gallery publisher support email. The email address of the publisher. Visible to all users.
         */
        publisherContact?: string;
        /**
         * The link to the publisher website. Visible to all users.
         */
        publisherUri?: string;
    }

    /**
     * Contains encryption settings for a data disk image.
     */
    export interface DataDiskImageEncryptionResponse {
        /**
         * A relative URI containing the resource ID of the disk encryption set.
         */
        diskEncryptionSetId?: string;
        /**
         * This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
         */
        lun: number;
    }

    /**
     * Describes the disallowed disk types.
     */
    export interface DisallowedResponse {
        /**
         * A list of disk types.
         */
        diskTypes?: string[];
    }

    /**
     * Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
     */
    export interface EncryptionImagesResponse {
        /**
         * A list of encryption specifications for data disk images.
         */
        dataDiskImages?: DataDiskImageEncryptionResponse[];
        /**
         * Contains encryption settings for an OS disk image.
         */
        osDiskImage?: OSDiskImageEncryptionResponse;
    }

    /**
     * The definition of a parameter that can be passed to a custom action of a Gallery Application Version.
     */
    export interface GalleryApplicationCustomActionParameterResponse {
        /**
         * The default value of the parameter.  Only applies to string types
         */
        defaultValue?: string;
        /**
         * A description to help users understand what this parameter means
         */
        description?: string;
        /**
         * The name of the custom action.  Must be unique within the Gallery Application Version.
         */
        name: string;
        /**
         * Indicates whether this parameter must be passed when running the custom action.
         */
        required?: boolean;
        /**
         * Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob
         */
        type?: string;
    }

    /**
     * A custom action that can be performed with a Gallery Application Version.
     */
    export interface GalleryApplicationCustomActionResponse {
        /**
         * Description to help the users understand what this custom action does.
         */
        description?: string;
        /**
         * The name of the custom action.  Must be unique within the Gallery Application Version.
         */
        name: string;
        /**
         * The parameters that this custom action uses
         */
        parameters?: GalleryApplicationCustomActionParameterResponse[];
        /**
         * The script to run when executing this custom action.
         */
        script: string;
    }

    /**
     * The publishing profile of a gallery image version.
     */
    export interface GalleryApplicationVersionPublishingProfileResponse {
        /**
         * Optional. Additional settings to pass to the vm-application-manager extension. For advanced use only.
         */
        advancedSettings?: {[key: string]: string};
        /**
         * A list of custom actions that can be performed with this Gallery Application Version.
         */
        customActions?: GalleryApplicationCustomActionResponse[];
        /**
         * Optional. Whether or not this application reports health.
         */
        enableHealthCheck?: boolean;
        /**
         * The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
         */
        endOfLifeDate?: string;
        /**
         * If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
         */
        excludeFromLatest?: boolean;
        manageActions?: UserArtifactManageResponse;
        /**
         * The timestamp for when the gallery image version is published.
         */
        publishedDate: string;
        /**
         * The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
         */
        replicaCount?: number;
        /**
         * Optional parameter which specifies the mode to be used for replication. This property is not updatable.
         */
        replicationMode?: string;
        /**
         * Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set.
         */
        settings?: UserArtifactSettingsResponse;
        /**
         * The source image from which the Image Version is going to be created.
         */
        source: UserArtifactSourceResponse;
        /**
         * Specifies the storage account type to be used to store the image. This property is not updatable.
         */
        storageAccountType?: string;
        /**
         * The target extended locations where the Image Version is going to be replicated to. This property is updatable.
         */
        targetExtendedLocations?: GalleryTargetExtendedLocationResponse[];
        /**
         * The target regions where the Image Version is going to be replicated to. This property is updatable.
         */
        targetRegions?: TargetRegionResponse[];
    }

    /**
     * The safety profile of the Gallery Application Version.
     */
    export interface GalleryApplicationVersionSafetyProfileResponse {
        /**
         * Indicates whether or not removing this Gallery Image Version from replicated regions is allowed.
         */
        allowDeletionOfReplicatedLocations?: boolean;
    }

    /**
     * The source of the gallery artifact version.
     */
    export interface GalleryArtifactVersionFullSourceResponse {
        /**
         * The resource Id of the source Community Gallery Image.  Only required when using Community Gallery Image as a source.
         */
        communityGalleryImageId?: string;
        /**
         * The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource.
         */
        id?: string;
    }

    /**
     * This is the data disk image.
     */
    export interface GalleryDataDiskImageResponse {
        /**
         * The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
         */
        hostCaching?: string;
        /**
         * This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
         */
        lun: number;
        /**
         * This property indicates the size of the VHD to be created.
         */
        sizeInGB: number;
        /**
         * The source for the disk image.
         */
        source?: GalleryDiskImageSourceResponse;
    }

    /**
     * The source for the disk image.
     */
    export interface GalleryDiskImageSourceResponse {
        /**
         * The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource.
         */
        id?: string;
        /**
         * The Storage Account Id that contains the vhd blob being used as a source for this artifact version.
         */
        storageAccountId?: string;
        /**
         * The uri of the gallery artifact version source. Currently used to specify vhd/blob source.
         */
        uri?: string;
    }

    /**
     * The name of the extended location.
     */
    export interface GalleryExtendedLocationResponse {
        name?: string;
        /**
         * It is type of the extended location.
         */
        type?: string;
    }

    /**
     * Describes the gallery unique name.
     */
    export interface GalleryIdentifierResponse {
        /**
         * The unique name of the Shared Image Gallery. This name is generated automatically by Azure.
         */
        uniqueName: string;
    }

    /**
     * A feature for gallery image.
     */
    export interface GalleryImageFeatureResponse {
        /**
         * The name of the gallery image feature.
         */
        name?: string;
        /**
         * The value of the gallery image feature.
         */
        value?: string;
    }

    /**
     * This is the gallery image definition identifier.
     */
    export interface GalleryImageIdentifierResponse {
        /**
         * The name of the gallery image definition offer.
         */
        offer: string;
        /**
         * The name of the gallery image definition publisher.
         */
        publisher: string;
        /**
         * The name of the gallery image definition SKU.
         */
        sku: string;
    }

    /**
     * The publishing profile of a gallery image Version.
     */
    export interface GalleryImageVersionPublishingProfileResponse {
        /**
         * The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
         */
        endOfLifeDate?: string;
        /**
         * If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
         */
        excludeFromLatest?: boolean;
        /**
         * The timestamp for when the gallery image version is published.
         */
        publishedDate: string;
        /**
         * The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
         */
        replicaCount?: number;
        /**
         * Optional parameter which specifies the mode to be used for replication. This property is not updatable.
         */
        replicationMode?: string;
        /**
         * Specifies the storage account type to be used to store the image. This property is not updatable.
         */
        storageAccountType?: string;
        /**
         * The target extended locations where the Image Version is going to be replicated to. This property is updatable.
         */
        targetExtendedLocations?: GalleryTargetExtendedLocationResponse[];
        /**
         * The target regions where the Image Version is going to be replicated to. This property is updatable.
         */
        targetRegions?: TargetRegionResponse[];
    }

    /**
     * This is the safety profile of the Gallery Image Version.
     */
    export interface GalleryImageVersionSafetyProfileResponse {
        /**
         * Indicates whether or not removing this Gallery Image Version from replicated regions is allowed.
         */
        allowDeletionOfReplicatedLocations?: boolean;
        /**
         * A list of Policy Violations that have been reported for this Gallery Image Version.
         */
        policyViolations: PolicyViolationResponse[];
        /**
         * Indicates whether this image has been reported as violating Microsoft's policies.
         */
        reportedForPolicyViolation: boolean;
    }

    /**
     * This is the storage profile of a Gallery Image Version.
     */
    export interface GalleryImageVersionStorageProfileResponse {
        /**
         * A list of data disk images.
         */
        dataDiskImages?: GalleryDataDiskImageResponse[];
        /**
         * This is the OS disk image.
         */
        osDiskImage?: GalleryOSDiskImageResponse;
        /**
         * The source of the gallery artifact version.
         */
        source?: GalleryArtifactVersionFullSourceResponse;
    }

    /**
     * This is the OS disk image.
     */
    export interface GalleryOSDiskImageResponse {
        /**
         * The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
         */
        hostCaching?: string;
        /**
         * This property indicates the size of the VHD to be created.
         */
        sizeInGB: number;
        /**
         * The source for the disk image.
         */
        source?: GalleryDiskImageSourceResponse;
    }

    export interface GalleryTargetExtendedLocationResponse {
        /**
         * Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
         */
        encryption?: EncryptionImagesResponse;
        /**
         * The name of the extended location.
         */
        extendedLocation?: GalleryExtendedLocationResponse;
        /**
         * The number of replicas of the Image Version to be created per extended location. This property is updatable.
         */
        extendedLocationReplicaCount?: number;
        /**
         * The name of the region.
         */
        name?: string;
        /**
         * Specifies the storage account type to be used to store the image. This property is not updatable.
         */
        storageAccountType?: string;
    }

    /**
     * Describes the gallery image definition purchase plan. This is used by marketplace images.
     */
    export interface ImagePurchasePlanResponse {
        /**
         * The plan ID.
         */
        name?: string;
        /**
         * The product ID.
         */
        product?: string;
        /**
         * The publisher ID.
         */
        publisher?: string;
    }

    /**
     * Contains encryption settings for an OS disk image.
     */
    export interface OSDiskImageEncryptionResponse {
        /**
         * A relative URI containing the resource ID of the disk encryption set.
         */
        diskEncryptionSetId?: string;
        /**
         * This property specifies the security profile of an OS disk image.
         */
        securityProfile?: OSDiskImageSecurityProfileResponse;
    }

    /**
     * Contains security profile for an OS disk image.
     */
    export interface OSDiskImageSecurityProfileResponse {
        /**
         * confidential VM encryption types
         */
        confidentialVMEncryptionType?: string;
        /**
         * secure VM disk encryption set id
         */
        secureVMDiskEncryptionSetId?: string;
    }

    /**
     * A policy violation reported against a gallery artifact.
     */
    export interface PolicyViolationResponse {
        /**
         * Describes the nature of the policy violation.
         */
        category?: string;
        /**
         * Describes specific details about why this policy violation was reported.
         */
        details?: string;
    }

    /**
     * The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
     */
    export interface RecommendedMachineConfigurationResponse {
        /**
         * Describes the resource range.
         */
        memory?: ResourceRangeResponse;
        /**
         * Describes the resource range.
         */
        vCPUs?: ResourceRangeResponse;
    }

    /**
     * This is the regional replication status.
     */
    export interface RegionalReplicationStatusResponse {
        /**
         * The details of the replication status.
         */
        details: string;
        /**
         * It indicates progress of the replication job.
         */
        progress: number;
        /**
         * The region to which the gallery image version is being replicated to.
         */
        region: string;
        /**
         * This is the regional replication state.
         */
        state: string;
    }

    /**
     * Gallery regional sharing status
     */
    export interface RegionalSharingStatusResponse {
        /**
         * Details of gallery regional sharing failure.
         */
        details?: string;
        /**
         * Region name
         */
        region?: string;
        /**
         * Gallery sharing state in current region
         */
        state: string;
    }

    /**
     * This is the replication status of the gallery image version.
     */
    export interface ReplicationStatusResponse {
        /**
         * This is the aggregated replication status based on all the regional replication status flags.
         */
        aggregatedState: string;
        /**
         * This is a summary of replication status for each region.
         */
        summary: RegionalReplicationStatusResponse[];
    }

    /**
     * Describes the resource range.
     */
    export interface ResourceRangeResponse {
        /**
         * The maximum number of the resource.
         */
        max?: number;
        /**
         * The minimum number of the resource.
         */
        min?: number;
    }

    /**
     * Group of the gallery sharing profile
     */
    export interface SharingProfileGroupResponse {
        /**
         * A list of subscription/tenant ids the gallery is aimed to be shared to.
         */
        ids?: string[];
        /**
         * This property allows you to specify the type of sharing group. <br><br> Possible values are: <br><br> **Subscriptions** <br><br> **AADTenants**
         */
        type?: string;
    }

    /**
     * Profile for gallery sharing to subscription or tenant
     */
    export interface SharingProfileResponse {
        /**
         * Information of community gallery if current gallery is shared to community.
         */
        communityGalleryInfo?: CommunityGalleryInfoResponse;
        /**
         * A list of sharing profile groups.
         */
        groups: SharingProfileGroupResponse[];
        /**
         * This property allows you to specify the permission of sharing gallery. <br><br> Possible values are: <br><br> **Private** <br><br> **Groups** <br><br> **Community**
         */
        permissions?: string;
    }

    /**
     * Sharing status of current gallery.
     */
    export interface SharingStatusResponse {
        /**
         * Aggregated sharing state of current gallery.
         */
        aggregatedState: string;
        /**
         * Summary of all regional sharing status.
         */
        summary?: RegionalSharingStatusResponse[];
    }

    /**
     * Contains information about the soft deletion policy of the gallery.
     */
    export interface SoftDeletePolicyResponse {
        /**
         * Enables soft-deletion for resources in this gallery, allowing them to be recovered within retention time.
         */
        isSoftDeleteEnabled?: boolean;
    }

    /**
     * Describes the target region information.
     */
    export interface TargetRegionResponse {
        /**
         * Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
         */
        encryption?: EncryptionImagesResponse;
        /**
         * Contains the flag setting to hide an image when users specify version='latest'
         */
        excludeFromLatest?: boolean;
        /**
         * The name of the region.
         */
        name: string;
        /**
         * The number of replicas of the Image Version to be created per region. This property is updatable.
         */
        regionalReplicaCount?: number;
        /**
         * Specifies the storage account type to be used to store the image. This property is not updatable.
         */
        storageAccountType?: string;
    }

    export interface UserArtifactManageResponse {
        /**
         * Required. The path and arguments to install the gallery application. This is limited to 4096 characters.
         */
        install: string;
        /**
         * Required. The path and arguments to remove the gallery application. This is limited to 4096 characters.
         */
        remove: string;
        /**
         * Optional. The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application. This is limited to 4096 characters.
         */
        update?: string;
    }

    /**
     * Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set.
     */
    export interface UserArtifactSettingsResponse {
        /**
         * Optional. The name to assign the downloaded config file on the VM. This is limited to 4096 characters. If not specified, the config file will be named the Gallery Application name appended with "_config".
         */
        configFileName?: string;
        /**
         * Optional. The name to assign the downloaded package file on the VM. This is limited to 4096 characters. If not specified, the package file will be named the same as the Gallery Application name.
         */
        packageFileName?: string;
    }

    /**
     * The source image from which the Image Version is going to be created.
     */
    export interface UserArtifactSourceResponse {
        /**
         * Optional. The defaultConfigurationLink of the artifact, must be a readable storage page blob.
         */
        defaultConfigurationLink?: string;
        /**
         * Required. The mediaLink of the artifact, must be a readable storage page blob.
         */
        mediaLink: string;
    }
