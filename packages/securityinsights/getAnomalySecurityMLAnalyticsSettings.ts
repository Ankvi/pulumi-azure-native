import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Security ML Analytics Settings.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getAnomalySecurityMLAnalyticsSettings(args: GetAnomalySecurityMLAnalyticsSettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetAnomalySecurityMLAnalyticsSettingsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getAnomalySecurityMLAnalyticsSettings", {
        "resourceGroupName": args.resourceGroupName,
        "settingsResourceName": args.settingsResourceName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetAnomalySecurityMLAnalyticsSettingsArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Security ML Analytics Settings resource name
     */
    settingsResourceName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents Anomaly Security ML Analytics Settings
 */
export interface GetAnomalySecurityMLAnalyticsSettingsResult {
    /**
     * The anomaly settings version of the Anomaly security ml analytics settings that dictates whether job version gets updated or not.
     */
    readonly anomalySettingsVersion?: number;
    /**
     * The anomaly version of the AnomalySecurityMLAnalyticsSettings.
     */
    readonly anomalyVersion: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The customizable observations of the AnomalySecurityMLAnalyticsSettings.
     */
    readonly customizableObservations?: any;
    /**
     * The description of the SecurityMLAnalyticsSettings.
     */
    readonly description?: string;
    /**
     * The display name for settings created by this SecurityMLAnalyticsSettings.
     */
    readonly displayName: string;
    /**
     * Determines whether this settings is enabled or disabled.
     */
    readonly enabled: boolean;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * The frequency that this SecurityMLAnalyticsSettings will be run.
     */
    readonly frequency: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Determines whether this anomaly security ml analytics settings is a default settings
     */
    readonly isDefaultSettings: boolean;
    /**
     * The kind of security ML analytics settings
     * Expected value is 'Anomaly'.
     */
    readonly kind: "Anomaly";
    /**
     * The last time that this SecurityMLAnalyticsSettings has been modified.
     */
    readonly lastModifiedUtc: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The required data sources for this SecurityMLAnalyticsSettings
     */
    readonly requiredDataConnectors?: types.outputs.SecurityMLAnalyticsSettingsDataSourceResponse[];
    /**
     * The anomaly settings definition Id
     */
    readonly settingsDefinitionId?: string;
    /**
     * The anomaly SecurityMLAnalyticsSettings status
     */
    readonly settingsStatus: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The tactics of the SecurityMLAnalyticsSettings
     */
    readonly tactics?: string[];
    /**
     * The techniques of the SecurityMLAnalyticsSettings
     */
    readonly techniques?: string[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the Security ML Analytics Settings.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getAnomalySecurityMLAnalyticsSettingsOutput(args: GetAnomalySecurityMLAnalyticsSettingsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAnomalySecurityMLAnalyticsSettingsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getAnomalySecurityMLAnalyticsSettings", {
        "resourceGroupName": args.resourceGroupName,
        "settingsResourceName": args.settingsResourceName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetAnomalySecurityMLAnalyticsSettingsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Security ML Analytics Settings resource name
     */
    settingsResourceName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}