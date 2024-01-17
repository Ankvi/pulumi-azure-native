import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Hybrid AKS provisioned cluster
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2022-05-01-preview.
 */
export function getProvisionedCluster(args: GetProvisionedClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetProvisionedClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice:getProvisionedCluster", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetProvisionedClusterArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Parameter for the name of the provisioned cluster
     */
    resourceName: string;
}

/**
 * The provisionedClusters resource definition.
 */
export interface GetProvisionedClusterResult {
    readonly extendedLocation?: types.outputs.ProvisionedClustersResponseResponseExtendedLocation;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity for the Provisioned cluster.
     */
    readonly identity?: types.outputs.ProvisionedClusterIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: types.outputs.ProvisionedClustersResponsePropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
 * Gets the Hybrid AKS provisioned cluster
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2022-05-01-preview.
 */
export function getProvisionedClusterOutput(args: GetProvisionedClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProvisionedClusterResult> {
    return pulumi.output(args).apply((a: any) => getProvisionedCluster(a, opts))
}

export interface GetProvisionedClusterOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Parameter for the name of the provisioned cluster
     */
    resourceName: pulumi.Input<string>;
}