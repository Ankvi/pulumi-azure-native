import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing an event hub data connection.
 *
 * Uses Azure REST API version 2021-06-01-preview. In version 2.x of the Azure Native provider, it used API version 2021-06-01-preview.
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
    public static readonly __pulumiType = 'azure-native:synapse:EventHubDataConnection';

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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
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
            if ((!args || args.kustoPoolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kustoPoolName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["compression"] = args ? args.compression : undefined;
            resourceInputs["consumerGroup"] = args ? args.consumerGroup : undefined;
            resourceInputs["dataConnectionName"] = args ? args.dataConnectionName : undefined;
            resourceInputs["dataFormat"] = args ? args.dataFormat : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["eventHubResourceId"] = args ? args.eventHubResourceId : undefined;
            resourceInputs["eventSystemProperties"] = args ? args.eventSystemProperties : undefined;
            resourceInputs["kind"] = "EventHub";
            resourceInputs["kustoPoolName"] = args ? args.kustoPoolName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedIdentityResourceId"] = args ? args.managedIdentityResourceId : undefined;
            resourceInputs["mappingRuleName"] = args ? args.mappingRuleName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["compression"] = undefined /*out*/;
            resourceInputs["consumerGroup"] = undefined /*out*/;
            resourceInputs["dataFormat"] = undefined /*out*/;
            resourceInputs["eventHubResourceId"] = undefined /*out*/;
            resourceInputs["eventSystemProperties"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedIdentityResourceId"] = undefined /*out*/;
            resourceInputs["mappingRuleName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tableName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:synapse/v20210401preview:EventHubDataConnection" }, { type: "azure-native:synapse/v20210601preview:EventGridDataConnection" }, { type: "azure-native:synapse/v20210601preview:EventHubDataConnection" }, { type: "azure-native:synapse/v20210601preview:IotHubDataConnection" }, { type: "azure-native:synapse:EventGridDataConnection" }, { type: "azure-native:synapse:IotHubDataConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EventHubDataConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EventHubDataConnection resource.
 */
export interface EventHubDataConnectionArgs {
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
     * The name of the database in the Kusto pool.
     */
    databaseName: pulumi.Input<string>;
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
     * The name of the Kusto pool.
     */
    kustoPoolName: pulumi.Input<string>;
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
     * The table where the data should be ingested. Optionally the table information can be added to each message.
     */
    tableName?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}