import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The customer's ASN that is registered by the peering service provider.
 */
export class RegisteredAsn extends pulumi.CustomResource {
    /**
     * Get an existing RegisteredAsn resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegisteredAsn {
        return new RegisteredAsn(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:peering/v20221001:RegisteredAsn';

    /**
     * Returns true if the given object is an instance of RegisteredAsn.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RegisteredAsn {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RegisteredAsn.__pulumiType;
    }

    /**
     * The customer's ASN from which traffic originates.
     */
    public readonly asn!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The peering service prefix key that is to be shared with the customer.
     */
    public /*out*/ readonly peeringServicePrefixKey!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RegisteredAsn resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegisteredAsnArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.peeringName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'peeringName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["asn"] = args ? args.asn : undefined;
            resourceInputs["peeringName"] = args ? args.peeringName : undefined;
            resourceInputs["registeredAsnName"] = args ? args.registeredAsnName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peeringServicePrefixKey"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["asn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peeringServicePrefixKey"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:peering:RegisteredAsn" }, { type: "azure-native:peering/v20200101preview:RegisteredAsn" }, { type: "azure-native:peering/v20200401:RegisteredAsn" }, { type: "azure-native:peering/v20201001:RegisteredAsn" }, { type: "azure-native:peering/v20210101:RegisteredAsn" }, { type: "azure-native:peering/v20210601:RegisteredAsn" }, { type: "azure-native:peering/v20220101:RegisteredAsn" }, { type: "azure-native:peering/v20220601:RegisteredAsn" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RegisteredAsn.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RegisteredAsn resource.
 */
export interface RegisteredAsnArgs {
    /**
     * The customer's ASN from which traffic originates.
     */
    asn?: pulumi.Input<number>;
    /**
     * The name of the peering.
     */
    peeringName: pulumi.Input<string>;
    /**
     * The name of the ASN.
     */
    registeredAsnName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
