import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing an Event Grid data connection.
 *
 * Uses Azure REST API version 2024-04-13. In version 2.x of the Azure Native provider, it used API version 2022-12-29.
 */
export class EventGridDataConnection extends pulumi.CustomResource {
    /**
     * Get an existing EventGridDataConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EventGridDataConnection {
        return new EventGridDataConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kusto:EventGridDataConnection';

    /**
     * Returns true if the given object is an instance of EventGridDataConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventGridDataConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventGridDataConnection.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of blob storage event type to process.
     */
    public readonly blobStorageEventType!: pulumi.Output<string | undefined>;
    /**
     * The event hub consumer group.
     */
    public readonly consumerGroup!: pulumi.Output<string>;
    /**
     * The data format of the message. Optionally the data format can be added to each message.
     */
    public readonly dataFormat!: pulumi.Output<string | undefined>;
    /**
     * Indication for database routing information from the data connection, by default only database routing information is allowed
     */
    public readonly databaseRouting!: pulumi.Output<string | undefined>;
    /**
     * The resource ID of the event grid that is subscribed to the storage account events.
     */
    public readonly eventGridResourceId!: pulumi.Output<string | undefined>;
    /**
     * The resource ID where the event grid is configured to send events.
     */
    public readonly eventHubResourceId!: pulumi.Output<string>;
    /**
     * A Boolean value that, if set to true, indicates that ingestion should ignore the first record of every file
     */
    public readonly ignoreFirstRecord!: pulumi.Output<boolean | undefined>;
    /**
     * Kind of the endpoint for the data connection
     * Expected value is 'EventGrid'.
     */
    public readonly kind!: pulumi.Output<"EventGrid">;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The object ID of managedIdentityResourceId
     */
    public /*out*/ readonly managedIdentityObjectId!: pulumi.Output<string>;
    /**
     * The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub and storage account.
     */
    public readonly managedIdentityResourceId!: pulumi.Output<string | undefined>;
    /**
     * The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
     */
    public readonly mappingRuleName!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource ID of the storage account where the data resides.
     */
    public readonly storageAccountResourceId!: pulumi.Output<string>;
    /**
     * The table where the data should be ingested. Optionally the table information can be added to each message.
     */
    public readonly tableName!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a EventGridDataConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventGridDataConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.consumerGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumerGroup'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.eventHubResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventHubResourceId'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageAccountResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccountResourceId'");
            }
            resourceInputs["blobStorageEventType"] = args ? args.blobStorageEventType : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["consumerGroup"] = args ? args.consumerGroup : undefined;
            resourceInputs["dataConnectionName"] = args ? args.dataConnectionName : undefined;
            resourceInputs["dataFormat"] = args ? args.dataFormat : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["databaseRouting"] = (args ? args.databaseRouting : undefined) ?? "Single";
            resourceInputs["eventGridResourceId"] = args ? args.eventGridResourceId : undefined;
            resourceInputs["eventHubResourceId"] = args ? args.eventHubResourceId : undefined;
            resourceInputs["ignoreFirstRecord"] = args ? args.ignoreFirstRecord : undefined;
            resourceInputs["kind"] = "EventGrid";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedIdentityResourceId"] = args ? args.managedIdentityResourceId : undefined;
            resourceInputs["mappingRuleName"] = args ? args.mappingRuleName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccountResourceId"] = args ? args.storageAccountResourceId : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["managedIdentityObjectId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["blobStorageEventType"] = undefined /*out*/;
            resourceInputs["consumerGroup"] = undefined /*out*/;
            resourceInputs["dataFormat"] = undefined /*out*/;
            resourceInputs["databaseRouting"] = undefined /*out*/;
            resourceInputs["eventGridResourceId"] = undefined /*out*/;
            resourceInputs["eventHubResourceId"] = undefined /*out*/;
            resourceInputs["ignoreFirstRecord"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedIdentityObjectId"] = undefined /*out*/;
            resourceInputs["managedIdentityResourceId"] = undefined /*out*/;
            resourceInputs["mappingRuleName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["storageAccountResourceId"] = undefined /*out*/;
            resourceInputs["tableName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kusto/v20190121:EventGridDataConnection" }, { type: "azure-native:kusto/v20190515:EventGridDataConnection" }, { type: "azure-native:kusto/v20190907:EventGridDataConnection" }, { type: "azure-native:kusto/v20191109:EventGridDataConnection" }, { type: "azure-native:kusto/v20200215:EventGridDataConnection" }, { type: "azure-native:kusto/v20200614:EventGridDataConnection" }, { type: "azure-native:kusto/v20200918:EventGridDataConnection" }, { type: "azure-native:kusto/v20210101:EventGridDataConnection" }, { type: "azure-native:kusto/v20210827:EventGridDataConnection" }, { type: "azure-native:kusto/v20220201:EventGridDataConnection" }, { type: "azure-native:kusto/v20220707:EventGridDataConnection" }, { type: "azure-native:kusto/v20221111:EventGridDataConnection" }, { type: "azure-native:kusto/v20221229:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20221229:EventGridDataConnection" }, { type: "azure-native:kusto/v20221229:EventHubDataConnection" }, { type: "azure-native:kusto/v20221229:IotHubDataConnection" }, { type: "azure-native:kusto/v20230502:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20230502:EventGridDataConnection" }, { type: "azure-native:kusto/v20230502:EventHubDataConnection" }, { type: "azure-native:kusto/v20230502:IotHubDataConnection" }, { type: "azure-native:kusto/v20230815:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20230815:EventGridDataConnection" }, { type: "azure-native:kusto/v20230815:EventHubDataConnection" }, { type: "azure-native:kusto/v20230815:IotHubDataConnection" }, { type: "azure-native:kusto/v20240413:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20240413:EventGridDataConnection" }, { type: "azure-native:kusto/v20240413:EventHubDataConnection" }, { type: "azure-native:kusto/v20240413:IotHubDataConnection" }, { type: "azure-native:kusto:CosmosDbDataConnection" }, { type: "azure-native:kusto:EventHubDataConnection" }, { type: "azure-native:kusto:IotHubDataConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EventGridDataConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EventGridDataConnection resource.
 */
export interface EventGridDataConnectionArgs {
    /**
     * The name of blob storage event type to process.
     */
    blobStorageEventType?: pulumi.Input<string | types.enums.BlobStorageEventType>;
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The event hub consumer group.
     */
    consumerGroup: pulumi.Input<string>;
    /**
     * The name of the data connection.
     */
    dataConnectionName?: pulumi.Input<string>;
    /**
     * The data format of the message. Optionally the data format can be added to each message.
     */
    dataFormat?: pulumi.Input<string | types.enums.EventGridDataFormat>;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: pulumi.Input<string>;
    /**
     * Indication for database routing information from the data connection, by default only database routing information is allowed
     */
    databaseRouting?: pulumi.Input<string | types.enums.DatabaseRouting>;
    /**
     * The resource ID of the event grid that is subscribed to the storage account events.
     */
    eventGridResourceId?: pulumi.Input<string>;
    /**
     * The resource ID where the event grid is configured to send events.
     */
    eventHubResourceId: pulumi.Input<string>;
    /**
     * A Boolean value that, if set to true, indicates that ingestion should ignore the first record of every file
     */
    ignoreFirstRecord?: pulumi.Input<boolean>;
    /**
     * Kind of the endpoint for the data connection
     * Expected value is 'EventGrid'.
     */
    kind: pulumi.Input<"EventGrid">;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub and storage account.
     */
    managedIdentityResourceId?: pulumi.Input<string>;
    /**
     * The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
     */
    mappingRuleName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource ID of the storage account where the data resides.
     */
    storageAccountResourceId: pulumi.Input<string>;
    /**
     * The table where the data should be ingested. Optionally the table information can be added to each message.
     */
    tableName?: pulumi.Input<string>;
}