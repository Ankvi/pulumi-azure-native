import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a user rule.
 */
export function getUserRule(args: GetUserRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetUserRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20210501preview:getUserRule", {
        "configurationName": args.configurationName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "ruleCollectionName": args.ruleCollectionName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetUserRuleArgs {
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
 * Network security user rule.
 */
export interface GetUserRuleResult {
    /**
     * A description for this rule.
     */
    readonly description?: string;
    /**
     * The destination port ranges.
     */
    readonly destinationPortRanges?: string[];
    /**
     * The destination address prefixes. CIDR or destination IP ranges.
     */
    readonly destinations?: types.outputs.network.v20210501preview.AddressPrefixItemResponse[];
    /**
     * Indicates if the traffic matched against the rule in inbound or outbound.
     */
    readonly direction: string;
    /**
     * A friendly name for the rule.
     */
    readonly displayName?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Whether the rule is custom or default.
     * Expected value is 'Custom'.
     */
    readonly kind: "Custom";
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
    readonly sourcePortRanges?: string[];
    /**
     * The CIDR or source IP ranges.
     */
    readonly sources?: types.outputs.network.v20210501preview.AddressPrefixItemResponse[];
    /**
     * The system metadata related to this resource.
     */
    readonly systemData: types.outputs.network.v20210501preview.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a user rule.
 */
export function getUserRuleOutput(args: GetUserRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUserRuleResult> {
    return pulumi.output(args).apply((a: any) => getUserRule(a, opts))
}

export interface GetUserRuleOutputArgs {
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
