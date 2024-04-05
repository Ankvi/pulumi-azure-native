import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation returns properties of a OpenShift cluster.
 */
export function getOpenShiftCluster(args: GetOpenShiftClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetOpenShiftClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redhatopenshift/v20231122:getOpenShiftCluster", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetOpenShiftClusterArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the OpenShift cluster resource.
     */
    resourceName: string;
}

/**
 * OpenShiftCluster represents an Azure Red Hat OpenShift cluster.
 */
export interface GetOpenShiftClusterResult {
    /**
     * The cluster API server profile.
     */
    readonly apiserverProfile?: types.outputs.APIServerProfileResponse;
    /**
     * The cluster profile.
     */
    readonly clusterProfile?: types.outputs.ClusterProfileResponse;
    /**
     * The console profile.
     */
    readonly consoleProfile?: types.outputs.ConsoleProfileResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The cluster ingress profiles.
     */
    readonly ingressProfiles?: types.outputs.IngressProfileResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The cluster master profile.
     */
    readonly masterProfile?: types.outputs.MasterProfileResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The cluster network profile.
     */
    readonly networkProfile?: types.outputs.NetworkProfileResponse;
    /**
     * The cluster provisioning state.
     */
    readonly provisioningState?: string;
    /**
     * The cluster service principal profile.
     */
    readonly servicePrincipalProfile?: types.outputs.ServicePrincipalProfileResponse;
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
    /**
     * The cluster worker profiles.
     */
    readonly workerProfiles?: types.outputs.WorkerProfileResponse[];
    /**
     * The cluster worker profiles status.
     */
    readonly workerProfilesStatus: types.outputs.WorkerProfileResponse[];
}
/**
 * The operation returns properties of a OpenShift cluster.
 */
export function getOpenShiftClusterOutput(args: GetOpenShiftClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOpenShiftClusterResult> {
    return pulumi.output(args).apply((a: any) => getOpenShiftCluster(a, opts))
}

export interface GetOpenShiftClusterOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the OpenShift cluster resource.
     */
    resourceName: pulumi.Input<string>;
}