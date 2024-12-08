import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements an IP Community GET method.
 * Azure REST API version: 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getIpCommunity(args: GetIpCommunityArgs, opts?: pulumi.InvokeOptions): Promise<GetIpCommunityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getIpCommunity", {
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
 * The IpCommunity resource definition.
 */
export interface GetIpCommunityResult {
    /**
     * Action to be taken on the configuration. Example: Permit | Deny.
     */
    readonly action: string;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * List the communityMembers of IP Community .
     */
    readonly communityMembers: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the provisioning state of the resource.
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
    /**
     * Supported well known Community List.
     */
    readonly wellKnownCommunities?: string[];
}
/**
 * Implements an IP Community GET method.
 * Azure REST API version: 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getIpCommunityOutput(args: GetIpCommunityOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIpCommunityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getIpCommunity", {
        "ipCommunityName": args.ipCommunityName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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