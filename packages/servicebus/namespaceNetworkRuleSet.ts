import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description of NetworkRuleSet resource.
 *
 * Uses Azure REST API version 2024-01-01. In version 2.x of the Azure Native provider, it used API version 2022-01-01-preview.
 *
 * Other available API versions: 2018-01-01-preview, 2021-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicebus [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class NamespaceNetworkRuleSet extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceNetworkRuleSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NamespaceNetworkRuleSet {
        return new NamespaceNetworkRuleSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicebus:NamespaceNetworkRuleSet';

    /**
     * Returns true if the given object is an instance of NamespaceNetworkRuleSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NamespaceNetworkRuleSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NamespaceNetworkRuleSet.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Default Action for Network Rule Set
     */
    public readonly defaultAction!: pulumi.Output<string | undefined>;
    /**
     * List of IpRules
     */
    public readonly ipRules!: pulumi.Output<types.outputs.NWRuleSetIpRulesResponse[] | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Value that indicates whether Trusted Service Access is Enabled or not.
     */
    public readonly trustedServiceAccessEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * List VirtualNetwork Rules
     */
    public readonly virtualNetworkRules!: pulumi.Output<types.outputs.NWRuleSetVirtualNetworkRulesResponse[] | undefined>;

    /**
     * Create a NamespaceNetworkRuleSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceNetworkRuleSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["defaultAction"] = args ? args.defaultAction : undefined;
            resourceInputs["ipRules"] = args ? args.ipRules : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["publicNetworkAccess"] = (args ? args.publicNetworkAccess : undefined) ?? "Enabled";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["trustedServiceAccessEnabled"] = args ? args.trustedServiceAccessEnabled : undefined;
            resourceInputs["virtualNetworkRules"] = args ? args.virtualNetworkRules : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["defaultAction"] = undefined /*out*/;
            resourceInputs["ipRules"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["trustedServiceAccessEnabled"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkRules"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicebus/v20170401:NamespaceNetworkRuleSet" }, { type: "azure-native:servicebus/v20180101preview:NamespaceNetworkRuleSet" }, { type: "azure-native:servicebus/v20210101preview:NamespaceNetworkRuleSet" }, { type: "azure-native:servicebus/v20210601preview:NamespaceNetworkRuleSet" }, { type: "azure-native:servicebus/v20211101:NamespaceNetworkRuleSet" }, { type: "azure-native:servicebus/v20220101preview:NamespaceNetworkRuleSet" }, { type: "azure-native:servicebus/v20221001preview:NamespaceNetworkRuleSet" }, { type: "azure-native:servicebus/v20230101preview:NamespaceNetworkRuleSet" }, { type: "azure-native:servicebus/v20240101:NamespaceNetworkRuleSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NamespaceNetworkRuleSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NamespaceNetworkRuleSet resource.
 */
export interface NamespaceNetworkRuleSetArgs {
    /**
     * Default Action for Network Rule Set
     */
    defaultAction?: pulumi.Input<string | types.enums.DefaultAction>;
    /**
     * List of IpRules
     */
    ipRules?: pulumi.Input<pulumi.Input<types.inputs.NWRuleSetIpRulesArgs>[]>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccessFlag>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Value that indicates whether Trusted Service Access is Enabled or not.
     */
    trustedServiceAccessEnabled?: pulumi.Input<boolean>;
    /**
     * List VirtualNetwork Rules
     */
    virtualNetworkRules?: pulumi.Input<pulumi.Input<types.inputs.NWRuleSetVirtualNetworkRulesArgs>[]>;
}