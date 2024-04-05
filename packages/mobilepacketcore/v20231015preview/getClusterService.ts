import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ClusterServiceResource
 */
export function getClusterService(args: GetClusterServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilepacketcore/v20231015preview:getClusterService", {
        "clusterServiceName": args.clusterServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterServiceArgs {
    /**
     * The name of the Cluster Service
     */
    clusterServiceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Azure for Operators 5G Core Cluster Service Resource
 */
export interface GetClusterServiceResult {
    /**
     * Cluster type specific data.  Contents depend on the cluster type
     */
    readonly clusterTypeSpecificData: types.outputs.ClusterServiceAksClusterDataResponse | types.outputs.ClusterServiceNexusAksClusterDataResponse;
    /**
     * Azure for Operators 5G Core Local PaaS component parameters.  One set per component type
     */
    readonly componentParameters: types.outputs.QualifiedComponentDeploymentParametersResponse[];
    /**
     * Cluster type (Lab or Production)
     */
    readonly deploymentType: string;
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
     * Operational status
     */
    readonly operationalStatus: types.outputs.OperationalStatusResponse;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Azure for Operators 5G Core Release Version.  This is applied to all platform as a service (PaaS) components and running workloads in this cluster
     */
    readonly releaseVersion: string;
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
 * Get a ClusterServiceResource
 */
export function getClusterServiceOutput(args: GetClusterServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterServiceResult> {
    return pulumi.output(args).apply((a: any) => getClusterService(a, opts))
}

export interface GetClusterServiceOutputArgs {
    /**
     * The name of the Cluster Service
     */
    clusterServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}