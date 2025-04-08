import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a managed private endpoint.
 *
 * Uses Azure REST API version 2024-04-13.
 *
 * Other available API versions: 2021-08-27, 2022-02-01, 2022-07-07, 2022-11-11, 2022-12-29, 2023-05-02, 2023-08-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kusto [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getManagedPrivateEndpoint(args: GetManagedPrivateEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedPrivateEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto:getManagedPrivateEndpoint", {
        "clusterName": args.clusterName,
        "managedPrivateEndpointName": args.managedPrivateEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedPrivateEndpointArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: string;
    /**
     * The name of the managed private endpoint.
     */
    managedPrivateEndpointName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Class representing a managed private endpoint.
 */
export interface GetManagedPrivateEndpointResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The groupId in which the managed private endpoint is created.
     */
    readonly groupId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The ARM resource ID of the resource for which the managed private endpoint is created.
     */
    readonly privateLinkResourceId: string;
    /**
     * The region of the resource to which the managed private endpoint is created.
     */
    readonly privateLinkResourceRegion?: string;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The user request message.
     */
    readonly requestMessage?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a managed private endpoint.
 *
 * Uses Azure REST API version 2024-04-13.
 *
 * Other available API versions: 2021-08-27, 2022-02-01, 2022-07-07, 2022-11-11, 2022-12-29, 2023-05-02, 2023-08-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kusto [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getManagedPrivateEndpointOutput(args: GetManagedPrivateEndpointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedPrivateEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kusto:getManagedPrivateEndpoint", {
        "clusterName": args.clusterName,
        "managedPrivateEndpointName": args.managedPrivateEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedPrivateEndpointOutputArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the managed private endpoint.
     */
    managedPrivateEndpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}