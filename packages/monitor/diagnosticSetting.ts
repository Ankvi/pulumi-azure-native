import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The diagnostic setting resource.
 *
 * Uses Azure REST API version 2021-05-01-preview.
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
    public static readonly __pulumiType = 'azure-native:monitor:DiagnosticSetting';

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
     * A string indicating whether the export to Log Analytics should use the default destination type, i.e. AzureDiagnostics, or use a destination type constructed as follows: <normalized service identity>_<normalized category name>. Possible values are: Dedicated and null (null is default.)
     */
    public readonly logAnalyticsDestinationType!: pulumi.Output<string | undefined>;
    /**
     * The list of logs settings.
     */
    public readonly logs!: pulumi.Output<types.outputs.LogSettingsResponse[] | undefined>;
    /**
     * The full ARM resource ID of the Marketplace resource to which you would like to send Diagnostic Logs.
     */
    public readonly marketplacePartnerId!: pulumi.Output<string | undefined>;
    /**
     * The list of metric settings.
     */
    public readonly metrics!: pulumi.Output<types.outputs.MetricSettingsResponse[] | undefined>;
    /**
     * The name of the resource
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
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2
     */
    public readonly workspaceId!: pulumi.Output<string | undefined>;

    /**
     * Create a DiagnosticSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiagnosticSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["eventHubAuthorizationRuleId"] = args ? args.eventHubAuthorizationRuleId : undefined;
            resourceInputs["eventHubName"] = args ? args.eventHubName : undefined;
            resourceInputs["logAnalyticsDestinationType"] = args ? args.logAnalyticsDestinationType : undefined;
            resourceInputs["logs"] = args ? args.logs : undefined;
            resourceInputs["marketplacePartnerId"] = args ? args.marketplacePartnerId : undefined;
            resourceInputs["metrics"] = args ? args.metrics : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["serviceBusRuleId"] = args ? args.serviceBusRuleId : undefined;
            resourceInputs["storageAccountId"] = args ? args.storageAccountId : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["eventHubAuthorizationRuleId"] = undefined /*out*/;
            resourceInputs["eventHubName"] = undefined /*out*/;
            resourceInputs["logAnalyticsDestinationType"] = undefined /*out*/;
            resourceInputs["logs"] = undefined /*out*/;
            resourceInputs["marketplacePartnerId"] = undefined /*out*/;
            resourceInputs["metrics"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["serviceBusRuleId"] = undefined /*out*/;
            resourceInputs["storageAccountId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workspaceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights/v20210501preview:DiagnosticSetting" }, { type: "azure-native:insights:DiagnosticSetting" }, { type: "azure-native:monitor/v20170501preview:DiagnosticSetting" }, { type: "azure-native:monitor/v20210501preview:DiagnosticSetting" }] };
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
     * A string indicating whether the export to Log Analytics should use the default destination type, i.e. AzureDiagnostics, or use a destination type constructed as follows: <normalized service identity>_<normalized category name>. Possible values are: Dedicated and null (null is default.)
     */
    logAnalyticsDestinationType?: pulumi.Input<string>;
    /**
     * The list of logs settings.
     */
    logs?: pulumi.Input<pulumi.Input<types.inputs.LogSettingsArgs>[]>;
    /**
     * The full ARM resource ID of the Marketplace resource to which you would like to send Diagnostic Logs.
     */
    marketplacePartnerId?: pulumi.Input<string>;
    /**
     * The list of metric settings.
     */
    metrics?: pulumi.Input<pulumi.Input<types.inputs.MetricSettingsArgs>[]>;
    /**
     * The name of the diagnostic setting.
     */
    name?: pulumi.Input<string>;
    /**
     * The identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility.
     */
    serviceBusRuleId?: pulumi.Input<string>;
    /**
     * The resource ID of the storage account to which you would like to send Diagnostic Logs.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2
     */
    workspaceId?: pulumi.Input<string>;
}