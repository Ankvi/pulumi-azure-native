import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a user rule.
 * Azure REST API version: 2022-04-01-preview.
 */
export function getDefaultUserRule(args: GetDefaultUserRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetDefaultUserRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getDefaultUserRule", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "ruleCollectionName": args.ruleCollectionName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetDefaultUserRuleArgs {
    /**
     * The name of the network manager Security Configuration.
     */
    configurationName: string;
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the network manager security Configuration rule collection.
     */
    ruleCollectionName: string;
    /**
     * The name of the rule.
     */
    ruleName: string;
}

/**
 * Network security default user rule.
 */
export interface GetDefaultUserRuleResult {
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    readonly description: string;
    /**
     * The destination port ranges.
     */
    readonly destinationPortRanges: string[];
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    readonly destinations: types.outputs.AddressPrefixItemResponse[];
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    readonly direction: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Default rule flag.
     */
    readonly flag?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Whether the rule is custom or default.
     * Expected value is 'Default'.
     */
    readonly kind: "Default";
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Network protocol this rule applies to.
     */
    readonly protocol: string;
    /**
     * The provisioning state of the security configuration user rule resource.
     */
    readonly provisioningState: string;
    /**
     * The source port ranges.
     */
    readonly sourcePortRanges: string[];
    /**
     * The CIDR or source IP ranges.
     */
    readonly sources: types.outputs.AddressPrefixItemResponse[];
    /**
     * The system metadata related to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a user rule.
 * Azure REST API version: 2022-04-01-preview.
 */
export function getDefaultUserRuleOutput(args: GetDefaultUserRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDefaultUserRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getDefaultUserRule", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "ruleCollectionName": args.ruleCollectionName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetDefaultUserRuleOutputArgs {
    /**
     * The name of the network manager Security Configuration.
     */
    configurationName: pulumi.Input<string>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the network manager security Configuration rule collection.
     */
    ruleCollectionName: pulumi.Input<string>;
    /**
     * The name of the rule.
     */
    ruleName: pulumi.Input<string>;
}