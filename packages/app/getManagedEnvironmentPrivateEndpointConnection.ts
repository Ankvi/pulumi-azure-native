import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Private Endpoint Connection resource.
 * Azure REST API version: 2024-02-02-preview.
 *
 * Other available API versions: 2024-08-02-preview, 2024-10-02-preview.
 */
export function getManagedEnvironmentPrivateEndpointConnection(args: GetManagedEnvironmentPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedEnvironmentPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getManagedEnvironmentPrivateEndpointConnection", {
        "environmentName": args.environmentName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedEnvironmentPrivateEndpointConnectionArgs {
    /**
     * Name of the Managed Environment.
     */
    environmentName: string;
    /**
     * The name of the private endpoint connection associated with the Azure resource.
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Private Endpoint Connection resource.
 */
export interface GetManagedEnvironmentPrivateEndpointConnectionResult {
    /**
     * The group ids for the private endpoint resource.
     */
    readonly groupIds: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource of private end point.
     */
    readonly privateEndpoint?: types.outputs.PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    readonly privateLinkServiceConnectionState: types.outputs.PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    readonly provisioningState: string;
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
 * The Private Endpoint Connection resource.
 * Azure REST API version: 2024-02-02-preview.
 *
 * Other available API versions: 2024-08-02-preview, 2024-10-02-preview.
 */
export function getManagedEnvironmentPrivateEndpointConnectionOutput(args: GetManagedEnvironmentPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedEnvironmentPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getManagedEnvironmentPrivateEndpointConnection", {
        "environmentName": args.environmentName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedEnvironmentPrivateEndpointConnectionOutputArgs {
    /**
     * Name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * The name of the private endpoint connection associated with the Azure resource.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}