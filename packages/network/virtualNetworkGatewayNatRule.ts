import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * VirtualNetworkGatewayNatRule Resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2021-03-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export class VirtualNetworkGatewayNatRule extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkGatewayNatRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetworkGatewayNatRule {
        return new VirtualNetworkGatewayNatRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VirtualNetworkGatewayNatRule';

    /**
     * Returns true if the given object is an instance of VirtualNetworkGatewayNatRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetworkGatewayNatRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetworkGatewayNatRule.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The private IP address external mapping for NAT.
     */
    public readonly externalMappings!: pulumi.Output<types.outputs.VpnNatRuleMappingResponse[] | undefined>;
    /**
     * The private IP address internal mapping for NAT.
     */
    public readonly internalMappings!: pulumi.Output<types.outputs.VpnNatRuleMappingResponse[] | undefined>;
    /**
     * The IP Configuration ID this NAT rule applies to.
     */
    public readonly ipConfigurationId!: pulumi.Output<string | undefined>;
    /**
     * The Source NAT direction of a VPN NAT.
     */
    public readonly mode!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the NAT Rule resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a VirtualNetworkGatewayNatRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkGatewayNatRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualNetworkGatewayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualNetworkGatewayName'");
            }
            resourceInputs["externalMappings"] = args ? args.externalMappings : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["internalMappings"] = args ? args.internalMappings : undefined;
            resourceInputs["ipConfigurationId"] = args ? args.ipConfigurationId : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["natRuleName"] = args ? args.natRuleName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["virtualNetworkGatewayName"] = args ? args.virtualNetworkGatewayName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["externalMappings"] = undefined /*out*/;
            resourceInputs["internalMappings"] = undefined /*out*/;
            resourceInputs["ipConfigurationId"] = undefined /*out*/;
            resourceInputs["mode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20210201:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20210301:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20210501:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20210801:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20220101:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20220501:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20220701:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20220901:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20221101:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20230201:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20230401:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20230501:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20230601:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20230901:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20231101:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20240101:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20240301:VirtualNetworkGatewayNatRule" }, { type: "azure-native:network/v20240501:VirtualNetworkGatewayNatRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualNetworkGatewayNatRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualNetworkGatewayNatRule resource.
 */
export interface VirtualNetworkGatewayNatRuleArgs {
    /**
     * The private IP address external mapping for NAT.
     */
    externalMappings?: pulumi.Input<pulumi.Input<types.inputs.VpnNatRuleMappingArgs>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The private IP address internal mapping for NAT.
     */
    internalMappings?: pulumi.Input<pulumi.Input<types.inputs.VpnNatRuleMappingArgs>[]>;
    /**
     * The IP Configuration ID this NAT rule applies to.
     */
    ipConfigurationId?: pulumi.Input<string>;
    /**
     * The Source NAT direction of a VPN NAT.
     */
    mode?: pulumi.Input<string | types.enums.VpnNatRuleMode>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the nat rule.
     */
    natRuleName?: pulumi.Input<string>;
    /**
     * The resource group name of the Virtual Network Gateway.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The type of NAT rule for VPN NAT.
     */
    type?: pulumi.Input<string | types.enums.VpnNatRuleType>;
    /**
     * The name of the gateway.
     */
    virtualNetworkGatewayName: pulumi.Input<string>;
}