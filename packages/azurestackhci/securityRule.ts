import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Security Rule resource.
 * Azure REST API version: 2024-02-01-preview.
 *
 * Other available API versions: 2024-05-01-preview, 2024-07-15-preview, 2024-08-01-preview, 2024-10-01-preview, 2025-02-01-preview.
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
    public static readonly __pulumiType = 'azure-native:azurestackhci:SecurityRule';

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
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    public readonly destinationAddressPrefixes!: pulumi.Output<string[] | undefined>;
    /**
     * The destination port ranges. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    public readonly destinationPortRanges!: pulumi.Output<string[] | undefined>;
    /**
     * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
     */
    public readonly direction!: pulumi.Output<string>;
    /**
     * The extendedLocation of the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Network protocol this rule applies to.
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * Provisioning state of the SR
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The CIDR or source IP ranges.
     */
    public readonly sourceAddressPrefixes!: pulumi.Output<string[] | undefined>;
    /**
     * The source port ranges. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    public readonly sourcePortRanges!: pulumi.Output<string[] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

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
            resourceInputs["destinationAddressPrefixes"] = args ? args.destinationAddressPrefixes : undefined;
            resourceInputs["destinationPortRanges"] = args ? args.destinationPortRanges : undefined;
            resourceInputs["direction"] = args ? args.direction : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["networkSecurityGroupName"] = args ? args.networkSecurityGroupName : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityRuleName"] = args ? args.securityRuleName : undefined;
            resourceInputs["sourceAddressPrefixes"] = args ? args.sourceAddressPrefixes : undefined;
            resourceInputs["sourcePortRanges"] = args ? args.sourcePortRanges : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["access"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["destinationAddressPrefixes"] = undefined /*out*/;
            resourceInputs["destinationPortRanges"] = undefined /*out*/;
            resourceInputs["direction"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceAddressPrefixes"] = undefined /*out*/;
            resourceInputs["sourcePortRanges"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20240201preview:SecurityRule" }, { type: "azure-native:azurestackhci/v20240501preview:SecurityRule" }, { type: "azure-native:azurestackhci/v20240715preview:SecurityRule" }, { type: "azure-native:azurestackhci/v20240801preview:SecurityRule" }, { type: "azure-native:azurestackhci/v20241001preview:SecurityRule" }, { type: "azure-native:azurestackhci/v20250201preview:SecurityRule" }] };
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
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    destinationAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The destination port ranges. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
     */
    direction: pulumi.Input<string | types.enums.SecurityRuleDirection>;
    /**
     * The extendedLocation of the resource.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Name of the network security group
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the security rule.
     */
    securityRuleName?: pulumi.Input<string>;
    /**
     * The CIDR or source IP ranges.
     */
    sourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The source port ranges. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]>;
}