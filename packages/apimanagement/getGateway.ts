import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the Gateway specified by its identifier.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export function getGateway(args: GetGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getGateway", {
        "gatewayId": args.gatewayId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetGatewayArgs {
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    gatewayId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Gateway details.
 */
export interface GetGatewayResult {
    /**
     * Gateway description
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Gateway location.
     */
    readonly locationData?: types.outputs.ResourceLocationDataContractResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the Gateway specified by its identifier.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export function getGatewayOutput(args: GetGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGatewayResult> {
    return pulumi.output(args).apply((a: any) => getGateway(a, opts))
}

export interface GetGatewayOutputArgs {
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    gatewayId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
