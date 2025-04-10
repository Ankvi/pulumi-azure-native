import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of the specified volume
 *
 * Uses Azure REST API version 2022-11-01.
 *
 * Other available API versions: 2021-10-01, 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01, 2024-09-01-preview.
 */
export function getVolume(args: GetVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getVolume", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetVolumeArgs {
    /**
     * The name of the NetApp account
     */
    accountName: string;
    /**
     * The name of the capacity pool
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the volume
     */
    volumeName: string;
}

/**
 * Volume resource
 */
export interface GetVolumeResult {
    /**
     * Actual throughput in MiB/s for auto qosType volumes calculated based on size and serviceLevel
     */
    readonly actualThroughputMibps: number;
    /**
     * Specifies whether the volume is enabled for Azure VMware Solution (AVS) datastore purpose
     */
    readonly avsDataStore?: string;
    /**
     * UUID v4 or resource identifier used to identify the Backup.
     */
    readonly backupId?: string;
    /**
     * Unique Baremetal Tenant Identifier.
     */
    readonly baremetalTenantId: string;
    /**
     * Pool Resource Id used in case of creating a volume through volume group
     */
    readonly capacityPoolResourceId?: string;
    /**
     * When a volume is being restored from another volume's snapshot, will show the percentage completion of this cloning process. When this value is empty/null there is no cloning process currently happening on this volume. This value will update every 5 minutes during cloning.
     */
    readonly cloneProgress: number;
    /**
     * Specifies whether Cool Access(tiering) is enabled for the volume.
     */
    readonly coolAccess?: boolean;
    /**
     * Specifies the number of days after which data that is not accessed by clients will be tiered.
     */
    readonly coolnessPeriod?: number;
    /**
     * A unique file path for the volume. Used when creating mount targets
     */
    readonly creationToken: string;
    /**
     * DataProtection type volumes include an object containing details of the replication
     */
    readonly dataProtection?: types.outputs.VolumePropertiesResponseDataProtection;
    /**
     * Data store resource unique identifier
     */
    readonly dataStoreResourceId: string[];
    /**
     * Default group quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies.
     */
    readonly defaultGroupQuotaInKiBs?: number;
    /**
     * Default user quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies .
     */
    readonly defaultUserQuotaInKiBs?: number;
    /**
     * If enabled (true) the snapshot the volume was created from will be automatically deleted after the volume create operation has finished.  Defaults to false
     */
    readonly deleteBaseSnapshot?: boolean;
    /**
     * Flag indicating whether subvolume operations are enabled on the volume
     */
    readonly enableSubvolumes?: string;
    /**
     * Specifies if the volume is encrypted or not. Only available on volumes created or updated after 2022-01-01.
     */
    readonly encrypted: boolean;
    /**
     * Source of key used to encrypt data in volume. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'. Possible values (case-insensitive) are: 'Microsoft.NetApp, Microsoft.KeyVault'
     */
    readonly encryptionKeySource?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Set of export policy rules
     */
    readonly exportPolicy?: types.outputs.VolumePropertiesResponseExportPolicy;
    /**
     * Flag indicating whether file access logs are enabled for the volume, based on active diagnostic settings present on the volume.
     */
    readonly fileAccessLogs: string;
    /**
     * Unique FileSystem Identifier.
     */
    readonly fileSystemId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Specifies if default quota is enabled for the volume.
     */
    readonly isDefaultQuotaEnabled?: boolean;
    /**
     * Specifies whether volume is a Large Volume or Regular Volume.
     */
    readonly isLargeVolume?: boolean;
    /**
     * Restoring
     */
    readonly isRestoring?: boolean;
    /**
     * Describe if a volume is KerberosEnabled. To be use with swagger version 2020-05-01 or later
     */
    readonly kerberosEnabled?: boolean;
    /**
     * The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'.
     */
    readonly keyVaultPrivateEndpointResourceId?: string;
    /**
     * Specifies whether LDAP is enabled or not for a given NFS volume.
     */
    readonly ldapEnabled?: boolean;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Maximum number of files allowed. Needs a service request in order to be changed. Only allowed to be changed if volume quota is more than 4TiB.
     */
    readonly maximumNumberOfFiles: number;
    /**
     * List of mount targets
     */
    readonly mountTargets: types.outputs.MountTargetPropertiesResponse[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Basic network, or Standard features available to the volume.
     */
    readonly networkFeatures?: string;
    /**
     * Network Sibling Set ID for the the group of volumes sharing networking resources.
     */
    readonly networkSiblingSetId: string;
    /**
     * Id of the snapshot or backup that the volume is restored from.
     */
    readonly originatingResourceId: string;
    /**
     * Application specific placement rules for the particular volume
     */
    readonly placementRules?: types.outputs.PlacementKeyValuePairsResponse[];
    /**
     * Set of protocol types, default NFSv3, CIFS for SMB protocol
     */
    readonly protocolTypes?: string[];
    /**
     * The availability zone where the volume is provisioned. This refers to the logical availability zone where the volume resides.
     */
    readonly provisionedAvailabilityZone: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
    /**
     * Proximity placement group associated with the volume
     */
    readonly proximityPlacementGroup?: string;
    /**
     * The security style of volume, default unix, defaults to ntfs for dual protocol or CIFS protocol
     */
    readonly securityStyle?: string;
    /**
     * The service level of the file system
     */
    readonly serviceLevel?: string;
    /**
     * Enables access based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume
     */
    readonly smbAccessBasedEnumeration?: string;
    /**
     * Enables continuously available share property for smb volume. Only applicable for SMB volume
     */
    readonly smbContinuouslyAvailable?: boolean;
    /**
     * Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later
     */
    readonly smbEncryption?: boolean;
    /**
     * Enables non browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume
     */
    readonly smbNonBrowsable?: string;
    /**
     * If enabled (true) the volume will contain a read-only snapshot directory which provides access to each of the volume's snapshots (defaults to true).
     */
    readonly snapshotDirectoryVisible?: boolean;
    /**
     * UUID v4 or resource identifier used to identify the Snapshot.
     */
    readonly snapshotId?: string;
    /**
     * Provides storage to network proximity information for the volume.
     */
    readonly storageToNetworkProximity: string;
    /**
     * The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
     */
    readonly subnetId: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * T2 network information
     */
    readonly t2Network: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    readonly throughputMibps?: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file: read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users.
     */
    readonly unixPermissions?: string;
    /**
     * Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB, 500Tib for LargeVolume. Specified in bytes.
     */
    readonly usageThreshold: number;
    /**
     * Volume Group Name
     */
    readonly volumeGroupName: string;
    /**
     * Volume spec name is the application specific designation or identifier for the particular volume in a volume group for e.g. data, log
     */
    readonly volumeSpecName?: string;
    /**
     * What type of volume is this. For destination volumes in Cross Region Replication, set type to DataProtection
     */
    readonly volumeType?: string;
    /**
     * Availability Zone
     */
    readonly zones?: string[];
}
/**
 * Get the details of the specified volume
 *
 * Uses Azure REST API version 2022-11-01.
 *
 * Other available API versions: 2021-10-01, 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01, 2024-09-01-preview.
 */
export function getVolumeOutput(args: GetVolumeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVolumeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:netapp:getVolume", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetVolumeOutputArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
}