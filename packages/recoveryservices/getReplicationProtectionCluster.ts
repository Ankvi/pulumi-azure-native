import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of an ASR replication protection cluster.
 * Azure REST API version: 2024-02-01.
 *
 * Other available API versions: 2024-04-01, 2024-10-01.
 */
export function getReplicationProtectionCluster(args: GetReplicationProtectionClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationProtectionClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices:getReplicationProtectionCluster", {
        "fabricName": args.fabricName,
        "protectionContainerName": args.protectionContainerName,
        "replicationProtectionClusterName": args.replicationProtectionClusterName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetReplicationProtectionClusterArgs {
    /**
     * Fabric name.
     */
    fabricName: string;
    /**
     * Protection container name.
     */
    protectionContainerName: string;
    /**
     * Replication protection cluster name.
     */
    replicationProtectionClusterName: string;
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
 * Replication protection Cluster.
 */
export interface GetReplicationProtectionClusterResult {
    /**
     * The protection cluster Id.
     */
    readonly id: string;
    /**
     * The name of the protection cluster.
     */
    readonly name: string;
    /**
     * The custom data.
     */
    readonly properties: types.outputs.ReplicationProtectionClusterPropertiesResponse;
    /**
     * The Type of the object.
     */
    readonly type: string;
}
/**
 * Gets the details of an ASR replication protection cluster.
 * Azure REST API version: 2024-02-01.
 *
 * Other available API versions: 2024-04-01, 2024-10-01.
 */
export function getReplicationProtectionClusterOutput(args: GetReplicationProtectionClusterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetReplicationProtectionClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:recoveryservices:getReplicationProtectionCluster", {
        "fabricName": args.fabricName,
        "protectionContainerName": args.protectionContainerName,
        "replicationProtectionClusterName": args.replicationProtectionClusterName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetReplicationProtectionClusterOutputArgs {
    /**
     * Fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * Protection container name.
     */
    protectionContainerName: pulumi.Input<string>;
    /**
     * Replication protection cluster name.
     */
    replicationProtectionClusterName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
}