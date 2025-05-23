import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
 *
 * Uses Azure REST API version 2023-06-30.
 *
 * Other available API versions: 2016-02-03, 2017-01-19, 2017-07-01, 2018-01-22, 2018-04-01, 2018-12-01-preview, 2019-03-22, 2019-03-22-preview, 2019-07-01-preview, 2019-11-04, 2020-03-01, 2020-04-01, 2020-06-15, 2020-07-10-preview, 2020-08-01, 2020-08-31, 2020-08-31-preview, 2021-02-01-preview, 2021-03-03-preview, 2021-03-31, 2021-07-01, 2021-07-01-preview, 2021-07-02, 2021-07-02-preview, 2022-04-30-preview, 2022-11-15-preview, 2023-06-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native iothub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getIotHubResourceEventHubConsumerGroup(args: GetIotHubResourceEventHubConsumerGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetIotHubResourceEventHubConsumerGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iothub:getIotHubResourceEventHubConsumerGroup", {
        "eventHubEndpointName": args.eventHubEndpointName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetIotHubResourceEventHubConsumerGroupArgs {
    /**
     * The name of the Event Hub-compatible endpoint in the IoT hub.
     */
    eventHubEndpointName: string;
    /**
     * The name of the consumer group to retrieve.
     */
    name: string;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: string;
    /**
     * The name of the IoT hub.
     */
    resourceName: string;
}

/**
 * The properties of the EventHubConsumerGroupInfo object.
 */
export interface GetIotHubResourceEventHubConsumerGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The etag.
     */
    readonly etag: string;
    /**
     * The Event Hub-compatible consumer group identifier.
     */
    readonly id: string;
    /**
     * The Event Hub-compatible consumer group name.
     */
    readonly name: string;
    /**
     * The tags.
     */
    readonly properties: any;
    /**
     * the resource type.
     */
    readonly type: string;
}
/**
 * Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
 *
 * Uses Azure REST API version 2023-06-30.
 *
 * Other available API versions: 2016-02-03, 2017-01-19, 2017-07-01, 2018-01-22, 2018-04-01, 2018-12-01-preview, 2019-03-22, 2019-03-22-preview, 2019-07-01-preview, 2019-11-04, 2020-03-01, 2020-04-01, 2020-06-15, 2020-07-10-preview, 2020-08-01, 2020-08-31, 2020-08-31-preview, 2021-02-01-preview, 2021-03-03-preview, 2021-03-31, 2021-07-01, 2021-07-01-preview, 2021-07-02, 2021-07-02-preview, 2022-04-30-preview, 2022-11-15-preview, 2023-06-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native iothub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getIotHubResourceEventHubConsumerGroupOutput(args: GetIotHubResourceEventHubConsumerGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIotHubResourceEventHubConsumerGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iothub:getIotHubResourceEventHubConsumerGroup", {
        "eventHubEndpointName": args.eventHubEndpointName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetIotHubResourceEventHubConsumerGroupOutputArgs {
    /**
     * The name of the Event Hub-compatible endpoint in the IoT hub.
     */
    eventHubEndpointName: pulumi.Input<string>;
    /**
     * The name of the consumer group to retrieve.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT hub.
     */
    resourceName: pulumi.Input<string>;
}