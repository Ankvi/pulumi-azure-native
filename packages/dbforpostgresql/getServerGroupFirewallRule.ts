import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a cluster firewall rule.
 *
 * Uses Azure REST API version 2023-03-02-preview.
 *
 * Other available API versions: 2022-11-08. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dbforpostgresql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getServerGroupFirewallRule(args: GetServerGroupFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetServerGroupFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql:getServerGroupFirewallRule", {
        "clusterName": args.clusterName,
        "firewallRuleName": args.firewallRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetServerGroupFirewallRuleArgs {
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the cluster firewall rule.
     */
    firewallRuleName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a cluster firewall rule.
 */
export interface GetServerGroupFirewallRuleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The end IP address of the cluster firewall rule. Must be IPv4 format.
     */
    readonly endIpAddress: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the firewall rule.
     */
    readonly provisioningState: string;
    /**
     * The start IP address of the cluster firewall rule. Must be IPv4 format.
     */
    readonly startIpAddress: string;
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
 * Gets information about a cluster firewall rule.
 *
 * Uses Azure REST API version 2023-03-02-preview.
 *
 * Other available API versions: 2022-11-08. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dbforpostgresql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getServerGroupFirewallRuleOutput(args: GetServerGroupFirewallRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServerGroupFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbforpostgresql:getServerGroupFirewallRule", {
        "clusterName": args.clusterName,
        "firewallRuleName": args.firewallRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetServerGroupFirewallRuleOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the cluster firewall rule.
     */
    firewallRuleName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}