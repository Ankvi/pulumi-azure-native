import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the information about the gateway resource with the given name. The information include the description and other properties of the gateway.
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getGateway(args: GetGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabricmesh:getGateway", {
        "gatewayResourceName": args.gatewayResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGatewayArgs {
    /**
     * The identity of the gateway.
     */
    gatewayResourceName: string;
    /**
     * Azure resource group name
     */
    resourceGroupName: string;
}

/**
 * This type describes a gateway resource.
 */
export interface GetGatewayResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * User readable description of the gateway.
     */
    readonly description?: string;
    /**
     * Network that the Application is using.
     */
    readonly destinationNetwork: types.outputs.NetworkRefResponse;
    /**
     * Configuration for http connectivity for this gateway.
     */
    readonly http?: types.outputs.HttpConfigResponse[];
    /**
     * Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * IP address of the gateway. This is populated in the response and is ignored for incoming requests.
     */
    readonly ipAddress: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * State of the resource.
     */
    readonly provisioningState: string;
    /**
     * Network the gateway should listen on for requests.
     */
    readonly sourceNetwork: types.outputs.NetworkRefResponse;
    /**
     * Status of the resource.
     */
    readonly status: string;
    /**
     * Gives additional information about the current status of the gateway.
     */
    readonly statusDetails: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Configuration for tcp connectivity for this gateway.
     */
    readonly tcp?: types.outputs.TcpConfigResponse[];
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Gets the information about the gateway resource with the given name. The information include the description and other properties of the gateway.
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getGatewayOutput(args: GetGatewayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicefabricmesh:getGateway", {
        "gatewayResourceName": args.gatewayResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGatewayOutputArgs {
    /**
     * The identity of the gateway.
     */
    gatewayResourceName: pulumi.Input<string>;
    /**
     * Azure resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}