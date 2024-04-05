import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The customer's prefix that is registered by the peering service provider.
 */
export class RegisteredPrefix extends pulumi.CustomResource {
    /**
     * Get an existing RegisteredPrefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegisteredPrefix {
        return new RegisteredPrefix(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:peering/v20221001:RegisteredPrefix';

    /**
     * Returns true if the given object is an instance of RegisteredPrefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RegisteredPrefix {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RegisteredPrefix.__pulumiType;
    }

    /**
     * The error message associated with the validation state, if any.
     */
    public /*out*/ readonly errorMessage!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The peering service prefix key that is to be shared with the customer.
     */
    public /*out*/ readonly peeringServicePrefixKey!: pulumi.Output<string>;
    /**
     * The customer's prefix from which traffic originates.
     */
    public readonly prefix!: pulumi.Output<string | undefined>;
    /**
     * The prefix validation state.
     */
    public /*out*/ readonly prefixValidationState!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RegisteredPrefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegisteredPrefixArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.peeringName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'peeringName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["peeringName"] = args ? args.peeringName : undefined;
            resourceInputs["prefix"] = args ? args.prefix : undefined;
            resourceInputs["registeredPrefixName"] = args ? args.registeredPrefixName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peeringServicePrefixKey"] = undefined /*out*/;
            resourceInputs["prefixValidationState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peeringServicePrefixKey"] = undefined /*out*/;
            resourceInputs["prefix"] = undefined /*out*/;
            resourceInputs["prefixValidationState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:peering:RegisteredPrefix" }, { type: "azure-native:peering/v20200101preview:RegisteredPrefix" }, { type: "azure-native:peering/v20200401:RegisteredPrefix" }, { type: "azure-native:peering/v20201001:RegisteredPrefix" }, { type: "azure-native:peering/v20210101:RegisteredPrefix" }, { type: "azure-native:peering/v20210601:RegisteredPrefix" }, { type: "azure-native:peering/v20220101:RegisteredPrefix" }, { type: "azure-native:peering/v20220601:RegisteredPrefix" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RegisteredPrefix.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RegisteredPrefix resource.
 */
export interface RegisteredPrefixArgs {
    /**
     * The name of the peering.
     */
    peeringName: pulumi.Input<string>;
    /**
     * The customer's prefix from which traffic originates.
     */
    prefix?: pulumi.Input<string>;
    /**
     * The name of the registered prefix.
     */
    registeredPrefixName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}