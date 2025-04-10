import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Volume resource
 *
 * Uses Azure REST API version 2022-11-01. In version 1.x of the Azure Native provider, it used API version 2020-12-01.
 *
 * Other available API versions: 2021-10-01, 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01, 2024-09-01-preview.
 */
export class Volume extends pulumi.CustomResource {
    /**
     * Get an existing Volume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Volume {
        return new Volume(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:netapp:Volume';

    /**
     * Returns true if the given object is an instance of Volume.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Volume {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Volume.__pulumiType;
    }

    /**
     * Actual throughput in MiB/s for auto qosType volumes calculated based on size and serviceLevel
     */
    public /*out*/ readonly actualThroughputMibps!: pulumi.Output<number>;
    /**
     * Specifies whether the volume is enabled for Azure VMware Solution (AVS) datastore purpose
     */
    public readonly avsDataStore!: pulumi.Output<string | undefined>;
    /**
     * UUID v4 or resource identifier used to identify the Backup.
     */
    public readonly backupId!: pulumi.Output<string | undefined>;
    /**
     * Unique Baremetal Tenant Identifier.
     */
    public /*out*/ readonly baremetalTenantId!: pulumi.Output<string>;
    /**
     * Pool Resource Id used in case of creating a volume through volume group
     */
    public readonly capacityPoolResourceId!: pulumi.Output<string | undefined>;
    /**
     * When a volume is being restored from another volume's snapshot, will show the percentage completion of this cloning process. When this value is empty/null there is no cloning process currently happening on this volume. This value will update every 5 minutes during cloning.
     */
    public /*out*/ readonly cloneProgress!: pulumi.Output<number>;
    /**
     * Specifies whether Cool Access(tiering) is enabled for the volume.
     */
    public readonly coolAccess!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the number of days after which data that is not accessed by clients will be tiered.
     */
    public readonly coolnessPeriod!: pulumi.Output<number | undefined>;
    /**
     * A unique file path for the volume. Used when creating mount targets
     */
    public readonly creationToken!: pulumi.Output<string>;
    /**
     * DataProtection type volumes include an object containing details of the replication
     */
    public readonly dataProtection!: pulumi.Output<types.outputs.VolumePropertiesResponseDataProtection | undefined>;
    /**
     * Data store resource unique identifier
     */
    public /*out*/ readonly dataStoreResourceId!: pulumi.Output<string[]>;
    /**
     * Default group quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies.
     */
    public readonly defaultGroupQuotaInKiBs!: pulumi.Output<number | undefined>;
    /**
     * Default user quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies .
     */
    public readonly defaultUserQuotaInKiBs!: pulumi.Output<number | undefined>;
    /**
     * If enabled (true) the snapshot the volume was created from will be automatically deleted after the volume create operation has finished.  Defaults to false
     */
    public readonly deleteBaseSnapshot!: pulumi.Output<boolean | undefined>;
    /**
     * Flag indicating whether subvolume operations are enabled on the volume
     */
    public readonly enableSubvolumes!: pulumi.Output<string | undefined>;
    /**
     * Specifies if the volume is encrypted or not. Only available on volumes created or updated after 2022-01-01.
     */
    public /*out*/ readonly encrypted!: pulumi.Output<boolean>;
    /**
     * Source of key used to encrypt data in volume. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'. Possible values (case-insensitive) are: 'Microsoft.NetApp, Microsoft.KeyVault'
     */
    public readonly encryptionKeySource!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Set of export policy rules
     */
    public readonly exportPolicy!: pulumi.Output<types.outputs.VolumePropertiesResponseExportPolicy | undefined>;
    /**
     * Flag indicating whether file access logs are enabled for the volume, based on active diagnostic settings present on the volume.
     */
    public /*out*/ readonly fileAccessLogs!: pulumi.Output<string>;
    /**
     * Unique FileSystem Identifier.
     */
    public /*out*/ readonly fileSystemId!: pulumi.Output<string>;
    /**
     * Specifies if default quota is enabled for the volume.
     */
    public readonly isDefaultQuotaEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether volume is a Large Volume or Regular Volume.
     */
    public readonly isLargeVolume!: pulumi.Output<boolean | undefined>;
    /**
     * Restoring
     */
    public readonly isRestoring!: pulumi.Output<boolean | undefined>;
    /**
     * Describe if a volume is KerberosEnabled. To be use with swagger version 2020-05-01 or later
     */
    public readonly kerberosEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'.
     */
    public readonly keyVaultPrivateEndpointResourceId!: pulumi.Output<string | undefined>;
    /**
     * Specifies whether LDAP is enabled or not for a given NFS volume.
     */
    public readonly ldapEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Maximum number of files allowed. Needs a service request in order to be changed. Only allowed to be changed if volume quota is more than 4TiB.
     */
    public /*out*/ readonly maximumNumberOfFiles!: pulumi.Output<number>;
    /**
     * List of mount targets
     */
    public /*out*/ readonly mountTargets!: pulumi.Output<types.outputs.MountTargetPropertiesResponse[]>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Basic network, or Standard features available to the volume.
     */
    public readonly networkFeatures!: pulumi.Output<string | undefined>;
    /**
     * Network Sibling Set ID for the the group of volumes sharing networking resources.
     */
    public /*out*/ readonly networkSiblingSetId!: pulumi.Output<string>;
    /**
     * Id of the snapshot or backup that the volume is restored from.
     */
    public /*out*/ readonly originatingResourceId!: pulumi.Output<string>;
    /**
     * Application specific placement rules for the particular volume
     */
    public readonly placementRules!: pulumi.Output<types.outputs.PlacementKeyValuePairsResponse[] | undefined>;
    /**
     * Set of protocol types, default NFSv3, CIFS for SMB protocol
     */
    public readonly protocolTypes!: pulumi.Output<string[] | undefined>;
    /**
     * The availability zone where the volume is provisioned. This refers to the logical availability zone where the volume resides.
     */
    public /*out*/ readonly provisionedAvailabilityZone!: pulumi.Output<string>;
    /**
     * Azure lifecycle management
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Proximity placement group associated with the volume
     */
    public readonly proximityPlacementGroup!: pulumi.Output<string | undefined>;
    /**
     * The security style of volume, default unix, defaults to ntfs for dual protocol or CIFS protocol
     */
    public readonly securityStyle!: pulumi.Output<string | undefined>;
    /**
     * The service level of the file system
     */
    public readonly serviceLevel!: pulumi.Output<string | undefined>;
    /**
     * Enables access based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume
     */
    public readonly smbAccessBasedEnumeration!: pulumi.Output<string | undefined>;
    /**
     * Enables continuously available share property for smb volume. Only applicable for SMB volume
     */
    public readonly smbContinuouslyAvailable!: pulumi.Output<boolean | undefined>;
    /**
     * Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later
     */
    public readonly smbEncryption!: pulumi.Output<boolean | undefined>;
    /**
     * Enables non browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume
     */
    public readonly smbNonBrowsable!: pulumi.Output<string | undefined>;
    /**
     * If enabled (true) the volume will contain a read-only snapshot directory which provides access to each of the volume's snapshots (defaults to true).
     */
    public readonly snapshotDirectoryVisible!: pulumi.Output<boolean | undefined>;
    /**
     * UUID v4 or resource identifier used to identify the Snapshot.
     */
    public readonly snapshotId!: pulumi.Output<string | undefined>;
    /**
     * Provides storage to network proximity information for the volume.
     */
    public /*out*/ readonly storageToNetworkProximity!: pulumi.Output<string>;
    /**
     * The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
     */
    public readonly subnetId!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * T2 network information
     */
    public /*out*/ readonly t2Network!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly throughputMibps!: pulumi.Output<number | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file: read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users.
     */
    public readonly unixPermissions!: pulumi.Output<string | undefined>;
    /**
     * Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB, 500Tib for LargeVolume. Specified in bytes.
     */
    public readonly usageThreshold!: pulumi.Output<number>;
    /**
     * Volume Group Name
     */
    public /*out*/ readonly volumeGroupName!: pulumi.Output<string>;
    /**
     * Volume spec name is the application specific designation or identifier for the particular volume in a volume group for e.g. data, log
     */
    public readonly volumeSpecName!: pulumi.Output<string | undefined>;
    /**
     * What type of volume is this. For destination volumes in Cross Region Replication, set type to DataProtection
     */
    public readonly volumeType!: pulumi.Output<string | undefined>;
    /**
     * Availability Zone
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Volume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.creationToken === undefined) && !opts.urn) {
                throw new Error("Missing required property 'creationToken'");
            }
            if ((!args || args.poolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'poolName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            if ((!args || args.usageThreshold === undefined) && !opts.urn) {
                throw new Error("Missing required property 'usageThreshold'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["avsDataStore"] = (args ? args.avsDataStore : undefined) ?? "Disabled";
            resourceInputs["backupId"] = args ? args.backupId : undefined;
            resourceInputs["capacityPoolResourceId"] = args ? args.capacityPoolResourceId : undefined;
            resourceInputs["coolAccess"] = (args ? args.coolAccess : undefined) ?? false;
            resourceInputs["coolnessPeriod"] = args ? args.coolnessPeriod : undefined;
            resourceInputs["creationToken"] = args ? args.creationToken : undefined;
            resourceInputs["dataProtection"] = args ? args.dataProtection : undefined;
            resourceInputs["defaultGroupQuotaInKiBs"] = (args ? args.defaultGroupQuotaInKiBs : undefined) ?? 0;
            resourceInputs["defaultUserQuotaInKiBs"] = (args ? args.defaultUserQuotaInKiBs : undefined) ?? 0;
            resourceInputs["deleteBaseSnapshot"] = args ? args.deleteBaseSnapshot : undefined;
            resourceInputs["enableSubvolumes"] = (args ? args.enableSubvolumes : undefined) ?? "Disabled";
            resourceInputs["encryptionKeySource"] = (args ? args.encryptionKeySource : undefined) ?? "Microsoft.NetApp";
            resourceInputs["exportPolicy"] = args ? args.exportPolicy : undefined;
            resourceInputs["isDefaultQuotaEnabled"] = (args ? args.isDefaultQuotaEnabled : undefined) ?? false;
            resourceInputs["isLargeVolume"] = (args ? args.isLargeVolume : undefined) ?? false;
            resourceInputs["isRestoring"] = args ? args.isRestoring : undefined;
            resourceInputs["kerberosEnabled"] = (args ? args.kerberosEnabled : undefined) ?? false;
            resourceInputs["keyVaultPrivateEndpointResourceId"] = args ? args.keyVaultPrivateEndpointResourceId : undefined;
            resourceInputs["ldapEnabled"] = (args ? args.ldapEnabled : undefined) ?? false;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkFeatures"] = (args ? args.networkFeatures : undefined) ?? "Basic";
            resourceInputs["placementRules"] = args ? args.placementRules : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["protocolTypes"] = args ? args.protocolTypes : undefined;
            resourceInputs["proximityPlacementGroup"] = args ? args.proximityPlacementGroup : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityStyle"] = (args ? args.securityStyle : undefined) ?? "unix";
            resourceInputs["serviceLevel"] = args ? args.serviceLevel : undefined;
            resourceInputs["smbAccessBasedEnumeration"] = args ? args.smbAccessBasedEnumeration : undefined;
            resourceInputs["smbContinuouslyAvailable"] = (args ? args.smbContinuouslyAvailable : undefined) ?? false;
            resourceInputs["smbEncryption"] = (args ? args.smbEncryption : undefined) ?? false;
            resourceInputs["smbNonBrowsable"] = args ? args.smbNonBrowsable : undefined;
            resourceInputs["snapshotDirectoryVisible"] = (args ? args.snapshotDirectoryVisible : undefined) ?? true;
            resourceInputs["snapshotId"] = args ? args.snapshotId : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["throughputMibps"] = args ? args.throughputMibps : undefined;
            resourceInputs["unixPermissions"] = (args ? args.unixPermissions : undefined) ?? "0770";
            resourceInputs["usageThreshold"] = (args ? args.usageThreshold : undefined) ?? 107374182400;
            resourceInputs["volumeName"] = args ? args.volumeName : undefined;
            resourceInputs["volumeSpecName"] = args ? args.volumeSpecName : undefined;
            resourceInputs["volumeType"] = args ? args.volumeType : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["actualThroughputMibps"] = undefined /*out*/;
            resourceInputs["baremetalTenantId"] = undefined /*out*/;
            resourceInputs["cloneProgress"] = undefined /*out*/;
            resourceInputs["dataStoreResourceId"] = undefined /*out*/;
            resourceInputs["encrypted"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["fileAccessLogs"] = undefined /*out*/;
            resourceInputs["fileSystemId"] = undefined /*out*/;
            resourceInputs["maximumNumberOfFiles"] = undefined /*out*/;
            resourceInputs["mountTargets"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkSiblingSetId"] = undefined /*out*/;
            resourceInputs["originatingResourceId"] = undefined /*out*/;
            resourceInputs["provisionedAvailabilityZone"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["storageToNetworkProximity"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["t2Network"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeGroupName"] = undefined /*out*/;
        } else {
            resourceInputs["actualThroughputMibps"] = undefined /*out*/;
            resourceInputs["avsDataStore"] = undefined /*out*/;
            resourceInputs["backupId"] = undefined /*out*/;
            resourceInputs["baremetalTenantId"] = undefined /*out*/;
            resourceInputs["capacityPoolResourceId"] = undefined /*out*/;
            resourceInputs["cloneProgress"] = undefined /*out*/;
            resourceInputs["coolAccess"] = undefined /*out*/;
            resourceInputs["coolnessPeriod"] = undefined /*out*/;
            resourceInputs["creationToken"] = undefined /*out*/;
            resourceInputs["dataProtection"] = undefined /*out*/;
            resourceInputs["dataStoreResourceId"] = undefined /*out*/;
            resourceInputs["defaultGroupQuotaInKiBs"] = undefined /*out*/;
            resourceInputs["defaultUserQuotaInKiBs"] = undefined /*out*/;
            resourceInputs["deleteBaseSnapshot"] = undefined /*out*/;
            resourceInputs["enableSubvolumes"] = undefined /*out*/;
            resourceInputs["encrypted"] = undefined /*out*/;
            resourceInputs["encryptionKeySource"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["exportPolicy"] = undefined /*out*/;
            resourceInputs["fileAccessLogs"] = undefined /*out*/;
            resourceInputs["fileSystemId"] = undefined /*out*/;
            resourceInputs["isDefaultQuotaEnabled"] = undefined /*out*/;
            resourceInputs["isLargeVolume"] = undefined /*out*/;
            resourceInputs["isRestoring"] = undefined /*out*/;
            resourceInputs["kerberosEnabled"] = undefined /*out*/;
            resourceInputs["keyVaultPrivateEndpointResourceId"] = undefined /*out*/;
            resourceInputs["ldapEnabled"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maximumNumberOfFiles"] = undefined /*out*/;
            resourceInputs["mountTargets"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkFeatures"] = undefined /*out*/;
            resourceInputs["networkSiblingSetId"] = undefined /*out*/;
            resourceInputs["originatingResourceId"] = undefined /*out*/;
            resourceInputs["placementRules"] = undefined /*out*/;
            resourceInputs["protocolTypes"] = undefined /*out*/;
            resourceInputs["provisionedAvailabilityZone"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["proximityPlacementGroup"] = undefined /*out*/;
            resourceInputs["securityStyle"] = undefined /*out*/;
            resourceInputs["serviceLevel"] = undefined /*out*/;
            resourceInputs["smbAccessBasedEnumeration"] = undefined /*out*/;
            resourceInputs["smbContinuouslyAvailable"] = undefined /*out*/;
            resourceInputs["smbEncryption"] = undefined /*out*/;
            resourceInputs["smbNonBrowsable"] = undefined /*out*/;
            resourceInputs["snapshotDirectoryVisible"] = undefined /*out*/;
            resourceInputs["snapshotId"] = undefined /*out*/;
            resourceInputs["storageToNetworkProximity"] = undefined /*out*/;
            resourceInputs["subnetId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["t2Network"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["throughputMibps"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["unixPermissions"] = undefined /*out*/;
            resourceInputs["usageThreshold"] = undefined /*out*/;
            resourceInputs["volumeGroupName"] = undefined /*out*/;
            resourceInputs["volumeSpecName"] = undefined /*out*/;
            resourceInputs["volumeType"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:netapp/v20170815:Volume" }, { type: "azure-native:netapp/v20190501:Volume" }, { type: "azure-native:netapp/v20190601:Volume" }, { type: "azure-native:netapp/v20190701:Volume" }, { type: "azure-native:netapp/v20190801:Volume" }, { type: "azure-native:netapp/v20191001:Volume" }, { type: "azure-native:netapp/v20191101:Volume" }, { type: "azure-native:netapp/v20200201:Volume" }, { type: "azure-native:netapp/v20200301:Volume" }, { type: "azure-native:netapp/v20200501:Volume" }, { type: "azure-native:netapp/v20200601:Volume" }, { type: "azure-native:netapp/v20200701:Volume" }, { type: "azure-native:netapp/v20200801:Volume" }, { type: "azure-native:netapp/v20200901:Volume" }, { type: "azure-native:netapp/v20201101:Volume" }, { type: "azure-native:netapp/v20201201:Volume" }, { type: "azure-native:netapp/v20210201:Volume" }, { type: "azure-native:netapp/v20210401:Volume" }, { type: "azure-native:netapp/v20210401preview:Volume" }, { type: "azure-native:netapp/v20210601:Volume" }, { type: "azure-native:netapp/v20210801:Volume" }, { type: "azure-native:netapp/v20211001:Volume" }, { type: "azure-native:netapp/v20220101:Volume" }, { type: "azure-native:netapp/v20220301:Volume" }, { type: "azure-native:netapp/v20220501:Volume" }, { type: "azure-native:netapp/v20220901:Volume" }, { type: "azure-native:netapp/v20221101:Volume" }, { type: "azure-native:netapp/v20221101preview:Volume" }, { type: "azure-native:netapp/v20230501:Volume" }, { type: "azure-native:netapp/v20230501preview:Volume" }, { type: "azure-native:netapp/v20230701:Volume" }, { type: "azure-native:netapp/v20230701preview:Volume" }, { type: "azure-native:netapp/v20231101:Volume" }, { type: "azure-native:netapp/v20231101preview:Volume" }, { type: "azure-native:netapp/v20240101:Volume" }, { type: "azure-native:netapp/v20240301:Volume" }, { type: "azure-native:netapp/v20240301preview:Volume" }, { type: "azure-native:netapp/v20240501:Volume" }, { type: "azure-native:netapp/v20240501preview:Volume" }, { type: "azure-native:netapp/v20240701:Volume" }, { type: "azure-native:netapp/v20240701preview:Volume" }, { type: "azure-native:netapp/v20240901:Volume" }, { type: "azure-native:netapp/v20240901preview:Volume" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Volume.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Volume resource.
 */
export interface VolumeArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * Specifies whether the volume is enabled for Azure VMware Solution (AVS) datastore purpose
     */
    avsDataStore?: pulumi.Input<string | types.enums.AvsDataStore>;
    /**
     * UUID v4 or resource identifier used to identify the Backup.
     */
    backupId?: pulumi.Input<string>;
    /**
     * Pool Resource Id used in case of creating a volume through volume group
     */
    capacityPoolResourceId?: pulumi.Input<string>;
    /**
     * Specifies whether Cool Access(tiering) is enabled for the volume.
     */
    coolAccess?: pulumi.Input<boolean>;
    /**
     * Specifies the number of days after which data that is not accessed by clients will be tiered.
     */
    coolnessPeriod?: pulumi.Input<number>;
    /**
     * A unique file path for the volume. Used when creating mount targets
     */
    creationToken: pulumi.Input<string>;
    /**
     * DataProtection type volumes include an object containing details of the replication
     */
    dataProtection?: pulumi.Input<types.inputs.VolumePropertiesDataProtectionArgs>;
    /**
     * Default group quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies.
     */
    defaultGroupQuotaInKiBs?: pulumi.Input<number>;
    /**
     * Default user quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies .
     */
    defaultUserQuotaInKiBs?: pulumi.Input<number>;
    /**
     * If enabled (true) the snapshot the volume was created from will be automatically deleted after the volume create operation has finished.  Defaults to false
     */
    deleteBaseSnapshot?: pulumi.Input<boolean>;
    /**
     * Flag indicating whether subvolume operations are enabled on the volume
     */
    enableSubvolumes?: pulumi.Input<string | types.enums.EnableSubvolumes>;
    /**
     * Source of key used to encrypt data in volume. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'. Possible values (case-insensitive) are: 'Microsoft.NetApp, Microsoft.KeyVault'
     */
    encryptionKeySource?: pulumi.Input<string | types.enums.EncryptionKeySource>;
    /**
     * Set of export policy rules
     */
    exportPolicy?: pulumi.Input<types.inputs.VolumePropertiesExportPolicyArgs>;
    /**
     * Specifies if default quota is enabled for the volume.
     */
    isDefaultQuotaEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies whether volume is a Large Volume or Regular Volume.
     */
    isLargeVolume?: pulumi.Input<boolean>;
    /**
     * Restoring
     */
    isRestoring?: pulumi.Input<boolean>;
    /**
     * Describe if a volume is KerberosEnabled. To be use with swagger version 2020-05-01 or later
     */
    kerberosEnabled?: pulumi.Input<boolean>;
    /**
     * The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'.
     */
    keyVaultPrivateEndpointResourceId?: pulumi.Input<string>;
    /**
     * Specifies whether LDAP is enabled or not for a given NFS volume.
     */
    ldapEnabled?: pulumi.Input<boolean>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Basic network, or Standard features available to the volume.
     */
    networkFeatures?: pulumi.Input<string | types.enums.NetworkFeatures>;
    /**
     * Application specific placement rules for the particular volume
     */
    placementRules?: pulumi.Input<pulumi.Input<types.inputs.PlacementKeyValuePairsArgs>[]>;
    /**
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * Set of protocol types, default NFSv3, CIFS for SMB protocol
     */
    protocolTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Proximity placement group associated with the volume
     */
    proximityPlacementGroup?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security style of volume, default unix, defaults to ntfs for dual protocol or CIFS protocol
     */
    securityStyle?: pulumi.Input<string | types.enums.SecurityStyle>;
    /**
     * The service level of the file system
     */
    serviceLevel?: pulumi.Input<string | types.enums.ServiceLevel>;
    /**
     * Enables access based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume
     */
    smbAccessBasedEnumeration?: pulumi.Input<string | types.enums.SmbAccessBasedEnumeration>;
    /**
     * Enables continuously available share property for smb volume. Only applicable for SMB volume
     */
    smbContinuouslyAvailable?: pulumi.Input<boolean>;
    /**
     * Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later
     */
    smbEncryption?: pulumi.Input<boolean>;
    /**
     * Enables non browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume
     */
    smbNonBrowsable?: pulumi.Input<string | types.enums.SmbNonBrowsable>;
    /**
     * If enabled (true) the volume will contain a read-only snapshot directory which provides access to each of the volume's snapshots (defaults to true).
     */
    snapshotDirectoryVisible?: pulumi.Input<boolean>;
    /**
     * UUID v4 or resource identifier used to identify the Snapshot.
     */
    snapshotId?: pulumi.Input<string>;
    /**
     * The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
     */
    subnetId: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    throughputMibps?: pulumi.Input<number>;
    /**
     * UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file: read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users.
     */
    unixPermissions?: pulumi.Input<string>;
    /**
     * Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB, 500Tib for LargeVolume. Specified in bytes.
     */
    usageThreshold: pulumi.Input<number>;
    /**
     * The name of the volume
     */
    volumeName?: pulumi.Input<string>;
    /**
     * Volume spec name is the application specific designation or identifier for the particular volume in a volume group for e.g. data, log
     */
    volumeSpecName?: pulumi.Input<string>;
    /**
     * What type of volume is this. For destination volumes in Cross Region Replication, set type to DataProtection
     */
    volumeType?: pulumi.Input<string>;
    /**
     * Availability Zone
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}