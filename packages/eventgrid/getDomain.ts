import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a domain.
 *
 * Uses Azure REST API version 2022-06-15.
 *
 * Other available API versions: 2020-04-01-preview, 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview, 2025-02-15.
 */
export function getDomain(args: GetDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getDomain", {
        "domainName": args.domainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDomainArgs {
    /**
     * Name of the domain.
     */
    domainName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * EventGrid Domain.
 */
export interface GetDomainResult {
    /**
     * This Boolean is used to specify the creation mechanism for 'all' the Event Grid Domain Topics associated with this Event Grid Domain resource.
     * In this context, creation of domain topic can be auto-managed (when true) or self-managed (when false). The default value for this property is true.
     * When this property is null or set to true, Event Grid is responsible of automatically creating the domain topic when the first event subscription is
     * created at the scope of the domain topic. If this property is set to false, then creating the first event subscription will require creating a domain topic
     * by the user. The self-management mode can be used if the user wants full control of when the domain topic is created, while auto-managed mode provides the
     * flexibility to perform less operations and manage fewer resources by the user. Also, note that in auto-managed creation mode, user is allowed to create the
     * domain topic on demand if needed.
     */
    readonly autoCreateTopicWithFirstSubscription?: boolean;
    /**
     * This Boolean is used to specify the deletion mechanism for 'all' the Event Grid Domain Topics associated with this Event Grid Domain resource.
     * In this context, deletion of domain topic can be auto-managed (when true) or self-managed (when false). The default value for this property is true.
     * When this property is set to true, Event Grid is responsible of automatically deleting the domain topic when the last event subscription at the scope
     * of the domain topic is deleted. If this property is set to false, then the user needs to manually delete the domain topic when it is no longer needed
     * (e.g., when last event subscription is deleted and the resource needs to be cleaned up). The self-management mode can be used if the user wants full
     * control of when the domain topic needs to be deleted, while auto-managed mode provides the flexibility to perform less operations and manage fewer
     * resources by the user.
     */
    readonly autoDeleteTopicWithLastSubscription?: boolean;
    /**
     * Data Residency Boundary of the resource.
     */
    readonly dataResidencyBoundary?: string;
    /**
     * This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the domain.
     */
    readonly disableLocalAuth?: boolean;
    /**
     * Endpoint for the Event Grid Domain Resource which is used for publishing the events.
     */
    readonly endpoint: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Identity information for the Event Grid Domain resource.
     */
    readonly identity?: types.outputs.IdentityInfoResponse;
    /**
     * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
     */
    readonly inboundIpRules?: types.outputs.InboundIpRuleResponse[];
    /**
     * This determines the format that Event Grid should expect for incoming events published to the Event Grid Domain Resource.
     */
    readonly inputSchema?: string;
    /**
     * Information about the InputSchemaMapping which specified the info about mapping event payload.
     */
    readonly inputSchemaMapping?: types.outputs.JsonInputSchemaMappingResponse;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Metric resource id for the Event Grid Domain Resource.
     */
    readonly metricResourceId: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * List of private endpoint connections.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the Event Grid Domain Resource.
     */
    readonly provisioningState: string;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.DomainProperties.InboundIpRules" />
     */
    readonly publicNetworkAccess?: string;
    /**
     * The system metadata relating to the Event Grid Domain resource.
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
 * Get properties of a domain.
 *
 * Uses Azure REST API version 2022-06-15.
 *
 * Other available API versions: 2020-04-01-preview, 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview, 2025-02-15.
 */
export function getDomainOutput(args: GetDomainOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDomainResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getDomain", {
        "domainName": args.domainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDomainOutputArgs {
    /**
     * Name of the domain.
     */
    domainName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}