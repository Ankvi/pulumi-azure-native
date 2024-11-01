import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Provides the details of the backed up item. This is an asynchronous operation. To know the status of the operation,
 * call the GetItemOperationResult API.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2016-06-01, 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01, 2024-04-30-preview, 2024-07-30-preview.
 */
export function getProtectedItem(args: GetProtectedItemArgs, opts?: pulumi.InvokeOptions): Promise<GetProtectedItemResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices:getProtectedItem", {
        "containerName": args.containerName,
        "fabricName": args.fabricName,
        "filter": args.filter,
        "protectedItemName": args.protectedItemName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetProtectedItemArgs {
    /**
     * Container name associated with the backed up item.
     */
    containerName: string;
    /**
     * Fabric name associated with the backed up item.
     */
    fabricName: string;
    /**
     * OData filter options.
     */
    filter?: string;
    /**
     * Backed up item name whose details are to be fetched.
     */
    protectedItemName: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    vaultName: string;
}

/**
 * Base class for backup items.
 */
export interface GetProtectedItemResult {
    /**
     * Optional ETag.
     */
    readonly eTag?: string;
    /**
     * Resource Id represents the complete path to the resource.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name associated with the resource.
     */
    readonly name: string;
    /**
     * ProtectedItemResource properties
     */
    readonly properties: types.outputs.AzureFileshareProtectedItemResponse | types.outputs.AzureIaaSClassicComputeVMProtectedItemResponse | types.outputs.AzureIaaSComputeVMProtectedItemResponse | types.outputs.AzureIaaSVMProtectedItemResponse | types.outputs.AzureSqlProtectedItemResponse | types.outputs.AzureVmWorkloadProtectedItemResponse | types.outputs.AzureVmWorkloadSAPAseDatabaseProtectedItemResponse | types.outputs.AzureVmWorkloadSAPHanaDBInstanceProtectedItemResponse | types.outputs.AzureVmWorkloadSAPHanaDatabaseProtectedItemResponse | types.outputs.AzureVmWorkloadSQLDatabaseProtectedItemResponse | types.outputs.DPMProtectedItemResponse | types.outputs.GenericProtectedItemResponse | types.outputs.MabFileFolderProtectedItemResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: string;
}
/**
 * Provides the details of the backed up item. This is an asynchronous operation. To know the status of the operation,
 * call the GetItemOperationResult API.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2016-06-01, 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01, 2024-04-30-preview, 2024-07-30-preview.
 */
export function getProtectedItemOutput(args: GetProtectedItemOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProtectedItemResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:recoveryservices:getProtectedItem", {
        "containerName": args.containerName,
        "fabricName": args.fabricName,
        "filter": args.filter,
        "protectedItemName": args.protectedItemName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetProtectedItemOutputArgs {
    /**
     * Container name associated with the backed up item.
     */
    containerName: pulumi.Input<string>;
    /**
     * Fabric name associated with the backed up item.
     */
    fabricName: pulumi.Input<string>;
    /**
     * OData filter options.
     */
    filter?: pulumi.Input<string>;
    /**
     * Backed up item name whose details are to be fetched.
     */
    protectedItemName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    vaultName: pulumi.Input<string>;
}