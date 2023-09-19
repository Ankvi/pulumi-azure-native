import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Nat Gateway resource.
 */
export class NatGateway extends pulumi.CustomResource {
    /**
     * Get an existing NatGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NatGateway {
        return new NatGateway(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20190601:NatGateway';

    /**
     * Returns true if the given object is an instance of NatGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NatGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NatGateway.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The idle timeout of the nat gateway.
     */
    public readonly idleTimeoutInMinutes!: pulumi.Output<number | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the NatGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * An array of public ip addresses associated with the nat gateway resource.
     */
    public readonly publicIpAddresses!: pulumi.Output<types.outputs.SubResourceResponse[] | undefined>;
    /**
     * An array of public ip prefixes associated with the nat gateway resource.
     */
    public readonly publicIpPrefixes!: pulumi.Output<types.outputs.SubResourceResponse[] | undefined>;
    /**
     * The resource GUID property of the nat gateway resource.
     */
    public readonly resourceGuid!: pulumi.Output<string | undefined>;
    /**
     * The nat gateway SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.NatGatewaySkuResponse | undefined>;
    /**
     * An array of references to the subnets using this nat gateway resource.
     */
    public /*out*/ readonly subnets!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a NatGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NatGatewayArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["idleTimeoutInMinutes"] = args ? args.idleTimeoutInMinutes : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["natGatewayName"] = args ? args.natGatewayName : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["publicIpAddresses"] = args ? args.publicIpAddresses : undefined;
            resourceInputs["publicIpPrefixes"] = args ? args.publicIpPrefixes : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceGuid"] = args ? args.resourceGuid : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["subnets"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["idleTimeoutInMinutes"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIpAddresses"] = undefined /*out*/;
            resourceInputs["publicIpPrefixes"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["subnets"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:NatGateway" }, { type: "azure-native:network/v20190201:NatGateway" }, { type: "azure-native:network/v20190401:NatGateway" }, { type: "azure-native:network/v20190701:NatGateway" }, { type: "azure-native:network/v20190801:NatGateway" }, { type: "azure-native:network/v20190901:NatGateway" }, { type: "azure-native:network/v20191101:NatGateway" }, { type: "azure-native:network/v20191201:NatGateway" }, { type: "azure-native:network/v20200301:NatGateway" }, { type: "azure-native:network/v20200401:NatGateway" }, { type: "azure-native:network/v20200501:NatGateway" }, { type: "azure-native:network/v20200601:NatGateway" }, { type: "azure-native:network/v20200701:NatGateway" }, { type: "azure-native:network/v20200801:NatGateway" }, { type: "azure-native:network/v20201101:NatGateway" }, { type: "azure-native:network/v20210201:NatGateway" }, { type: "azure-native:network/v20210301:NatGateway" }, { type: "azure-native:network/v20210501:NatGateway" }, { type: "azure-native:network/v20210801:NatGateway" }, { type: "azure-native:network/v20220101:NatGateway" }, { type: "azure-native:network/v20220501:NatGateway" }, { type: "azure-native:network/v20220701:NatGateway" }, { type: "azure-native:network/v20220901:NatGateway" }, { type: "azure-native:network/v20221101:NatGateway" }, { type: "azure-native:network/v20230201:NatGateway" }, { type: "azure-native:network/v20230401:NatGateway" }, { type: "azure-native:network/v20230501:NatGateway" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NatGateway.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NatGateway resource.
 */
export interface NatGatewayArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The idle timeout of the nat gateway.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the nat gateway.
     */
    natGatewayName?: pulumi.Input<string>;
    /**
     * The provisioning state of the NatGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * An array of public ip addresses associated with the nat gateway resource.
     */
    publicIpAddresses?: pulumi.Input<pulumi.Input<types.inputs.SubResourceArgs>[]>;
    /**
     * An array of public ip prefixes associated with the nat gateway resource.
     */
    publicIpPrefixes?: pulumi.Input<pulumi.Input<types.inputs.SubResourceArgs>[]>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource GUID property of the nat gateway resource.
     */
    resourceGuid?: pulumi.Input<string>;
    /**
     * The nat gateway SKU.
     */
    sku?: pulumi.Input<types.inputs.NatGatewaySkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
