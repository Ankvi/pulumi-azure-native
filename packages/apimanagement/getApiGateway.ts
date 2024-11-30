import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an API Management gateway resource description.
 * Azure REST API version: 2023-09-01-preview.
 *
 * Other available API versions: 2024-05-01, 2024-06-01-preview.
 */
export function getApiGateway(args: GetApiGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetApiGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getApiGateway", {
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApiGatewayArgs {
    /**
     * The name of the API Management gateway.
     */
    gatewayName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A single API Management gateway resource in List or Get response.
 */
export interface GetApiGatewayResult {
    /**
     * Information regarding how the gateway should integrate with backend systems.
     */
    readonly backend?: types.outputs.BackendConfigurationResponse;
    /**
     * Information regarding the Configuration API of the API Management gateway. This is only applicable for API gateway with Standard SKU.
     */
    readonly configurationApi?: types.outputs.GatewayConfigurationApiResponse;
    /**
     * Creation UTC date of the API Management gateway.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly createdAtUtc: string;
    /**
     * ETag of the resource.
     */
    readonly etag: string;
    /**
     * Information regarding how the gateway should be exposed.
     */
    readonly frontend?: types.outputs.FrontendConfigurationResponse;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The current provisioning state of the API Management gateway which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
     */
    readonly provisioningState: string;
    /**
     * SKU properties of the API Management gateway.
     */
    readonly sku: types.outputs.ApiManagementGatewaySkuPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The provisioning state of the API Management gateway, which is targeted by the long running operation started on the gateway.
     */
    readonly targetProvisioningState: string;
    /**
     * Resource type for API Management resource is set to Microsoft.ApiManagement.
     */
    readonly type: string;
    /**
     * The type of VPN in which API Management gateway needs to be configured in. 
     */
    readonly virtualNetworkType?: string;
}
/**
 * Gets an API Management gateway resource description.
 * Azure REST API version: 2023-09-01-preview.
 *
 * Other available API versions: 2024-05-01, 2024-06-01-preview.
 */
export function getApiGatewayOutput(args: GetApiGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getApiGateway", {
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApiGatewayOutputArgs {
    /**
     * The name of the API Management gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}