import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided the Kubernetes cluster feature.
 * Azure REST API version: 2024-06-01-preview.
 *
 * Other available API versions: 2024-07-01.
 */
export function getKubernetesClusterFeature(args: GetKubernetesClusterFeatureArgs, opts?: pulumi.InvokeOptions): Promise<GetKubernetesClusterFeatureResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud:getKubernetesClusterFeature", {
        "featureName": args.featureName,
        "kubernetesClusterName": args.kubernetesClusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKubernetesClusterFeatureArgs {
    /**
     * The name of the feature.
     */
    featureName: string;
    /**
     * The name of the Kubernetes cluster.
     */
    kubernetesClusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetKubernetesClusterFeatureResult {
    /**
     * The lifecycle indicator of the feature.
     */
    readonly availabilityLifecycle: string;
    /**
     * The detailed status of the feature.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message for the detailed status of the feature.
     */
    readonly detailedStatusMessage: string;
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
     * The configured options for the feature.
     */
    readonly options?: types.outputs.StringKeyValuePairResponse[];
    /**
     * The provisioning state of the Kubernetes cluster feature.
     */
    readonly provisioningState: string;
    /**
     * The indicator of if the feature is required or optional. Optional features may be deleted by the user, while required features are managed with the kubernetes cluster lifecycle.
     */
    readonly required: string;
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
     * The version of the feature.
     */
    readonly version: string;
}
/**
 * Get properties of the provided the Kubernetes cluster feature.
 * Azure REST API version: 2024-06-01-preview.
 *
 * Other available API versions: 2024-07-01.
 */
export function getKubernetesClusterFeatureOutput(args: GetKubernetesClusterFeatureOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetKubernetesClusterFeatureResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:networkcloud:getKubernetesClusterFeature", {
        "featureName": args.featureName,
        "kubernetesClusterName": args.kubernetesClusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKubernetesClusterFeatureOutputArgs {
    /**
     * The name of the feature.
     */
    featureName: pulumi.Input<string>;
    /**
     * The name of the Kubernetes cluster.
     */
    kubernetesClusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}