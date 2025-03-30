import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a EksCluster
 *
 * Uses Azure REST API version 2024-12-01.
 */
export function getEksCluster(args: GetEksClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetEksClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:awsconnector:getEksCluster", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetEksClusterArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * A Microsoft.AwsConnector resource
 */
export interface GetEksClusterResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.EksClusterPropertiesResponse;
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
 * Get a EksCluster
 *
 * Uses Azure REST API version 2024-12-01.
 */
export function getEksClusterOutput(args: GetEksClusterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEksClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:awsconnector:getEksCluster", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetEksClusterOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}