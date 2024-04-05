import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ServiceResource
 */
export function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kubernetesruntime/v20240301:getService", {
        "resourceUri": args.resourceUri,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetServiceArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
    /**
     * The name of the the service
     */
    serviceName: string;
}

/**
 * A Service resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters)
 */
export interface GetServiceResult {
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
     * The object id of the service principal of the RP provisioned in the tenant
     */
    readonly rpObjectId: string;
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
 * Get a ServiceResource
 */
export function getServiceOutput(args: GetServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceResult> {
    return pulumi.output(args).apply((a: any) => getService(a, opts))
}

export interface GetServiceOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * The name of the the service
     */
    serviceName: pulumi.Input<string>;
}