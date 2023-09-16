import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Disk resource.
 */
export class Disk extends pulumi.CustomResource {
    /**
     * Get an existing Disk resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Disk {
        return new Disk(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute/v20230102:Disk';

    /**
     * Returns true if the given object is an instance of Disk.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Disk {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Disk.__pulumiType;
    }

    /**
     * Set to true to enable bursting beyond the provisioned performance target of the disk. Bursting is disabled by default. Does not apply to Ultra disks.
     */
    public readonly burstingEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Latest time when bursting was last enabled on a disk.
     */
    public /*out*/ readonly burstingEnabledTime!: pulumi.Output<string>;
    /**
     * Percentage complete for the background copy when a resource is created via the CopyStart operation.
     */
    public readonly completionPercent!: pulumi.Output<number | undefined>;
    /**
     * Disk source information. CreationData information cannot be changed after the disk has been created.
     */
    public readonly creationData!: pulumi.Output<types.outputs.compute.v20230102.CreationDataResponse>;
    /**
     * Additional authentication requirements when exporting or uploading to a disk or snapshot.
     */
    public readonly dataAccessAuthMode!: pulumi.Output<string | undefined>;
    /**
     * ARM id of the DiskAccess resource for using private endpoints on disks.
     */
    public readonly diskAccessId!: pulumi.Output<string | undefined>;
    /**
     * The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes.
     */
    public readonly diskIOPSReadOnly!: pulumi.Output<number | undefined>;
    /**
     * The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
     */
    public readonly diskIOPSReadWrite!: pulumi.Output<number | undefined>;
    /**
     * The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
     */
    public readonly diskMBpsReadOnly!: pulumi.Output<number | undefined>;
    /**
     * The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
     */
    public readonly diskMBpsReadWrite!: pulumi.Output<number | undefined>;
    /**
     * The size of the disk in bytes. This field is read only.
     */
    public /*out*/ readonly diskSizeBytes!: pulumi.Output<number>;
    /**
     * If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
     */
    public readonly diskSizeGB!: pulumi.Output<number | undefined>;
    /**
     * The state of the disk.
     */
    public /*out*/ readonly diskState!: pulumi.Output<string>;
    /**
     * Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
     */
    public readonly encryption!: pulumi.Output<types.outputs.compute.v20230102.EncryptionResponse | undefined>;
    /**
     * Encryption settings collection used for Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
     */
    public readonly encryptionSettingsCollection!: pulumi.Output<types.outputs.compute.v20230102.EncryptionSettingsCollectionResponse | undefined>;
    /**
     * The extended location where the disk will be created. Extended location cannot be changed.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.compute.v20230102.ExtendedLocationResponse | undefined>;
    /**
     * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     */
    public readonly hyperVGeneration!: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * A relative URI containing the ID of the VM that has the disk attached.
     */
    public /*out*/ readonly managedBy!: pulumi.Output<string>;
    /**
     * List of relative URIs containing the IDs of the VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
     */
    public /*out*/ readonly managedByExtended!: pulumi.Output<string[]>;
    /**
     * The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time.
     */
    public readonly maxShares!: pulumi.Output<number | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Policy for accessing the disk via network.
     */
    public readonly networkAccessPolicy!: pulumi.Output<string | undefined>;
    /**
     * Setting this property to true improves reliability and performance of data disks that are frequently (more than 5 times a day) by detached from one virtual machine and attached to another. This property should not be set for disks that are not detached and attached frequently as it causes the disks to not align with the fault domain of the virtual machine.
     */
    public readonly optimizedForFrequentAttach!: pulumi.Output<boolean | undefined>;
    /**
     * The Operating System type.
     */
    public readonly osType!: pulumi.Output<string | undefined>;
    /**
     * Properties of the disk for which update is pending.
     */
    public /*out*/ readonly propertyUpdatesInProgress!: pulumi.Output<types.outputs.compute.v20230102.PropertyUpdatesInProgressResponse>;
    /**
     * The disk provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Policy for controlling export on the disk.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Purchase plan information for the the image from which the OS disk was created. E.g. - {name: 2019-Datacenter, publisher: MicrosoftWindowsServer, product: WindowsServer}
     */
    public readonly purchasePlan!: pulumi.Output<types.outputs.compute.v20230102.PurchasePlanResponse | undefined>;
    /**
     * Contains the security related information for the resource.
     */
    public readonly securityProfile!: pulumi.Output<types.outputs.compute.v20230102.DiskSecurityProfileResponse | undefined>;
    /**
     * Details of the list of all VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
     */
    public /*out*/ readonly shareInfo!: pulumi.Output<types.outputs.compute.v20230102.ShareInfoElementResponse[]>;
    /**
     * The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, or PremiumV2_LRS.
     */
    public readonly sku!: pulumi.Output<types.outputs.compute.v20230102.DiskSkuResponse | undefined>;
    /**
     * List of supported capabilities for the image from which the OS disk was created.
     */
    public readonly supportedCapabilities!: pulumi.Output<types.outputs.compute.v20230102.SupportedCapabilitiesResponse | undefined>;
    /**
     * Indicates the OS on a disk supports hibernation.
     */
    public readonly supportsHibernation!: pulumi.Output<boolean | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Performance tier of the disk (e.g, P4, S10) as described here: https://azure.microsoft.com/en-us/pricing/details/managed-disks/. Does not apply to Ultra disks.
     */
    public readonly tier!: pulumi.Output<string | undefined>;
    /**
     * The time when the disk was created.
     */
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Unique Guid identifying the resource.
     */
    public /*out*/ readonly uniqueId!: pulumi.Output<string>;
    /**
     * The Logical zone list for Disk.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Disk resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiskArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.creationData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'creationData'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["burstingEnabled"] = args ? args.burstingEnabled : undefined;
            resourceInputs["completionPercent"] = args ? args.completionPercent : undefined;
            resourceInputs["creationData"] = args ? args.creationData : undefined;
            resourceInputs["dataAccessAuthMode"] = args ? args.dataAccessAuthMode : undefined;
            resourceInputs["diskAccessId"] = args ? args.diskAccessId : undefined;
            resourceInputs["diskIOPSReadOnly"] = args ? args.diskIOPSReadOnly : undefined;
            resourceInputs["diskIOPSReadWrite"] = args ? args.diskIOPSReadWrite : undefined;
            resourceInputs["diskMBpsReadOnly"] = args ? args.diskMBpsReadOnly : undefined;
            resourceInputs["diskMBpsReadWrite"] = args ? args.diskMBpsReadWrite : undefined;
            resourceInputs["diskName"] = args ? args.diskName : undefined;
            resourceInputs["diskSizeGB"] = args ? args.diskSizeGB : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["encryptionSettingsCollection"] = args ? args.encryptionSettingsCollection : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["hyperVGeneration"] = args ? args.hyperVGeneration : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maxShares"] = args ? args.maxShares : undefined;
            resourceInputs["networkAccessPolicy"] = args ? args.networkAccessPolicy : undefined;
            resourceInputs["optimizedForFrequentAttach"] = args ? args.optimizedForFrequentAttach : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["purchasePlan"] = args ? args.purchasePlan : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityProfile"] = args ? args.securityProfile : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["supportedCapabilities"] = args ? args.supportedCapabilities : undefined;
            resourceInputs["supportsHibernation"] = args ? args.supportsHibernation : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tier"] = args ? args.tier : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["burstingEnabledTime"] = undefined /*out*/;
            resourceInputs["diskSizeBytes"] = undefined /*out*/;
            resourceInputs["diskState"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["managedByExtended"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["propertyUpdatesInProgress"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["shareInfo"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueId"] = undefined /*out*/;
        } else {
            resourceInputs["burstingEnabled"] = undefined /*out*/;
            resourceInputs["burstingEnabledTime"] = undefined /*out*/;
            resourceInputs["completionPercent"] = undefined /*out*/;
            resourceInputs["creationData"] = undefined /*out*/;
            resourceInputs["dataAccessAuthMode"] = undefined /*out*/;
            resourceInputs["diskAccessId"] = undefined /*out*/;
            resourceInputs["diskIOPSReadOnly"] = undefined /*out*/;
            resourceInputs["diskIOPSReadWrite"] = undefined /*out*/;
            resourceInputs["diskMBpsReadOnly"] = undefined /*out*/;
            resourceInputs["diskMBpsReadWrite"] = undefined /*out*/;
            resourceInputs["diskSizeBytes"] = undefined /*out*/;
            resourceInputs["diskSizeGB"] = undefined /*out*/;
            resourceInputs["diskState"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["encryptionSettingsCollection"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["hyperVGeneration"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["managedByExtended"] = undefined /*out*/;
            resourceInputs["maxShares"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkAccessPolicy"] = undefined /*out*/;
            resourceInputs["optimizedForFrequentAttach"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["propertyUpdatesInProgress"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["purchasePlan"] = undefined /*out*/;
            resourceInputs["securityProfile"] = undefined /*out*/;
            resourceInputs["shareInfo"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["supportedCapabilities"] = undefined /*out*/;
            resourceInputs["supportsHibernation"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tier"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueId"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute:Disk" }, { type: "azure-native:compute/v20160430preview:Disk" }, { type: "azure-native:compute/v20170330:Disk" }, { type: "azure-native:compute/v20180401:Disk" }, { type: "azure-native:compute/v20180601:Disk" }, { type: "azure-native:compute/v20180930:Disk" }, { type: "azure-native:compute/v20190301:Disk" }, { type: "azure-native:compute/v20190701:Disk" }, { type: "azure-native:compute/v20191101:Disk" }, { type: "azure-native:compute/v20200501:Disk" }, { type: "azure-native:compute/v20200630:Disk" }, { type: "azure-native:compute/v20200930:Disk" }, { type: "azure-native:compute/v20201201:Disk" }, { type: "azure-native:compute/v20210401:Disk" }, { type: "azure-native:compute/v20210801:Disk" }, { type: "azure-native:compute/v20211201:Disk" }, { type: "azure-native:compute/v20220302:Disk" }, { type: "azure-native:compute/v20220702:Disk" }, { type: "azure-native:compute/v20230402:Disk" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Disk.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Disk resource.
 */
export interface DiskArgs {
    /**
     * Set to true to enable bursting beyond the provisioned performance target of the disk. Bursting is disabled by default. Does not apply to Ultra disks.
     */
    burstingEnabled?: pulumi.Input<boolean>;
    /**
     * Percentage complete for the background copy when a resource is created via the CopyStart operation.
     */
    completionPercent?: pulumi.Input<number>;
    /**
     * Disk source information. CreationData information cannot be changed after the disk has been created.
     */
    creationData: pulumi.Input<types.inputs.compute.v20230102.CreationDataArgs>;
    /**
     * Additional authentication requirements when exporting or uploading to a disk or snapshot.
     */
    dataAccessAuthMode?: pulumi.Input<string | types.enums.v20230102.DataAccessAuthMode>;
    /**
     * ARM id of the DiskAccess resource for using private endpoints on disks.
     */
    diskAccessId?: pulumi.Input<string>;
    /**
     * The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes.
     */
    diskIOPSReadOnly?: pulumi.Input<number>;
    /**
     * The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
     */
    diskIOPSReadWrite?: pulumi.Input<number>;
    /**
     * The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
     */
    diskMBpsReadOnly?: pulumi.Input<number>;
    /**
     * The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
     */
    diskMBpsReadWrite?: pulumi.Input<number>;
    /**
     * The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    diskName?: pulumi.Input<string>;
    /**
     * If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
     */
    diskSizeGB?: pulumi.Input<number>;
    /**
     * Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
     */
    encryption?: pulumi.Input<types.inputs.compute.v20230102.EncryptionArgs>;
    /**
     * Encryption settings collection used for Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
     */
    encryptionSettingsCollection?: pulumi.Input<types.inputs.compute.v20230102.EncryptionSettingsCollectionArgs>;
    /**
     * The extended location where the disk will be created. Extended location cannot be changed.
     */
    extendedLocation?: pulumi.Input<types.inputs.compute.v20230102.ExtendedLocationArgs>;
    /**
     * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     */
    hyperVGeneration?: pulumi.Input<string | types.enums.v20230102.HyperVGeneration>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time.
     */
    maxShares?: pulumi.Input<number>;
    /**
     * Policy for accessing the disk via network.
     */
    networkAccessPolicy?: pulumi.Input<string | types.enums.v20230102.NetworkAccessPolicy>;
    /**
     * Setting this property to true improves reliability and performance of data disks that are frequently (more than 5 times a day) by detached from one virtual machine and attached to another. This property should not be set for disks that are not detached and attached frequently as it causes the disks to not align with the fault domain of the virtual machine.
     */
    optimizedForFrequentAttach?: pulumi.Input<boolean>;
    /**
     * The Operating System type.
     */
    osType?: pulumi.Input<types.enums.v20230102.OperatingSystemTypes>;
    /**
     * Policy for controlling export on the disk.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.v20230102.PublicNetworkAccess>;
    /**
     * Purchase plan information for the the image from which the OS disk was created. E.g. - {name: 2019-Datacenter, publisher: MicrosoftWindowsServer, product: WindowsServer}
     */
    purchasePlan?: pulumi.Input<types.inputs.compute.v20230102.PurchasePlanArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Contains the security related information for the resource.
     */
    securityProfile?: pulumi.Input<types.inputs.compute.v20230102.DiskSecurityProfileArgs>;
    /**
     * The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, or PremiumV2_LRS.
     */
    sku?: pulumi.Input<types.inputs.compute.v20230102.DiskSkuArgs>;
    /**
     * List of supported capabilities for the image from which the OS disk was created.
     */
    supportedCapabilities?: pulumi.Input<types.inputs.compute.v20230102.SupportedCapabilitiesArgs>;
    /**
     * Indicates the OS on a disk supports hibernation.
     */
    supportsHibernation?: pulumi.Input<boolean>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Performance tier of the disk (e.g, P4, S10) as described here: https://azure.microsoft.com/en-us/pricing/details/managed-disks/. Does not apply to Ultra disks.
     */
    tier?: pulumi.Input<string>;
    /**
     * The Logical zone list for Disk.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
