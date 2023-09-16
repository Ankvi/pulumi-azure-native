import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Provides the details of the backed up item. This is an asynchronous operation. To know the status of the operation,
 * call the GetItemOperationResult API.
 */
export function getProtectedItem(args: GetProtectedItemArgs, opts?: pulumi.InvokeOptions): Promise<GetProtectedItemResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices/v20230401:getProtectedItem", {
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
    readonly properties: types.outputs.recoveryservices.v20230401.AzureFileshareProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureIaaSClassicComputeVMProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureIaaSComputeVMProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureIaaSVMProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureSqlProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureVmWorkloadProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureVmWorkloadSAPAseDatabaseProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureVmWorkloadSAPHanaDBInstanceProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureVmWorkloadSAPHanaDatabaseProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureVmWorkloadSQLDatabaseProtectedItemResponse | types.outputs.recoveryservices.v20230401.DPMProtectedItemResponse | types.outputs.recoveryservices.v20230401.GenericProtectedItemResponse | types.outputs.recoveryservices.v20230401.MabFileFolderProtectedItemResponse;
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
 */
export function getProtectedItemOutput(args: GetProtectedItemOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProtectedItemResult> {
    return pulumi.output(args).apply((a: any) => getProtectedItem(a, opts))
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
