import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response for Volume request.
 *
 * Uses Azure REST API version 2021-11-20-preview. In version 1.x of the Azure Native provider, it used API version 2021-11-20-preview.
 *
 * Other available API versions: 2022-12-01-preview, 2023-01-01, 2024-05-01, 2024-06-01-preview.
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
    public static readonly __pulumiType = 'azure-native:elasticsan:Volume';

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
     * State of the operation on the resource.
     */
    public readonly creationData!: pulumi.Output<types.outputs.SourceCreationDataResponse | undefined>;
    /**
     * Azure resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Volume size.
     */
    public readonly sizeGiB!: pulumi.Output<number | undefined>;
    /**
     * Storage target information
     */
    public /*out*/ readonly storageTarget!: pulumi.Output<types.outputs.IscsiTargetInfoResponse>;
    /**
     * Resource metadata required by ARM RPC
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Azure resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Unique Id of the volume in GUID format
     */
    public /*out*/ readonly volumeId!: pulumi.Output<string>;

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
            resourceInputs["sizeGiB"] = args ? args.sizeGiB : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["volumeGroupName"] = args ? args.volumeGroupName : undefined;
            resourceInputs["volumeName"] = args ? args.volumeName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["storageTarget"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeId"] = undefined /*out*/;
        } else {
            resourceInputs["creationData"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sizeGiB"] = undefined /*out*/;
            resourceInputs["storageTarget"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:elasticsan/v20211120preview:Volume" }, { type: "azure-native:elasticsan/v20221201preview:Volume" }, { type: "azure-native:elasticsan/v20230101:Volume" }, { type: "azure-native:elasticsan/v20240501:Volume" }, { type: "azure-native:elasticsan/v20240601preview:Volume" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Volume.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Volume resource.
 */
export interface VolumeArgs {
    /**
     * State of the operation on the resource.
     */
    creationData?: pulumi.Input<types.inputs.SourceCreationDataArgs>;
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Volume size.
     */
    sizeGiB?: pulumi.Input<number>;
    /**
     * Azure resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the VolumeGroup.
     */
    volumeGroupName: pulumi.Input<string>;
    /**
     * The name of the Volume.
     */
    volumeName?: pulumi.Input<string>;
}