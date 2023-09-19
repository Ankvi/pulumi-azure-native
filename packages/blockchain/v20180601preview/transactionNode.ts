import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Payload of the transaction node which is the request/response of the resource provider.
 */
export class TransactionNode extends pulumi.CustomResource {
    /**
     * Get an existing TransactionNode resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TransactionNode {
        return new TransactionNode(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:blockchain/v20180601preview:TransactionNode';

    /**
     * Returns true if the given object is an instance of TransactionNode.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TransactionNode {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TransactionNode.__pulumiType;
    }

    /**
     * Gets or sets the transaction node dns endpoint.
     */
    public /*out*/ readonly dns!: pulumi.Output<string>;
    /**
     * Gets or sets the firewall rules.
     */
    public readonly firewallRules!: pulumi.Output<types.outputs.FirewallRuleResponse[] | undefined>;
    /**
     * Gets or sets the transaction node location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Sets the transaction node dns endpoint basic auth password.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the blockchain member provision state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Gets or sets the transaction node public key.
     */
    public /*out*/ readonly publicKey!: pulumi.Output<string>;
    /**
     * The type of the service - e.g. "Microsoft.Blockchain"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets or sets the transaction node dns endpoint basic auth user name.
     */
    public /*out*/ readonly userName!: pulumi.Output<string>;

    /**
     * Create a TransactionNode resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TransactionNodeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.blockchainMemberName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'blockchainMemberName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["blockchainMemberName"] = args ? args.blockchainMemberName : undefined;
            resourceInputs["firewallRules"] = args ? args.firewallRules : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["transactionNodeName"] = args ? args.transactionNodeName : undefined;
            resourceInputs["dns"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicKey"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        } else {
            resourceInputs["dns"] = undefined /*out*/;
            resourceInputs["firewallRules"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["password"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicKey"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:blockchain:TransactionNode" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TransactionNode.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TransactionNode resource.
 */
export interface TransactionNodeArgs {
    /**
     * Blockchain member name.
     */
    blockchainMemberName: pulumi.Input<string>;
    /**
     * Gets or sets the firewall rules.
     */
    firewallRules?: pulumi.Input<pulumi.Input<types.inputs.FirewallRuleArgs>[]>;
    /**
     * Gets or sets the transaction node location.
     */
    location?: pulumi.Input<string>;
    /**
     * Sets the transaction node dns endpoint basic auth password.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Transaction node name.
     */
    transactionNodeName?: pulumi.Input<string>;
}
