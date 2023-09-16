import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An event source that receives its data from an Azure IoTHub.
 * Azure REST API version: 2020-05-15. Prior API version in Azure Native 1.x: 2020-05-15
 */
export class IoTHubEventSource extends pulumi.CustomResource {
    /**
     * Get an existing IoTHubEventSource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IoTHubEventSource {
        return new IoTHubEventSource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:timeseriesinsights:IoTHubEventSource';

    /**
     * Returns true if the given object is an instance of IoTHubEventSource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IoTHubEventSource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IoTHubEventSource.__pulumiType;
    }

    /**
     * The name of the iot hub's consumer group that holds the partitions from which events will be read.
     */
    public readonly consumerGroupName!: pulumi.Output<string>;
    /**
     * The time the resource was created.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * The resource id of the event source in Azure Resource Manager.
     */
    public readonly eventSourceResourceId!: pulumi.Output<string>;
    /**
     * The name of the iot hub.
     */
    public readonly iotHubName!: pulumi.Output<string>;
    /**
     * The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub.
     */
    public readonly keyName!: pulumi.Output<string>;
    /**
     * The kind of the event source.
     * Expected value is 'Microsoft.IoTHub'.
     */
    public readonly kind!: pulumi.Output<"Microsoft.IoTHub">;
    /**
     * An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.
     */
    public readonly localTimestamp!: pulumi.Output<types.outputs.timeseriesinsights.LocalTimestampResponse | undefined>;
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
     * Create a IoTHubEventSource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IoTHubEventSourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.consumerGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumerGroupName'");
            }
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.eventSourceResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventSourceResourceId'");
            }
            if ((!args || args.iotHubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'iotHubName'");
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
            if ((!args || args.sharedAccessKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sharedAccessKey'");
            }
            resourceInputs["consumerGroupName"] = args ? args.consumerGroupName : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["eventSourceName"] = args ? args.eventSourceName : undefined;
            resourceInputs["eventSourceResourceId"] = args ? args.eventSourceResourceId : undefined;
            resourceInputs["iotHubName"] = args ? args.iotHubName : undefined;
            resourceInputs["keyName"] = args ? args.keyName : undefined;
            resourceInputs["kind"] = "Microsoft.IoTHub";
            resourceInputs["localTimestamp"] = args ? args.localTimestamp : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sharedAccessKey"] = args ? args.sharedAccessKey : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["time"] = args ? args.time : undefined;
            resourceInputs["timestampPropertyName"] = args ? args.timestampPropertyName : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["consumerGroupName"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["eventSourceResourceId"] = undefined /*out*/;
            resourceInputs["iotHubName"] = undefined /*out*/;
            resourceInputs["keyName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["localTimestamp"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["time"] = undefined /*out*/;
            resourceInputs["timestampPropertyName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:timeseriesinsights/v20170228preview:IoTHubEventSource" }, { type: "azure-native:timeseriesinsights/v20171115:IoTHubEventSource" }, { type: "azure-native:timeseriesinsights/v20180815preview:IoTHubEventSource" }, { type: "azure-native:timeseriesinsights/v20200515:IoTHubEventSource" }, { type: "azure-native:timeseriesinsights/v20210331preview:IoTHubEventSource" }, { type: "azure-native:timeseriesinsights/v20210630preview:IoTHubEventSource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IoTHubEventSource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IoTHubEventSource resource.
 */
export interface IoTHubEventSourceArgs {
    /**
     * The name of the iot hub's consumer group that holds the partitions from which events will be read.
     */
    consumerGroupName: pulumi.Input<string>;
    /**
     * The name of the Time Series Insights environment associated with the specified resource group.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of the event source.
     */
    eventSourceName?: pulumi.Input<string>;
    /**
     * The resource id of the event source in Azure Resource Manager.
     */
    eventSourceResourceId: pulumi.Input<string>;
    /**
     * The name of the iot hub.
     */
    iotHubName: pulumi.Input<string>;
    /**
     * The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub.
     */
    keyName: pulumi.Input<string>;
    /**
     * The kind of the event source.
     * Expected value is 'Microsoft.IoTHub'.
     */
    kind: pulumi.Input<"Microsoft.IoTHub">;
    /**
     * An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.
     */
    localTimestamp?: pulumi.Input<types.inputs.timeseriesinsights.LocalTimestampArgs>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The value of the Shared Access Policy key that grants the Time Series Insights service read access to the iot hub. This property is not shown in event source responses.
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
