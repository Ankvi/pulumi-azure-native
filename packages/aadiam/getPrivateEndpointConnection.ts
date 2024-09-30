import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified private endpoint connection associated with the given policy.
 * Azure REST API version: 2020-03-01.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:aadiam:getPrivateEndpointConnection", {
        "policyName": args.policyName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the private link policy in Azure AD.
     */
    policyName: string;
    /**
     * The PrivateEndpointConnection name.
     */
    privateEndpointConnectionName: string;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * Private endpoint connection resource.
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of the private endpoint object.
     */
    readonly privateEndpoint?: types.outputs.PrivateEndpointResponse;
    /**
     * Approval state of the private link connection.
     */
    readonly privateLinkServiceConnectionState?: types.outputs.PrivateLinkServiceConnectionStateResponse;
    /**
     * Provisioning state of the private endpoint connection.
     */
    readonly provisioningState: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the specified private endpoint connection associated with the given policy.
 * Azure REST API version: 2020-03-01.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:aadiam:getPrivateEndpointConnection", {
        "policyName": args.policyName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the private link policy in Azure AD.
     */
    policyName: pulumi.Input<string>;
    /**
     * The PrivateEndpointConnection name.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}