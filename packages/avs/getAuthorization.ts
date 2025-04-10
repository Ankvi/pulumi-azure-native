import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * ExpressRoute Circuit Authorization
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getAuthorization(args: GetAuthorizationArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthorizationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:getAuthorization", {
        "authorizationName": args.authorizationName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAuthorizationArgs {
    /**
     * Name of the ExpressRoute Circuit Authorization in the private cloud
     */
    authorizationName: string;
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
 * ExpressRoute Circuit Authorization
 */
export interface GetAuthorizationResult {
    /**
     * The ID of the ExpressRoute Circuit Authorization
     */
    readonly expressRouteAuthorizationId: string;
    /**
     * The key of the ExpressRoute Circuit Authorization
     */
    readonly expressRouteAuthorizationKey: string;
    /**
     * The ID of the ExpressRoute Circuit
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
     * The state of the  ExpressRoute Circuit Authorization provisioning
     */
    readonly provisioningState: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * ExpressRoute Circuit Authorization
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getAuthorizationOutput(args: GetAuthorizationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAuthorizationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:avs:getAuthorization", {
        "authorizationName": args.authorizationName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAuthorizationOutputArgs {
    /**
     * Name of the ExpressRoute Circuit Authorization in the private cloud
     */
    authorizationName: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}