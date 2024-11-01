import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2024-04-01-preview.
 *
 * Other available API versions: 2024-07-01-preview, 2024-10-01-preview.
 */
export function getConnectionRaiBlocklist(args: GetConnectionRaiBlocklistArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionRaiBlocklistResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getConnectionRaiBlocklist", {
        "connectionName": args.connectionName,
        "raiBlocklistItemName": args.raiBlocklistItemName,
        "raiBlocklistName": args.raiBlocklistName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetConnectionRaiBlocklistArgs {
    /**
     * Friendly name of the workspace connection
     */
    connectionName: string;
    /**
     * Name of the RaiBlocklist Item
     */
    raiBlocklistItemName: string;
    /**
     * The name of the RaiBlocklist.
     */
    raiBlocklistName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: string;
}

export interface GetConnectionRaiBlocklistResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * RAI Custom Blocklist Item properties.
     */
    readonly properties: types.outputs.RaiBlocklistItemPropertiesResponse;
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
 * Azure REST API version: 2024-04-01-preview.
 *
 * Other available API versions: 2024-07-01-preview, 2024-10-01-preview.
 */
export function getConnectionRaiBlocklistOutput(args: GetConnectionRaiBlocklistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectionRaiBlocklistResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:getConnectionRaiBlocklist", {
        "connectionName": args.connectionName,
        "raiBlocklistItemName": args.raiBlocklistItemName,
        "raiBlocklistName": args.raiBlocklistName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetConnectionRaiBlocklistOutputArgs {
    /**
     * Friendly name of the workspace connection
     */
    connectionName: pulumi.Input<string>;
    /**
     * Name of the RaiBlocklist Item
     */
    raiBlocklistItemName: pulumi.Input<string>;
    /**
     * The name of the RaiBlocklist.
     */
    raiBlocklistName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: pulumi.Input<string>;
}