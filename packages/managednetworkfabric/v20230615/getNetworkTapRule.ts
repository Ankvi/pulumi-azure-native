import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Network Tap Rule resource details.
 */
export function getNetworkTapRule(args: GetNetworkTapRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkTapRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230615:getNetworkTapRule", {
        "networkTapRuleName": args.networkTapRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkTapRuleArgs {
    /**
     * Name of the Network Tap Rule.
     */
    networkTapRuleName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The NetworkTapRule resource definition.
 */
export interface GetNetworkTapRuleResult {
    /**
     * Administrative state of the resource.
     */
    readonly administrativeState: string;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * Configuration state of the resource.
     */
    readonly configurationState: string;
    /**
     * Input method to configure Network Tap Rule.
     */
    readonly configurationType: string;
    /**
     * List of dynamic match configurations.
     */
    readonly dynamicMatchConfigurations?: types.outputs.CommonDynamicMatchConfigurationResponse[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The last sync timestamp.
     */
    readonly lastSyncedTime: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * List of match configurations.
     */
    readonly matchConfigurations?: types.outputs.NetworkTapRuleMatchConfigurationResponse[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The ARM resource Id of the NetworkTap.
     */
    readonly networkTapId: string;
    /**
     * Polling interval in seconds.
     */
    readonly pollingIntervalInSeconds?: number;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Network Tap Rules file URL.
     */
    readonly tapRulesUrl?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get Network Tap Rule resource details.
 */
export function getNetworkTapRuleOutput(args: GetNetworkTapRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkTapRuleResult> {
    return pulumi.output(args).apply((a: any) => getNetworkTapRule(a, opts))
}

export interface GetNetworkTapRuleOutputArgs {
    /**
     * Name of the Network Tap Rule.
     */
    networkTapRuleName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}