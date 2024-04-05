import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a private endpoint connection.
 */
export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation/v20230515preview:getPrivateEndpointConnection", {
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a private endpoint connection.
 */
export function getPrivateEndpointConnectionOutput(args: GetPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpointConnection(a, opts))
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