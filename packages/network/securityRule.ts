import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Network security rule.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01
 */
export class SecurityRule extends pulumi.CustomResource {
    /**
     * Get an existing SecurityRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SecurityRule {
        return new SecurityRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:SecurityRule';

    /**
     * Returns true if the given object is an instance of SecurityRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityRule.__pulumiType;
    }

    /**
     * The network traffic is allowed or denied.
     */
    public readonly access!: pulumi.Output<string>;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
     */
    public readonly destinationAddressPrefix!: pulumi.Output<string | undefined>;
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    public readonly destinationAddressPrefixes!: pulumi.Output<string[] | undefined>;
    /**
     * The application security group specified as destination.
     */
    public readonly destinationApplicationSecurityGroups!: pulumi.Output<types.outputs.network.ApplicationSecurityGroupResponse[] | undefined>;
    /**
     * The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    public readonly destinationPortRange!: pulumi.Output<string | undefined>;
    /**
     * The destination port ranges.
     */
    public readonly destinationPortRanges!: pulumi.Output<string[] | undefined>;
    /**
     * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
     */
    public readonly direction!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Network protocol this rule applies to.
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * The provisioning state of the security rule resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
     */
    public readonly sourceAddressPrefix!: pulumi.Output<string | undefined>;
    /**
     * The CIDR or source IP ranges.
     */
    public readonly sourceAddressPrefixes!: pulumi.Output<string[] | undefined>;
    /**
     * The application security group specified as source.
     */
    public readonly sourceApplicationSecurityGroups!: pulumi.Output<types.outputs.network.ApplicationSecurityGroupResponse[] | undefined>;
    /**
     * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    public readonly sourcePortRange!: pulumi.Output<string | undefined>;
    /**
     * The source port ranges.
     */
    public readonly sourcePortRanges!: pulumi.Output<string[] | undefined>;
    /**
     * The type of the resource.
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a SecurityRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.access === undefined) && !opts.urn) {
                throw new Error("Missing required property 'access'");
            }
            if ((!args || args.direction === undefined) && !opts.urn) {
                throw new Error("Missing required property 'direction'");
            }
            if ((!args || args.networkSecurityGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkSecurityGroupName'");
            }
            if ((!args || args.priority === undefined) && !opts.urn) {
                throw new Error("Missing required property 'priority'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["access"] = args ? args.access : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destinationAddressPrefix"] = args ? args.destinationAddressPrefix : undefined;
            resourceInputs["destinationAddressPrefixes"] = args ? args.destinationAddressPrefixes : undefined;
            resourceInputs["destinationApplicationSecurityGroups"] = args ? args.destinationApplicationSecurityGroups : undefined;
            resourceInputs["destinationPortRange"] = args ? args.destinationPortRange : undefined;
            resourceInputs["destinationPortRanges"] = args ? args.destinationPortRanges : undefined;
            resourceInputs["direction"] = args ? args.direction : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkSecurityGroupName"] = args ? args.networkSecurityGroupName : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityRuleName"] = args ? args.securityRuleName : undefined;
            resourceInputs["sourceAddressPrefix"] = args ? args.sourceAddressPrefix : undefined;
            resourceInputs["sourceAddressPrefixes"] = args ? args.sourceAddressPrefixes : undefined;
            resourceInputs["sourceApplicationSecurityGroups"] = args ? args.sourceApplicationSecurityGroups : undefined;
            resourceInputs["sourcePortRange"] = args ? args.sourcePortRange : undefined;
            resourceInputs["sourcePortRanges"] = args ? args.sourcePortRanges : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["access"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["destinationAddressPrefix"] = undefined /*out*/;
            resourceInputs["destinationAddressPrefixes"] = undefined /*out*/;
            resourceInputs["destinationApplicationSecurityGroups"] = undefined /*out*/;
            resourceInputs["destinationPortRange"] = undefined /*out*/;
            resourceInputs["destinationPortRanges"] = undefined /*out*/;
            resourceInputs["direction"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceAddressPrefix"] = undefined /*out*/;
            resourceInputs["sourceAddressPrefixes"] = undefined /*out*/;
            resourceInputs["sourceApplicationSecurityGroups"] = undefined /*out*/;
            resourceInputs["sourcePortRange"] = undefined /*out*/;
            resourceInputs["sourcePortRanges"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20150501preview:SecurityRule" }, { type: "azure-native:network/v20150615:SecurityRule" }, { type: "azure-native:network/v20160330:SecurityRule" }, { type: "azure-native:network/v20160601:SecurityRule" }, { type: "azure-native:network/v20160901:SecurityRule" }, { type: "azure-native:network/v20161201:SecurityRule" }, { type: "azure-native:network/v20170301:SecurityRule" }, { type: "azure-native:network/v20170601:SecurityRule" }, { type: "azure-native:network/v20170801:SecurityRule" }, { type: "azure-native:network/v20170901:SecurityRule" }, { type: "azure-native:network/v20171001:SecurityRule" }, { type: "azure-native:network/v20171101:SecurityRule" }, { type: "azure-native:network/v20180101:SecurityRule" }, { type: "azure-native:network/v20180201:SecurityRule" }, { type: "azure-native:network/v20180401:SecurityRule" }, { type: "azure-native:network/v20180601:SecurityRule" }, { type: "azure-native:network/v20180701:SecurityRule" }, { type: "azure-native:network/v20180801:SecurityRule" }, { type: "azure-native:network/v20181001:SecurityRule" }, { type: "azure-native:network/v20181101:SecurityRule" }, { type: "azure-native:network/v20181201:SecurityRule" }, { type: "azure-native:network/v20190201:SecurityRule" }, { type: "azure-native:network/v20190401:SecurityRule" }, { type: "azure-native:network/v20190601:SecurityRule" }, { type: "azure-native:network/v20190701:SecurityRule" }, { type: "azure-native:network/v20190801:SecurityRule" }, { type: "azure-native:network/v20190901:SecurityRule" }, { type: "azure-native:network/v20191101:SecurityRule" }, { type: "azure-native:network/v20191201:SecurityRule" }, { type: "azure-native:network/v20200301:SecurityRule" }, { type: "azure-native:network/v20200401:SecurityRule" }, { type: "azure-native:network/v20200501:SecurityRule" }, { type: "azure-native:network/v20200601:SecurityRule" }, { type: "azure-native:network/v20200701:SecurityRule" }, { type: "azure-native:network/v20200801:SecurityRule" }, { type: "azure-native:network/v20201101:SecurityRule" }, { type: "azure-native:network/v20210201:SecurityRule" }, { type: "azure-native:network/v20210301:SecurityRule" }, { type: "azure-native:network/v20210501:SecurityRule" }, { type: "azure-native:network/v20210801:SecurityRule" }, { type: "azure-native:network/v20220101:SecurityRule" }, { type: "azure-native:network/v20220501:SecurityRule" }, { type: "azure-native:network/v20220701:SecurityRule" }, { type: "azure-native:network/v20220901:SecurityRule" }, { type: "azure-native:network/v20221101:SecurityRule" }, { type: "azure-native:network/v20230201:SecurityRule" }, { type: "azure-native:network/v20230401:SecurityRule" }, { type: "azure-native:network/v20230501:SecurityRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SecurityRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SecurityRule resource.
 */
export interface SecurityRuleArgs {
    /**
     * The network traffic is allowed or denied.
     */
    access: pulumi.Input<string | types.enums.SecurityRuleAccess>;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    description?: pulumi.Input<string>;
    /**
     * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
     */
    destinationAddressPrefix?: pulumi.Input<string>;
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    destinationAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The application security group specified as destination.
     */
    destinationApplicationSecurityGroups?: pulumi.Input<pulumi.Input<types.inputs.network.ApplicationSecurityGroupArgs>[]>;
    /**
     * The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    destinationPortRange?: pulumi.Input<string>;
    /**
     * The destination port ranges.
     */
    destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
     */
    direction: pulumi.Input<string | types.enums.SecurityRuleDirection>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the network security group.
     */
    networkSecurityGroupName: pulumi.Input<string>;
    /**
     * The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    priority: pulumi.Input<number>;
    /**
     * Network protocol this rule applies to.
     */
    protocol: pulumi.Input<string | types.enums.SecurityRuleProtocol>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the security rule.
     */
    securityRuleName?: pulumi.Input<string>;
    /**
     * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
     */
    sourceAddressPrefix?: pulumi.Input<string>;
    /**
     * The CIDR or source IP ranges.
     */
    sourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The application security group specified as source.
     */
    sourceApplicationSecurityGroups?: pulumi.Input<pulumi.Input<types.inputs.network.ApplicationSecurityGroupArgs>[]>;
    /**
     * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    sourcePortRange?: pulumi.Input<string>;
    /**
     * The source port ranges.
     */
    sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of the resource.
     */
    type?: pulumi.Input<string>;
}
