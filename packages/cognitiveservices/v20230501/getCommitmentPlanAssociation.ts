import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the association of the Cognitive Services commitment plan.
 */
export function getCommitmentPlanAssociation(args: GetCommitmentPlanAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetCommitmentPlanAssociationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices/v20230501:getCommitmentPlanAssociation", {
        "commitmentPlanAssociationName": args.commitmentPlanAssociationName,
        "commitmentPlanName": args.commitmentPlanName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCommitmentPlanAssociationArgs {
    /**
     * The name of the commitment plan association with the Cognitive Services Account
     */
    commitmentPlanAssociationName: string;
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
 * The commitment plan association.
 */
export interface GetCommitmentPlanAssociationResult {
    /**
     * The Azure resource id of the account.
     */
    readonly accountId?: string;
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.cognitiveservices.v20230501.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the association of the Cognitive Services commitment plan.
 */
export function getCommitmentPlanAssociationOutput(args: GetCommitmentPlanAssociationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCommitmentPlanAssociationResult> {
    return pulumi.output(args).apply((a: any) => getCommitmentPlanAssociation(a, opts))
}

export interface GetCommitmentPlanAssociationOutputArgs {
    /**
     * The name of the commitment plan association with the Cognitive Services Account
     */
    commitmentPlanAssociationName: pulumi.Input<string>;
    /**
     * The name of the commitmentPlan associated with the Cognitive Services Account
     */
    commitmentPlanName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
