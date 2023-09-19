import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the replication extension.
 */
export function getReplicationExtension(args: GetReplicationExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationExtensionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datareplication/v20210216preview:getReplicationExtension", {
        "replicationExtensionName": args.replicationExtensionName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetReplicationExtensionArgs {
    /**
     * The replication extension name.
     */
    replicationExtensionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The vault name.
     */
    vaultName: string;
}

/**
 * Replication extension model.
 */
export interface GetReplicationExtensionResult {
    /**
     * Gets or sets the Id of the resource.
     */
    readonly id: string;
    /**
     * Gets or sets the name of the resource.
     */
    readonly name: string;
    /**
     * Replication extension model properties.
     */
    readonly properties: types.outputs.ReplicationExtensionModelPropertiesResponse;
    readonly systemData: types.outputs.ReplicationExtensionModelResponseSystemData;
    /**
     * Gets or sets the type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the details of the replication extension.
 */
export function getReplicationExtensionOutput(args: GetReplicationExtensionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicationExtensionResult> {
    return pulumi.output(args).apply((a: any) => getReplicationExtension(a, opts))
}

export interface GetReplicationExtensionOutputArgs {
    /**
     * The replication extension name.
     */
    replicationExtensionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The vault name.
     */
    vaultName: pulumi.Input<string>;
}
