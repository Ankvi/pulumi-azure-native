import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Peering is a logical representation of a set of connections to the Microsoft Cloud Edge at a location.
 *
 * Uses Azure REST API version 2022-10-01. In version 1.x of the Azure Native provider, it used API version 2021-01-01.
 */
export class Peering extends pulumi.CustomResource {
    /**
     * Get an existing Peering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Peering {
        return new Peering(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:peering:Peering';

    /**
     * Returns true if the given object is an instance of Peering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Peering {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Peering.__pulumiType;
    }

    /**
     * The properties that define a direct peering.
     */
    public readonly direct!: pulumi.Output<types.outputs.PeeringPropertiesDirectResponse | undefined>;
    /**
     * The properties that define an exchange peering.
     */
    public readonly exchange!: pulumi.Output<types.outputs.PeeringPropertiesExchangeResponse | undefined>;
    /**
     * The kind of the peering.
     */
    public readonly kind!: pulumi.Output<string>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The location of the peering.
     */
    public readonly peeringLocation!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The SKU that defines the tier and kind of the peering.
     */
    public readonly sku!: pulumi.Output<types.outputs.PeeringSkuResponse>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Peering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PeeringArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["direct"] = args ? args.direct : undefined;
            resourceInputs["exchange"] = args ? args.exchange : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["peeringLocation"] = args ? args.peeringLocation : undefined;
            resourceInputs["peeringName"] = args ? args.peeringName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["direct"] = undefined /*out*/;
            resourceInputs["exchange"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peeringLocation"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:peering/v20190801preview:Peering" }, { type: "azure-native:peering/v20190901preview:Peering" }, { type: "azure-native:peering/v20200101preview:Peering" }, { type: "azure-native:peering/v20200401:Peering" }, { type: "azure-native:peering/v20201001:Peering" }, { type: "azure-native:peering/v20210101:Peering" }, { type: "azure-native:peering/v20210601:Peering" }, { type: "azure-native:peering/v20220101:Peering" }, { type: "azure-native:peering/v20220601:Peering" }, { type: "azure-native:peering/v20221001:Peering" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Peering.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Peering resource.
 */
export interface PeeringArgs {
    /**
     * The properties that define a direct peering.
     */
    direct?: pulumi.Input<types.inputs.PeeringPropertiesDirectArgs>;
    /**
     * The properties that define an exchange peering.
     */
    exchange?: pulumi.Input<types.inputs.PeeringPropertiesExchangeArgs>;
    /**
     * The kind of the peering.
     */
    kind: pulumi.Input<string | types.enums.Kind>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The location of the peering.
     */
    peeringLocation?: pulumi.Input<string>;
    /**
     * The name of the peering.
     */
    peeringName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU that defines the tier and kind of the peering.
     */
    sku: pulumi.Input<types.inputs.PeeringSkuArgs>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}