import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the event source with the specified name in the specified environment.
 * Azure REST API version: 2020-05-15.
 */
export function getEventHubEventSource(args: GetEventHubEventSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetEventHubEventSourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:timeseriesinsights:getEventHubEventSource", {
        "environmentName": args.environmentName,
        "eventSourceName": args.eventSourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEventHubEventSourceArgs {
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
 * An event source that receives its data from an Azure EventHub.
 */
export interface GetEventHubEventSourceResult {
    /**
     * The name of the event hub's consumer group that holds the partitions from which events will be read.
     */
    readonly consumerGroupName: string;
    /**
     * The time the resource was created.
     */
    readonly creationTime: string;
    /**
     * The name of the event hub.
     */
    readonly eventHubName: string;
    /**
     * The resource id of the event source in Azure Resource Manager.
     */
    readonly eventSourceResourceId: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The name of the SAS key that grants the Time Series Insights service access to the event hub. The shared access policies for this key must grant 'Listen' permissions to the event hub.
     */
    readonly keyName: string;
    /**
     * The kind of the event source.
     * Expected value is 'Microsoft.EventHub'.
     */
    readonly kind: "Microsoft.EventHub";
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
     * The name of the service bus that contains the event hub.
     */
    readonly serviceBusNamespace: string;
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
 * Azure REST API version: 2020-05-15.
 */
export function getEventHubEventSourceOutput(args: GetEventHubEventSourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEventHubEventSourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:timeseriesinsights:getEventHubEventSource", {
        "environmentName": args.environmentName,
        "eventSourceName": args.eventSourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEventHubEventSourceOutputArgs {
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