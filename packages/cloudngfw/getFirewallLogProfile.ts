import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Log Profile for Firewall
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function getFirewallLogProfile(args: GetFirewallLogProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallLogProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:getFirewallLogProfile", {
        "firewallName": args.firewallName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallLogProfileArgs {
    /**
     * Firewall resource name
     */
    firewallName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Log Settings for Firewall
 */
export interface GetFirewallLogProfileResult {
    /**
     * Application Insight details
     */
    readonly applicationInsights?: types.outputs.ApplicationInsightsResponse;
    /**
     * Common destination configurations
     */
    readonly commonDestination?: types.outputs.LogDestinationResponse;
    /**
     * Decrypt destination configurations
     */
    readonly decryptLogDestination?: types.outputs.LogDestinationResponse;
    /**
     * Log option SAME/INDIVIDUAL
     */
    readonly logOption?: string;
    /**
     * One of possible log type
     */
    readonly logType?: string;
    /**
     * Threat destination configurations
     */
    readonly threatLogDestination?: types.outputs.LogDestinationResponse;
    /**
     * Traffic destination configurations
     */
    readonly trafficLogDestination?: types.outputs.LogDestinationResponse;
}
/**
 * Log Profile for Firewall
 * Azure REST API version: 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview.
 */
export function getFirewallLogProfileOutput(args: GetFirewallLogProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallLogProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:getFirewallLogProfile", {
        "firewallName": args.firewallName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallLogProfileOutputArgs {
    /**
     * Firewall resource name
     */
    firewallName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}