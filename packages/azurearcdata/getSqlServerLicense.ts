import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves a SQL Server license resource
 *
 * Uses Azure REST API version 2024-05-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurearcdata [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSqlServerLicense(args: GetSqlServerLicenseArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlServerLicenseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurearcdata:getSqlServerLicense", {
        "resourceGroupName": args.resourceGroupName,
        "sqlServerLicenseName": args.sqlServerLicenseName,
    }, opts);
}

export interface GetSqlServerLicenseArgs {
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: string;
    /**
     * Name of SQL Server License
     */
    sqlServerLicenseName: string;
}

/**
 * Describe SQL Server license resource.
 */
export interface GetSqlServerLicenseResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * SQL Server license properties
     */
    readonly properties: types.outputs.SqlServerLicensePropertiesResponse;
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
 * Retrieves a SQL Server license resource
 *
 * Uses Azure REST API version 2024-05-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurearcdata [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSqlServerLicenseOutput(args: GetSqlServerLicenseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSqlServerLicenseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurearcdata:getSqlServerLicense", {
        "resourceGroupName": args.resourceGroupName,
        "sqlServerLicenseName": args.sqlServerLicenseName,
    }, opts);
}

export interface GetSqlServerLicenseOutputArgs {
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of SQL Server License
     */
    sqlServerLicenseName: pulumi.Input<string>;
}