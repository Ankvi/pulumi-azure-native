import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific private endpoint connection under a topic, domain, or partner namespace.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getPrivateEndpointConnection", {
        "parentName": args.parentName,
        "parentType": args.parentType,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the parent resource (namely, either, the topic name, domain name, or partner namespace name).
     */
    parentName: string;
    /**
     * The type of the parent resource. This can be either \'topics\', \'domains\', or \'partnerNamespaces\'.
     */
    parentType: string;
    /**
     * The name of the private endpoint connection connection.
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

export interface GetPrivateEndpointConnectionResult {
    /**
     * GroupIds from the private link service resource.
     */
    readonly groupIds?: string[];
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * The Private Endpoint resource for this Connection.
     */
    readonly privateEndpoint?: types.outputs.PrivateEndpointResponse;
    /**
     * Details about the state of the connection.
     */
    readonly privateLinkServiceConnectionState?: types.outputs.ConnectionStateResponse;
    /**
     * Provisioning state of the Private Endpoint Connection.
     */
    readonly provisioningState?: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get a specific private endpoint connection under a topic, domain, or partner namespace.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getPrivateEndpointConnection", {
        "parentName": args.parentName,
        "parentType": args.parentType,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the parent resource (namely, either, the topic name, domain name, or partner namespace name).
     */
    parentName: pulumi.Input<string>;
    /**
     * The type of the parent resource. This can be either \'topics\', \'domains\', or \'partnerNamespaces\'.
     */
    parentType: pulumi.Input<string>;
    /**
     * The name of the private endpoint connection connection.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}