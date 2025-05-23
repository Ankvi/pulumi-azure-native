import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified private endpoint connection associated with the key vault.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2023-02-01, 2023-07-01, 2024-04-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native keyvault [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:keyvault:getPrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * Name of the private endpoint connection associated with the key vault.
     */
    privateEndpointConnectionName: string;
    /**
     * Name of the resource group that contains the key vault.
     */
    resourceGroupName: string;
    /**
     * The name of the key vault.
     */
    vaultName: string;
}

/**
 * Private endpoint connection resource.
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Modified whenever there is a change in the state of private endpoint connection.
     */
    readonly etag?: string;
    /**
     * Fully qualified identifier of the key vault resource.
     */
    readonly id: string;
    /**
     * Azure location of the key vault resource.
     */
    readonly location: string;
    /**
     * Name of the key vault resource.
     */
    readonly name: string;
    /**
     * Properties of the private endpoint object.
     */
    readonly privateEndpoint?: types.outputs.PrivateEndpointResponse;
    /**
     * Approval state of the private link connection.
     */
    readonly privateLinkServiceConnectionState?: types.outputs.PrivateLinkServiceConnectionStateResponse;
    /**
     * Provisioning state of the private endpoint connection.
     */
    readonly provisioningState: string;
    /**
     * Tags assigned to the key vault resource.
     */
    readonly tags: {[key: string]: string};
    /**
     * Resource type of the key vault resource.
     */
    readonly type: string;
}
/**
 * Gets the specified private endpoint connection associated with the key vault.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2023-02-01, 2023-07-01, 2024-04-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native keyvault [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:keyvault:getPrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * Name of the private endpoint connection associated with the key vault.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the key vault.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the key vault.
     */
    vaultName: pulumi.Input<string>;
}