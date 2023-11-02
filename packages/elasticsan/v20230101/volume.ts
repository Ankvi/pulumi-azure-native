import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response for Volume request.
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
    public static readonly __pulumiType = 'azure-native:elasticsan/v20230101:Volume';

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
     * Parent resource information.
     */
    public readonly managedBy!: pulumi.Output<types.outputs.ManagedByInfoResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * State of the operation on the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Volume size.
     */
    public readonly sizeGiB!: pulumi.Output<number>;
    /**
     * Storage target information
     */
    public /*out*/ readonly storageTarget!: pulumi.Output<types.outputs.IscsiTargetInfoResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
            if ((!args || args.sizeGiB === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sizeGiB'");
            }
            if ((!args || args.volumeGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeGroupName'");
            }
            resourceInputs["creationData"] = args ? args.creationData : undefined;
            resourceInputs["elasticSanName"] = args ? args.elasticSanName : undefined;
            resourceInputs["managedBy"] = args ? args.managedBy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sizeGiB"] = args ? args.sizeGiB : undefined;
            resourceInputs["volumeGroupName"] = args ? args.volumeGroupName : undefined;
            resourceInputs["volumeName"] = args ? args.volumeName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["storageTarget"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeId"] = undefined /*out*/;
        } else {
            resourceInputs["creationData"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sizeGiB"] = undefined /*out*/;
            resourceInputs["storageTarget"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:elasticsan:Volume" }, { type: "azure-native:elasticsan/v20211120preview:Volume" }, { type: "azure-native:elasticsan/v20221201preview:Volume" }] };
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
     * Parent resource information.
     */
    managedBy?: pulumi.Input<types.inputs.ManagedByInfoArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Volume size.
     */
    sizeGiB: pulumi.Input<number>;
    /**
     * The name of the VolumeGroup.
     */
    volumeGroupName: pulumi.Input<string>;
    /**
     * The name of the Volume.
     */
    volumeName?: pulumi.Input<string>;
}