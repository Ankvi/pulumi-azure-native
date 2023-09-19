import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve an Azure ML commitment plan by its subscription, resource group and name.
 */
export function getCommitmentPlan(args: GetCommitmentPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetCommitmentPlanResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearning/v20160501preview:getCommitmentPlan", {
        "commitmentPlanName": args.commitmentPlanName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCommitmentPlanArgs {
    /**
     * The Azure ML commitment plan name.
     */
    commitmentPlanName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * An Azure ML commitment plan resource.
 */
export interface GetCommitmentPlanResult {
    /**
     * An entity tag used to enforce optimistic concurrency.
     */
    readonly etag?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The commitment plan properties.
     */
    readonly properties: types.outputs.CommitmentPlanPropertiesResponse;
    /**
     * The commitment plan SKU.
     */
    readonly sku?: types.outputs.ResourceSkuResponse;
    /**
     * User-defined tags for the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieve an Azure ML commitment plan by its subscription, resource group and name.
 */
export function getCommitmentPlanOutput(args: GetCommitmentPlanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCommitmentPlanResult> {
    return pulumi.output(args).apply((a: any) => getCommitmentPlan(a, opts))
}

export interface GetCommitmentPlanOutputArgs {
    /**
     * The Azure ML commitment plan name.
     */
    commitmentPlanName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
