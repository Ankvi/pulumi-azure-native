import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a forwarding rule within a DNS forwarding ruleset.
 * Azure REST API version: 2022-07-01. Prior API version in Azure Native 1.x: 2020-04-01-preview.
 *
 * Other available API versions: 2023-07-01-preview.
 */
export class ForwardingRule extends pulumi.CustomResource {
    /**
     * Get an existing ForwardingRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ForwardingRule {
        return new ForwardingRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:ForwardingRule';

    /**
     * Returns true if the given object is an instance of ForwardingRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ForwardingRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ForwardingRule.__pulumiType;
    }

    /**
     * The domain name for the forwarding rule.
     */
    public readonly domainName!: pulumi.Output<string>;
    /**
     * ETag of the forwarding rule.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The state of forwarding rule.
     */
    public readonly forwardingRuleState!: pulumi.Output<string | undefined>;
    /**
     * Metadata attached to the forwarding rule.
     */
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current provisioning state of the forwarding rule. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * DNS servers to forward the DNS query to.
     */
    public readonly targetDnsServers!: pulumi.Output<types.outputs.TargetDnsServerResponse[]>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ForwardingRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ForwardingRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dnsForwardingRulesetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnsForwardingRulesetName'");
            }
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.targetDnsServers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetDnsServers'");
            }
            resourceInputs["dnsForwardingRulesetName"] = args ? args.dnsForwardingRulesetName : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["forwardingRuleName"] = args ? args.forwardingRuleName : undefined;
            resourceInputs["forwardingRuleState"] = args ? args.forwardingRuleState : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["targetDnsServers"] = args ? args.targetDnsServers : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["domainName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["forwardingRuleState"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetDnsServers"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20200401preview:ForwardingRule" }, { type: "azure-native:network/v20220701:ForwardingRule" }, { type: "azure-native:network/v20230701preview:ForwardingRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ForwardingRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ForwardingRule resource.
 */
export interface ForwardingRuleArgs {
    /**
     * The name of the DNS forwarding ruleset.
     */
    dnsForwardingRulesetName: pulumi.Input<string>;
    /**
     * The domain name for the forwarding rule.
     */
    domainName: pulumi.Input<string>;
    /**
     * The name of the forwarding rule.
     */
    forwardingRuleName?: pulumi.Input<string>;
    /**
     * The state of forwarding rule.
     */
    forwardingRuleState?: pulumi.Input<string | types.enums.ForwardingRuleState>;
    /**
     * Metadata attached to the forwarding rule.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * DNS servers to forward the DNS query to.
     */
    targetDnsServers: pulumi.Input<pulumi.Input<types.inputs.TargetDnsServerArgs>[]>;
}