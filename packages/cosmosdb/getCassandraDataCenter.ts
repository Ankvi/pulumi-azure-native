import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the properties of a managed Cassandra data center.
 *
 * Uses Azure REST API version 2024-11-15.
 *
 * Other available API versions: 2021-03-01-preview, 2021-04-01-preview, 2021-07-01-preview, 2021-10-15, 2021-10-15-preview, 2021-11-15-preview, 2022-02-15-preview, 2022-05-15, 2022-05-15-preview, 2022-08-15, 2022-08-15-preview, 2022-11-15, 2022-11-15-preview, 2023-03-01-preview, 2023-03-15, 2023-03-15-preview, 2023-04-15, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-12-01-preview, 2025-04-15, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCassandraDataCenter(args: GetCassandraDataCenterArgs, opts?: pulumi.InvokeOptions): Promise<GetCassandraDataCenterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cosmosdb:getCassandraDataCenter", {
        "clusterName": args.clusterName,
        "dataCenterName": args.dataCenterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCassandraDataCenterArgs {
    /**
     * Managed Cassandra cluster name.
     */
    clusterName: string;
    /**
     * Data center name in a managed Cassandra cluster.
     */
    dataCenterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A managed Cassandra data center.
 */
export interface GetCassandraDataCenterResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The unique resource identifier of the database account.
     */
    readonly id: string;
    /**
     * The name of the database account.
     */
    readonly name: string;
    /**
     * Properties of a managed Cassandra data center.
     */
    readonly properties: types.outputs.DataCenterResourceResponseProperties;
    /**
     * The type of Azure resource.
     */
    readonly type: string;
}
/**
 * Get the properties of a managed Cassandra data center.
 *
 * Uses Azure REST API version 2024-11-15.
 *
 * Other available API versions: 2021-03-01-preview, 2021-04-01-preview, 2021-07-01-preview, 2021-10-15, 2021-10-15-preview, 2021-11-15-preview, 2022-02-15-preview, 2022-05-15, 2022-05-15-preview, 2022-08-15, 2022-08-15-preview, 2022-11-15, 2022-11-15-preview, 2023-03-01-preview, 2023-03-15, 2023-03-15-preview, 2023-04-15, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-12-01-preview, 2025-04-15, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCassandraDataCenterOutput(args: GetCassandraDataCenterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCassandraDataCenterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cosmosdb:getCassandraDataCenter", {
        "clusterName": args.clusterName,
        "dataCenterName": args.dataCenterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCassandraDataCenterOutputArgs {
    /**
     * Managed Cassandra cluster name.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Data center name in a managed Cassandra cluster.
     */
    dataCenterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}