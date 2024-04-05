import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a virtual endpoint.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-12-01-preview.
 */
export function getVirtualEndpoint(args: GetVirtualEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql:getVirtualEndpoint", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "virtualEndpointName": args.virtualEndpointName,
    }, opts);
}

export interface GetVirtualEndpointArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
    /**
     * The name of the virtual endpoint.
     */
    virtualEndpointName: string;
}

/**
 * Represents a virtual endpoint for a server.
 */
export interface GetVirtualEndpointResult {
    /**
     * The endpoint type for the virtual endpoint.
     */
    readonly endpointType?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * List of members for a virtual endpoint
     */
    readonly members?: string[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * List of virtual endpoints for a server
     */
    readonly virtualEndpoints: string[];
}
/**
 * Gets information about a virtual endpoint.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-12-01-preview.
 */
export function getVirtualEndpointOutput(args: GetVirtualEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualEndpointResult> {
    return pulumi.output(args).apply((a: any) => getVirtualEndpoint(a, opts))
}

export interface GetVirtualEndpointOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of the virtual endpoint.
     */
    virtualEndpointName: pulumi.Input<string>;
}