import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns a data connection.
 *
 * Uses Azure REST API version 2024-04-13.
 */
export function getEventHubDataConnection(args: GetEventHubDataConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetEventHubDataConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto:getEventHubDataConnection", {
        "clusterName": args.clusterName,
        "dataConnectionName": args.dataConnectionName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEventHubDataConnectionArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: string;
    /**
     * The name of the data connection.
     */
    dataConnectionName: string;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Class representing an event hub data connection.
 */
export interface GetEventHubDataConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The event hub messages compression type
     */
    readonly compression?: string;
    /**
     * The event hub consumer group.
     */
    readonly consumerGroup: string;
    /**
     * The data format of the message. Optionally the data format can be added to each message.
     */
    readonly dataFormat?: string;
    /**
     * Indication for database routing information from the data connection, by default only database routing information is allowed
     */
    readonly databaseRouting?: string;
    /**
     * The resource ID of the event hub to be used to create a data connection.
     */
    readonly eventHubResourceId: string;
    /**
     * System properties of the event hub
     */
    readonly eventSystemProperties?: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Kind of the endpoint for the data connection
     * Expected value is 'EventHub'.
     */
    readonly kind: "EventHub";
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * The object ID of the managedIdentityResourceId
     */
    readonly managedIdentityObjectId: string;
    /**
     * The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub.
     */
    readonly managedIdentityResourceId?: string;
    /**
     * The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
     */
    readonly mappingRuleName?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * When defined, the data connection retrieves existing Event hub events created since the Retrieval start date. It can only retrieve events retained by the Event hub, based on its retention period.
     */
    readonly retrievalStartDate?: string;
    /**
     * The table where the data should be ingested. Optionally the table information can be added to each message.
     */
    readonly tableName?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns a data connection.
 *
 * Uses Azure REST API version 2024-04-13.
 */
export function getEventHubDataConnectionOutput(args: GetEventHubDataConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEventHubDataConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kusto:getEventHubDataConnection", {
        "clusterName": args.clusterName,
        "dataConnectionName": args.dataConnectionName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEventHubDataConnectionOutputArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the data connection.
     */
    dataConnectionName: pulumi.Input<string>;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}