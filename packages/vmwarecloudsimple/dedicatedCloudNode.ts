import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Dedicated cloud node model
 *
 * Uses Azure REST API version 2019-04-01. In version 2.x of the Azure Native provider, it used API version 2019-04-01.
 */
export class DedicatedCloudNode extends pulumi.CustomResource {
    /**
     * Get an existing DedicatedCloudNode resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DedicatedCloudNode {
        return new DedicatedCloudNode(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:vmwarecloudsimple:DedicatedCloudNode';

    /**
     * Returns true if the given object is an instance of DedicatedCloudNode.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DedicatedCloudNode {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DedicatedCloudNode.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Azure region
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * {dedicatedCloudNodeName}
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Dedicated Cloud Nodes properties
     */
    public /*out*/ readonly properties!: pulumi.Output<types.outputs.DedicatedCloudNodePropertiesResponse>;
    /**
     * Dedicated Cloud Nodes SKU
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Dedicated Cloud Nodes tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * {resourceProviderNamespace}/{resourceType}
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DedicatedCloudNode resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DedicatedCloudNodeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.availabilityZoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'availabilityZoneId'");
            }
            if ((!args || args.id === undefined) && !opts.urn) {
                throw new Error("Missing required property 'id'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.nodesCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nodesCount'");
            }
            if ((!args || args.placementGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'placementGroupId'");
            }
            if ((!args || args.purchaseId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'purchaseId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["availabilityZoneId"] = args ? args.availabilityZoneId : undefined;
            resourceInputs["dedicatedCloudNodeName"] = args ? args.dedicatedCloudNodeName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nodesCount"] = args ? args.nodesCount : undefined;
            resourceInputs["placementGroupId"] = args ? args.placementGroupId : undefined;
            resourceInputs["purchaseId"] = args ? args.purchaseId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:vmwarecloudsimple/v20190401:DedicatedCloudNode" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DedicatedCloudNode.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DedicatedCloudNode resource.
 */
export interface DedicatedCloudNodeArgs {
    /**
     * Availability Zone id, e.g. "az1"
     */
    availabilityZoneId: pulumi.Input<string>;
    /**
     * dedicated cloud node name
     */
    dedicatedCloudNodeName?: pulumi.Input<string>;
    /**
     * SKU's id
     */
    id: pulumi.Input<string>;
    /**
     * Azure region
     */
    location?: pulumi.Input<string>;
    /**
     * SKU's name
     */
    name: pulumi.Input<string>;
    /**
     * count of nodes to create
     */
    nodesCount: pulumi.Input<number>;
    /**
     * Placement Group id, e.g. "n1"
     */
    placementGroupId: pulumi.Input<string>;
    /**
     * purchase id
     */
    purchaseId: pulumi.Input<string>;
    /**
     * The name of the resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Dedicated Cloud Nodes SKU
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Dedicated Cloud Nodes tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}