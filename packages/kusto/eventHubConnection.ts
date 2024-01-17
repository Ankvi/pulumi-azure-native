import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing an event hub connection.
 * Azure REST API version: 2018-09-07-preview. Prior API version in Azure Native 1.x: 2018-09-07-preview.
 */
export class EventHubConnection extends pulumi.CustomResource {
    /**
     * Get an existing EventHubConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EventHubConnection {
        return new EventHubConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kusto:EventHubConnection';

    /**
     * Returns true if the given object is an instance of EventHubConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventHubConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventHubConnection.__pulumiType;
    }

    /**
     * The event hub consumer group.
     */
    public readonly consumerGroup!: pulumi.Output<string>;
    /**
     * The data format of the message. Optionally the data format can be added to each message.
     */
    public readonly dataFormat!: pulumi.Output<string | undefined>;
    /**
     * The resource ID of the event hub to be used to create a data connection.
     */
    public readonly eventHubResourceId!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
     */
    public readonly mappingRuleName!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The table where the data should be ingested. Optionally the table information can be added to each message.
     */
    public readonly tableName!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a EventHubConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventHubConnectionArgs, opts?: pulumi.CustomResourceOptions) {
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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["consumerGroup"] = args ? args.consumerGroup : undefined;
            resourceInputs["dataFormat"] = args ? args.dataFormat : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["eventHubConnectionName"] = args ? args.eventHubConnectionName : undefined;
            resourceInputs["eventHubResourceId"] = args ? args.eventHubResourceId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mappingRuleName"] = args ? args.mappingRuleName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["consumerGroup"] = undefined /*out*/;
            resourceInputs["dataFormat"] = undefined /*out*/;
            resourceInputs["eventHubResourceId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mappingRuleName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tableName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kusto/v20170907privatepreview:EventHubConnection" }, { type: "azure-native:kusto/v20180907preview:EventHubConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EventHubConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EventHubConnection resource.
 */
export interface EventHubConnectionArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The event hub consumer group.
     */
    consumerGroup: pulumi.Input<string>;
    /**
     * The data format of the message. Optionally the data format can be added to each message.
     */
    dataFormat?: pulumi.Input<string | types.enums.DataFormat>;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the event hub connection.
     */
    eventHubConnectionName?: pulumi.Input<string>;
    /**
     * The resource ID of the event hub to be used to create a data connection.
     */
    eventHubResourceId: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
     */
    mappingRuleName?: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The table where the data should be ingested. Optionally the table information can be added to each message.
     */
    tableName?: pulumi.Input<string>;
}