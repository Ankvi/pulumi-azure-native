import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Settings with single toggle.
 *
 * Uses Azure REST API version 2025-01-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-06-01-preview.
 */
export class EyesOn extends pulumi.CustomResource {
    /**
     * Get an existing EyesOn resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EyesOn {
        return new EyesOn(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights:EyesOn';

    /**
     * Returns true if the given object is an instance of EyesOn.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EyesOn {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EyesOn.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
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
     * Expected value is 'EyesOn'.
     */
    public readonly kind!: pulumi.Output<"EyesOn">;
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
     * Create a EyesOn resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EyesOnArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["kind"] = "EyesOn";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["settingsName"] = args ? args.settingsName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights/v20190101preview:EyesOn" }, { type: "azure-native:securityinsights/v20190101preview:IPSyncer" }, { type: "azure-native:securityinsights/v20210301preview:Anomalies" }, { type: "azure-native:securityinsights/v20210301preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20210301preview:EyesOn" }, { type: "azure-native:securityinsights/v20210301preview:Ueba" }, { type: "azure-native:securityinsights/v20210901preview:EyesOn" }, { type: "azure-native:securityinsights/v20211001preview:EyesOn" }, { type: "azure-native:securityinsights/v20220101preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20220101preview:EyesOn" }, { type: "azure-native:securityinsights/v20220401preview:EyesOn" }, { type: "azure-native:securityinsights/v20220501preview:EyesOn" }, { type: "azure-native:securityinsights/v20220601preview:EyesOn" }, { type: "azure-native:securityinsights/v20220701preview:EyesOn" }, { type: "azure-native:securityinsights/v20220801preview:EyesOn" }, { type: "azure-native:securityinsights/v20220901preview:EyesOn" }, { type: "azure-native:securityinsights/v20221001preview:EyesOn" }, { type: "azure-native:securityinsights/v20221101preview:EyesOn" }, { type: "azure-native:securityinsights/v20221201preview:EyesOn" }, { type: "azure-native:securityinsights/v20230201preview:EyesOn" }, { type: "azure-native:securityinsights/v20230301preview:EyesOn" }, { type: "azure-native:securityinsights/v20230401preview:EyesOn" }, { type: "azure-native:securityinsights/v20230501preview:EyesOn" }, { type: "azure-native:securityinsights/v20230601preview:Anomalies" }, { type: "azure-native:securityinsights/v20230601preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20230601preview:EyesOn" }, { type: "azure-native:securityinsights/v20230601preview:Ueba" }, { type: "azure-native:securityinsights/v20230701preview:Anomalies" }, { type: "azure-native:securityinsights/v20230701preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20230701preview:EyesOn" }, { type: "azure-native:securityinsights/v20230701preview:Ueba" }, { type: "azure-native:securityinsights/v20230801preview:Anomalies" }, { type: "azure-native:securityinsights/v20230801preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20230801preview:EyesOn" }, { type: "azure-native:securityinsights/v20230801preview:Ueba" }, { type: "azure-native:securityinsights/v20230901preview:Anomalies" }, { type: "azure-native:securityinsights/v20230901preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20230901preview:EyesOn" }, { type: "azure-native:securityinsights/v20230901preview:Ueba" }, { type: "azure-native:securityinsights/v20231001preview:Anomalies" }, { type: "azure-native:securityinsights/v20231001preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20231001preview:EyesOn" }, { type: "azure-native:securityinsights/v20231001preview:Ueba" }, { type: "azure-native:securityinsights/v20231201preview:Anomalies" }, { type: "azure-native:securityinsights/v20231201preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20231201preview:EyesOn" }, { type: "azure-native:securityinsights/v20231201preview:Ueba" }, { type: "azure-native:securityinsights/v20240101preview:Anomalies" }, { type: "azure-native:securityinsights/v20240101preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20240101preview:EyesOn" }, { type: "azure-native:securityinsights/v20240101preview:Ueba" }, { type: "azure-native:securityinsights/v20240401preview:Anomalies" }, { type: "azure-native:securityinsights/v20240401preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20240401preview:EyesOn" }, { type: "azure-native:securityinsights/v20240401preview:Ueba" }, { type: "azure-native:securityinsights/v20241001preview:Anomalies" }, { type: "azure-native:securityinsights/v20241001preview:EntityAnalytics" }, { type: "azure-native:securityinsights/v20241001preview:EyesOn" }, { type: "azure-native:securityinsights/v20241001preview:Ueba" }, { type: "azure-native:securityinsights/v20250101preview:EyesOn" }, { type: "azure-native:securityinsights:Anomalies" }, { type: "azure-native:securityinsights:EntityAnalytics" }, { type: "azure-native:securityinsights:Ueba" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EyesOn.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EyesOn resource.
 */
export interface EyesOnArgs {
    /**
     * The kind of the setting
     * Expected value is 'EyesOn'.
     */
    kind: pulumi.Input<"EyesOn">;
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