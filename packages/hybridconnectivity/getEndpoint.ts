import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the endpoint to the resource.
 *
 * Uses Azure REST API version 2023-03-15.
 *
 * Other available API versions: 2022-05-01-preview, 2024-12-01.
 */
export function getEndpoint(args: GetEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridconnectivity:getEndpoint", {
        "endpointName": args.endpointName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetEndpointArgs {
    /**
     * The endpoint name.
     */
    endpointName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: string;
}

/**
 * The endpoint for the target resource.
 */
export interface GetEndpointResult {
    /**
     * The timestamp of resource creation (UTC).
     */
    readonly createdAt?: string;
    /**
     * The identity that created the resource.
     */
    readonly createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    readonly createdByType?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    readonly lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    readonly lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    readonly lastModifiedByType?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The endpoint properties.
     */
    readonly properties: types.outputs.EndpointPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the endpoint to the resource.
 *
 * Uses Azure REST API version 2023-03-15.
 *
 * Other available API versions: 2022-05-01-preview, 2024-12-01.
 */
export function getEndpointOutput(args: GetEndpointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridconnectivity:getEndpoint", {
        "endpointName": args.endpointName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetEndpointOutputArgs {
    /**
     * The endpoint name.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: pulumi.Input<string>;
}