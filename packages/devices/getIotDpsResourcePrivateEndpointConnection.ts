import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get private endpoint connection properties
 *
 * Uses Azure REST API version 2022-12-12.
 *
 * Other available API versions: 2023-03-01-preview, 2025-02-01-preview.
 */
export function getIotDpsResourcePrivateEndpointConnection(args: GetIotDpsResourcePrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetIotDpsResourcePrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devices:getIotDpsResourcePrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetIotDpsResourcePrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group that contains the provisioning service.
     */
    resourceGroupName: string;
    /**
     * The name of the provisioning service.
     */
    resourceName: string;
}

/**
 * The private endpoint connection of a provisioning service
 */
export interface GetIotDpsResourcePrivateEndpointConnectionResult {
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The properties of a private endpoint connection
     */
    readonly properties: types.outputs.PrivateEndpointConnectionPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Get private endpoint connection properties
 *
 * Uses Azure REST API version 2022-12-12.
 *
 * Other available API versions: 2023-03-01-preview, 2025-02-01-preview.
 */
export function getIotDpsResourcePrivateEndpointConnectionOutput(args: GetIotDpsResourcePrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIotDpsResourcePrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devices:getIotDpsResourcePrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetIotDpsResourcePrivateEndpointConnectionOutputArgs {
    /**
     * The name of the private endpoint connection
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the provisioning service.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the provisioning service.
     */
    resourceName: pulumi.Input<string>;
}