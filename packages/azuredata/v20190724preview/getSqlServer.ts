import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a SQL Server.
 */
export function getSqlServer(args: GetSqlServerArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlServerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredata/v20190724preview:getSqlServer", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "sqlServerName": args.sqlServerName,
        "sqlServerRegistrationName": args.sqlServerRegistrationName,
    }, opts);
}

export interface GetSqlServerArgs {
    /**
     * The child resources to include in the response.
     */
    expand?: string;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * Name of the SQL Server.
     */
    sqlServerName: string;
    /**
     * Name of the SQL Server registration.
     */
    sqlServerRegistrationName: string;
}

/**
 * A SQL server.
 */
export interface GetSqlServerResult {
    /**
     * Cores of the Sql Server.
     */
    readonly cores?: number;
    /**
     * Sql Server Edition.
     */
    readonly edition?: string;
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Sql Server Json Property Bag.
     */
    readonly propertyBag?: string;
    /**
     * ID for Parent Sql Server Registration.
     */
    readonly registrationID?: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
    /**
     * Version of the Sql Server.
     */
    readonly version?: string;
}
/**
 * Gets a SQL Server.
 */
export function getSqlServerOutput(args: GetSqlServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlServerResult> {
    return pulumi.output(args).apply((a: any) => getSqlServer(a, opts))
}

export interface GetSqlServerOutputArgs {
    /**
     * The child resources to include in the response.
     */
    expand?: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the SQL Server.
     */
    sqlServerName: pulumi.Input<string>;
    /**
     * Name of the SQL Server registration.
     */
    sqlServerRegistrationName: pulumi.Input<string>;
}