import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A vSphere Distributed Resource Scheduler (DRS) placement policy
 *
 * Uses Azure REST API version 2022-05-01. In version 1.x of the Azure Native provider, it used API version 2021-12-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export class PlacementPolicy extends pulumi.CustomResource {
    /**
     * Get an existing PlacementPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PlacementPolicy {
        return new PlacementPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:avs:PlacementPolicy';

    /**
     * Returns true if the given object is an instance of PlacementPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PlacementPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PlacementPolicy.__pulumiType;
    }

    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * placement policy properties
     */
    public readonly properties!: pulumi.Output<types.outputs.VmHostPlacementPolicyPropertiesResponse | types.outputs.VmVmPlacementPolicyPropertiesResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PlacementPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PlacementPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["placementPolicyName"] = args ? args.placementPolicyName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:avs/v20211201:PlacementPolicy" }, { type: "azure-native:avs/v20220501:PlacementPolicy" }, { type: "azure-native:avs/v20230301:PlacementPolicy" }, { type: "azure-native:avs/v20230901:PlacementPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PlacementPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PlacementPolicy resource.
 */
export interface PlacementPolicyArgs {
    /**
     * Name of the cluster in the private cloud
     */
    clusterName: pulumi.Input<string>;
    /**
     * Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement policy
     */
    placementPolicyName?: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * placement policy properties
     */
    properties?: pulumi.Input<types.inputs.VmHostPlacementPolicyPropertiesArgs | types.inputs.VmVmPlacementPolicyPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}