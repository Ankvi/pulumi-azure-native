import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Snapshot resource.
 *
 * Uses Azure REST API version 2024-03-02. In version 2.x of the Azure Native provider, it used API version 2022-07-02.
 *
 * Other available API versions: 2022-07-02, 2023-01-02, 2023-04-02, 2023-10-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Snapshot extends pulumi.CustomResource {
    /**
     * Get an existing Snapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Snapshot {
        return new Snapshot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:Snapshot';

    /**
     * Returns true if the given object is an instance of Snapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Snapshot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Snapshot.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Percentage complete for the background copy when a resource is created via the CopyStart operation.
     */
    public readonly completionPercent!: pulumi.Output<number | undefined>;
    /**
     * Indicates the error details if the background copy of a resource created via the CopyStart operation fails.
     */
    public readonly copyCompletionError!: pulumi.Output<types.outputs.CopyCompletionErrorResponse | undefined>;
    /**
     * Disk source information. CreationData information cannot be changed after the disk has been created.
     */
    public readonly creationData!: pulumi.Output<types.outputs.CreationDataResponse>;
    /**
     * Additional authentication requirements when exporting or uploading to a disk or snapshot.
     */
    public readonly dataAccessAuthMode!: pulumi.Output<string | undefined>;
    /**
     * ARM id of the DiskAccess resource for using private endpoints on disks.
     */
    public readonly diskAccessId!: pulumi.Output<string | undefined>;
    /**
     * The size of the disk in bytes. This field is read only.
     */
    public /*out*/ readonly diskSizeBytes!: pulumi.Output<number>;
    /**
     * If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
     */
    public readonly diskSizeGB!: pulumi.Output<number | undefined>;
    /**
     * The state of the snapshot.
     */
    public /*out*/ readonly diskState!: pulumi.Output<string>;
    /**
     * Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
     */
    public readonly encryption!: pulumi.Output<types.outputs.EncryptionResponse | undefined>;
    /**
     * Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
     */
    public readonly encryptionSettingsCollection!: pulumi.Output<types.outputs.EncryptionSettingsCollectionResponse | undefined>;
    /**
     * The extended location where the snapshot will be created. Extended location cannot be changed.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     */
    public readonly hyperVGeneration!: pulumi.Output<string | undefined>;
    /**
     * Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed.
     */
    public readonly incremental!: pulumi.Output<boolean | undefined>;
    /**
     * Incremental snapshots for a disk share an incremental snapshot family id. The Get Page Range Diff API can only be called on incremental snapshots with the same family id.
     */
    public /*out*/ readonly incrementalSnapshotFamilyId!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Unused. Always Null.
     */
    public /*out*/ readonly managedBy!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Policy for accessing the disk via network.
     */
    public readonly networkAccessPolicy!: pulumi.Output<string | undefined>;
    /**
     * The Operating System type.
     */
    public readonly osType!: pulumi.Output<string | undefined>;
    /**
     * The disk provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Policy for controlling export on the disk.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Purchase plan information for the image from which the source disk for the snapshot was originally created.
     */
    public readonly purchasePlan!: pulumi.Output<types.outputs.PurchasePlanResponse | undefined>;
    /**
     * Contains the security related information for the resource.
     */
    public readonly securityProfile!: pulumi.Output<types.outputs.DiskSecurityProfileResponse | undefined>;
    /**
     * The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. This is an optional parameter for incremental snapshot and the default behavior is the SKU will be set to the same sku as the previous snapshot
     */
    public readonly sku!: pulumi.Output<types.outputs.SnapshotSkuResponse | undefined>;
    /**
     * List of supported capabilities for the image from which the source disk from the snapshot was originally created.
     */
    public readonly supportedCapabilities!: pulumi.Output<types.outputs.SupportedCapabilitiesResponse | undefined>;
    /**
     * Indicates the OS on a snapshot supports hibernation.
     */
    public readonly supportsHibernation!: pulumi.Output<boolean | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The time when the snapshot was created.
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
     * Create a Snapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnapshotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.creationData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'creationData'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["completionPercent"] = args ? args.completionPercent : undefined;
            resourceInputs["copyCompletionError"] = args ? args.copyCompletionError : undefined;
            resourceInputs["creationData"] = args ? args.creationData : undefined;
            resourceInputs["dataAccessAuthMode"] = args ? args.dataAccessAuthMode : undefined;
            resourceInputs["diskAccessId"] = args ? args.diskAccessId : undefined;
            resourceInputs["diskSizeGB"] = args ? args.diskSizeGB : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["encryptionSettingsCollection"] = args ? args.encryptionSettingsCollection : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["hyperVGeneration"] = args ? args.hyperVGeneration : undefined;
            resourceInputs["incremental"] = args ? args.incremental : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkAccessPolicy"] = args ? args.networkAccessPolicy : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["purchasePlan"] = args ? args.purchasePlan : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityProfile"] = args ? args.securityProfile : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["snapshotName"] = args ? args.snapshotName : undefined;
            resourceInputs["supportedCapabilities"] = args ? args.supportedCapabilities : undefined;
            resourceInputs["supportsHibernation"] = args ? args.supportsHibernation : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["diskSizeBytes"] = undefined /*out*/;
            resourceInputs["diskState"] = undefined /*out*/;
            resourceInputs["incrementalSnapshotFamilyId"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueId"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["completionPercent"] = undefined /*out*/;
            resourceInputs["copyCompletionError"] = undefined /*out*/;
            resourceInputs["creationData"] = undefined /*out*/;
            resourceInputs["dataAccessAuthMode"] = undefined /*out*/;
            resourceInputs["diskAccessId"] = undefined /*out*/;
            resourceInputs["diskSizeBytes"] = undefined /*out*/;
            resourceInputs["diskSizeGB"] = undefined /*out*/;
            resourceInputs["diskState"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["encryptionSettingsCollection"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["hyperVGeneration"] = undefined /*out*/;
            resourceInputs["incremental"] = undefined /*out*/;
            resourceInputs["incrementalSnapshotFamilyId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkAccessPolicy"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["purchasePlan"] = undefined /*out*/;
            resourceInputs["securityProfile"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["supportedCapabilities"] = undefined /*out*/;
            resourceInputs["supportsHibernation"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20160430preview:Snapshot" }, { type: "azure-native:compute/v20170330:Snapshot" }, { type: "azure-native:compute/v20180401:Snapshot" }, { type: "azure-native:compute/v20180601:Snapshot" }, { type: "azure-native:compute/v20180930:Snapshot" }, { type: "azure-native:compute/v20190301:Snapshot" }, { type: "azure-native:compute/v20190701:Snapshot" }, { type: "azure-native:compute/v20191101:Snapshot" }, { type: "azure-native:compute/v20200501:Snapshot" }, { type: "azure-native:compute/v20200630:Snapshot" }, { type: "azure-native:compute/v20200930:Snapshot" }, { type: "azure-native:compute/v20201201:Snapshot" }, { type: "azure-native:compute/v20210401:Snapshot" }, { type: "azure-native:compute/v20210801:Snapshot" }, { type: "azure-native:compute/v20211201:Snapshot" }, { type: "azure-native:compute/v20220302:Snapshot" }, { type: "azure-native:compute/v20220702:Snapshot" }, { type: "azure-native:compute/v20230102:Snapshot" }, { type: "azure-native:compute/v20230402:Snapshot" }, { type: "azure-native:compute/v20231002:Snapshot" }, { type: "azure-native:compute/v20240302:Snapshot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Snapshot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Snapshot resource.
 */
export interface SnapshotArgs {
    /**
     * Percentage complete for the background copy when a resource is created via the CopyStart operation.
     */
    completionPercent?: pulumi.Input<number>;
    /**
     * Indicates the error details if the background copy of a resource created via the CopyStart operation fails.
     */
    copyCompletionError?: pulumi.Input<types.inputs.CopyCompletionErrorArgs>;
    /**
     * Disk source information. CreationData information cannot be changed after the disk has been created.
     */
    creationData: pulumi.Input<types.inputs.CreationDataArgs>;
    /**
     * Additional authentication requirements when exporting or uploading to a disk or snapshot.
     */
    dataAccessAuthMode?: pulumi.Input<string | types.enums.DataAccessAuthMode>;
    /**
     * ARM id of the DiskAccess resource for using private endpoints on disks.
     */
    diskAccessId?: pulumi.Input<string>;
    /**
     * If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
     */
    diskSizeGB?: pulumi.Input<number>;
    /**
     * Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
     */
    encryption?: pulumi.Input<types.inputs.EncryptionArgs>;
    /**
     * Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
     */
    encryptionSettingsCollection?: pulumi.Input<types.inputs.EncryptionSettingsCollectionArgs>;
    /**
     * The extended location where the snapshot will be created. Extended location cannot be changed.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     */
    hyperVGeneration?: pulumi.Input<string | types.enums.HyperVGeneration>;
    /**
     * Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed.
     */
    incremental?: pulumi.Input<boolean>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Policy for accessing the disk via network.
     */
    networkAccessPolicy?: pulumi.Input<string | types.enums.NetworkAccessPolicy>;
    /**
     * The Operating System type.
     */
    osType?: pulumi.Input<types.enums.OperatingSystemTypes>;
    /**
     * Policy for controlling export on the disk.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * Purchase plan information for the image from which the source disk for the snapshot was originally created.
     */
    purchasePlan?: pulumi.Input<types.inputs.PurchasePlanArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Contains the security related information for the resource.
     */
    securityProfile?: pulumi.Input<types.inputs.DiskSecurityProfileArgs>;
    /**
     * The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. This is an optional parameter for incremental snapshot and the default behavior is the SKU will be set to the same sku as the previous snapshot
     */
    sku?: pulumi.Input<types.inputs.SnapshotSkuArgs>;
    /**
     * The name of the snapshot that is being created. The name can't be changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The max name length is 80 characters.
     */
    snapshotName?: pulumi.Input<string>;
    /**
     * List of supported capabilities for the image from which the source disk from the snapshot was originally created.
     */
    supportedCapabilities?: pulumi.Input<types.inputs.SupportedCapabilitiesArgs>;
    /**
     * Indicates the OS on a snapshot supports hibernation.
     */
    supportsHibernation?: pulumi.Input<boolean>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}