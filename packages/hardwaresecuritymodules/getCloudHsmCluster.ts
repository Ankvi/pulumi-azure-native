import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Cloud HSM Cluster
 * Azure REST API version: 2022-08-31-preview.
 */
export function getCloudHsmCluster(args: GetCloudHsmClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudHsmClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hardwaresecuritymodules:getCloudHsmCluster", {
        "cloudHsmClusterName": args.cloudHsmClusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudHsmClusterArgs {
    /**
     * The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 24 characters in length.
     */
    cloudHsmClusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Resource information with extended details.
 */
export interface GetCloudHsmClusterResult {
    /**
     * The Cloud HSM Cluster's auto-generated Domain Name Label Scope
     */
    readonly autoGeneratedDomainNameLabelScope?: string;
    /**
     * An array of Cloud HSM Cluster's HSMs
     */
    readonly hsms?: types.outputs.CloudHsmPropertiesResponse[];
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
     * List of private endpoint connection resources
     */
    readonly privateEndpointConnections?: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * The Cloud HSM Cluster's provisioningState
     */
    readonly provisioningState?: string;
    /**
     * The Cloud HSM Cluster public network access
     */
    readonly publicNetworkAccess?: string;
    /**
     * Security domain properties information for Cloud HSM cluster
     */
    readonly securityDomain?: types.outputs.CloudHsmClusterSecurityDomainPropertiesResponse;
    /**
     * SKU details
     */
    readonly sku?: types.outputs.CloudHsmClusterSkuResponse;
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
 * Gets the specified Cloud HSM Cluster
 * Azure REST API version: 2022-08-31-preview.
 */
export function getCloudHsmClusterOutput(args: GetCloudHsmClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudHsmClusterResult> {
    return pulumi.output(args).apply((a: any) => getCloudHsmCluster(a, opts))
}

export interface GetCloudHsmClusterOutputArgs {
    /**
     * The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 24 characters in length.
     */
    cloudHsmClusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
