import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * VpnGatewayNatRule Resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class NatRule extends pulumi.CustomResource {
    /**
     * Get an existing NatRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NatRule {
        return new NatRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:NatRule';

    /**
     * Returns true if the given object is an instance of NatRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NatRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NatRule.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * List of egress VpnSiteLinkConnections.
     */
    public /*out*/ readonly egressVpnSiteLinkConnections!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The private IP address external mapping for NAT.
     */
    public readonly externalMappings!: pulumi.Output<types.outputs.VpnNatRuleMappingResponse[] | undefined>;
    /**
     * List of ingress VpnSiteLinkConnections.
     */
    public /*out*/ readonly ingressVpnSiteLinkConnections!: pulumi.Output<types.outputs.SubResourceResponse[]>;
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
     * Create a NatRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NatRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.gatewayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gatewayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["externalMappings"] = args ? args.externalMappings : undefined;
            resourceInputs["gatewayName"] = args ? args.gatewayName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["internalMappings"] = args ? args.internalMappings : undefined;
            resourceInputs["ipConfigurationId"] = args ? args.ipConfigurationId : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["natRuleName"] = args ? args.natRuleName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["egressVpnSiteLinkConnections"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ingressVpnSiteLinkConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["egressVpnSiteLinkConnections"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["externalMappings"] = undefined /*out*/;
            resourceInputs["ingressVpnSiteLinkConnections"] = undefined /*out*/;
            resourceInputs["internalMappings"] = undefined /*out*/;
            resourceInputs["ipConfigurationId"] = undefined /*out*/;
            resourceInputs["mode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20200801:NatRule" }, { type: "azure-native:network/v20201101:NatRule" }, { type: "azure-native:network/v20210201:NatRule" }, { type: "azure-native:network/v20210301:NatRule" }, { type: "azure-native:network/v20210501:NatRule" }, { type: "azure-native:network/v20210801:NatRule" }, { type: "azure-native:network/v20220101:NatRule" }, { type: "azure-native:network/v20220501:NatRule" }, { type: "azure-native:network/v20220701:NatRule" }, { type: "azure-native:network/v20220901:NatRule" }, { type: "azure-native:network/v20221101:NatRule" }, { type: "azure-native:network/v20230201:NatRule" }, { type: "azure-native:network/v20230401:NatRule" }, { type: "azure-native:network/v20230501:NatRule" }, { type: "azure-native:network/v20230601:NatRule" }, { type: "azure-native:network/v20230901:NatRule" }, { type: "azure-native:network/v20231101:NatRule" }, { type: "azure-native:network/v20240101:NatRule" }, { type: "azure-native:network/v20240301:NatRule" }, { type: "azure-native:network/v20240501:NatRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NatRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NatRule resource.
 */
export interface NatRuleArgs {
    /**
     * The private IP address external mapping for NAT.
     */
    externalMappings?: pulumi.Input<pulumi.Input<types.inputs.VpnNatRuleMappingArgs>[]>;
    /**
     * The name of the gateway.
     */
    gatewayName: pulumi.Input<string>;
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
     * The resource group name of the VpnGateway.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The type of NAT rule for VPN NAT.
     */
    type?: pulumi.Input<string | types.enums.VpnNatRuleType>;
}