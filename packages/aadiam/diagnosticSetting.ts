import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The diagnostic setting resource.
 *
 * Uses Azure REST API version 2017-04-01. In version 2.x of the Azure Native provider, it used API version 2017-04-01.
 */
export class DiagnosticSetting extends pulumi.CustomResource {
    /**
     * Get an existing DiagnosticSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DiagnosticSetting {
        return new DiagnosticSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:aadiam:DiagnosticSetting';

    /**
     * Returns true if the given object is an instance of DiagnosticSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DiagnosticSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DiagnosticSetting.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The resource Id for the event hub authorization rule.
     */
    public readonly eventHubAuthorizationRuleId!: pulumi.Output<string | undefined>;
    /**
     * The name of the event hub. If none is specified, the default event hub will be selected.
     */
    public readonly eventHubName!: pulumi.Output<string | undefined>;
    /**
     * The list of logs settings.
     */
    public readonly logs!: pulumi.Output<types.outputs.LogSettingsResponse[] | undefined>;
    /**
     * Azure resource name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility.
     */
    public readonly serviceBusRuleId!: pulumi.Output<string | undefined>;
    /**
     * The resource ID of the storage account to which you would like to send Diagnostic Logs.
     */
    public readonly storageAccountId!: pulumi.Output<string | undefined>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2
     */
    public readonly workspaceId!: pulumi.Output<string | undefined>;

    /**
     * Create a DiagnosticSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DiagnosticSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["eventHubAuthorizationRuleId"] = args ? args.eventHubAuthorizationRuleId : undefined;
            resourceInputs["eventHubName"] = args ? args.eventHubName : undefined;
            resourceInputs["logs"] = args ? args.logs : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["serviceBusRuleId"] = args ? args.serviceBusRuleId : undefined;
            resourceInputs["storageAccountId"] = args ? args.storageAccountId : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["eventHubAuthorizationRuleId"] = undefined /*out*/;
            resourceInputs["eventHubName"] = undefined /*out*/;
            resourceInputs["logs"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["serviceBusRuleId"] = undefined /*out*/;
            resourceInputs["storageAccountId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workspaceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:aadiam/v20170401:DiagnosticSetting" }, { type: "azure-native:aadiam/v20170401preview:DiagnosticSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DiagnosticSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DiagnosticSetting resource.
 */
export interface DiagnosticSettingArgs {
    /**
     * The resource Id for the event hub authorization rule.
     */
    eventHubAuthorizationRuleId?: pulumi.Input<string>;
    /**
     * The name of the event hub. If none is specified, the default event hub will be selected.
     */
    eventHubName?: pulumi.Input<string>;
    /**
     * The list of logs settings.
     */
    logs?: pulumi.Input<pulumi.Input<types.inputs.LogSettingsArgs>[]>;
    /**
     * The name of the diagnostic setting.
     */
    name?: pulumi.Input<string>;
    /**
     * The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility.
     */
    serviceBusRuleId?: pulumi.Input<string>;
    /**
     * The resource ID of the storage account to which you would like to send Diagnostic Logs.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2
     */
    workspaceId?: pulumi.Input<string>;
}