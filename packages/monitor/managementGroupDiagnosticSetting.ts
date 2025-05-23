import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The management group diagnostic setting resource.
 *
 * Uses Azure REST API version 2021-05-01-preview.
 */
export class ManagementGroupDiagnosticSetting extends pulumi.CustomResource {
    /**
     * Get an existing ManagementGroupDiagnosticSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagementGroupDiagnosticSetting {
        return new ManagementGroupDiagnosticSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:monitor:ManagementGroupDiagnosticSetting';

    /**
     * Returns true if the given object is an instance of ManagementGroupDiagnosticSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementGroupDiagnosticSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementGroupDiagnosticSetting.__pulumiType;
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
    public readonly logs!: pulumi.Output<types.outputs.ManagementGroupLogSettingsResponse[] | undefined>;
    /**
     * The full ARM resource ID of the Marketplace resource to which you would like to send Diagnostic Logs.
     */
    public readonly marketplacePartnerId!: pulumi.Output<string | undefined>;
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
     * Create a ManagementGroupDiagnosticSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagementGroupDiagnosticSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.managementGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managementGroupId'");
            }
            resourceInputs["eventHubAuthorizationRuleId"] = args ? args.eventHubAuthorizationRuleId : undefined;
            resourceInputs["eventHubName"] = args ? args.eventHubName : undefined;
            resourceInputs["logs"] = args ? args.logs : undefined;
            resourceInputs["managementGroupId"] = args ? args.managementGroupId : undefined;
            resourceInputs["marketplacePartnerId"] = args ? args.marketplacePartnerId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
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
            resourceInputs["logs"] = undefined /*out*/;
            resourceInputs["marketplacePartnerId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["serviceBusRuleId"] = undefined /*out*/;
            resourceInputs["storageAccountId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workspaceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights/v20200101preview:ManagementGroupDiagnosticSetting" }, { type: "azure-native:insights/v20210501preview:ManagementGroupDiagnosticSetting" }, { type: "azure-native:insights:ManagementGroupDiagnosticSetting" }, { type: "azure-native:monitor/v20200101preview:ManagementGroupDiagnosticSetting" }, { type: "azure-native:monitor/v20210501preview:ManagementGroupDiagnosticSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagementGroupDiagnosticSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagementGroupDiagnosticSetting resource.
 */
export interface ManagementGroupDiagnosticSettingArgs {
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
    logs?: pulumi.Input<pulumi.Input<types.inputs.ManagementGroupLogSettingsArgs>[]>;
    /**
     * The management group id.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * The full ARM resource ID of the Marketplace resource to which you would like to send Diagnostic Logs.
     */
    marketplacePartnerId?: pulumi.Input<string>;
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
     * The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2
     */
    workspaceId?: pulumi.Input<string>;
}