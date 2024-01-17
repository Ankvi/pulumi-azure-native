import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The volume container.
 * Azure REST API version: 2017-06-01. Prior API version in Azure Native 1.x: 2017-06-01.
 */
export class VolumeContainer extends pulumi.CustomResource {
    /**
     * Get an existing VolumeContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VolumeContainer {
        return new VolumeContainer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storsimple:VolumeContainer';

    /**
     * Returns true if the given object is an instance of VolumeContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VolumeContainer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VolumeContainer.__pulumiType;
    }

    /**
     * The bandwidth-rate set on the volume container.
     */
    public readonly bandWidthRateInMbps!: pulumi.Output<number | undefined>;
    /**
     * The ID of the bandwidth setting associated with the volume container.
     */
    public readonly bandwidthSettingId!: pulumi.Output<string | undefined>;
    /**
     * The key used to encrypt data in the volume container. It is required when property 'EncryptionStatus' is "Enabled".
     */
    public readonly encryptionKey!: pulumi.Output<types.outputs.AsymmetricEncryptedSecretResponse | undefined>;
    /**
     * The flag to denote whether encryption is enabled or not.
     */
    public /*out*/ readonly encryptionStatus!: pulumi.Output<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The name of the object.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The owner ship status of the volume container. Only when the status is "NotOwned", the delete operation on the volume container is permitted.
     */
    public /*out*/ readonly ownerShipStatus!: pulumi.Output<string>;
    /**
     * The path ID of storage account associated with the volume container.
     */
    public readonly storageAccountCredentialId!: pulumi.Output<string>;
    /**
     * The total cloud storage for the volume container.
     */
    public /*out*/ readonly totalCloudStorageUsageInBytes!: pulumi.Output<number>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The number of volumes in the volume Container.
     */
    public /*out*/ readonly volumeCount!: pulumi.Output<number>;

    /**
     * Create a VolumeContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeContainerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.managerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageAccountCredentialId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccountCredentialId'");
            }
            resourceInputs["bandWidthRateInMbps"] = args ? args.bandWidthRateInMbps : undefined;
            resourceInputs["bandwidthSettingId"] = args ? args.bandwidthSettingId : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["encryptionKey"] = args ? args.encryptionKey : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["managerName"] = args ? args.managerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccountCredentialId"] = args ? args.storageAccountCredentialId : undefined;
            resourceInputs["volumeContainerName"] = args ? args.volumeContainerName : undefined;
            resourceInputs["encryptionStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["ownerShipStatus"] = undefined /*out*/;
            resourceInputs["totalCloudStorageUsageInBytes"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeCount"] = undefined /*out*/;
        } else {
            resourceInputs["bandWidthRateInMbps"] = undefined /*out*/;
            resourceInputs["bandwidthSettingId"] = undefined /*out*/;
            resourceInputs["encryptionKey"] = undefined /*out*/;
            resourceInputs["encryptionStatus"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["ownerShipStatus"] = undefined /*out*/;
            resourceInputs["storageAccountCredentialId"] = undefined /*out*/;
            resourceInputs["totalCloudStorageUsageInBytes"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeCount"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storsimple/v20170601:VolumeContainer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VolumeContainer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VolumeContainer resource.
 */
export interface VolumeContainerArgs {
    /**
     * The bandwidth-rate set on the volume container.
     */
    bandWidthRateInMbps?: pulumi.Input<number>;
    /**
     * The ID of the bandwidth setting associated with the volume container.
     */
    bandwidthSettingId?: pulumi.Input<string>;
    /**
     * The device name
     */
    deviceName: pulumi.Input<string>;
    /**
     * The key used to encrypt data in the volume container. It is required when property 'EncryptionStatus' is "Enabled".
     */
    encryptionKey?: pulumi.Input<types.inputs.AsymmetricEncryptedSecretArgs>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    kind?: pulumi.Input<types.enums.Kind>;
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The path ID of storage account associated with the volume container.
     */
    storageAccountCredentialId: pulumi.Input<string>;
    /**
     * The name of the volume container.
     */
    volumeContainerName?: pulumi.Input<string>;
}