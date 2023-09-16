import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a setting.
 */
export function getAnomalies(args: GetAnomaliesArgs, opts?: pulumi.InvokeOptions): Promise<GetAnomaliesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20210301preview:getAnomalies", {
        "operationalInsightsResourceProvider": args.operationalInsightsResourceProvider,
        "resourceGroupName": args.resourceGroupName,
        "settingsName": args.settingsName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetAnomaliesArgs {
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The setting name. Supports - Anomalies, EyesOn, EntityAnalytics, Ueba
     */
    settingsName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Settings with single toggle.
 */
export interface GetAnomaliesResult {
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Determines whether the setting is enable or disabled.
     */
    readonly isEnabled: boolean;
    /**
     * The kind of the setting
     * Expected value is 'Anomalies'.
     */
    readonly kind: "Anomalies";
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.securityinsights.v20210301preview.SystemDataResponse;
    /**
     * Azure resource type
     */
    readonly type: string;
}
/**
 * Gets a setting.
 */
export function getAnomaliesOutput(args: GetAnomaliesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAnomaliesResult> {
    return pulumi.output(args).apply((a: any) => getAnomalies(a, opts))
}

export interface GetAnomaliesOutputArgs {
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The setting name. Supports - Anomalies, EyesOn, EntityAnalytics, Ueba
     */
    settingsName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
