import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A virtual network.
 *
 * Uses Azure REST API version 2018-09-15. In version 1.x of the Azure Native provider, it used API version 2018-09-15.
 */
export class VirtualNetwork extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetwork {
        return new VirtualNetwork(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devtestlab:VirtualNetwork';

    /**
     * Returns true if the given object is an instance of VirtualNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetwork.__pulumiType;
    }

    /**
     * The allowed subnets of the virtual network.
     */
    public readonly allowedSubnets!: pulumi.Output<types.outputs.SubnetResponse[] | undefined>;
    /**
     * The creation date of the virtual network.
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * The description of the virtual network.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The Microsoft.Network resource identifier of the virtual network.
     */
    public readonly externalProviderResourceId!: pulumi.Output<string | undefined>;
    /**
     * The external subnet properties.
     */
    public /*out*/ readonly externalSubnets!: pulumi.Output<types.outputs.ExternalSubnetResponse[]>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The subnet overrides of the virtual network.
     */
    public readonly subnetOverrides!: pulumi.Output<types.outputs.SubnetOverrideResponse[] | undefined>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    public /*out*/ readonly uniqueIdentifier!: pulumi.Output<string>;

    /**
     * Create a VirtualNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.labName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["allowedSubnets"] = args ? args.allowedSubnets : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["externalProviderResourceId"] = args ? args.externalProviderResourceId : undefined;
            resourceInputs["labName"] = args ? args.labName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["subnetOverrides"] = args ? args.subnetOverrides : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["externalSubnets"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
        } else {
            resourceInputs["allowedSubnets"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["externalProviderResourceId"] = undefined /*out*/;
            resourceInputs["externalSubnets"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["subnetOverrides"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devtestlab/v20150521preview:VirtualNetwork" }, { type: "azure-native:devtestlab/v20160515:VirtualNetwork" }, { type: "azure-native:devtestlab/v20180915:VirtualNetwork" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualNetwork.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualNetwork resource.
 */
export interface VirtualNetworkArgs {
    /**
     * The allowed subnets of the virtual network.
     */
    allowedSubnets?: pulumi.Input<pulumi.Input<types.inputs.SubnetArgs>[]>;
    /**
     * The description of the virtual network.
     */
    description?: pulumi.Input<string>;
    /**
     * The Microsoft.Network resource identifier of the virtual network.
     */
    externalProviderResourceId?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the virtual network.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The subnet overrides of the virtual network.
     */
    subnetOverrides?: pulumi.Input<pulumi.Input<types.inputs.SubnetOverrideArgs>[]>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}