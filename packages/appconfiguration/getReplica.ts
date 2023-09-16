import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified replica.
 * Azure REST API version: 2023-03-01.
 */
export function getReplica(args: GetReplicaArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appconfiguration:getReplica", {
        "configStoreName": args.configStoreName,
        "replicaName": args.replicaName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetReplicaArgs {
    /**
     * The name of the configuration store.
     */
    configStoreName: string;
    /**
     * The name of the replica.
     */
    replicaName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: string;
}

/**
 * The replica resource.
 */
export interface GetReplicaResult {
    /**
     * The URI of the replica where the replica API will be available.
     */
    readonly endpoint: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The location of the replica.
     */
    readonly location?: string;
    /**
     * The name of the replica.
     */
    readonly name: string;
    /**
     * The provisioning state of the replica.
     */
    readonly provisioningState: string;
    /**
     * Resource system metadata.
     */
    readonly systemData: types.outputs.appconfiguration.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the properties of the specified replica.
 * Azure REST API version: 2023-03-01.
 */
export function getReplicaOutput(args: GetReplicaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicaResult> {
    return pulumi.output(args).apply((a: any) => getReplica(a, opts))
}

export interface GetReplicaOutputArgs {
    /**
     * The name of the configuration store.
     */
    configStoreName: pulumi.Input<string>;
    /**
     * The name of the replica.
     */
    replicaName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
