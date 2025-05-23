import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a mongo cluster.
 *
 * Uses Azure REST API version 2024-02-15-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-03-15-preview, 2023-09-15-preview, 2023-11-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMongoCluster(args: GetMongoClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetMongoClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cosmosdb:getMongoCluster", {
        "mongoClusterName": args.mongoClusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMongoClusterArgs {
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
 * Represents a mongo cluster resource.
 */
export interface GetMongoClusterResult {
    /**
     * The administrator's login for the mongo cluster.
     */
    readonly administratorLogin?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A status of the mongo cluster.
     */
    readonly clusterStatus: string;
    /**
     * The default mongo connection string for the cluster.
     */
    readonly connectionString: string;
    /**
     * Earliest restore timestamp in UTC ISO8601 format.
     */
    readonly earliestRestoreTime: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The list of node group specs in the cluster.
     */
    readonly nodeGroupSpecs?: types.outputs.NodeGroupSpecResponse[];
    /**
     * A provisioning state of the mongo cluster.
     */
    readonly provisioningState: string;
    /**
     * The Mongo DB server version. Defaults to the latest available version if not specified.
     */
    readonly serverVersion?: string;
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
 * Gets information about a mongo cluster.
 *
 * Uses Azure REST API version 2024-02-15-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-03-15-preview, 2023-09-15-preview, 2023-11-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMongoClusterOutput(args: GetMongoClusterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMongoClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cosmosdb:getMongoCluster", {
        "mongoClusterName": args.mongoClusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMongoClusterOutputArgs {
    /**
     * The name of the mongo cluster.
     */
    mongoClusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}