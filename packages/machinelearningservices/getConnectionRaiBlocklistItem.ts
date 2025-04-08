import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2024-04-01-preview.
 *
 * Other available API versions: 2024-07-01-preview, 2024-10-01-preview, 2025-01-01-preview.
 */
export function getConnectionRaiBlocklistItem(args: GetConnectionRaiBlocklistItemArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionRaiBlocklistItemResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getConnectionRaiBlocklistItem", {
        "connectionName": args.connectionName,
        "raiBlocklistName": args.raiBlocklistName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetConnectionRaiBlocklistItemArgs {
    /**
     * Friendly name of the workspace connection
     */
    connectionName: string;
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

export interface GetConnectionRaiBlocklistItemResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * RAI Custom Blocklist properties.
     */
    readonly properties: types.outputs.RaiBlocklistPropertiesResponse;
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
 * Uses Azure REST API version 2024-04-01-preview.
 *
 * Other available API versions: 2024-07-01-preview, 2024-10-01-preview, 2025-01-01-preview.
 */
export function getConnectionRaiBlocklistItemOutput(args: GetConnectionRaiBlocklistItemOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectionRaiBlocklistItemResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:getConnectionRaiBlocklistItem", {
        "connectionName": args.connectionName,
        "raiBlocklistName": args.raiBlocklistName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetConnectionRaiBlocklistItemOutputArgs {
    /**
     * Friendly name of the workspace connection
     */
    connectionName: pulumi.Input<string>;
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