import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing an event hub data connection.
 *
 * Uses Azure REST API version 2024-04-13. In version 2.x of the Azure Native provider, it used API version 2022-12-29.
 */
export class EventHubDataConnection extends pulumi.CustomResource {
    /**
     * Get an existing EventHubDataConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EventHubDataConnection {
        return new EventHubDataConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kusto:EventHubDataConnection';

    /**
     * Returns true if the given object is an instance of EventHubDataConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventHubDataConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventHubDataConnection.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The event hub messages compression type
     */
    public readonly compression!: pulumi.Output<string | undefined>;
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
     * The resource ID of the event hub to be used to create a data connection.
     */
    public readonly eventHubResourceId!: pulumi.Output<string>;
    /**
     * System properties of the event hub
     */
    public readonly eventSystemProperties!: pulumi.Output<string[] | undefined>;
    /**
     * Kind of the endpoint for the data connection
     * Expected value is 'EventHub'.
     */
    public readonly kind!: pulumi.Output<"EventHub">;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The object ID of the managedIdentityResourceId
     */
    public /*out*/ readonly managedIdentityObjectId!: pulumi.Output<string>;
    /**
     * The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub.
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
     * When defined, the data connection retrieves existing Event hub events created since the Retrieval start date. It can only retrieve events retained by the Event hub, based on its retention period.
     */
    public readonly retrievalStartDate!: pulumi.Output<string | undefined>;
    /**
     * The table where the data should be ingested. Optionally the table information can be added to each message.
     */
    public readonly tableName!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a EventHubDataConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventHubDataConnectionArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["compression"] = args ? args.compression : undefined;
            resourceInputs["consumerGroup"] = args ? args.consumerGroup : undefined;
            resourceInputs["dataConnectionName"] = args ? args.dataConnectionName : undefined;
            resourceInputs["dataFormat"] = args ? args.dataFormat : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["databaseRouting"] = (args ? args.databaseRouting : undefined) ?? "Single";
            resourceInputs["eventHubResourceId"] = args ? args.eventHubResourceId : undefined;
            resourceInputs["eventSystemProperties"] = args ? args.eventSystemProperties : undefined;
            resourceInputs["kind"] = "EventHub";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedIdentityResourceId"] = args ? args.managedIdentityResourceId : undefined;
            resourceInputs["mappingRuleName"] = args ? args.mappingRuleName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retrievalStartDate"] = args ? args.retrievalStartDate : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["managedIdentityObjectId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["compression"] = undefined /*out*/;
            resourceInputs["consumerGroup"] = undefined /*out*/;
            resourceInputs["dataFormat"] = undefined /*out*/;
            resourceInputs["databaseRouting"] = undefined /*out*/;
            resourceInputs["eventHubResourceId"] = undefined /*out*/;
            resourceInputs["eventSystemProperties"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedIdentityObjectId"] = undefined /*out*/;
            resourceInputs["managedIdentityResourceId"] = undefined /*out*/;
            resourceInputs["mappingRuleName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["retrievalStartDate"] = undefined /*out*/;
            resourceInputs["tableName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kusto/v20190121:EventHubDataConnection" }, { type: "azure-native:kusto/v20190515:EventHubDataConnection" }, { type: "azure-native:kusto/v20190907:EventHubDataConnection" }, { type: "azure-native:kusto/v20191109:EventHubDataConnection" }, { type: "azure-native:kusto/v20200215:EventGridDataConnection" }, { type: "azure-native:kusto/v20200215:EventHubDataConnection" }, { type: "azure-native:kusto/v20200614:EventHubDataConnection" }, { type: "azure-native:kusto/v20200918:EventHubDataConnection" }, { type: "azure-native:kusto/v20210101:EventHubDataConnection" }, { type: "azure-native:kusto/v20210827:EventHubDataConnection" }, { type: "azure-native:kusto/v20220201:EventHubDataConnection" }, { type: "azure-native:kusto/v20220707:EventHubDataConnection" }, { type: "azure-native:kusto/v20221111:EventHubDataConnection" }, { type: "azure-native:kusto/v20221229:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20221229:EventGridDataConnection" }, { type: "azure-native:kusto/v20221229:EventHubDataConnection" }, { type: "azure-native:kusto/v20221229:IotHubDataConnection" }, { type: "azure-native:kusto/v20230502:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20230502:EventGridDataConnection" }, { type: "azure-native:kusto/v20230502:EventHubDataConnection" }, { type: "azure-native:kusto/v20230502:IotHubDataConnection" }, { type: "azure-native:kusto/v20230815:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20230815:EventGridDataConnection" }, { type: "azure-native:kusto/v20230815:EventHubDataConnection" }, { type: "azure-native:kusto/v20230815:IotHubDataConnection" }, { type: "azure-native:kusto/v20240413:CosmosDbDataConnection" }, { type: "azure-native:kusto/v20240413:EventGridDataConnection" }, { type: "azure-native:kusto/v20240413:EventHubDataConnection" }, { type: "azure-native:kusto/v20240413:IotHubDataConnection" }, { type: "azure-native:kusto:CosmosDbDataConnection" }, { type: "azure-native:kusto:EventGridDataConnection" }, { type: "azure-native:kusto:IotHubDataConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EventHubDataConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EventHubDataConnection resource.
 */
export interface EventHubDataConnectionArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The event hub messages compression type
     */
    compression?: pulumi.Input<string | types.enums.Compression>;
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
    dataFormat?: pulumi.Input<string | types.enums.EventHubDataFormat>;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: pulumi.Input<string>;
    /**
     * Indication for database routing information from the data connection, by default only database routing information is allowed
     */
    databaseRouting?: pulumi.Input<string | types.enums.DatabaseRouting>;
    /**
     * The resource ID of the event hub to be used to create a data connection.
     */
    eventHubResourceId: pulumi.Input<string>;
    /**
     * System properties of the event hub
     */
    eventSystemProperties?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Kind of the endpoint for the data connection
     * Expected value is 'EventHub'.
     */
    kind: pulumi.Input<"EventHub">;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub.
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
     * When defined, the data connection retrieves existing Event hub events created since the Retrieval start date. It can only retrieve events retained by the Event hub, based on its retention period.
     */
    retrievalStartDate?: pulumi.Input<string>;
    /**
     * The table where the data should be ingested. Optionally the table information can be added to each message.
     */
    tableName?: pulumi.Input<string>;
}