import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
export function getBatchDeployment(args: GetBatchDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetBatchDeploymentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230401:getBatchDeployment", {
        "deploymentName": args.deploymentName,
        "endpointName": args.endpointName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetBatchDeploymentArgs {
    /**
     * The identifier for the Batch deployments.
     */
    deploymentName: string;
    /**
     * Endpoint name
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

export interface GetBatchDeploymentResult {
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly batchDeploymentProperties: types.outputs.machinelearningservices.v20230401.BatchDeploymentResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    readonly identity?: types.outputs.machinelearningservices.v20230401.ManagedServiceIdentityResponse;
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
     * Sku details required for ARM contract for Autoscaling.
     */
    readonly sku?: types.outputs.machinelearningservices.v20230401.SkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.machinelearningservices.v20230401.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
export function getBatchDeploymentOutput(args: GetBatchDeploymentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBatchDeploymentResult> {
    return pulumi.output(args).apply((a: any) => getBatchDeployment(a, opts))
}

export interface GetBatchDeploymentOutputArgs {
    /**
     * The identifier for the Batch deployments.
     */
    deploymentName: pulumi.Input<string>;
    /**
     * Endpoint name
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
