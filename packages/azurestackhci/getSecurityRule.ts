import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified security rule.
 * Azure REST API version: 2024-02-01-preview.
 */
export function getSecurityRule(args: GetSecurityRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getSecurityRule", {
        "networkSecurityGroupName": args.networkSecurityGroupName,
        "resourceGroupName": args.resourceGroupName,
        "securityRuleName": args.securityRuleName,
    }, opts);
}

export interface GetSecurityRuleArgs {
    /**
     * Name of the network security group
     */
    networkSecurityGroupName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the security rule.
     */
    securityRuleName: string;
}

/**
 * Security Rule resource.
 */
export interface GetSecurityRuleResult {
    /**
     * The network traffic is allowed or denied.
     */
    readonly access: string;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    readonly description?: string;
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    readonly destinationAddressPrefixes?: string[];
    /**
     * The destination port ranges. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    readonly destinationPortRanges?: string[];
    /**
     * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
     */
    readonly direction: string;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    readonly priority: number;
    /**
     * Network protocol this rule applies to.
     */
    readonly protocol: string;
    /**
     * Provisioning state of the SR
     */
    readonly provisioningState: string;
    /**
     * The CIDR or source IP ranges.
     */
    readonly sourceAddressPrefixes?: string[];
    /**
     * The source port ranges. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    readonly sourcePortRanges?: string[];
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
 * Gets the specified security rule.
 * Azure REST API version: 2024-02-01-preview.
 */
export function getSecurityRuleOutput(args: GetSecurityRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityRuleResult> {
    return pulumi.output(args).apply((a: any) => getSecurityRule(a, opts))
}

export interface GetSecurityRuleOutputArgs {
    /**
     * Name of the network security group
     */
    networkSecurityGroupName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the security rule.
     */
    securityRuleName: pulumi.Input<string>;
}