import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a private endpoint connection.
 *
 * Uses Azure REST API version 2024-07-10.
 *
 * Other available API versions: 2020-08-15-preview, 2021-01-28-preview, 2021-03-25-preview, 2021-04-22-preview, 2021-05-17-preview, 2021-05-20, 2021-06-10-preview, 2021-12-10-preview, 2022-03-10, 2022-05-10-preview, 2022-08-11-preview, 2022-11-10, 2022-12-27, 2022-12-27-preview, 2023-03-15-preview, 2023-06-20-preview, 2023-10-03-preview, 2024-03-31-preview, 2024-05-20-preview, 2024-07-31-preview, 2024-09-10-preview, 2024-11-10-preview, 2025-01-13. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcompute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcompute:getPrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "scopeName": args.scopeName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Azure Arc PrivateLinkScope resource.
     */
    scopeName: string;
}

/**
 * A private endpoint connection
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Resource properties.
     */
    readonly properties: types.outputs.PrivateEndpointConnectionPropertiesResponse;
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
 * Gets a private endpoint connection.
 *
 * Uses Azure REST API version 2024-07-10.
 *
 * Other available API versions: 2020-08-15-preview, 2021-01-28-preview, 2021-03-25-preview, 2021-04-22-preview, 2021-05-17-preview, 2021-05-20, 2021-06-10-preview, 2021-12-10-preview, 2022-03-10, 2022-05-10-preview, 2022-08-11-preview, 2022-11-10, 2022-12-27, 2022-12-27-preview, 2023-03-15-preview, 2023-06-20-preview, 2023-10-03-preview, 2024-03-31-preview, 2024-05-20-preview, 2024-07-31-preview, 2024-09-10-preview, 2024-11-10-preview, 2025-01-13. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcompute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridcompute:getPrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "scopeName": args.scopeName,
    }, opts);
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure Arc PrivateLinkScope resource.
     */
    scopeName: pulumi.Input<string>;
}