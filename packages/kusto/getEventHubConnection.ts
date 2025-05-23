import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns an Event Hub connection.
 *
 * Uses Azure REST API version 2018-09-07-preview.
 */
export function getEventHubConnection(args: GetEventHubConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetEventHubConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto:getEventHubConnection", {
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "eventHubConnectionName": args.eventHubConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEventHubConnectionArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: string;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: string;
    /**
     * The name of the event hub connection.
     */
    eventHubConnectionName: string;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: string;
}

/**
 * Class representing an event hub connection.
 */
export interface GetEventHubConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The event hub consumer group.
     */
    readonly consumerGroup: string;
    /**
     * The data format of the message. Optionally the data format can be added to each message.
     */
    readonly dataFormat?: string;
    /**
     * The resource ID of the event hub to be used to create a data connection.
     */
    readonly eventHubResourceId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
     */
    readonly mappingRuleName?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * Returns an Event Hub connection.
 *
 * Uses Azure REST API version 2018-09-07-preview.
 */
export function getEventHubConnectionOutput(args: GetEventHubConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEventHubConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kusto:getEventHubConnection", {
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "eventHubConnectionName": args.eventHubConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEventHubConnectionOutputArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the event hub connection.
     */
    eventHubConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: pulumi.Input<string>;
}