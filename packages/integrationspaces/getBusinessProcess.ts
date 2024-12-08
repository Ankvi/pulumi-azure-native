import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a BusinessProcess
 * Azure REST API version: 2023-11-14-preview.
 */
export function getBusinessProcess(args: GetBusinessProcessArgs, opts?: pulumi.InvokeOptions): Promise<GetBusinessProcessResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:integrationspaces:getBusinessProcess", {
        "applicationName": args.applicationName,
        "businessProcessName": args.businessProcessName,
        "resourceGroupName": args.resourceGroupName,
        "spaceName": args.spaceName,
    }, opts);
}

export interface GetBusinessProcessArgs {
    /**
     * The name of the Application
     */
    applicationName: string;
    /**
     * The name of the business process
     */
    businessProcessName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the space
     */
    spaceName: string;
}

/**
 * A business process under application.
 */
export interface GetBusinessProcessResult {
    /**
     * The business process mapping.
     */
    readonly businessProcessMapping?: {[key: string]: types.outputs.BusinessProcessMappingItemResponse};
    /**
     * The business process stages.
     */
    readonly businessProcessStages?: {[key: string]: types.outputs.BusinessProcessStageResponse};
    /**
     * The description of the business process.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The business process identifier.
     */
    readonly identifier?: types.outputs.BusinessProcessIdentifierResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The table name of the business process.
     */
    readonly tableName?: string;
    /**
     * The tracking data store reference name.
     */
    readonly trackingDataStoreReferenceName?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The version of the business process.
     */
    readonly version: string;
}
/**
 * Get a BusinessProcess
 * Azure REST API version: 2023-11-14-preview.
 */
export function getBusinessProcessOutput(args: GetBusinessProcessOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBusinessProcessResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:integrationspaces:getBusinessProcess", {
        "applicationName": args.applicationName,
        "businessProcessName": args.businessProcessName,
        "resourceGroupName": args.resourceGroupName,
        "spaceName": args.spaceName,
    }, opts);
}

export interface GetBusinessProcessOutputArgs {
    /**
     * The name of the Application
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the business process
     */
    businessProcessName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the space
     */
    spaceName: pulumi.Input<string>;
}