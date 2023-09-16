import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The resource representation of a service topology.
 */
export function getServiceTopology(args: GetServiceTopologyArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceTopologyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deploymentmanager/v20191101preview:getServiceTopology", {
        "resourceGroupName": args.resourceGroupName,
        "serviceTopologyName": args.serviceTopologyName,
    }, opts);
}

export interface GetServiceTopologyArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the service topology .
     */
    serviceTopologyName: string;
}

/**
 * The resource representation of a service topology.
 */
export interface GetServiceTopologyResult {
    /**
     * The resource Id of the artifact source that contains the artifacts that can be referenced in the service units.
     */
    readonly artifactSourceId?: string;
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
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * The resource representation of a service topology.
 */
export function getServiceTopologyOutput(args: GetServiceTopologyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceTopologyResult> {
    return pulumi.output(args).apply((a: any) => getServiceTopology(a, opts))
}

export interface GetServiceTopologyOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service topology .
     */
    serviceTopologyName: pulumi.Input<string>;
}
