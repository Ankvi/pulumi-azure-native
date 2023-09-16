import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified private endpoint connection associated with the service.
 * Azure REST API version: 2021-03-25-preview.
 */
export function getPrivateEndpointConnectionsComp(args: GetPrivateEndpointConnectionsCompArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionsCompResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:m365securityandcompliance:getPrivateEndpointConnectionsComp", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetPrivateEndpointConnectionsCompArgs {
    /**
     * The name of the private endpoint connection associated with the Azure resource
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: string;
    /**
     * The name of the service instance.
     */
    resourceName: string;
}

/**
 * The Private Endpoint Connection resource.
 */
export interface GetPrivateEndpointConnectionsCompResult {
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
    readonly privateEndpoint?: types.outputs.m365securityandcompliance.PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    readonly privateLinkServiceConnectionState: types.outputs.m365securityandcompliance.PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    readonly provisioningState: string;
    /**
     * Required property for system data
     */
    readonly systemData: types.outputs.m365securityandcompliance.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the specified private endpoint connection associated with the service.
 * Azure REST API version: 2021-03-25-preview.
 */
export function getPrivateEndpointConnectionsCompOutput(args: GetPrivateEndpointConnectionsCompOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionsCompResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpointConnectionsComp(a, opts))
}

export interface GetPrivateEndpointConnectionsCompOutputArgs {
    /**
     * The name of the private endpoint connection associated with the Azure resource
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service instance.
     */
    resourceName: pulumi.Input<string>;
}
