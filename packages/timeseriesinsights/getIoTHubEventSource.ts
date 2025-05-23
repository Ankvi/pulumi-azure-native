import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the event source with the specified name in the specified environment.
 *
 * Uses Azure REST API version 2020-05-15.
 */
export function getIoTHubEventSource(args: GetIoTHubEventSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetIoTHubEventSourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:timeseriesinsights:getIoTHubEventSource", {
        "environmentName": args.environmentName,
        "eventSourceName": args.eventSourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIoTHubEventSourceArgs {
    /**
     * The name of the Time Series Insights environment associated with the specified resource group.
     */
    environmentName: string;
    /**
     * The name of the Time Series Insights event source associated with the specified environment.
     */
    eventSourceName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * An event source that receives its data from an Azure IoTHub.
 */
export interface GetIoTHubEventSourceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The name of the iot hub's consumer group that holds the partitions from which events will be read.
     */
    readonly consumerGroupName: string;
    /**
     * The time the resource was created.
     */
    readonly creationTime: string;
    /**
     * The resource id of the event source in Azure Resource Manager.
     */
    readonly eventSourceResourceId: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The name of the iot hub.
     */
    readonly iotHubName: string;
    /**
     * The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub.
     */
    readonly keyName: string;
    /**
     * The kind of the event source.
     * Expected value is 'Microsoft.IoTHub'.
     */
    readonly kind: "Microsoft.IoTHub";
    /**
     * An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.
     */
    readonly localTimestamp?: types.outputs.LocalTimestampResponse;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * ISO8601 UTC datetime with seconds precision (milliseconds are optional), specifying the date and time that will be the starting point for Events to be consumed.
     */
    readonly time?: string;
    /**
     * The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.
     */
    readonly timestampPropertyName?: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets the event source with the specified name in the specified environment.
 *
 * Uses Azure REST API version 2020-05-15.
 */
export function getIoTHubEventSourceOutput(args: GetIoTHubEventSourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIoTHubEventSourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:timeseriesinsights:getIoTHubEventSource", {
        "environmentName": args.environmentName,
        "eventSourceName": args.eventSourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIoTHubEventSourceOutputArgs {
    /**
     * The name of the Time Series Insights environment associated with the specified resource group.
     */
    environmentName: pulumi.Input<string>;
    /**
     * The name of the Time Series Insights event source associated with the specified environment.
     */
    eventSourceName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}