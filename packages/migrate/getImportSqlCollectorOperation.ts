import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ImportSqlCollector
 *
 * Uses Azure REST API version 2024-03-03-preview.
 */
export function getImportSqlCollectorOperation(args: GetImportSqlCollectorOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetImportSqlCollectorOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getImportSqlCollectorOperation", {
        "importSqlCollectorsName": args.importSqlCollectorsName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetImportSqlCollectorOperationArgs {
    /**
     * Import SQL Collector arm name.
     */
    importSqlCollectorsName: string;
    /**
     * Assessment Project Name
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Import SQL Collector REST resource.
 */
export interface GetImportSqlCollectorOperationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.ImportSqlCollectorPropertiesResponse;
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
 * Get a ImportSqlCollector
 *
 * Uses Azure REST API version 2024-03-03-preview.
 */
export function getImportSqlCollectorOperationOutput(args: GetImportSqlCollectorOperationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetImportSqlCollectorOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getImportSqlCollectorOperation", {
        "importSqlCollectorsName": args.importSqlCollectorsName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetImportSqlCollectorOperationOutputArgs {
    /**
     * Import SQL Collector arm name.
     */
    importSqlCollectorsName: pulumi.Input<string>;
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}