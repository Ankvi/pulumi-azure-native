import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The resource representation of a service in a service topology.
 */
export function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deploymentmanager/v20191101preview:getService", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "serviceTopologyName": args.serviceTopologyName,
    }, opts);
}

export interface GetServiceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the service resource.
     */
    serviceName: string;
    /**
     * The name of the service topology .
     */
    serviceTopologyName: string;
}

/**
 * The resource representation of a service in a service topology.
 */
export interface GetServiceResult {
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
     * The Azure location to which the resources in the service belong to or should be deployed to.
     */
    readonly targetLocation: string;
    /**
     * The subscription to which the resources in the service belong to or should be deployed to.
     */
    readonly targetSubscriptionId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * The resource representation of a service in a service topology.
 */
export function getServiceOutput(args: GetServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceResult> {
    return pulumi.output(args).apply((a: any) => getService(a, opts))
}

export interface GetServiceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service resource.
     */
    serviceName: pulumi.Input<string>;
    /**
     * The name of the service topology .
     */
    serviceTopologyName: pulumi.Input<string>;
}
