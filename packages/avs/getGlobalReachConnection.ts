import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A global reach connection resource
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getGlobalReachConnection(args: GetGlobalReachConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetGlobalReachConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:getGlobalReachConnection", {
        "globalReachConnectionName": args.globalReachConnectionName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGlobalReachConnectionArgs {
    /**
     * Name of the global reach connection in the private cloud
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
     * The network used for global reach carved out from the original network block provided for the private cloud
     */
    readonly addressPrefix: string;
    /**
     * Authorization key from the peer express route used for the global reach connection
     */
    readonly authorizationKey?: string;
    /**
     * The connection status of the global reach connection
     */
    readonly circuitConnectionStatus: string;
    /**
     * The ID of the Private Cloud's ExpressRoute Circuit that is participating in the global reach connection
     */
    readonly expressRouteId?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Identifier of the ExpressRoute Circuit to peer with in the global reach connection
     */
    readonly peerExpressRouteCircuit?: string;
    /**
     * The state of the  ExpressRoute Circuit Authorization provisioning
     */
    readonly provisioningState: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * A global reach connection resource
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getGlobalReachConnectionOutput(args: GetGlobalReachConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGlobalReachConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:avs:getGlobalReachConnection", {
        "globalReachConnectionName": args.globalReachConnectionName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGlobalReachConnectionOutputArgs {
    /**
     * Name of the global reach connection in the private cloud
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