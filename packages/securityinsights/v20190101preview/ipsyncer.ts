import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Settings with single toggle.
 */
export class IPSyncer extends pulumi.CustomResource {
    /**
     * Get an existing IPSyncer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IPSyncer {
        return new IPSyncer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20190101preview:IPSyncer';

    /**
     * Returns true if the given object is an instance of IPSyncer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IPSyncer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IPSyncer.__pulumiType;
    }

    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Determines whether the setting is enable or disabled.
     */
    public /*out*/ readonly isEnabled!: pulumi.Output<boolean>;
    /**
     *
     * Expected value is 'IPSyncer'.
     */
    public readonly kind!: pulumi.Output<"IPSyncer">;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IPSyncer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IPSyncerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.operationalInsightsResourceProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'operationalInsightsResourceProvider'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["kind"] = "IPSyncer";
            resourceInputs["operationalInsightsResourceProvider"] = args ? args.operationalInsightsResourceProvider : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["settingsName"] = args ? args.settingsName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:IPSyncer" }, { type: "azure-native:securityinsights/v20210301preview:IPSyncer" }, { type: "azure-native:securityinsights/v20210901preview:IPSyncer" }, { type: "azure-native:securityinsights/v20211001preview:IPSyncer" }, { type: "azure-native:securityinsights/v20220101preview:IPSyncer" }, { type: "azure-native:securityinsights/v20220401preview:IPSyncer" }, { type: "azure-native:securityinsights/v20220501preview:IPSyncer" }, { type: "azure-native:securityinsights/v20220601preview:IPSyncer" }, { type: "azure-native:securityinsights/v20220701preview:IPSyncer" }, { type: "azure-native:securityinsights/v20220801preview:IPSyncer" }, { type: "azure-native:securityinsights/v20220901preview:IPSyncer" }, { type: "azure-native:securityinsights/v20221001preview:IPSyncer" }, { type: "azure-native:securityinsights/v20221101preview:IPSyncer" }, { type: "azure-native:securityinsights/v20221201preview:IPSyncer" }, { type: "azure-native:securityinsights/v20230201preview:IPSyncer" }, { type: "azure-native:securityinsights/v20230301preview:IPSyncer" }, { type: "azure-native:securityinsights/v20230401preview:IPSyncer" }, { type: "azure-native:securityinsights/v20230501preview:IPSyncer" }, { type: "azure-native:securityinsights/v20230601preview:IPSyncer" }, { type: "azure-native:securityinsights/v20230701preview:IPSyncer" }, { type: "azure-native:securityinsights/v20230801preview:IPSyncer" }, { type: "azure-native:securityinsights/v20230901preview:IPSyncer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IPSyncer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IPSyncer resource.
 */
export interface IPSyncerArgs {
    /**
     *
     * Expected value is 'IPSyncer'.
     */
    kind: pulumi.Input<"IPSyncer">;
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The setting name. Supports - Anomalies, EyesOn, EntityAnalytics, Ueba
     */
    settingsName?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
