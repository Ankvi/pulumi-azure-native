import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the private endpoint with the specified name.
 */
export function getPrivateEndpointConnectionControllerPrivateEndpointConnection(args: GetPrivateEndpointConnectionControllerPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionControllerPrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate/v20230101:getPrivateEndpointConnectionControllerPrivateEndpointConnection", {
        "migrateProjectName": args.migrateProjectName,
        "peConnectionName": args.peConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionControllerPrivateEndpointConnectionArgs {
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName: string;
    /**
     * Private endpoint connection name.
     */
    peConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * REST model used to encapsulate the user visible state of a PrivateEndpoint.
 */
export interface GetPrivateEndpointConnectionControllerPrivateEndpointConnectionResult {
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
 * Get the private endpoint with the specified name.
 */
export function getPrivateEndpointConnectionControllerPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionControllerPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionControllerPrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpointConnectionControllerPrivateEndpointConnection(a, opts))
}

export interface GetPrivateEndpointConnectionControllerPrivateEndpointConnectionOutputArgs {
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName: pulumi.Input<string>;
    /**
     * Private endpoint connection name.
     */
    peConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}