import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of an ASR replication protected item.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-06-01.
 */
export function getReplicationProtectedItem(args: GetReplicationProtectedItemArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationProtectedItemResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices:getReplicationProtectedItem", {
        "fabricName": args.fabricName,
        "protectionContainerName": args.protectionContainerName,
        "replicatedProtectedItemName": args.replicatedProtectedItemName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetReplicationProtectedItemArgs {
    /**
     * Fabric unique name.
     */
    fabricName: string;
    /**
     * Protection container name.
     */
    protectionContainerName: string;
    /**
     * Replication protected item name.
     */
    replicatedProtectedItemName: string;
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
 * Replication protected item.
 */
export interface GetReplicationProtectedItemResult {
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
     * The custom data.
     */
    readonly properties: types.outputs.ReplicationProtectedItemPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
/**
 * Gets the details of an ASR replication protected item.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-06-01.
 */
export function getReplicationProtectedItemOutput(args: GetReplicationProtectedItemOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicationProtectedItemResult> {
    return pulumi.output(args).apply((a: any) => getReplicationProtectedItem(a, opts))
}

export interface GetReplicationProtectedItemOutputArgs {
    /**
     * Fabric unique name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * Protection container name.
     */
    protectionContainerName: pulumi.Input<string>;
    /**
     * Replication protected item name.
     */
    replicatedProtectedItemName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
}
