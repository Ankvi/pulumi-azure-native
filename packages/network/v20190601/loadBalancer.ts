import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * LoadBalancer resource.
 */
export class LoadBalancer extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LoadBalancer {
        return new LoadBalancer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20190601:LoadBalancer';

    /**
     * Returns true if the given object is an instance of LoadBalancer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalancer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalancer.__pulumiType;
    }

    /**
     * Collection of backend address pools used by a load balancer.
     */
    public readonly backendAddressPools!: pulumi.Output<types.outputs.BackendAddressPoolResponse[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Object representing the frontend IPs to be used for the load balancer.
     */
    public readonly frontendIPConfigurations!: pulumi.Output<types.outputs.FrontendIPConfigurationResponse[] | undefined>;
    /**
     * Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound Nat rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules.
     */
    public readonly inboundNatPools!: pulumi.Output<types.outputs.InboundNatPoolResponse[] | undefined>;
    /**
     * Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules.
     */
    public readonly inboundNatRules!: pulumi.Output<types.outputs.InboundNatRuleResponse[] | undefined>;
    /**
     * Object collection representing the load balancing rules Gets the provisioning.
     */
    public readonly loadBalancingRules!: pulumi.Output<types.outputs.LoadBalancingRuleResponse[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The outbound rules.
     */
    public readonly outboundRules!: pulumi.Output<types.outputs.OutboundRuleResponse[] | undefined>;
    /**
     * Collection of probe objects used in the load balancer.
     */
    public readonly probes!: pulumi.Output<types.outputs.ProbeResponse[] | undefined>;
    /**
     * Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * The resource GUID property of the load balancer resource.
     */
    public readonly resourceGuid!: pulumi.Output<string | undefined>;
    /**
     * The load balancer SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.LoadBalancerSkuResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LoadBalancer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalancerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["backendAddressPools"] = args ? args.backendAddressPools : undefined;
            resourceInputs["frontendIPConfigurations"] = args ? args.frontendIPConfigurations : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["inboundNatPools"] = args ? args.inboundNatPools : undefined;
            resourceInputs["inboundNatRules"] = args ? args.inboundNatRules : undefined;
            resourceInputs["loadBalancerName"] = args ? args.loadBalancerName : undefined;
            resourceInputs["loadBalancingRules"] = args ? args.loadBalancingRules : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["outboundRules"] = args ? args.outboundRules : undefined;
            resourceInputs["probes"] = args ? args.probes : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceGuid"] = args ? args.resourceGuid : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["backendAddressPools"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["frontendIPConfigurations"] = undefined /*out*/;
            resourceInputs["inboundNatPools"] = undefined /*out*/;
            resourceInputs["inboundNatRules"] = undefined /*out*/;
            resourceInputs["loadBalancingRules"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outboundRules"] = undefined /*out*/;
            resourceInputs["probes"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:LoadBalancer" }, { type: "azure-native:network/v20150501preview:LoadBalancer" }, { type: "azure-native:network/v20150615:LoadBalancer" }, { type: "azure-native:network/v20160330:LoadBalancer" }, { type: "azure-native:network/v20160601:LoadBalancer" }, { type: "azure-native:network/v20160901:LoadBalancer" }, { type: "azure-native:network/v20161201:LoadBalancer" }, { type: "azure-native:network/v20170301:LoadBalancer" }, { type: "azure-native:network/v20170601:LoadBalancer" }, { type: "azure-native:network/v20170801:LoadBalancer" }, { type: "azure-native:network/v20170901:LoadBalancer" }, { type: "azure-native:network/v20171001:LoadBalancer" }, { type: "azure-native:network/v20171101:LoadBalancer" }, { type: "azure-native:network/v20180101:LoadBalancer" }, { type: "azure-native:network/v20180201:LoadBalancer" }, { type: "azure-native:network/v20180401:LoadBalancer" }, { type: "azure-native:network/v20180601:LoadBalancer" }, { type: "azure-native:network/v20180701:LoadBalancer" }, { type: "azure-native:network/v20180801:LoadBalancer" }, { type: "azure-native:network/v20181001:LoadBalancer" }, { type: "azure-native:network/v20181101:LoadBalancer" }, { type: "azure-native:network/v20181201:LoadBalancer" }, { type: "azure-native:network/v20190201:LoadBalancer" }, { type: "azure-native:network/v20190401:LoadBalancer" }, { type: "azure-native:network/v20190701:LoadBalancer" }, { type: "azure-native:network/v20190801:LoadBalancer" }, { type: "azure-native:network/v20190901:LoadBalancer" }, { type: "azure-native:network/v20191101:LoadBalancer" }, { type: "azure-native:network/v20191201:LoadBalancer" }, { type: "azure-native:network/v20200301:LoadBalancer" }, { type: "azure-native:network/v20200401:LoadBalancer" }, { type: "azure-native:network/v20200501:LoadBalancer" }, { type: "azure-native:network/v20200601:LoadBalancer" }, { type: "azure-native:network/v20200701:LoadBalancer" }, { type: "azure-native:network/v20200801:LoadBalancer" }, { type: "azure-native:network/v20201101:LoadBalancer" }, { type: "azure-native:network/v20210201:LoadBalancer" }, { type: "azure-native:network/v20210301:LoadBalancer" }, { type: "azure-native:network/v20210501:LoadBalancer" }, { type: "azure-native:network/v20210801:LoadBalancer" }, { type: "azure-native:network/v20220101:LoadBalancer" }, { type: "azure-native:network/v20220501:LoadBalancer" }, { type: "azure-native:network/v20220701:LoadBalancer" }, { type: "azure-native:network/v20220901:LoadBalancer" }, { type: "azure-native:network/v20221101:LoadBalancer" }, { type: "azure-native:network/v20230201:LoadBalancer" }, { type: "azure-native:network/v20230401:LoadBalancer" }, { type: "azure-native:network/v20230501:LoadBalancer" }, { type: "azure-native:network/v20230601:LoadBalancer" }, { type: "azure-native:network/v20230901:LoadBalancer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LoadBalancer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LoadBalancer resource.
 */
export interface LoadBalancerArgs {
    /**
     * Collection of backend address pools used by a load balancer.
     */
    backendAddressPools?: pulumi.Input<pulumi.Input<types.inputs.BackendAddressPoolArgs>[]>;
    /**
     * Object representing the frontend IPs to be used for the load balancer.
     */
    frontendIPConfigurations?: pulumi.Input<pulumi.Input<types.inputs.FrontendIPConfigurationArgs>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound Nat rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules.
     */
    inboundNatPools?: pulumi.Input<pulumi.Input<types.inputs.InboundNatPoolArgs>[]>;
    /**
     * Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    inboundNatRules?: pulumi.Input<pulumi.Input<types.inputs.InboundNatRuleArgs>[]>;
    /**
     * The name of the load balancer.
     */
    loadBalancerName?: pulumi.Input<string>;
    /**
     * Object collection representing the load balancing rules Gets the provisioning.
     */
    loadBalancingRules?: pulumi.Input<pulumi.Input<types.inputs.LoadBalancingRuleArgs>[]>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The outbound rules.
     */
    outboundRules?: pulumi.Input<pulumi.Input<types.inputs.OutboundRuleArgs>[]>;
    /**
     * Collection of probe objects used in the load balancer.
     */
    probes?: pulumi.Input<pulumi.Input<types.inputs.ProbeArgs>[]>;
    /**
     * Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource GUID property of the load balancer resource.
     */
    resourceGuid?: pulumi.Input<string>;
    /**
     * The load balancer SKU.
     */
    sku?: pulumi.Input<types.inputs.LoadBalancerSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}