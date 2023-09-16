import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the specified private endpoint connection associated with the Relay Namespace.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:relay/v20180101preview:getPrivateEndpointConnection", {
        "namespaceName": args.namespaceName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * The PrivateEndpointConnection name.
     */
    privateEndpointConnectionName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Private endpoint connection resource.
 */
export interface GetPrivateEndpointConnectionResult {
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
     * Properties of the private endpoint object.
     */
    readonly privateEndpoint?: types.outputs.relay.v20180101preview.PrivateEndpointResponse;
    /**
     * Approval state of the private link connection.
     */
    readonly privateLinkServiceConnectionState?: types.outputs.relay.v20180101preview.PrivateLinkServiceConnectionStateResponse;
    /**
     * Provisioning state of the private endpoint connection.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified private endpoint connection associated with the Relay Namespace.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpointConnection(a, opts))
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The PrivateEndpointConnection name.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
