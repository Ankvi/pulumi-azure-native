import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves a SQL Managed Instance resource
 * Azure REST API version: 2023-01-15-preview.
 */
export function getSqlManagedInstance(args: GetSqlManagedInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlManagedInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurearcdata:getSqlManagedInstance", {
        "resourceGroupName": args.resourceGroupName,
        "sqlManagedInstanceName": args.sqlManagedInstanceName,
    }, opts);
}

export interface GetSqlManagedInstanceArgs {
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: string;
    /**
     * Name of SQL Managed Instance
     */
    sqlManagedInstanceName: string;
}

/**
 * A SqlManagedInstance.
 */
export interface GetSqlManagedInstanceResult {
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.azurearcdata.ExtendedLocationResponse;
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
     * null
     */
    readonly properties: types.outputs.azurearcdata.SqlManagedInstancePropertiesResponse;
    /**
     * Resource sku.
     */
    readonly sku?: types.outputs.azurearcdata.SqlManagedInstanceSkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.azurearcdata.SystemDataResponse;
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
 * Retrieves a SQL Managed Instance resource
 * Azure REST API version: 2023-01-15-preview.
 */
export function getSqlManagedInstanceOutput(args: GetSqlManagedInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlManagedInstanceResult> {
    return pulumi.output(args).apply((a: any) => getSqlManagedInstance(a, opts))
}

export interface GetSqlManagedInstanceOutputArgs {
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of SQL Managed Instance
     */
    sqlManagedInstanceName: pulumi.Input<string>;
}
