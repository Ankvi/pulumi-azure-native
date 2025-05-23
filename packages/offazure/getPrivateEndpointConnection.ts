import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * REST model used to encapsulate the user visible state of a PrivateEndpoint.
 *
 * Uses Azure REST API version 2020-07-07.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure:getPrivateEndpointConnection", {
        "peConnectionName": args.peConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * Private link resource name.
     */
    peConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Site name.
     */
    siteName: string;
}

/**
 * REST model used to encapsulate the user visible state of a PrivateEndpoint.
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Gets the tag for optimistic concurrency control.
     */
    readonly eTag: string;
    /**
     * Relative URL to get this Sites.
     */
    readonly id: string;
    /**
     * Gets the name of the resource.
     */
    readonly name: string;
    /**
     * Gets the properties of the object.
     */
    readonly properties: types.outputs.PrivateEndpointConnectionPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
/**
 * REST model used to encapsulate the user visible state of a PrivateEndpoint.
 *
 * Uses Azure REST API version 2020-07-07.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:offazure:getPrivateEndpointConnection", {
        "peConnectionName": args.peConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * Private link resource name.
     */
    peConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name.
     */
    siteName: pulumi.Input<string>;
}