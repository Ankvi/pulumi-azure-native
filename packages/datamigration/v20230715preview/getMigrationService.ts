import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the Database Migration Service
 */
export function getMigrationService(args: GetMigrationServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetMigrationServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration/v20230715preview:getMigrationService", {
        "migrationServiceName": args.migrationServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMigrationServiceArgs {
    /**
     * Name of the Migration Service.
     */
    migrationServiceName: string;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
}

/**
 * A Migration Service.
 */
export interface GetMigrationServiceResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Current state of the Integration runtime.
     */
    readonly integrationRuntimeState: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state to track the async operation status.
     */
    readonly provisioningState: string;
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
 * Retrieve the Database Migration Service
 */
export function getMigrationServiceOutput(args: GetMigrationServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMigrationServiceResult> {
    return pulumi.output(args).apply((a: any) => getMigrationService(a, opts))
}

export interface GetMigrationServiceOutputArgs {
    /**
     * Name of the Migration Service.
     */
    migrationServiceName: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}