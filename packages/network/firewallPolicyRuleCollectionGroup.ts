import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Rule Collection Group resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class FirewallPolicyRuleCollectionGroup extends pulumi.CustomResource {
    /**
     * Get an existing FirewallPolicyRuleCollectionGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FirewallPolicyRuleCollectionGroup {
        return new FirewallPolicyRuleCollectionGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:FirewallPolicyRuleCollectionGroup';

    /**
     * Returns true if the given object is an instance of FirewallPolicyRuleCollectionGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallPolicyRuleCollectionGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallPolicyRuleCollectionGroup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Priority of the Firewall Policy Rule Collection Group resource.
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * The provisioning state of the firewall policy rule collection group resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Group of Firewall Policy rule collections.
     */
    public readonly ruleCollections!: pulumi.Output<(types.outputs.FirewallPolicyFilterRuleCollectionResponse | types.outputs.FirewallPolicyNatRuleCollectionResponse)[] | undefined>;
    /**
     * A read-only string that represents the size of the FirewallPolicyRuleCollectionGroupProperties in MB. (ex 1.2MB)
     */
    public /*out*/ readonly size!: pulumi.Output<string>;
    /**
     * Rule Group type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FirewallPolicyRuleCollectionGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallPolicyRuleCollectionGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.firewallPolicyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'firewallPolicyName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["firewallPolicyName"] = args ? args.firewallPolicyName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleCollectionGroupName"] = args ? args.ruleCollectionGroupName : undefined;
            resourceInputs["ruleCollections"] = args ? args.ruleCollections : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["ruleCollections"] = undefined /*out*/;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20200501:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20200601:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20200701:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20200801:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20201101:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20210201:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20210301:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20210501:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20210801:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20220101:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20220501:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20220701:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20220901:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20221101:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20230201:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20230401:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20230501:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20230601:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20230901:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20231101:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20240101:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20240301:FirewallPolicyRuleCollectionGroup" }, { type: "azure-native:network/v20240501:FirewallPolicyRuleCollectionGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FirewallPolicyRuleCollectionGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FirewallPolicyRuleCollectionGroup resource.
 */
export interface FirewallPolicyRuleCollectionGroupArgs {
    /**
     * The name of the Firewall Policy.
     */
    firewallPolicyName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority of the Firewall Policy Rule Collection Group resource.
     */
    priority?: pulumi.Input<number>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the FirewallPolicyRuleCollectionGroup.
     */
    ruleCollectionGroupName?: pulumi.Input<string>;
    /**
     * Group of Firewall Policy rule collections.
     */
    ruleCollections?: pulumi.Input<pulumi.Input<types.inputs.FirewallPolicyFilterRuleCollectionArgs | types.inputs.FirewallPolicyNatRuleCollectionArgs>[]>;
}