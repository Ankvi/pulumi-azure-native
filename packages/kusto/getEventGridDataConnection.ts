import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns a data connection.
 *
 * Uses Azure REST API version 2024-04-13.
 */
export function getEventGridDataConnection(args: GetEventGridDataConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetEventGridDataConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto:getEventGridDataConnection", {
        "clusterName": args.clusterName,
        "dataConnectionName": args.dataConnectionName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEventGridDataConnectionArgs {
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
 * Class representing an Event Grid data connection.
 */
export interface GetEventGridDataConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The name of blob storage event type to process.
     */
    readonly blobStorageEventType?: string;
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
     * The resource ID of the event grid that is subscribed to the storage account events.
     */
    readonly eventGridResourceId?: string;
    /**
     * The resource ID where the event grid is configured to send events.
     */
    readonly eventHubResourceId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * A Boolean value that, if set to true, indicates that ingestion should ignore the first record of every file
     */
    readonly ignoreFirstRecord?: boolean;
    /**
     * Kind of the endpoint for the data connection
     * Expected value is 'EventGrid'.
     */
    readonly kind: "EventGrid";
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * The object ID of managedIdentityResourceId
     */
    readonly managedIdentityObjectId: string;
    /**
     * The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub and storage account.
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
     * The resource ID of the storage account where the data resides.
     */
    readonly storageAccountResourceId: string;
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
export function getEventGridDataConnectionOutput(args: GetEventGridDataConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEventGridDataConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kusto:getEventGridDataConnection", {
        "clusterName": args.clusterName,
        "dataConnectionName": args.dataConnectionName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEventGridDataConnectionOutputArgs {
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