import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An event source that receives its data from an Azure EventHub.
 *
 * Uses Azure REST API version 2020-05-15. In version 2.x of the Azure Native provider, it used API version 2020-05-15.
 */
export class EventHubEventSource extends pulumi.CustomResource {
    /**
     * Get an existing EventHubEventSource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EventHubEventSource {
        return new EventHubEventSource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:timeseriesinsights:EventHubEventSource';

    /**
     * Returns true if the given object is an instance of EventHubEventSource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventHubEventSource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventHubEventSource.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the event hub's consumer group that holds the partitions from which events will be read.
     */
    public readonly consumerGroupName!: pulumi.Output<string>;
    /**
     * The time the resource was created.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * The name of the event hub.
     */
    public readonly eventHubName!: pulumi.Output<string>;
    /**
     * The resource id of the event source in Azure Resource Manager.
     */
    public readonly eventSourceResourceId!: pulumi.Output<string>;
    /**
     * The name of the SAS key that grants the Time Series Insights service access to the event hub. The shared access policies for this key must grant 'Listen' permissions to the event hub.
     */
    public readonly keyName!: pulumi.Output<string>;
    /**
     * The kind of the event source.
     * Expected value is 'Microsoft.EventHub'.
     */
    public readonly kind!: pulumi.Output<"Microsoft.EventHub">;
    /**
     * An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.
     */
    public readonly localTimestamp!: pulumi.Output<types.outputs.LocalTimestampResponse | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The name of the service bus that contains the event hub.
     */
    public readonly serviceBusNamespace!: pulumi.Output<string>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * ISO8601 UTC datetime with seconds precision (milliseconds are optional), specifying the date and time that will be the starting point for Events to be consumed.
     */
    public readonly time!: pulumi.Output<string | undefined>;
    /**
     * The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.
     */
    public readonly timestampPropertyName!: pulumi.Output<string | undefined>;
    /**
     * Resource type
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a EventHubEventSource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventHubEventSourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.consumerGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumerGroupName'");
            }
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.eventHubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventHubName'");
            }
            if ((!args || args.eventSourceResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventSourceResourceId'");
            }
            if ((!args || args.keyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceBusNamespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceBusNamespace'");
            }
            if ((!args || args.sharedAccessKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sharedAccessKey'");
            }
            resourceInputs["consumerGroupName"] = args ? args.consumerGroupName : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["eventHubName"] = args ? args.eventHubName : undefined;
            resourceInputs["eventSourceName"] = args ? args.eventSourceName : undefined;
            resourceInputs["eventSourceResourceId"] = args ? args.eventSourceResourceId : undefined;
            resourceInputs["keyName"] = args ? args.keyName : undefined;
            resourceInputs["kind"] = "Microsoft.EventHub";
            resourceInputs["localTimestamp"] = args ? args.localTimestamp : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceBusNamespace"] = args ? args.serviceBusNamespace : undefined;
            resourceInputs["sharedAccessKey"] = args ? args.sharedAccessKey : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["time"] = args ? args.time : undefined;
            resourceInputs["timestampPropertyName"] = args ? args.timestampPropertyName : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["consumerGroupName"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["eventHubName"] = undefined /*out*/;
            resourceInputs["eventSourceResourceId"] = undefined /*out*/;
            resourceInputs["keyName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["localTimestamp"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceBusNamespace"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["time"] = undefined /*out*/;
            resourceInputs["timestampPropertyName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:timeseriesinsights/v20170228preview:EventHubEventSource" }, { type: "azure-native:timeseriesinsights/v20171115:EventHubEventSource" }, { type: "azure-native:timeseriesinsights/v20180815preview:EventHubEventSource" }, { type: "azure-native:timeseriesinsights/v20200515:EventHubEventSource" }, { type: "azure-native:timeseriesinsights/v20210331preview:EventHubEventSource" }, { type: "azure-native:timeseriesinsights/v20210630preview:EventHubEventSource" }, { type: "azure-native:timeseriesinsights/v20210630preview:IoTHubEventSource" }, { type: "azure-native:timeseriesinsights:IoTHubEventSource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EventHubEventSource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EventHubEventSource resource.
 */
export interface EventHubEventSourceArgs {
    /**
     * The name of the event hub's consumer group that holds the partitions from which events will be read.
     */
    consumerGroupName: pulumi.Input<string>;
    /**
     * The name of the Time Series Insights environment associated with the specified resource group.
     */
    environmentName: pulumi.Input<string>;
    /**
     * The name of the event hub.
     */
    eventHubName: pulumi.Input<string>;
    /**
     * Name of the event source.
     */
    eventSourceName?: pulumi.Input<string>;
    /**
     * The resource id of the event source in Azure Resource Manager.
     */
    eventSourceResourceId: pulumi.Input<string>;
    /**
     * The name of the SAS key that grants the Time Series Insights service access to the event hub. The shared access policies for this key must grant 'Listen' permissions to the event hub.
     */
    keyName: pulumi.Input<string>;
    /**
     * The kind of the event source.
     * Expected value is 'Microsoft.EventHub'.
     */
    kind: pulumi.Input<"Microsoft.EventHub">;
    /**
     * An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.
     */
    localTimestamp?: pulumi.Input<types.inputs.LocalTimestampArgs>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service bus that contains the event hub.
     */
    serviceBusNamespace: pulumi.Input<string>;
    /**
     * The value of the shared access key that grants the Time Series Insights service read access to the event hub. This property is not shown in event source responses.
     */
    sharedAccessKey: pulumi.Input<string>;
    /**
     * Key-value pairs of additional properties for the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * ISO8601 UTC datetime with seconds precision (milliseconds are optional), specifying the date and time that will be the starting point for Events to be consumed.
     */
    time?: pulumi.Input<string>;
    /**
     * The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.
     */
    timestampPropertyName?: pulumi.Input<string>;
    /**
     * The type of the ingressStartAt, It can be "EarliestAvailable", "EventSourceCreationTime", "CustomEnqueuedTime".
     */
    type?: pulumi.Input<string | types.enums.IngressStartAtType>;
}