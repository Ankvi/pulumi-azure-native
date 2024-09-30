import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the specified private endpoint connection
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-08-01-preview.
 */
export function getWebPubSubPrivateEndpointConnection(args: GetWebPubSubPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebPubSubPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:webpubsub:getWebPubSubPrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetWebPubSubPrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
}

/**
 * A private endpoint connection to an azure resource
 */
export interface GetWebPubSubPrivateEndpointConnectionResult {
    /**
     * Group IDs
     */
    readonly groupIds: string[];
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Private endpoint
     */
    readonly privateEndpoint?: types.outputs.PrivateEndpointResponse;
    /**
     * Connection state of the private endpoint connection
     */
    readonly privateLinkServiceConnectionState?: types.outputs.PrivateLinkServiceConnectionStateResponse;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
     */
    readonly type: string;
}
/**
 * Get the specified private endpoint connection
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-08-01-preview.
 */
export function getWebPubSubPrivateEndpointConnectionOutput(args: GetWebPubSubPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebPubSubPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:webpubsub:getWebPubSubPrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetWebPubSubPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the private endpoint connection
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}