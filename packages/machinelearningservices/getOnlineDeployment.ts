import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2021-03-01-preview, 2022-02-01-preview, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview.
 */
export function getOnlineDeployment(args: GetOnlineDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetOnlineDeploymentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getOnlineDeployment", {
        "deploymentName": args.deploymentName,
        "endpointName": args.endpointName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetOnlineDeploymentArgs {
    /**
     * Inference Endpoint Deployment name.
     */
    deploymentName: string;
    /**
     * Inference endpoint name.
     */
    endpointName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

export interface GetOnlineDeploymentResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly onlineDeploymentProperties: types.outputs.KubernetesOnlineDeploymentResponse | types.outputs.ManagedOnlineDeploymentResponse;
    /**
     * Sku details required for ARM contract for Autoscaling.
     */
    readonly sku?: types.outputs.SkuResponse;
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
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2021-03-01-preview, 2022-02-01-preview, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview.
 */
export function getOnlineDeploymentOutput(args: GetOnlineDeploymentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOnlineDeploymentResult> {
    return pulumi.output(args).apply((a: any) => getOnlineDeployment(a, opts))
}

export interface GetOnlineDeploymentOutputArgs {
    /**
     * Inference Endpoint Deployment name.
     */
    deploymentName: pulumi.Input<string>;
    /**
     * Inference endpoint name.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}