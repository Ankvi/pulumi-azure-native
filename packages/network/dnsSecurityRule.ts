import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a DNS security rule.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 */
export class DnsSecurityRule extends pulumi.CustomResource {
    /**
     * Get an existing DnsSecurityRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DnsSecurityRule {
        return new DnsSecurityRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:DnsSecurityRule';

    /**
     * Returns true if the given object is an instance of DnsSecurityRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DnsSecurityRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DnsSecurityRule.__pulumiType;
    }

    /**
     * The action to take on DNS requests that match the DNS security rule.
     */
    public readonly action!: pulumi.Output<types.outputs.DnsSecurityRuleActionResponse>;
    /**
     * DNS resolver policy domains lists that the DNS security rule applies to.
     */
    public readonly dnsResolverDomainLists!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * The state of DNS security rule.
     */
    public readonly dnsSecurityRuleState!: pulumi.Output<string | undefined>;
    /**
     * ETag of the DNS security rule.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The priority of the DNS security rule.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * The current provisioning state of the DNS security rule. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DnsSecurityRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DnsSecurityRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.dnsResolverDomainLists === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnsResolverDomainLists'");
            }
            if ((!args || args.dnsResolverPolicyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnsResolverPolicyName'");
            }
            if ((!args || args.priority === undefined) && !opts.urn) {
                throw new Error("Missing required property 'priority'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["dnsResolverDomainLists"] = args ? args.dnsResolverDomainLists : undefined;
            resourceInputs["dnsResolverPolicyName"] = args ? args.dnsResolverPolicyName : undefined;
            resourceInputs["dnsSecurityRuleName"] = args ? args.dnsSecurityRuleName : undefined;
            resourceInputs["dnsSecurityRuleState"] = args ? args.dnsSecurityRuleState : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["action"] = undefined /*out*/;
            resourceInputs["dnsResolverDomainLists"] = undefined /*out*/;
            resourceInputs["dnsSecurityRuleState"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20230701preview:DnsSecurityRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DnsSecurityRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DnsSecurityRule resource.
 */
export interface DnsSecurityRuleArgs {
    /**
     * The action to take on DNS requests that match the DNS security rule.
     */
    action: pulumi.Input<types.inputs.DnsSecurityRuleActionArgs>;
    /**
     * DNS resolver policy domains lists that the DNS security rule applies to.
     */
    dnsResolverDomainLists: pulumi.Input<pulumi.Input<types.inputs.SubResourceArgs>[]>;
    /**
     * The name of the DNS resolver policy.
     */
    dnsResolverPolicyName: pulumi.Input<string>;
    /**
     * The name of the DNS security rule.
     */
    dnsSecurityRuleName?: pulumi.Input<string>;
    /**
     * The state of DNS security rule.
     */
    dnsSecurityRuleState?: pulumi.Input<string | types.enums.DnsSecurityRuleState>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The priority of the DNS security rule.
     */
    priority: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}