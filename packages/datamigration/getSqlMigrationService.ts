import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the Database Migration Service
 * Azure REST API version: 2022-03-30-preview.
 */
export function getSqlMigrationService(args: GetSqlMigrationServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlMigrationServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration:getSqlMigrationService", {
        "resourceGroupName": args.resourceGroupName,
        "sqlMigrationServiceName": args.sqlMigrationServiceName,
    }, opts);
}

export interface GetSqlMigrationServiceArgs {
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * Name of the SQL Migration Service.
     */
    sqlMigrationServiceName: string;
}

/**
 * A SQL Migration Service.
 */
export interface GetSqlMigrationServiceResult {
    readonly id: string;
    /**
     * Current state of the Integration runtime.
     */
    readonly integrationRuntimeState: string;
    readonly location?: string;
    readonly name: string;
    /**
     * Provisioning state to track the async operation status.
     */
    readonly provisioningState: string;
    readonly systemData: types.outputs.SystemDataResponse;
    readonly tags?: {[key: string]: string};
    readonly type: string;
}
/**
 * Retrieve the Database Migration Service
 * Azure REST API version: 2022-03-30-preview.
 */
export function getSqlMigrationServiceOutput(args: GetSqlMigrationServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlMigrationServiceResult> {
    return pulumi.output(args).apply((a: any) => getSqlMigrationService(a, opts))
}

export interface GetSqlMigrationServiceOutputArgs {
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the SQL Migration Service.
     */
    sqlMigrationServiceName: pulumi.Input<string>;
}
