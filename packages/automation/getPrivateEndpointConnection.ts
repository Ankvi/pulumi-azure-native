import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a private endpoint connection.
 *
 * Uses Azure REST API version 2020-01-13-preview.
 *
 * Other available API versions: 2023-05-15-preview, 2024-10-23.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getPrivateEndpointConnection", {
        "automationAccountName": args.automationAccountName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * A private endpoint connection
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     * Gets the groupIds.
     */
    readonly groupIds?: string[];
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Private endpoint which the connection belongs to.
     */
    readonly privateEndpoint?: types.outputs.PrivateEndpointPropertyResponse;
    /**
     * Connection State of the Private Endpoint Connection.
     */
    readonly privateLinkServiceConnectionState?: types.outputs.PrivateLinkServiceConnectionStatePropertyResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets a private endpoint connection.
 *
 * Uses Azure REST API version 2020-01-13-preview.
 *
 * Other available API versions: 2023-05-15-preview, 2024-10-23.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getPrivateEndpointConnection", {
        "automationAccountName": args.automationAccountName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointConnectionOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}