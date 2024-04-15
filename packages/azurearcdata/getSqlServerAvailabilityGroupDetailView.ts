import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves detailed properties of the Availability Group.
 * Azure REST API version: 2024-01-01.
 */
export function getSqlServerAvailabilityGroupDetailView(args: GetSqlServerAvailabilityGroupDetailViewArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlServerAvailabilityGroupDetailViewResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurearcdata:getSqlServerAvailabilityGroupDetailView", {
        "availabilityGroupName": args.availabilityGroupName,
        "resourceGroupName": args.resourceGroupName,
        "sqlServerInstanceName": args.sqlServerInstanceName,
    }, opts);
}

export interface GetSqlServerAvailabilityGroupDetailViewArgs {
    /**
     * Name of SQL Availability Group
     */
    availabilityGroupName: string;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: string;
    /**
     * Name of SQL Server Instance
     */
    sqlServerInstanceName: string;
}

/**
 * Arc Sql Server Availability Group
 */
export interface GetSqlServerAvailabilityGroupDetailViewResult {
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
     * Properties of Arc Sql Server availability group
     */
    readonly properties: types.outputs.SqlServerAvailabilityGroupResourcePropertiesResponse;
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
 * Retrieves detailed properties of the Availability Group.
 * Azure REST API version: 2024-01-01.
 */
export function getSqlServerAvailabilityGroupDetailViewOutput(args: GetSqlServerAvailabilityGroupDetailViewOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlServerAvailabilityGroupDetailViewResult> {
    return pulumi.output(args).apply((a: any) => getSqlServerAvailabilityGroupDetailView(a, opts))
}

export interface GetSqlServerAvailabilityGroupDetailViewOutputArgs {
    /**
     * Name of SQL Availability Group
     */
    availabilityGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of SQL Server Instance
     */
    sqlServerInstanceName: pulumi.Input<string>;
}