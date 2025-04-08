import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements Access Control List GET method.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getAccessControlList(args: GetAccessControlListArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessControlListResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getAccessControlList", {
        "accessControlListName": args.accessControlListName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessControlListArgs {
    /**
     * Name of the Access Control List
     */
    accessControlListName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The AccessControlList resource definition.
 */
export interface GetAccessControlListResult {
    /**
     * IP address family. Example: ipv4 | ipv6.
     */
    readonly addressFamily: string;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * Access Control List conditions.
     */
    readonly conditions: types.outputs.AccessControlListConditionPropertiesResponse[];
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
}
/**
 * Implements Access Control List GET method.
 *
 * Uses Azure REST API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getAccessControlListOutput(args: GetAccessControlListOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccessControlListResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getAccessControlList", {
        "accessControlListName": args.accessControlListName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessControlListOutputArgs {
    /**
     * Name of the Access Control List
     */
    accessControlListName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}