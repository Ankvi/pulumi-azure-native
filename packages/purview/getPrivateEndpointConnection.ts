import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a private endpoint connection
 * Azure REST API version: 2021-12-01.
 *
 * Other available API versions: 2021-07-01, 2023-05-01-preview, 2024-04-01-preview.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:purview:getPrivateEndpointConnection", {
        "accountName": args.accountName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the account.
     */
    accountName: string;
    /**
     * Name of the private endpoint connection.
     */
    privateEndpointConnectionName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * A private endpoint connection class.
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     * Gets or sets the identifier.
     */
    readonly id: string;
    /**
     * Gets or sets the name.
     */
    readonly name: string;
    /**
     * The private endpoint information.
     */
    readonly privateEndpoint?: types.outputs.PrivateEndpointResponse;
    /**
     * The private link service connection state.
     */
    readonly privateLinkServiceConnectionState?: types.outputs.PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.ProxyResourceResponseSystemData;
    /**
     * Gets or sets the type.
     */
    readonly type: string;
}
/**
 * Get a private endpoint connection
 * Azure REST API version: 2021-12-01.
 *
 * Other available API versions: 2021-07-01, 2023-05-01-preview, 2024-04-01-preview.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:purview:getPrivateEndpointConnection", {
        "accountName": args.accountName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Name of the private endpoint connection.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}