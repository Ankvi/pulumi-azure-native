import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a setting.
 */
export function getIPSyncer(args: GetIPSyncerArgs, opts?: pulumi.InvokeOptions): Promise<GetIPSyncerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20190101preview:getIPSyncer", {
        "operationalInsightsResourceProvider": args.operationalInsightsResourceProvider,
        "resourceGroupName": args.resourceGroupName,
        "settingsName": args.settingsName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIPSyncerArgs {
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
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
export interface GetIPSyncerResult {
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
     *
     * Expected value is 'IPSyncer'.
     */
    readonly kind: "IPSyncer";
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Azure resource type
     */
    readonly type: string;
}
/**
 * Gets a setting.
 */
export function getIPSyncerOutput(args: GetIPSyncerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIPSyncerResult> {
    return pulumi.output(args).apply((a: any) => getIPSyncer(a, opts))
}

export interface GetIPSyncerOutputArgs {
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
    settingsName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}