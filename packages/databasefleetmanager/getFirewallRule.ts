import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a firewall rule.
 *
 * Uses Azure REST API version 2025-02-01-preview.
 */
export function getFirewallRule(args: GetFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databasefleetmanager:getFirewallRule", {
        "firewallRuleName": args.firewallRuleName,
        "fleetName": args.fleetName,
        "fleetspaceName": args.fleetspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallRuleArgs {
    /**
     * Name of the firewall rule.
     */
    firewallRuleName: string;
    /**
     * Name of the database fleet.
     */
    fleetName: string;
    /**
     * Name of the fleetspace.
     */
    fleetspaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A firewall rule.
 */
export interface GetFirewallRuleResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A Firewall rule properties.
     */
    readonly properties: types.outputs.FirewallRulePropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a firewall rule.
 *
 * Uses Azure REST API version 2025-02-01-preview.
 */
export function getFirewallRuleOutput(args: GetFirewallRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databasefleetmanager:getFirewallRule", {
        "firewallRuleName": args.firewallRuleName,
        "fleetName": args.fleetName,
        "fleetspaceName": args.fleetspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallRuleOutputArgs {
    /**
     * Name of the firewall rule.
     */
    firewallRuleName: pulumi.Input<string>;
    /**
     * Name of the database fleet.
     */
    fleetName: pulumi.Input<string>;
    /**
     * Name of the fleetspace.
     */
    fleetspaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}