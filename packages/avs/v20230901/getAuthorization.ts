import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ExpressRouteAuthorization
 */
export function getAuthorization(args: GetAuthorizationArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthorizationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230901:getAuthorization", {
        "authorizationName": args.authorizationName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAuthorizationArgs {
    /**
     * Name of the ExpressRoute Circuit Authorization
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The state of the ExpressRoute Circuit Authorization provisioning
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
 * Get a ExpressRouteAuthorization
 */
export function getAuthorizationOutput(args: GetAuthorizationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAuthorizationResult> {
    return pulumi.output(args).apply((a: any) => getAuthorization(a, opts))
}

export interface GetAuthorizationOutputArgs {
    /**
     * Name of the ExpressRoute Circuit Authorization
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