import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the specified commitmentPlans associated with the Cognitive Services account.
 */
export function getCommitmentPlan(args: GetCommitmentPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetCommitmentPlanResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices/v20230501:getCommitmentPlan", {
        "accountName": args.accountName,
        "commitmentPlanName": args.commitmentPlanName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCommitmentPlanArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: string;
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
export interface GetCommitmentPlanResult {
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
    readonly properties: types.outputs.cognitiveservices.v20230501.CommitmentPlanPropertiesResponse;
    /**
     * The resource model definition representing SKU
     */
    readonly sku?: types.outputs.cognitiveservices.v20230501.SkuResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.cognitiveservices.v20230501.SystemDataResponse;
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
 * Gets the specified commitmentPlans associated with the Cognitive Services account.
 */
export function getCommitmentPlanOutput(args: GetCommitmentPlanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCommitmentPlanResult> {
    return pulumi.output(args).apply((a: any) => getCommitmentPlan(a, opts))
}

export interface GetCommitmentPlanOutputArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the commitmentPlan associated with the Cognitive Services Account
     */
    commitmentPlanName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
