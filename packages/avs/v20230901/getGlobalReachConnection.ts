import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a GlobalReachConnection
 */
export function getGlobalReachConnection(args: GetGlobalReachConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetGlobalReachConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230901:getGlobalReachConnection", {
        "globalReachConnectionName": args.globalReachConnectionName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGlobalReachConnectionArgs {
    /**
     * Name of the global reach connection
     */
    globalReachConnectionName: string;
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A global reach connection resource
 */
export interface GetGlobalReachConnectionResult {
    /**
     * The network used for global reach carved out from the original network block
     * provided for the private cloud
     */
    readonly addressPrefix: string;
    /**
     * Authorization key from the peer express route used for the global reach
     * connection
     */
    readonly authorizationKey?: string;
    /**
     * The connection status of the global reach connection
     */
    readonly circuitConnectionStatus: string;
    /**
     * The ID of the Private Cloud's ExpressRoute Circuit that is participating in the
     * global reach connection
     */
    readonly expressRouteId?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Identifier of the ExpressRoute Circuit to peer with in the global reach
     * connection
     */
    readonly peerExpressRouteCircuit?: string;
    /**
     * The state of the  ExpressRoute Circuit Authorization provisioning
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
 * Get a GlobalReachConnection
 */
export function getGlobalReachConnectionOutput(args: GetGlobalReachConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGlobalReachConnectionResult> {
    return pulumi.output(args).apply((a: any) => getGlobalReachConnection(a, opts))
}

export interface GetGlobalReachConnectionOutputArgs {
    /**
     * Name of the global reach connection
     */
    globalReachConnectionName: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}