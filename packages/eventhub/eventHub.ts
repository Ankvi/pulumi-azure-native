import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Single item in List or Get Event Hub operation
 *
 * Uses Azure REST API version 2024-01-01. In version 2.x of the Azure Native provider, it used API version 2022-10-01-preview.
 *
 * Other available API versions: 2018-01-01-preview, 2021-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class EventHub extends pulumi.CustomResource {
    /**
     * Get an existing EventHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EventHub {
        return new EventHub(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventhub:EventHub';

    /**
     * Returns true if the given object is an instance of EventHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventHub {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventHub.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Properties of capture description
     */
    public readonly captureDescription!: pulumi.Output<types.outputs.CaptureDescriptionResponse | undefined>;
    /**
     * Exact time the Event Hub was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Number of days to retain the events for this Event Hub, value should be 1 to 7 days
     */
    public readonly messageRetentionInDays!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
     */
    public readonly partitionCount!: pulumi.Output<number | undefined>;
    /**
     * Current number of shards on the Event Hub.
     */
    public /*out*/ readonly partitionIds!: pulumi.Output<string[]>;
    /**
     * Event Hub retention settings
     */
    public readonly retentionDescription!: pulumi.Output<types.outputs.RetentionDescriptionResponse | undefined>;
    /**
     * Enumerates the possible values for the status of the Event Hub.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The exact time the message was updated.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * Gets and Sets Metadata of User.
     */
    public readonly userMetadata!: pulumi.Output<string | undefined>;

    /**
     * Create a EventHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventHubArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["captureDescription"] = args ? args.captureDescription : undefined;
            resourceInputs["eventHubName"] = args ? args.eventHubName : undefined;
            resourceInputs["messageRetentionInDays"] = args ? args.messageRetentionInDays : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["partitionCount"] = args ? args.partitionCount : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retentionDescription"] = args ? args.retentionDescription : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["userMetadata"] = args ? args.userMetadata : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partitionIds"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["captureDescription"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["messageRetentionInDays"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partitionCount"] = undefined /*out*/;
            resourceInputs["partitionIds"] = undefined /*out*/;
            resourceInputs["retentionDescription"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
            resourceInputs["userMetadata"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventhub/v20140901:EventHub" }, { type: "azure-native:eventhub/v20150801:EventHub" }, { type: "azure-native:eventhub/v20170401:EventHub" }, { type: "azure-native:eventhub/v20180101preview:EventHub" }, { type: "azure-native:eventhub/v20210101preview:EventHub" }, { type: "azure-native:eventhub/v20210601preview:EventHub" }, { type: "azure-native:eventhub/v20211101:EventHub" }, { type: "azure-native:eventhub/v20220101preview:EventHub" }, { type: "azure-native:eventhub/v20221001preview:EventHub" }, { type: "azure-native:eventhub/v20230101preview:EventHub" }, { type: "azure-native:eventhub/v20240101:EventHub" }, { type: "azure-native:eventhub/v20240501preview:EventHub" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EventHub.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EventHub resource.
 */
export interface EventHubArgs {
    /**
     * Properties of capture description
     */
    captureDescription?: pulumi.Input<types.inputs.CaptureDescriptionArgs>;
    /**
     * The Event Hub name
     */
    eventHubName?: pulumi.Input<string>;
    /**
     * Number of days to retain the events for this Event Hub, value should be 1 to 7 days
     */
    messageRetentionInDays?: pulumi.Input<number>;
    /**
     * The Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
     */
    partitionCount?: pulumi.Input<number>;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Event Hub retention settings
     */
    retentionDescription?: pulumi.Input<types.inputs.RetentionDescriptionArgs>;
    /**
     * Enumerates the possible values for the status of the Event Hub.
     */
    status?: pulumi.Input<types.enums.EntityStatus>;
    /**
     * Gets and Sets Metadata of User.
     */
    userMetadata?: pulumi.Input<string>;
}