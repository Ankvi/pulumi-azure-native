import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified authorization from the specified express route port.
 */
export function getExpressRoutePortAuthorization(args: GetExpressRoutePortAuthorizationArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRoutePortAuthorizationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230601:getExpressRoutePortAuthorization", {
        "authorizationName": args.authorizationName,
        "expressRoutePortName": args.expressRoutePortName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRoutePortAuthorizationArgs {
    /**
     * The name of the authorization.
     */
    authorizationName: string;
    /**
     * The name of the express route port.
     */
    expressRoutePortName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * ExpressRoutePort Authorization resource definition.
 */
export interface GetExpressRoutePortAuthorizationResult {
    /**
     * The authorization key.
     */
    readonly authorizationKey: string;
    /**
     * The authorization use status.
     */
    readonly authorizationUseStatus: string;
    /**
     * The reference to the ExpressRoute circuit resource using the authorization.
     */
    readonly circuitResourceUri: string;
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
 * Gets the specified authorization from the specified express route port.
 */
export function getExpressRoutePortAuthorizationOutput(args: GetExpressRoutePortAuthorizationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExpressRoutePortAuthorizationResult> {
    return pulumi.output(args).apply((a: any) => getExpressRoutePortAuthorization(a, opts))
}

export interface GetExpressRoutePortAuthorizationOutputArgs {
    /**
     * The name of the authorization.
     */
    authorizationName: pulumi.Input<string>;
    /**
     * The name of the express route port.
     */
    expressRoutePortName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}