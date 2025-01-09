import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ElasticLoadBalancingV2Listener
 * Azure REST API version: 2024-12-01.
 */
export function getElasticLoadBalancingV2Listener(args: GetElasticLoadBalancingV2ListenerArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticLoadBalancingV2ListenerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:awsconnector:getElasticLoadBalancingV2Listener", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetElasticLoadBalancingV2ListenerArgs {
    /**
     * Name of ElasticLoadBalancingV2Listener
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A Microsoft.AwsConnector resource
 */
export interface GetElasticLoadBalancingV2ListenerResult {
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
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.ElasticLoadBalancingV2ListenerPropertiesResponse;
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
 * Get a ElasticLoadBalancingV2Listener
 * Azure REST API version: 2024-12-01.
 */
export function getElasticLoadBalancingV2ListenerOutput(args: GetElasticLoadBalancingV2ListenerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetElasticLoadBalancingV2ListenerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:awsconnector:getElasticLoadBalancingV2Listener", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetElasticLoadBalancingV2ListenerOutputArgs {
    /**
     * Name of ElasticLoadBalancingV2Listener
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}