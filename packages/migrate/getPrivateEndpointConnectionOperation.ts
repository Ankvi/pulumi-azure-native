import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a PrivateEndpointConnection
 * Azure REST API version: 2023-03-15.
 */
export function getPrivateEndpointConnectionOperation(args: GetPrivateEndpointConnectionOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionOperationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getPrivateEndpointConnectionOperation", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionOperationArgs {
    /**
     * Private endpoint connection ARM name
     */
    privateEndpointConnectionName: string;
    /**
     * Assessment Project Name
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Private endpoint connection resource.
 */
export interface GetPrivateEndpointConnectionOperationResult {
    /**
     * The group ids for the private endpoint resource.
     */
    readonly groupIds: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The private endpoint resource.
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
 * Get a PrivateEndpointConnection
 * Azure REST API version: 2023-03-15.
 */
export function getPrivateEndpointConnectionOperationOutput(args: GetPrivateEndpointConnectionOperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionOperationResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpointConnectionOperation(a, opts))
}

export interface GetPrivateEndpointConnectionOperationOutputArgs {
    /**
     * Private endpoint connection ARM name
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
