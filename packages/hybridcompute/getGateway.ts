import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about the view of a gateway.
 * Azure REST API version: 2024-03-31-preview.
 *
 * Other available API versions: 2024-05-20-preview.
 */
export function getGateway(args: GetGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcompute:getGateway", {
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGatewayArgs {
    /**
     * The name of the Gateway.
     */
    gatewayName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes an Arc Gateway.
 */
export interface GetGatewayResult {
    /**
     * Specifies the list of features that are enabled for this Gateway.
     */
    readonly allowedFeatures?: string[];
    /**
     * The endpoint fqdn for the Gateway.
     */
    readonly gatewayEndpoint: string;
    /**
     * A unique, immutable, identifier for the Gateway.
     */
    readonly gatewayId: string;
    /**
     * The type of the Gateway resource.
     */
    readonly gatewayType?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves information about the view of a gateway.
 * Azure REST API version: 2024-03-31-preview.
 *
 * Other available API versions: 2024-05-20-preview.
 */
export function getGatewayOutput(args: GetGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGatewayResult> {
    return pulumi.output(args).apply((a: any) => getGateway(a, opts))
}

export interface GetGatewayOutputArgs {
    /**
     * The name of the Gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}