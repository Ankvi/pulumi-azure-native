import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the properties of the specified replication.
 */
export function getReplication(args: GetReplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20221201:getReplication", {
        "registryName": args.registryName,
        "replicationName": args.replicationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetReplicationArgs {
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the replication.
     */
    replicationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An object that represents a replication for a container registry.
 */
export interface GetReplicationResult {
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning state of the replication at the time the operation was called.
     */
    readonly provisioningState: string;
    /**
     * Specifies whether the replication's regional endpoint is enabled. Requests will not be routed to a replication whose regional endpoint is disabled, however its data will continue to be synced with other replications.
     */
    readonly regionEndpointEnabled?: boolean;
    /**
     * The status of the replication at the time the operation was called.
     */
    readonly status: types.outputs.containerregistry.v20221201.StatusResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.containerregistry.v20221201.SystemDataResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * Whether or not zone redundancy is enabled for this container registry replication
     */
    readonly zoneRedundancy?: string;
}
/**
 * Gets the properties of the specified replication.
 */
export function getReplicationOutput(args: GetReplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicationResult> {
    return pulumi.output(args).apply((a: any) => getReplication(a, opts))
}

export interface GetReplicationOutputArgs {
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the replication.
     */
    replicationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
