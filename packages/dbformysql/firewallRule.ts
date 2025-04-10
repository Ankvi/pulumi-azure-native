import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a server firewall rule.
 *
 * Uses Azure REST API version 2022-01-01. In version 1.x of the Azure Native provider, it used API version 2017-12-01.
 *
 * Other available API versions: 2017-12-01, 2023-06-01-preview, 2023-06-30, 2023-12-30.
 */
export class FirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing FirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FirewallRule {
        return new FirewallRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dbformysql:FirewallRule';

    /**
     * Returns true if the given object is an instance of FirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallRule.__pulumiType;
    }

    /**
     * The end IP address of the server firewall rule. Must be IPv4 format.
     */
    public readonly endIpAddress!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The start IP address of the server firewall rule. Must be IPv4 format.
     */
    public readonly startIpAddress!: pulumi.Output<string>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.endIpAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endIpAddress'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.startIpAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'startIpAddress'");
            }
            resourceInputs["endIpAddress"] = args ? args.endIpAddress : undefined;
            resourceInputs["firewallRuleName"] = args ? args.firewallRuleName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["startIpAddress"] = args ? args.startIpAddress : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["endIpAddress"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["startIpAddress"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbformysql/v20200701preview:FirewallRule" }, { type: "azure-native:dbformysql/v20200701privatepreview:FirewallRule" }, { type: "azure-native:dbformysql/v20210501:FirewallRule" }, { type: "azure-native:dbformysql/v20210501preview:FirewallRule" }, { type: "azure-native:dbformysql/v20211201preview:FirewallRule" }, { type: "azure-native:dbformysql/v20220101:FirewallRule" }, { type: "azure-native:dbformysql/v20230601preview:FirewallRule" }, { type: "azure-native:dbformysql/v20230630:FirewallRule" }, { type: "azure-native:dbformysql/v20231230:FirewallRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FirewallRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FirewallRule resource.
 */
export interface FirewallRuleArgs {
    /**
     * The end IP address of the server firewall rule. Must be IPv4 format.
     */
    endIpAddress: pulumi.Input<string>;
    /**
     * The name of the server firewall rule.
     */
    firewallRuleName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The start IP address of the server firewall rule. Must be IPv4 format.
     */
    startIpAddress: pulumi.Input<string>;
}