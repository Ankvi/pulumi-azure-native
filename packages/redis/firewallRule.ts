import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2017-02-01, 2017-10-01, 2018-03-01, 2019-07-01, 2020-06-01, 2020-12-01, 2021-06-01, 2022-05-01, 2022-06-01, 2023-04-01, 2023-05-01-preview, 2023-08-01, 2024-03-01, 2024-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redis [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:redis:FirewallRule';

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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * highest IP address included in the range
     */
    public readonly endIP!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * lowest IP address included in the range
     */
    public readonly startIP!: pulumi.Output<string>;
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
            if ((!args || args.cacheName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cacheName'");
            }
            if ((!args || args.endIP === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endIP'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.startIP === undefined) && !opts.urn) {
                throw new Error("Missing required property 'startIP'");
            }
            resourceInputs["cacheName"] = args ? args.cacheName : undefined;
            resourceInputs["endIP"] = args ? args.endIP : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["startIP"] = args ? args.startIP : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["endIP"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["startIP"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cache/v20230401:FirewallRule" }, { type: "azure-native:cache/v20230501preview:FirewallRule" }, { type: "azure-native:cache/v20230801:FirewallRule" }, { type: "azure-native:cache/v20240301:FirewallRule" }, { type: "azure-native:cache/v20240401preview:FirewallRule" }, { type: "azure-native:cache/v20241101:FirewallRule" }, { type: "azure-native:cache:FirewallRule" }, { type: "azure-native:redis/v20160401:FirewallRule" }, { type: "azure-native:redis/v20170201:FirewallRule" }, { type: "azure-native:redis/v20171001:FirewallRule" }, { type: "azure-native:redis/v20180301:FirewallRule" }, { type: "azure-native:redis/v20190701:FirewallRule" }, { type: "azure-native:redis/v20200601:FirewallRule" }, { type: "azure-native:redis/v20201201:FirewallRule" }, { type: "azure-native:redis/v20210601:FirewallRule" }, { type: "azure-native:redis/v20220501:FirewallRule" }, { type: "azure-native:redis/v20220601:FirewallRule" }, { type: "azure-native:redis/v20230401:FirewallRule" }, { type: "azure-native:redis/v20230501preview:FirewallRule" }, { type: "azure-native:redis/v20230801:FirewallRule" }, { type: "azure-native:redis/v20240301:FirewallRule" }, { type: "azure-native:redis/v20240401preview:FirewallRule" }, { type: "azure-native:redis/v20241101:FirewallRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FirewallRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FirewallRule resource.
 */
export interface FirewallRuleArgs {
    /**
     * The name of the Redis cache.
     */
    cacheName: pulumi.Input<string>;
    /**
     * highest IP address included in the range
     */
    endIP: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the firewall rule.
     */
    ruleName?: pulumi.Input<string>;
    /**
     * lowest IP address included in the range
     */
    startIP: pulumi.Input<string>;
}