import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response for Volume Snapshot request.
 * Azure REST API version: 2023-01-01.
 *
 * Other available API versions: 2024-05-01.
 */
export class VolumeSnapshot extends pulumi.CustomResource {
    /**
     * Get an existing VolumeSnapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VolumeSnapshot {
        return new VolumeSnapshot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:elasticsan:VolumeSnapshot';

    /**
     * Returns true if the given object is an instance of VolumeSnapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VolumeSnapshot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VolumeSnapshot.__pulumiType;
    }

    /**
     * Data used when creating a volume snapshot.
     */
    public readonly creationData!: pulumi.Output<types.outputs.SnapshotCreationDataResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * State of the operation on the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Size of Source Volume
     */
    public /*out*/ readonly sourceVolumeSizeGiB!: pulumi.Output<number>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Source Volume Name of a snapshot
     */
    public /*out*/ readonly volumeName!: pulumi.Output<string>;

    /**
     * Create a VolumeSnapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeSnapshotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.creationData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'creationData'");
            }
            if ((!args || args.elasticSanName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'elasticSanName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.volumeGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeGroupName'");
            }
            resourceInputs["creationData"] = args ? args.creationData : undefined;
            resourceInputs["elasticSanName"] = args ? args.elasticSanName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["snapshotName"] = args ? args.snapshotName : undefined;
            resourceInputs["volumeGroupName"] = args ? args.volumeGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceVolumeSizeGiB"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeName"] = undefined /*out*/;
        } else {
            resourceInputs["creationData"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceVolumeSizeGiB"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:elasticsan/v20230101:VolumeSnapshot" }, { type: "azure-native:elasticsan/v20240501:VolumeSnapshot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VolumeSnapshot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VolumeSnapshot resource.
 */
export interface VolumeSnapshotArgs {
    /**
     * Data used when creating a volume snapshot.
     */
    creationData: pulumi.Input<types.inputs.SnapshotCreationDataArgs>;
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the volume snapshot within the given volume group.
     */
    snapshotName?: pulumi.Input<string>;
    /**
     * The name of the VolumeGroup.
     */
    volumeGroupName: pulumi.Input<string>;
}