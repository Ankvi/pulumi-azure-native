import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a private endpoint connection.
 */
export function getPrivateEndpointConnectionByWorkspace(args: GetPrivateEndpointConnectionByWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionByWorkspaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:desktopvirtualization/v20230707preview:getPrivateEndpointConnectionByWorkspace", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetPrivateEndpointConnectionByWorkspaceArgs {
    /**
     * The name of the private endpoint connection associated with the Azure resource
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace
     */
    workspaceName: string;
}

/**
 * The Private Endpoint Connection resource.
 */
export interface GetPrivateEndpointConnectionByWorkspaceResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a private endpoint connection.
 */
export function getPrivateEndpointConnectionByWorkspaceOutput(args: GetPrivateEndpointConnectionByWorkspaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionByWorkspaceResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpointConnectionByWorkspace(a, opts))
}

export interface GetPrivateEndpointConnectionByWorkspaceOutputArgs {
    /**
     * The name of the private endpoint connection associated with the Azure resource
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace
     */
    workspaceName: pulumi.Input<string>;
}