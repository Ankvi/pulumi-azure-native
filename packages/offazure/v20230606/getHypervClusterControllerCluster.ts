import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Method to get a Hyper-V cluster.
 */
export function getHypervClusterControllerCluster(args: GetHypervClusterControllerClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetHypervClusterControllerClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure/v20230606:getHypervClusterControllerCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetHypervClusterControllerClusterArgs {
    /**
     *  Cluster ARM name
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Site name
     */
    siteName: string;
}

/**
 * A cluster resource belonging to a site resource.
 */
export interface GetHypervClusterControllerClusterResult {
    /**
     * Gets the timestamp marking Hyper-V cluster creation.
     */
    readonly createdTimestamp: string;
    /**
     * Gets the errors.
     */
    readonly errors: types.outputs.HealthErrorDetailsResponse[];
    /**
     * Gets or sets the FQDN/IPAddress of the Hyper-V cluster.
     */
    readonly fqdn?: string;
    /**
     * Gets the functional level of the Hyper-V cluster.
     */
    readonly functionalLevel: number;
    /**
     * Gets or sets list of hosts (FQDN) currently being tracked by the cluster.
     */
    readonly hostFqdnList?: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets Run as account ID of the Hyper-V cluster.
     */
    readonly runAsAccountId?: string;
    /**
     * Gets the status of the Hyper-V cluster.
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Gets the timestamp marking last updated on the Hyper-V cluster.
     */
    readonly updatedTimestamp: string;
}
/**
 * Method to get a Hyper-V cluster.
 */
export function getHypervClusterControllerClusterOutput(args: GetHypervClusterControllerClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHypervClusterControllerClusterResult> {
    return pulumi.output(args).apply((a: any) => getHypervClusterControllerCluster(a, opts))
}

export interface GetHypervClusterControllerClusterOutputArgs {
    /**
     *  Cluster ARM name
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
}