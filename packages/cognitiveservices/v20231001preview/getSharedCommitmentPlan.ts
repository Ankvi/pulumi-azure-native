import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a Cognitive Services commitment plan specified by the parameters.
 */
export function getSharedCommitmentPlan(args: GetSharedCommitmentPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedCommitmentPlanResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices/v20231001preview:getSharedCommitmentPlan", {
        "commitmentPlanName": args.commitmentPlanName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetSharedCommitmentPlanArgs {
    /**
     * The name of the commitmentPlan associated with the Cognitive Services Account
     */
    commitmentPlanName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Cognitive Services account commitment plan.
 */
export interface GetSharedCommitmentPlanResult {
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The Kind of the resource.
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of Cognitive Services account commitment plan.
     */
    readonly properties: types.outputs.CommitmentPlanPropertiesResponse;
    /**
     * The resource model definition representing SKU
     */
    readonly sku?: types.outputs.SkuResponse;
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
 * Returns a Cognitive Services commitment plan specified by the parameters.
 */
export function getSharedCommitmentPlanOutput(args: GetSharedCommitmentPlanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSharedCommitmentPlanResult> {
    return pulumi.output(args).apply((a: any) => getSharedCommitmentPlan(a, opts))
}

export interface GetSharedCommitmentPlanOutputArgs {
    /**
     * The name of the commitmentPlan associated with the Cognitive Services Account
     */
    commitmentPlanName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
