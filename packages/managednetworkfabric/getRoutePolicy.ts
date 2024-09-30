import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements Route Policy GET method.
 * Azure REST API version: 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getRoutePolicy(args: GetRoutePolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetRoutePolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getRoutePolicy", {
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
     * Name of the Route Policy
     */
    routePolicyName: string;
}

/**
 * The RoutePolicy resource definition.
 */
export interface GetRoutePolicyResult {
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Gets the provisioning state of the resource.
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
 * Azure REST API version: 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export function getRoutePolicyOutput(args: GetRoutePolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoutePolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getRoutePolicy", {
        "resourceGroupName": args.resourceGroupName,
        "routePolicyName": args.routePolicyName,
    }, opts);
}

export interface GetRoutePolicyOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Route Policy
     */
    routePolicyName: pulumi.Input<string>;
}