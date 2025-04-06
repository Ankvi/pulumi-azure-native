import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a namespace.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNamespace(args: GetNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getNamespace", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceArgs {
    /**
     * Name of the namespace.
     */
    namespaceName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * Namespace resource.
 */
export interface GetNamespaceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Identity information for the Namespace resource.
     */
    readonly identity?: types.outputs.IdentityInfoResponse;
    /**
     * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
     */
    readonly inboundIpRules?: types.outputs.InboundIpRuleResponse[];
    /**
     * This is an optional property and it allows the user to specify if the namespace resource supports zone-redundancy capability or not. If this
     * property is not specified explicitly by the user, its default value depends on the following conditions:
     *     a. For Availability Zones enabled regions - The default property value would be true.
     *     b. For non-Availability Zones enabled regions - The default property value would be false.
     * Once specified, this property cannot be updated.
     */
    readonly isZoneRedundant?: boolean;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Minimum TLS version of the publisher allowed to publish to this namespace. Only TLS version 1.2 is supported.
     */
    readonly minimumTlsVersionAllowed?: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * List of private endpoint connections.
     */
    readonly privateEndpointConnections?: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the namespace resource.
     */
    readonly provisioningState: string;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.PubSub.NamespaceProperties.InboundIpRules" />
     */
    readonly publicNetworkAccess?: string;
    /**
     * Represents available Sku pricing tiers.
     */
    readonly sku?: types.outputs.NamespaceSkuResponse;
    /**
     * The system metadata relating to the Event Grid resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Topic spaces configuration information for the namespace resource
     */
    readonly topicSpacesConfiguration?: types.outputs.TopicSpacesConfigurationResponse;
    /**
     * Topics configuration information for the namespace resource
     */
    readonly topicsConfiguration?: types.outputs.TopicsConfigurationResponse;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a namespace.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNamespaceOutput(args: GetNamespaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNamespaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getNamespace", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceOutputArgs {
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}