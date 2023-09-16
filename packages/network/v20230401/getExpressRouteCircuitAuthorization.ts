import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified authorization from the specified express route circuit.
 */
export function getExpressRouteCircuitAuthorization(args: GetExpressRouteCircuitAuthorizationArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCircuitAuthorizationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230401:getExpressRouteCircuitAuthorization", {
        "authorizationName": args.authorizationName,
        "circuitName": args.circuitName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteCircuitAuthorizationArgs {
    /**
     * The name of the authorization.
     */
    authorizationName: string;
    /**
     * The name of the express route circuit.
     */
    circuitName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Authorization in an ExpressRouteCircuit resource.
 */
export interface GetExpressRouteCircuitAuthorizationResult {
    /**
     * The authorization key.
     */
    readonly authorizationKey?: string;
    /**
     * The authorization use status.
     */
    readonly authorizationUseStatus?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the authorization resource.
     */
    readonly provisioningState: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the specified authorization from the specified express route circuit.
 */
export function getExpressRouteCircuitAuthorizationOutput(args: GetExpressRouteCircuitAuthorizationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExpressRouteCircuitAuthorizationResult> {
    return pulumi.output(args).apply((a: any) => getExpressRouteCircuitAuthorization(a, opts))
}

export interface GetExpressRouteCircuitAuthorizationOutputArgs {
    /**
     * The name of the authorization.
     */
    authorizationName: pulumi.Input<string>;
    /**
     * The name of the express route circuit.
     */
    circuitName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
