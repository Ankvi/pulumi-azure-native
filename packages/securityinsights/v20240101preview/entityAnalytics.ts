import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Settings with single toggle.
 */
export class EntityAnalytics extends pulumi.CustomResource {
    /**
     * Get an existing EntityAnalytics resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EntityAnalytics {
        return new EntityAnalytics(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20240101preview:EntityAnalytics';

    /**
     * Returns true if the given object is an instance of EntityAnalytics.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EntityAnalytics {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EntityAnalytics.__pulumiType;
    }

    /**
     * The relevant entity providers that are synced
     */
    public readonly entityProviders!: pulumi.Output<string[] | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The kind of the setting
     * Expected value is 'EntityAnalytics'.
     */
    public readonly kind!: pulumi.Output<"EntityAnalytics">;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a EntityAnalytics resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EntityAnalyticsArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["entityProviders"] = args ? args.entityProviders : undefined;
            resourceInputs["kind"] = "EntityAnalytics";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["settingsName"] = args ? args.settingsName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["entityProviders"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:EntityAnalytics" }, { type: "azure-native:securityinsights/v20190101preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20210301preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20210901preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20211001preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20220101preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20220401preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20220501preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20220601preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20220701preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20220801preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20220901preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20221001preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20221101preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20221201preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20230201preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20230301preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20230401preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20230501preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20230601preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20230701preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20230801preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20230901preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20231001preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20231201preview:EntityAnalytics" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EntityAnalytics.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EntityAnalytics resource.
 */
export interface EntityAnalyticsArgs {
    /**
     * The relevant entity providers that are synced
     */
    entityProviders?: pulumi.Input<pulumi.Input<string | types.enums.EntityProviders>[]>;
    /**
     * The kind of the setting
     * Expected value is 'EntityAnalytics'.
     */
    kind: pulumi.Input<"EntityAnalytics">;
    /**
     * The name of the resource group. The name is case insensitive.
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