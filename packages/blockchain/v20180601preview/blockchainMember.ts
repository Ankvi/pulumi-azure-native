import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Payload of the blockchain member which is exposed in the request/response of the resource provider.
 */
export class BlockchainMember extends pulumi.CustomResource {
    /**
     * Get an existing BlockchainMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BlockchainMember {
        return new BlockchainMember(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:blockchain/v20180601preview:BlockchainMember';

    /**
     * Returns true if the given object is an instance of BlockchainMember.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BlockchainMember {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BlockchainMember.__pulumiType;
    }

    /**
     * Gets or sets the consortium for the blockchain member.
     */
    public readonly consortium!: pulumi.Output<string | undefined>;
    /**
     * Gets the managed consortium management account address.
     */
    public /*out*/ readonly consortiumManagementAccountAddress!: pulumi.Output<string>;
    /**
     * Sets the managed consortium management account password.
     */
    public readonly consortiumManagementAccountPassword!: pulumi.Output<string | undefined>;
    /**
     * Gets the display name of the member in the consortium.
     */
    public readonly consortiumMemberDisplayName!: pulumi.Output<string | undefined>;
    /**
     * Gets the role of the member in the consortium.
     */
    public readonly consortiumRole!: pulumi.Output<string | undefined>;
    /**
     * Gets the dns endpoint of the blockchain member.
     */
    public /*out*/ readonly dns!: pulumi.Output<string>;
    /**
     * Gets or sets firewall rules
     */
    public readonly firewallRules!: pulumi.Output<types.outputs.FirewallRuleResponse[] | undefined>;
    /**
     * The GEO location of the blockchain service.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Sets the basic auth password of the blockchain member.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the blockchain protocol.
     */
    public readonly protocol!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the blockchain member provision state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Gets the public key of the blockchain member (default transaction node).
     */
    public /*out*/ readonly publicKey!: pulumi.Output<string>;
    /**
     * Gets the Ethereum root contract address of the blockchain.
     */
    public /*out*/ readonly rootContractAddress!: pulumi.Output<string>;
    /**
     * Gets or sets the blockchain member Sku.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Tags of the service which is a list of key value pairs that describes the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the service - e.g. "Microsoft.Blockchain"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets the auth user name of the blockchain member.
     */
    public /*out*/ readonly userName!: pulumi.Output<string>;
    /**
     * Gets or sets the blockchain validator nodes Sku.
     */
    public readonly validatorNodesSku!: pulumi.Output<types.outputs.BlockchainMemberNodesSkuResponse | undefined>;

    /**
     * Create a BlockchainMember resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlockchainMemberArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["blockchainMemberName"] = args ? args.blockchainMemberName : undefined;
            resourceInputs["consortium"] = args ? args.consortium : undefined;
            resourceInputs["consortiumManagementAccountPassword"] = args ? args.consortiumManagementAccountPassword : undefined;
            resourceInputs["consortiumMemberDisplayName"] = args ? args.consortiumMemberDisplayName : undefined;
            resourceInputs["consortiumRole"] = args ? args.consortiumRole : undefined;
            resourceInputs["firewallRules"] = args ? args.firewallRules : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["validatorNodesSku"] = args ? args.validatorNodesSku : undefined;
            resourceInputs["consortiumManagementAccountAddress"] = undefined /*out*/;
            resourceInputs["dns"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicKey"] = undefined /*out*/;
            resourceInputs["rootContractAddress"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        } else {
            resourceInputs["consortium"] = undefined /*out*/;
            resourceInputs["consortiumManagementAccountAddress"] = undefined /*out*/;
            resourceInputs["consortiumManagementAccountPassword"] = undefined /*out*/;
            resourceInputs["consortiumMemberDisplayName"] = undefined /*out*/;
            resourceInputs["consortiumRole"] = undefined /*out*/;
            resourceInputs["dns"] = undefined /*out*/;
            resourceInputs["firewallRules"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["password"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicKey"] = undefined /*out*/;
            resourceInputs["rootContractAddress"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
            resourceInputs["validatorNodesSku"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:blockchain:BlockchainMember" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BlockchainMember.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BlockchainMember resource.
 */
export interface BlockchainMemberArgs {
    /**
     * Blockchain member name.
     */
    blockchainMemberName?: pulumi.Input<string>;
    /**
     * Gets or sets the consortium for the blockchain member.
     */
    consortium?: pulumi.Input<string>;
    /**
     * Sets the managed consortium management account password.
     */
    consortiumManagementAccountPassword?: pulumi.Input<string>;
    /**
     * Gets the display name of the member in the consortium.
     */
    consortiumMemberDisplayName?: pulumi.Input<string>;
    /**
     * Gets the role of the member in the consortium.
     */
    consortiumRole?: pulumi.Input<string>;
    /**
     * Gets or sets firewall rules
     */
    firewallRules?: pulumi.Input<pulumi.Input<types.inputs.FirewallRuleArgs>[]>;
    /**
     * The GEO location of the blockchain service.
     */
    location?: pulumi.Input<string>;
    /**
     * Sets the basic auth password of the blockchain member.
     */
    password?: pulumi.Input<string>;
    /**
     * Gets or sets the blockchain protocol.
     */
    protocol?: pulumi.Input<string | types.enums.BlockchainProtocol>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the blockchain member Sku.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Tags of the service which is a list of key value pairs that describes the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the blockchain validator nodes Sku.
     */
    validatorNodesSku?: pulumi.Input<types.inputs.BlockchainMemberNodesSkuArgs>;
}
