import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Migration item.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01.
 */
export function getReplicationMigrationItem(args: GetReplicationMigrationItemArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationMigrationItemResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices:getReplicationMigrationItem", {
        "fabricName": args.fabricName,
        "migrationItemName": args.migrationItemName,
        "protectionContainerName": args.protectionContainerName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetReplicationMigrationItemArgs {
    /**
     * Fabric unique name.
     */
    fabricName: string;
    /**
     * Migration item name.
     */
    migrationItemName: string;
    /**
     * Protection container name.
     */
    protectionContainerName: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    resourceName: string;
}

/**
 * Migration item.
 */
export interface GetReplicationMigrationItemResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * The migration item properties.
     */
    readonly properties: types.outputs.MigrationItemPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
/**
 * Migration item.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01.
 */
export function getReplicationMigrationItemOutput(args: GetReplicationMigrationItemOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicationMigrationItemResult> {
    return pulumi.output(args).apply((a: any) => getReplicationMigrationItem(a, opts))
}

export interface GetReplicationMigrationItemOutputArgs {
    /**
     * Fabric unique name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * Migration item name.
     */
    migrationItemName: pulumi.Input<string>;
    /**
     * Protection container name.
     */
    protectionContainerName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
}