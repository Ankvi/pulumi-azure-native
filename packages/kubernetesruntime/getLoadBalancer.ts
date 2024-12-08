import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a LoadBalancer
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export function getLoadBalancer(args: GetLoadBalancerArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalancerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kubernetesruntime:getLoadBalancer", {
        "loadBalancerName": args.loadBalancerName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetLoadBalancerArgs {
    /**
     * The name of the LoadBalancer
     */
    loadBalancerName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * A LoadBalancer resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters)
 */
export interface GetLoadBalancerResult {
    /**
     * IP Range
     */
    readonly addresses: string[];
    /**
     * Advertise Mode
     */
    readonly advertiseMode: string;
    /**
     * The list of BGP peers it should advertise to. Null or empty means to advertise to all peers.
     */
    readonly bgpPeers?: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Resource provision state
     */
    readonly provisioningState: string;
    /**
     * A dynamic label mapping to select related services. For instance, if you want to create a load balancer only for services with label "a=b", then please specify {"a": "b"} in the field.
     */
    readonly serviceSelector?: {[key: string]: string};
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
 * Get a LoadBalancer
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export function getLoadBalancerOutput(args: GetLoadBalancerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLoadBalancerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kubernetesruntime:getLoadBalancer", {
        "loadBalancerName": args.loadBalancerName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetLoadBalancerOutputArgs {
    /**
     * The name of the LoadBalancer
     */
    loadBalancerName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}