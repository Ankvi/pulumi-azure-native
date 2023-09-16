import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the private link resource.
 */
export function getPrivateEndpointConnectionController(args: GetPrivateEndpointConnectionControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionControllerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure/v20230606:getPrivateEndpointConnectionController", {
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
    readonly privateEndpoint: types.outputs.offazure.v20230606.ResourceIdResponse;
    /**
     * private endpoints connection state
     */
    readonly privateLinkServiceConnectionState?: types.outputs.offazure.v20230606.PrivateLinkServiceConnectionStateResponse;
    /**
     * provisioning state enum
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.offazure.v20230606.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the private link resource.
 */
export function getPrivateEndpointConnectionControllerOutput(args: GetPrivateEndpointConnectionControllerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionControllerResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpointConnectionController(a, opts))
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
