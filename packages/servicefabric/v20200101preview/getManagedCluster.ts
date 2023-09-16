import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a Service Fabric managed cluster resource created or in the process of being created in the specified resource group.
 */
export function getManagedCluster(args: GetManagedClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric/v20200101preview:getManagedCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedClusterArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The manged cluster resource
 */
export interface GetManagedClusterResult {
    /**
     * client certificates for the cluster.
     */
    readonly addonFeatures?: string[];
    /**
     * vm admin user password.
     */
    readonly adminPassword?: string;
    /**
     * vm admin user name.
     */
    readonly adminUserName: string;
    /**
     * Azure active directory.
     */
    readonly azureActiveDirectory?: types.outputs.servicefabric.v20200101preview.AzureActiveDirectoryResponse;
    /**
     * The port used for client connections to the cluster.
     */
    readonly clientConnectionPort?: number;
    /**
     * client certificates for the cluster.
     */
    readonly clients?: types.outputs.servicefabric.v20200101preview.ClientCertificateResponse[];
    /**
     * The cluster certificate thumbprint used node to node communication.
     */
    readonly clusterCertificateThumbprint: string;
    /**
     * The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
     */
    readonly clusterCodeVersion?: string;
    /**
     * A service generated unique identifier for the cluster resource.
     */
    readonly clusterId: string;
    /**
     * The current state of the cluster.
     */
    readonly clusterState: string;
    /**
     * The cluster dns name.
     */
    readonly dnsName: string;
    /**
     * Azure resource etag.
     */
    readonly etag: string;
    /**
     * The list of custom fabric settings to configure the cluster.
     */
    readonly fabricSettings?: types.outputs.servicefabric.v20200101preview.SettingsSectionDescriptionResponse[];
    /**
     * the cluster Fully qualified domain name.
     */
    readonly fqdn: string;
    /**
     * The port used for http connections to the cluster.
     */
    readonly httpGatewayConnectionPort?: number;
    /**
     * Azure resource identifier.
     */
    readonly id: string;
    /**
     * Describes load balancing rules.
     */
    readonly loadBalancingRules?: types.outputs.servicefabric.v20200101preview.LoadBalancingRuleResponse[];
    /**
     * Azure resource location.
     */
    readonly location: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the managed cluster resource.
     */
    readonly provisioningState: string;
    /**
     * The sku of the managed cluster
     */
    readonly sku?: types.outputs.servicefabric.v20200101preview.SkuResponse;
    /**
     * Azure resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type.
     */
    readonly type: string;
}
/**
 * Get a Service Fabric managed cluster resource created or in the process of being created in the specified resource group.
 */
export function getManagedClusterOutput(args: GetManagedClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedClusterResult> {
    return pulumi.output(args).apply((a: any) => getManagedCluster(a, opts))
}

export interface GetManagedClusterOutputArgs {
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
