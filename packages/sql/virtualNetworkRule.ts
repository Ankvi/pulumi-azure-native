import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A virtual network rule.
 * Azure REST API version: 2021-11-01. Prior API version in Azure Native 1.x: 2020-11-01-preview.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview.
 */
export class VirtualNetworkRule extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetworkRule {
        return new VirtualNetworkRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:VirtualNetworkRule';

    /**
     * Returns true if the given object is an instance of VirtualNetworkRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetworkRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetworkRule.__pulumiType;
    }

    /**
     * Create firewall rule before the virtual network has vnet service endpoint enabled.
     */
    public readonly ignoreMissingVnetServiceEndpoint!: pulumi.Output<boolean | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Virtual Network Rule State
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The ARM resource id of the virtual network subnet.
     */
    public readonly virtualNetworkSubnetId!: pulumi.Output<string>;

    /**
     * Create a VirtualNetworkRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.virtualNetworkSubnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualNetworkSubnetId'");
            }
            resourceInputs["ignoreMissingVnetServiceEndpoint"] = args ? args.ignoreMissingVnetServiceEndpoint : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["virtualNetworkRuleName"] = args ? args.virtualNetworkRuleName : undefined;
            resourceInputs["virtualNetworkSubnetId"] = args ? args.virtualNetworkSubnetId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["ignoreMissingVnetServiceEndpoint"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkSubnetId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20150501preview:VirtualNetworkRule" }, { type: "azure-native:sql/v20200202preview:VirtualNetworkRule" }, { type: "azure-native:sql/v20200801preview:VirtualNetworkRule" }, { type: "azure-native:sql/v20201101preview:VirtualNetworkRule" }, { type: "azure-native:sql/v20210201preview:VirtualNetworkRule" }, { type: "azure-native:sql/v20210501preview:VirtualNetworkRule" }, { type: "azure-native:sql/v20210801preview:VirtualNetworkRule" }, { type: "azure-native:sql/v20211101:VirtualNetworkRule" }, { type: "azure-native:sql/v20211101preview:VirtualNetworkRule" }, { type: "azure-native:sql/v20220201preview:VirtualNetworkRule" }, { type: "azure-native:sql/v20220501preview:VirtualNetworkRule" }, { type: "azure-native:sql/v20220801preview:VirtualNetworkRule" }, { type: "azure-native:sql/v20221101preview:VirtualNetworkRule" }, { type: "azure-native:sql/v20230201preview:VirtualNetworkRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualNetworkRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualNetworkRule resource.
 */
export interface VirtualNetworkRuleArgs {
    /**
     * Create firewall rule before the virtual network has vnet service endpoint enabled.
     */
    ignoreMissingVnetServiceEndpoint?: pulumi.Input<boolean>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of the virtual network rule.
     */
    virtualNetworkRuleName?: pulumi.Input<string>;
    /**
     * The ARM resource id of the virtual network subnet.
     */
    virtualNetworkSubnetId: pulumi.Input<string>;
}
