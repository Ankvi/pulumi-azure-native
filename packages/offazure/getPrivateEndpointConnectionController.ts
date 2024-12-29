import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the private link resource.
 * Azure REST API version: 2023-06-06.
 *
 * Other available API versions: 2023-10-01-preview, 2024-05-01-preview.
 */
export function getPrivateEndpointConnectionController(args: GetPrivateEndpointConnectionControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionControllerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure:getPrivateEndpointConnectionController", {
        "peConnectionName": args.peConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetPrivateEndpointConnectionControllerArgs {
    /**
     *  Private link resource name.
     */
    peConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Site name
     */
    siteName: string;
}

/**
 * REST model used to encapsulate Private Link properties for tracked resources.
 */
export interface GetPrivateEndpointConnectionControllerResult {
    /**
     * array of group ids
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
     * private endpoints
     */
    readonly privateEndpoint: types.outputs.ResourceIdResponse;
    /**
     * private endpoints connection state
     */
    readonly privateLinkServiceConnectionState?: types.outputs.PrivateLinkServiceConnectionStateResponse;
    /**
     * provisioning state enum
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
 * Gets the private link resource.
 * Azure REST API version: 2023-06-06.
 *
 * Other available API versions: 2023-10-01-preview, 2024-05-01-preview.
 */
export function getPrivateEndpointConnectionControllerOutput(args: GetPrivateEndpointConnectionControllerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateEndpointConnectionControllerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:offazure:getPrivateEndpointConnectionController", {
        "peConnectionName": args.peConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetPrivateEndpointConnectionControllerOutputArgs {
    /**
     *  Private link resource name.
     */
    peConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
}