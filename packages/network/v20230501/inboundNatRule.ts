import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Inbound NAT rule of the load balancer.
 */
export class InboundNatRule extends pulumi.CustomResource {
    /**
     * Get an existing InboundNatRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): InboundNatRule {
        return new InboundNatRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230501:InboundNatRule';

    /**
     * Returns true if the given object is an instance of InboundNatRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InboundNatRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InboundNatRule.__pulumiType;
    }

    /**
     * A reference to backendAddressPool resource.
     */
    public readonly backendAddressPool!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
     */
    public /*out*/ readonly backendIPConfiguration!: pulumi.Output<types.outputs.NetworkInterfaceIPConfigurationResponse>;
    /**
     * The port used for the internal endpoint. Acceptable values range from 1 to 65535.
     */
    public readonly backendPort!: pulumi.Output<number | undefined>;
    /**
     * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
     */
    public readonly enableFloatingIP!: pulumi.Output<boolean | undefined>;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    public readonly enableTcpReset!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * A reference to frontend IP addresses.
     */
    public readonly frontendIPConfiguration!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
     */
    public readonly frontendPort!: pulumi.Output<number | undefined>;
    /**
     * The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
     */
    public readonly frontendPortRangeEnd!: pulumi.Output<number | undefined>;
    /**
     * The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
     */
    public readonly frontendPortRangeStart!: pulumi.Output<number | undefined>;
    /**
     * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
     */
    public readonly idleTimeoutInMinutes!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The reference to the transport protocol used by the load balancing rule.
     */
    public readonly protocol!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the inbound NAT rule resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a InboundNatRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InboundNatRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.loadBalancerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loadBalancerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["backendAddressPool"] = args ? args.backendAddressPool : undefined;
            resourceInputs["backendPort"] = args ? args.backendPort : undefined;
            resourceInputs["enableFloatingIP"] = args ? args.enableFloatingIP : undefined;
            resourceInputs["enableTcpReset"] = args ? args.enableTcpReset : undefined;
            resourceInputs["frontendIPConfiguration"] = args ? args.frontendIPConfiguration : undefined;
            resourceInputs["frontendPort"] = args ? args.frontendPort : undefined;
            resourceInputs["frontendPortRangeEnd"] = args ? args.frontendPortRangeEnd : undefined;
            resourceInputs["frontendPortRangeStart"] = args ? args.frontendPortRangeStart : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["idleTimeoutInMinutes"] = args ? args.idleTimeoutInMinutes : undefined;
            resourceInputs["inboundNatRuleName"] = args ? args.inboundNatRuleName : undefined;
            resourceInputs["loadBalancerName"] = args ? args.loadBalancerName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["backendIPConfiguration"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["backendAddressPool"] = undefined /*out*/;
            resourceInputs["backendIPConfiguration"] = undefined /*out*/;
            resourceInputs["backendPort"] = undefined /*out*/;
            resourceInputs["enableFloatingIP"] = undefined /*out*/;
            resourceInputs["enableTcpReset"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["frontendIPConfiguration"] = undefined /*out*/;
            resourceInputs["frontendPort"] = undefined /*out*/;
            resourceInputs["frontendPortRangeEnd"] = undefined /*out*/;
            resourceInputs["frontendPortRangeStart"] = undefined /*out*/;
            resourceInputs["idleTimeoutInMinutes"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:InboundNatRule" }, { type: "azure-native:network/v20170601:InboundNatRule" }, { type: "azure-native:network/v20170801:InboundNatRule" }, { type: "azure-native:network/v20170901:InboundNatRule" }, { type: "azure-native:network/v20171001:InboundNatRule" }, { type: "azure-native:network/v20171101:InboundNatRule" }, { type: "azure-native:network/v20180101:InboundNatRule" }, { type: "azure-native:network/v20180201:InboundNatRule" }, { type: "azure-native:network/v20180401:InboundNatRule" }, { type: "azure-native:network/v20180601:InboundNatRule" }, { type: "azure-native:network/v20180701:InboundNatRule" }, { type: "azure-native:network/v20180801:InboundNatRule" }, { type: "azure-native:network/v20181001:InboundNatRule" }, { type: "azure-native:network/v20181101:InboundNatRule" }, { type: "azure-native:network/v20181201:InboundNatRule" }, { type: "azure-native:network/v20190201:InboundNatRule" }, { type: "azure-native:network/v20190401:InboundNatRule" }, { type: "azure-native:network/v20190601:InboundNatRule" }, { type: "azure-native:network/v20190701:InboundNatRule" }, { type: "azure-native:network/v20190801:InboundNatRule" }, { type: "azure-native:network/v20190901:InboundNatRule" }, { type: "azure-native:network/v20191101:InboundNatRule" }, { type: "azure-native:network/v20191201:InboundNatRule" }, { type: "azure-native:network/v20200301:InboundNatRule" }, { type: "azure-native:network/v20200401:InboundNatRule" }, { type: "azure-native:network/v20200501:InboundNatRule" }, { type: "azure-native:network/v20200601:InboundNatRule" }, { type: "azure-native:network/v20200701:InboundNatRule" }, { type: "azure-native:network/v20200801:InboundNatRule" }, { type: "azure-native:network/v20201101:InboundNatRule" }, { type: "azure-native:network/v20210201:InboundNatRule" }, { type: "azure-native:network/v20210301:InboundNatRule" }, { type: "azure-native:network/v20210501:InboundNatRule" }, { type: "azure-native:network/v20210801:InboundNatRule" }, { type: "azure-native:network/v20220101:InboundNatRule" }, { type: "azure-native:network/v20220501:InboundNatRule" }, { type: "azure-native:network/v20220701:InboundNatRule" }, { type: "azure-native:network/v20220901:InboundNatRule" }, { type: "azure-native:network/v20221101:InboundNatRule" }, { type: "azure-native:network/v20230201:InboundNatRule" }, { type: "azure-native:network/v20230401:InboundNatRule" }, { type: "azure-native:network/v20230601:InboundNatRule" }, { type: "azure-native:network/v20230901:InboundNatRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(InboundNatRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a InboundNatRule resource.
 */
export interface InboundNatRuleArgs {
    /**
     * A reference to backendAddressPool resource.
     */
    backendAddressPool?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The port used for the internal endpoint. Acceptable values range from 1 to 65535.
     */
    backendPort?: pulumi.Input<number>;
    /**
     * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
     */
    enableFloatingIP?: pulumi.Input<boolean>;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    enableTcpReset?: pulumi.Input<boolean>;
    /**
     * A reference to frontend IP addresses.
     */
    frontendIPConfiguration?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
     */
    frontendPort?: pulumi.Input<number>;
    /**
     * The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
     */
    frontendPortRangeEnd?: pulumi.Input<number>;
    /**
     * The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
     */
    frontendPortRangeStart?: pulumi.Input<number>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The name of the inbound NAT rule.
     */
    inboundNatRuleName?: pulumi.Input<string>;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The reference to the transport protocol used by the load balancing rule.
     */
    protocol?: pulumi.Input<string | types.enums.TransportProtocol>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}