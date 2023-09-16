import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a specific private endpoint connection for Power BI by private endpoint name.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:powerbi/v20200601:getPrivateEndpointConnection", {
        "azureResourceName": args.azureResourceName,
        "privateEndpointName": args.privateEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the Azure resource.
     */
    azureResourceName: string;
    /**
     * The name of the private endpoint.
     */
    privateEndpointName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

export interface GetPrivateEndpointConnectionResult {
    /**
     * Specifies the id of the resource.
     */
    readonly id: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
    /**
     * Specifies the private endpoint.
     */
    readonly privateEndpoint?: types.outputs.powerbi.v20200601.PrivateEndpointResponse;
    /**
     * Specifies the connection state.
     */
    readonly privateLinkServiceConnectionState?: types.outputs.powerbi.v20200601.ConnectionStateResponse;
    /**
     * Provisioning state of the Private Endpoint Connection.
     */
    readonly provisioningState?: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.powerbi.v20200601.SystemDataResponse;
    /**
     * Specifies the type of the resource.
     */
    readonly type: string;
}
/**
 * Get a specific private endpoint connection for Power BI by private endpoint name.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpointConnection(a, opts))
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the Azure resource.
     */
    azureResourceName: pulumi.Input<string>;
    /**
     * The name of the private endpoint.
     */
    privateEndpointName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
