import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Log Profile for Firewall
 */
export function getFirewallLogProfile(args: GetFirewallLogProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallLogProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20220829:getFirewallLogProfile", {
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
 */
export function getFirewallLogProfileOutput(args: GetFirewallLogProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallLogProfileResult> {
    return pulumi.output(args).apply((a: any) => getFirewallLogProfile(a, opts))
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