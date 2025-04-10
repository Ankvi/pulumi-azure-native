import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a mongo cluster firewall rule.
 *
 * Uses Azure REST API version 2023-03-15-preview.
 *
 * Other available API versions: 2023-09-15-preview, 2023-11-15-preview, 2024-02-15-preview.
 */
export class MongoClusterFirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing MongoClusterFirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MongoClusterFirewallRule {
        return new MongoClusterFirewallRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:documentdb:MongoClusterFirewallRule';

    /**
     * Returns true if the given object is an instance of MongoClusterFirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MongoClusterFirewallRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MongoClusterFirewallRule.__pulumiType;
    }

    /**
     * The end IP address of the mongo cluster firewall rule. Must be IPv4 format.
     */
    public readonly endIpAddress!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the firewall rule.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The start IP address of the mongo cluster firewall rule. Must be IPv4 format.
     */
    public readonly startIpAddress!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MongoClusterFirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MongoClusterFirewallRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.endIpAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endIpAddress'");
            }
            if ((!args || args.mongoClusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mongoClusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.startIpAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'startIpAddress'");
            }
            resourceInputs["endIpAddress"] = args ? args.endIpAddress : undefined;
            resourceInputs["firewallRuleName"] = args ? args.firewallRuleName : undefined;
            resourceInputs["mongoClusterName"] = args ? args.mongoClusterName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["startIpAddress"] = args ? args.startIpAddress : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["endIpAddress"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["startIpAddress"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb/v20230301preview:MongoClusterFirewallRule" }, { type: "azure-native:documentdb/v20230315preview:MongoClusterFirewallRule" }, { type: "azure-native:documentdb/v20230915preview:MongoClusterFirewallRule" }, { type: "azure-native:documentdb/v20231115preview:MongoClusterFirewallRule" }, { type: "azure-native:documentdb/v20240215preview:MongoClusterFirewallRule" }, { type: "azure-native:documentdb/v20240301preview:MongoClusterFirewallRule" }, { type: "azure-native:documentdb/v20240601preview:MongoClusterFirewallRule" }, { type: "azure-native:documentdb/v20240701:MongoClusterFirewallRule" }, { type: "azure-native:documentdb/v20241001preview:MongoClusterFirewallRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MongoClusterFirewallRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MongoClusterFirewallRule resource.
 */
export interface MongoClusterFirewallRuleArgs {
    /**
     * The end IP address of the mongo cluster firewall rule. Must be IPv4 format.
     */
    endIpAddress: pulumi.Input<string>;
    /**
     * The name of the mongo cluster firewall rule.
     */
    firewallRuleName?: pulumi.Input<string>;
    /**
     * The name of the mongo cluster.
     */
    mongoClusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The start IP address of the mongo cluster firewall rule. Must be IPv4 format.
     */
    startIpAddress: pulumi.Input<string>;
}