import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Settings with single toggle.
 */
export class Anomalies extends pulumi.CustomResource {
    /**
     * Get an existing Anomalies resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Anomalies {
        return new Anomalies(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20231001preview:Anomalies';

    /**
     * Returns true if the given object is an instance of Anomalies.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Anomalies {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Anomalies.__pulumiType;
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
     * The kind of the setting
     * Expected value is 'Anomalies'.
     */
    public readonly kind!: pulumi.Output<"Anomalies">;
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
     * Create a Anomalies resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AnomaliesArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["kind"] = "Anomalies";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["settingsName"] = args ? args.settingsName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:Anomalies" }, { type: "azure-native:securityinsights/v20190101preview:Anomalies" }, { type: "azure-native:securityinsights/v20210301preview:Anomalies" }, { type: "azure-native:securityinsights/v20210901preview:Anomalies" }, { type: "azure-native:securityinsights/v20211001preview:Anomalies" }, { type: "azure-native:securityinsights/v20220101preview:Anomalies" }, { type: "azure-native:securityinsights/v20220401preview:Anomalies" }, { type: "azure-native:securityinsights/v20220501preview:Anomalies" }, { type: "azure-native:securityinsights/v20220601preview:Anomalies" }, { type: "azure-native:securityinsights/v20220701preview:Anomalies" }, { type: "azure-native:securityinsights/v20220801preview:Anomalies" }, { type: "azure-native:securityinsights/v20220901preview:Anomalies" }, { type: "azure-native:securityinsights/v20221001preview:Anomalies" }, { type: "azure-native:securityinsights/v20221101preview:Anomalies" }, { type: "azure-native:securityinsights/v20221201preview:Anomalies" }, { type: "azure-native:securityinsights/v20230201preview:Anomalies" }, { type: "azure-native:securityinsights/v20230301preview:Anomalies" }, { type: "azure-native:securityinsights/v20230401preview:Anomalies" }, { type: "azure-native:securityinsights/v20230501preview:Anomalies" }, { type: "azure-native:securityinsights/v20230601preview:Anomalies" }, { type: "azure-native:securityinsights/v20230701preview:Anomalies" }, { type: "azure-native:securityinsights/v20230801preview:Anomalies" }, { type: "azure-native:securityinsights/v20230901preview:Anomalies" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Anomalies.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Anomalies resource.
 */
export interface AnomaliesArgs {
    /**
     * The kind of the setting
     * Expected value is 'Anomalies'.
     */
    kind: pulumi.Input<"Anomalies">;
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
