import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns an attached database configuration.
 *
 * Uses Azure REST API version 2022-12-29.
 *
 * Other available API versions: 2023-05-02, 2023-08-15, 2024-04-13.
 */
export function getAttachedDatabaseConfiguration(args: GetAttachedDatabaseConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetAttachedDatabaseConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto:getAttachedDatabaseConfiguration", {
        "attachedDatabaseConfigurationName": args.attachedDatabaseConfigurationName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAttachedDatabaseConfigurationArgs {
    /**
     * The name of the attached database configuration.
     */
    attachedDatabaseConfigurationName: string;
    /**
     * The name of the Kusto cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: string;
}

/**
 * Class representing an attached database configuration.
 */
export interface GetAttachedDatabaseConfigurationResult {
    /**
     * The list of databases from the clusterResourceId which are currently attached to the cluster.
     */
    readonly attachedDatabaseNames: string[];
    /**
     * The resource id of the cluster where the databases you would like to attach reside.
     */
    readonly clusterResourceId: string;
    /**
     * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
     */
    readonly databaseName: string;
    /**
     * Overrides the original database name. Relevant only when attaching to a specific database.
     */
    readonly databaseNameOverride?: string;
    /**
     * Adds a prefix to the attached databases name. When following an entire cluster, that prefix would be added to all of the databases original names from leader cluster.
     */
    readonly databaseNamePrefix?: string;
    /**
     * The default principals modification kind
     */
    readonly defaultPrincipalsModificationKind: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Table level sharing specifications
     */
    readonly tableLevelSharingProperties?: types.outputs.TableLevelSharingPropertiesResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns an attached database configuration.
 *
 * Uses Azure REST API version 2022-12-29.
 *
 * Other available API versions: 2023-05-02, 2023-08-15, 2024-04-13.
 */
export function getAttachedDatabaseConfigurationOutput(args: GetAttachedDatabaseConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAttachedDatabaseConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kusto:getAttachedDatabaseConfiguration", {
        "attachedDatabaseConfigurationName": args.attachedDatabaseConfigurationName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAttachedDatabaseConfigurationOutputArgs {
    /**
     * The name of the attached database configuration.
     */
    attachedDatabaseConfigurationName: pulumi.Input<string>;
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: pulumi.Input<string>;
}