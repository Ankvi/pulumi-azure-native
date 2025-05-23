import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a cluster firewall rule.
 *
 * Uses Azure REST API version 2023-03-02-preview.
 *
 * Other available API versions: 2022-11-08. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dbforpostgresql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ServerGroupFirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing ServerGroupFirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerGroupFirewallRule {
        return new ServerGroupFirewallRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dbforpostgresql:ServerGroupFirewallRule';

    /**
     * Returns true if the given object is an instance of ServerGroupFirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerGroupFirewallRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerGroupFirewallRule.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The end IP address of the cluster firewall rule. Must be IPv4 format.
     */
    public readonly endIpAddress!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the firewall rule.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The start IP address of the cluster firewall rule. Must be IPv4 format.
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
     * Create a ServerGroupFirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerGroupFirewallRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.endIpAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endIpAddress'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.startIpAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'startIpAddress'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["endIpAddress"] = args ? args.endIpAddress : undefined;
            resourceInputs["firewallRuleName"] = args ? args.firewallRuleName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["startIpAddress"] = args ? args.startIpAddress : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["endIpAddress"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["startIpAddress"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbforpostgresql/v20201005privatepreview:FirewallRule" }, { type: "azure-native:dbforpostgresql/v20201005privatepreview:ServerGroupFirewallRule" }, { type: "azure-native:dbforpostgresql/v20221108:FirewallRule" }, { type: "azure-native:dbforpostgresql/v20221108:ServerGroupFirewallRule" }, { type: "azure-native:dbforpostgresql/v20230302preview:FirewallRule" }, { type: "azure-native:dbforpostgresql/v20230302preview:ServerGroupFirewallRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServerGroupFirewallRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerGroupFirewallRule resource.
 */
export interface ServerGroupFirewallRuleArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The end IP address of the cluster firewall rule. Must be IPv4 format.
     */
    endIpAddress: pulumi.Input<string>;
    /**
     * The name of the cluster firewall rule.
     */
    firewallRuleName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The start IP address of the cluster firewall rule. Must be IPv4 format.
     */
    startIpAddress: pulumi.Input<string>;
}