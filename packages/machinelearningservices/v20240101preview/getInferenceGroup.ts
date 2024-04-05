import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export function getInferenceGroup(args: GetInferenceGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetInferenceGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20240101preview:getInferenceGroup", {
        "groupName": args.groupName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetInferenceGroupArgs {
    /**
     * InferenceGroup name.
     */
    groupName: string;
    /**
     * InferencePool name.
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

export interface GetInferenceGroupResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly inferenceGroupProperties: types.outputs.InferenceGroupResponse;
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
export function getInferenceGroupOutput(args: GetInferenceGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInferenceGroupResult> {
    return pulumi.output(args).apply((a: any) => getInferenceGroup(a, opts))
}

export interface GetInferenceGroupOutputArgs {
    /**
     * InferenceGroup name.
     */
    groupName: pulumi.Input<string>;
    /**
     * InferencePool name.
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}