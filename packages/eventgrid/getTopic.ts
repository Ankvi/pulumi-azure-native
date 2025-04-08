import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a topic.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2022-06-15, 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTopic(args: GetTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetTopicResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getTopic", {
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetTopicArgs {
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the topic.
     */
    topicName: string;
}

/**
 * EventGrid Topic
 */
export interface GetTopicResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Data Residency Boundary of the resource.
     */
    readonly dataResidencyBoundary?: string;
    /**
     * This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the topic.
     */
    readonly disableLocalAuth?: boolean;
    /**
     * Endpoint for the topic.
     */
    readonly endpoint: string;
    /**
     * Event Type Information for the user topic. This information is provided by the publisher and can be used by the 
     * subscriber to view different types of events that are published.
     */
    readonly eventTypeInfo?: types.outputs.EventTypeInfoResponse;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Identity information for the resource.
     */
    readonly identity?: types.outputs.IdentityInfoResponse;
    /**
     * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
     */
    readonly inboundIpRules?: types.outputs.InboundIpRuleResponse[];
    /**
     * This determines the format that Event Grid should expect for incoming events published to the topic.
     */
    readonly inputSchema?: string;
    /**
     * This enables publishing using custom event schemas. An InputSchemaMapping can be specified to map various properties of a source schema to various required properties of the EventGridEvent schema.
     */
    readonly inputSchemaMapping?: types.outputs.JsonInputSchemaMappingResponse;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Metric resource id for the topic.
     */
    readonly metricResourceId: string;
    /**
     * Minimum TLS version of the publisher allowed to publish to this topic
     */
    readonly minimumTlsVersionAllowed?: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * List of private endpoint connections.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the topic.
     */
    readonly provisioningState: string;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled. 
     * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.TopicProperties.InboundIpRules" />
     */
    readonly publicNetworkAccess?: string;
    /**
     * The system metadata relating to the Event Grid resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a topic.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2022-06-15, 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTopicOutput(args: GetTopicOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTopicResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getTopic", {
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetTopicOutputArgs {
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the topic.
     */
    topicName: pulumi.Input<string>;
}