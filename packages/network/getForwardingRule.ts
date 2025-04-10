import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets properties of a forwarding rule in a DNS forwarding ruleset.
 *
 * Uses Azure REST API version 2022-07-01.
 *
 * Other available API versions: 2023-07-01-preview.
 */
export function getForwardingRule(args: GetForwardingRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetForwardingRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getForwardingRule", {
        "dnsForwardingRulesetName": args.dnsForwardingRulesetName,
        "forwardingRuleName": args.forwardingRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetForwardingRuleArgs {
    /**
     * The name of the DNS forwarding ruleset.
     */
    dnsForwardingRulesetName: string;
    /**
     * The name of the forwarding rule.
     */
    forwardingRuleName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes a forwarding rule within a DNS forwarding ruleset.
 */
export interface GetForwardingRuleResult {
    /**
     * The domain name for the forwarding rule.
     */
    readonly domainName: string;
    /**
     * ETag of the forwarding rule.
     */
    readonly etag: string;
    /**
     * The state of forwarding rule.
     */
    readonly forwardingRuleState?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Metadata attached to the forwarding rule.
     */
    readonly metadata?: {[key: string]: string};
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The current provisioning state of the forwarding rule. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * DNS servers to forward the DNS query to.
     */
    readonly targetDnsServers: types.outputs.TargetDnsServerResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets properties of a forwarding rule in a DNS forwarding ruleset.
 *
 * Uses Azure REST API version 2022-07-01.
 *
 * Other available API versions: 2023-07-01-preview.
 */
export function getForwardingRuleOutput(args: GetForwardingRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetForwardingRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getForwardingRule", {
        "dnsForwardingRulesetName": args.dnsForwardingRulesetName,
        "forwardingRuleName": args.forwardingRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetForwardingRuleOutputArgs {
    /**
     * The name of the DNS forwarding ruleset.
     */
    dnsForwardingRulesetName: pulumi.Input<string>;
    /**
     * The name of the forwarding rule.
     */
    forwardingRuleName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}