import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements Route Policy GET method.
 */
export function getRoutePolicy(args: GetRoutePolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetRoutePolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230615:getRoutePolicy", {
        "resourceGroupName": args.resourceGroupName,
        "routePolicyName": args.routePolicyName,
    }, opts);
}

export interface GetRoutePolicyArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the Route Policy.
     */
    routePolicyName: string;
}

/**
 * The RoutePolicy resource definition.
 */
export interface GetRoutePolicyResult {
    /**
     * AddressFamilyType. This parameter decides whether the given ipv4 or ipv6 route policy.
     */
    readonly addressFamilyType?: string;
    /**
     * Administrative state of the resource.
     */
    readonly administrativeState: string;
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * Configuration state of the resource.
     */
    readonly configurationState: string;
    /**
     * Default action that needs to be applied when no condition is matched. Example: Permit | Deny.
     */
    readonly defaultAction?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Arm Resource ID of Network Fabric.
     */
    readonly networkFabricId: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Route Policy statements.
     */
    readonly statements: types.outputs.RoutePolicyStatementPropertiesResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Implements Route Policy GET method.
 */
export function getRoutePolicyOutput(args: GetRoutePolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoutePolicyResult> {
    return pulumi.output(args).apply((a: any) => getRoutePolicy(a, opts))
}

export interface GetRoutePolicyOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Route Policy.
     */
    routePolicyName: pulumi.Input<string>;
}