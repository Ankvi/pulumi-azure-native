import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List mongo cluster connection strings. This includes the default connection string using SCRAM-SHA-256, as well as other connection strings supported by the cluster.
 * Azure REST API version: 2023-03-15-preview.
 */
export function listMongoClusterConnectionStrings(args: ListMongoClusterConnectionStringsArgs, opts?: pulumi.InvokeOptions): Promise<ListMongoClusterConnectionStringsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:listMongoClusterConnectionStrings", {
        "mongoClusterName": args.mongoClusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListMongoClusterConnectionStringsArgs {
    /**
     * The name of the mongo cluster.
     */
    mongoClusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The connection strings for the given mongo cluster.
 */
export interface ListMongoClusterConnectionStringsResult {
    /**
     * An array that contains the connection strings for a mongo cluster.
     */
    readonly connectionStrings: types.outputs.ConnectionStringResponse[];
}
/**
 * List mongo cluster connection strings. This includes the default connection string using SCRAM-SHA-256, as well as other connection strings supported by the cluster.
 * Azure REST API version: 2023-03-15-preview.
 */
export function listMongoClusterConnectionStringsOutput(args: ListMongoClusterConnectionStringsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListMongoClusterConnectionStringsResult> {
    return pulumi.output(args).apply((a: any) => listMongoClusterConnectionStrings(a, opts))
}

export interface ListMongoClusterConnectionStringsOutputArgs {
    /**
     * The name of the mongo cluster.
     */
    mongoClusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
