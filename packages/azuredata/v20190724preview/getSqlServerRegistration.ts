import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a SQL Server registration.
 */
export function getSqlServerRegistration(args: GetSqlServerRegistrationArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlServerRegistrationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredata/v20190724preview:getSqlServerRegistration", {
        "resourceGroupName": args.resourceGroupName,
        "sqlServerRegistrationName": args.sqlServerRegistrationName,
    }, opts);
}

export interface GetSqlServerRegistrationArgs {
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * Name of the SQL Server registration.
     */
    sqlServerRegistrationName: string;
}

/**
 * A SQL server registration.
 */
export interface GetSqlServerRegistrationResult {
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Optional Properties as JSON string
     */
    readonly propertyBag?: string;
    /**
     * Resource Group Name
     */
    readonly resourceGroup?: string;
    /**
     * Subscription Id
     */
    readonly subscriptionId?: string;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.azuredata.v20190724preview.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Gets a SQL Server registration.
 */
export function getSqlServerRegistrationOutput(args: GetSqlServerRegistrationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlServerRegistrationResult> {
    return pulumi.output(args).apply((a: any) => getSqlServerRegistration(a, opts))
}

export interface GetSqlServerRegistrationOutputArgs {
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the SQL Server registration.
     */
    sqlServerRegistrationName: pulumi.Input<string>;
}
