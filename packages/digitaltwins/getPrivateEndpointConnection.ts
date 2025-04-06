import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get private endpoint connection properties for the given private endpoint.
 *
 * Uses Azure REST API version 2023-01-31.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:digitaltwins:getPrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group that contains the DigitalTwinsInstance.
     */
    resourceGroupName: string;
    /**
     * The name of the DigitalTwinsInstance.
     */
    resourceName: string;
}

/**
 * The private endpoint connection of a Digital Twin.
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The connection properties.
     */
    readonly properties: types.outputs.ConnectionPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the private endpoint connection.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Get private endpoint connection properties for the given private endpoint.
 *
 * Uses Azure REST API version 2023-01-31.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:digitaltwins:getPrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the DigitalTwinsInstance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the DigitalTwinsInstance.
     */
    resourceName: pulumi.Input<string>;
}