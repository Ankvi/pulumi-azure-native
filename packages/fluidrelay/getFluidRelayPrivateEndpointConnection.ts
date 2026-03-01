import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The private endpoint connection resource.
 *
 * Uses Azure REST API version 2025-06-20-preview.
 */
export function getFluidRelayPrivateEndpointConnection(args: GetFluidRelayPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetFluidRelayPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:fluidrelay:getFluidRelayPrivateEndpointConnection", {
        "fluidRelayServerName": args.fluidRelayServerName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetFluidRelayPrivateEndpointConnectionArgs {
    /**
     * The Fluid Relay server resource name.
     */
    fluidRelayServerName: string;
    /**
     * The name of the private endpoint connection associated with the Azure resource.
     */
    privateEndpointConnectionName: string;
    /**
     * The resource group containing the resource.
     */
    resourceGroup: string;
}

/**
 * The private endpoint connection resource.
 */
export interface GetFluidRelayPrivateEndpointConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 * The private endpoint connection resource.
 *
 * Uses Azure REST API version 2025-06-20-preview.
 */
export function getFluidRelayPrivateEndpointConnectionOutput(args: GetFluidRelayPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFluidRelayPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:fluidrelay:getFluidRelayPrivateEndpointConnection", {
        "fluidRelayServerName": args.fluidRelayServerName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetFluidRelayPrivateEndpointConnectionOutputArgs {
    /**
     * The Fluid Relay server resource name.
     */
    fluidRelayServerName: pulumi.Input<string>;
    /**
     * The name of the private endpoint connection associated with the Azure resource.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The resource group containing the resource.
     */
    resourceGroup: pulumi.Input<string>;
}