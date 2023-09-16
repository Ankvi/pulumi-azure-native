import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * An addon resource
 */
export class Addon extends pulumi.CustomResource {
    /**
     * Get an existing Addon resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Addon {
        return new Addon(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:avs/v20230301:Addon';

    /**
     * Returns true if the given object is an instance of Addon.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Addon {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Addon.__pulumiType;
    }

    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The properties of an addon resource
     */
    public readonly properties!: pulumi.Output<types.outputs.avs.v20230301.AddonArcPropertiesResponse | types.outputs.avs.v20230301.AddonHcxPropertiesResponse | types.outputs.avs.v20230301.AddonSrmPropertiesResponse | types.outputs.avs.v20230301.AddonVrPropertiesResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Addon resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AddonArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["addonName"] = args ? args.addonName : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs:Addon" }, { type: "azure-native:avs/v20200717preview:Addon" }, { type: "azure-native:avs/v20210101preview:Addon" }, { type: "azure-native:avs/v20210601:Addon" }, { type: "azure-native:avs/v20211201:Addon" }, { type: "azure-native:avs/v20220501:Addon" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Addon.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Addon resource.
 */
export interface AddonArgs {
    /**
     * Name of the addon for the private cloud
     */
    addonName?: pulumi.Input<string>;
    /**
     * The name of the private cloud.
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The properties of an addon resource
     */
    properties?: pulumi.Input<types.inputs.avs.v20230301.AddonArcPropertiesArgs | types.inputs.avs.v20230301.AddonHcxPropertiesArgs | types.inputs.avs.v20230301.AddonSrmPropertiesArgs | types.inputs.avs.v20230301.AddonVrPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
