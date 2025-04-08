import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Volume group resource for create
 *
 * Uses Azure REST API version 2022-11-01. In version 1.x of the Azure Native provider, it used API version 2021-10-01.
 *
 * Other available API versions: 2021-10-01, 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01, 2024-09-01-preview.
 */
export class VolumeGroup extends pulumi.CustomResource {
    /**
     * Get an existing VolumeGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VolumeGroup {
        return new VolumeGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:netapp:VolumeGroup';

    /**
     * Returns true if the given object is an instance of VolumeGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VolumeGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VolumeGroup.__pulumiType;
    }

    /**
     * Volume group details
     */
    public readonly groupMetaData!: pulumi.Output<types.outputs.VolumeGroupMetaDataResponse | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure lifecycle management
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * List of volumes from group
     */
    public readonly volumes!: pulumi.Output<types.outputs.VolumeGroupVolumePropertiesResponse[] | undefined>;

    /**
     * Create a VolumeGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["groupMetaData"] = args ? args.groupMetaData : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["volumeGroupName"] = args ? args.volumeGroupName : undefined;
            resourceInputs["volumes"] = args ? args.volumes : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["groupMetaData"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumes"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:netapp/v20210801:VolumeGroup" }, { type: "azure-native:netapp/v20211001:VolumeGroup" }, { type: "azure-native:netapp/v20220101:VolumeGroup" }, { type: "azure-native:netapp/v20220301:VolumeGroup" }, { type: "azure-native:netapp/v20220501:VolumeGroup" }, { type: "azure-native:netapp/v20220901:VolumeGroup" }, { type: "azure-native:netapp/v20221101:VolumeGroup" }, { type: "azure-native:netapp/v20221101preview:VolumeGroup" }, { type: "azure-native:netapp/v20230501:VolumeGroup" }, { type: "azure-native:netapp/v20230501preview:VolumeGroup" }, { type: "azure-native:netapp/v20230701:VolumeGroup" }, { type: "azure-native:netapp/v20230701preview:VolumeGroup" }, { type: "azure-native:netapp/v20231101:VolumeGroup" }, { type: "azure-native:netapp/v20231101preview:VolumeGroup" }, { type: "azure-native:netapp/v20240101:VolumeGroup" }, { type: "azure-native:netapp/v20240301:VolumeGroup" }, { type: "azure-native:netapp/v20240301preview:VolumeGroup" }, { type: "azure-native:netapp/v20240501:VolumeGroup" }, { type: "azure-native:netapp/v20240501preview:VolumeGroup" }, { type: "azure-native:netapp/v20240701:VolumeGroup" }, { type: "azure-native:netapp/v20240701preview:VolumeGroup" }, { type: "azure-native:netapp/v20240901:VolumeGroup" }, { type: "azure-native:netapp/v20240901preview:VolumeGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VolumeGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VolumeGroup resource.
 */
export interface VolumeGroupArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * Volume group details
     */
    groupMetaData?: pulumi.Input<types.inputs.VolumeGroupMetaDataArgs>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the volumeGroup
     */
    volumeGroupName?: pulumi.Input<string>;
    /**
     * List of volumes from group
     */
    volumes?: pulumi.Input<pulumi.Input<types.inputs.VolumeGroupVolumePropertiesArgs>[]>;
}