import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves a SQL Server ESU license resource
 * Azure REST API version: 2024-05-01-preview.
 */
export function getSqlServerEsuLicense(args: GetSqlServerEsuLicenseArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlServerEsuLicenseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurearcdata:getSqlServerEsuLicense", {
        "resourceGroupName": args.resourceGroupName,
        "sqlServerEsuLicenseName": args.sqlServerEsuLicenseName,
    }, opts);
}

export interface GetSqlServerEsuLicenseArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of SQL Server ESU License
     */
    sqlServerEsuLicenseName: string;
}

/**
 * Describe SQL Server ESU license resource.
 */
export interface GetSqlServerEsuLicenseResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * SQL Server ESU license properties
     */
    readonly properties: types.outputs.SqlServerEsuLicensePropertiesResponse;
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
 * Retrieves a SQL Server ESU license resource
 * Azure REST API version: 2024-05-01-preview.
 */
export function getSqlServerEsuLicenseOutput(args: GetSqlServerEsuLicenseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlServerEsuLicenseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurearcdata:getSqlServerEsuLicense", {
        "resourceGroupName": args.resourceGroupName,
        "sqlServerEsuLicenseName": args.sqlServerEsuLicenseName,
    }, opts);
}

export interface GetSqlServerEsuLicenseOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of SQL Server ESU License
     */
    sqlServerEsuLicenseName: pulumi.Input<string>;
}