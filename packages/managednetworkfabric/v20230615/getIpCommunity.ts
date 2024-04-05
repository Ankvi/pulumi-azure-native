import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements an IP Community GET method.
 */
export function getIpCommunity(args: GetIpCommunityArgs, opts?: pulumi.InvokeOptions): Promise<GetIpCommunityResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230615:getIpCommunity", {
        "ipCommunityName": args.ipCommunityName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIpCommunityArgs {
    /**
     * Name of the IP Community.
     */
    ipCommunityName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The IP Community resource definition.
 */
export interface GetIpCommunityResult {
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * List of IP Community Rules.
     */
    readonly ipCommunityRules: types.outputs.IpCommunityRuleResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Implements an IP Community GET method.
 */
export function getIpCommunityOutput(args: GetIpCommunityOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpCommunityResult> {
    return pulumi.output(args).apply((a: any) => getIpCommunity(a, opts))
}

export interface GetIpCommunityOutputArgs {
    /**
     * Name of the IP Community.
     */
    ipCommunityName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}