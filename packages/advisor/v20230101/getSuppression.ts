import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Obtains the details of a suppression.
 */
export function getSuppression(args: GetSuppressionArgs, opts?: pulumi.InvokeOptions): Promise<GetSuppressionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:advisor/v20230101:getSuppression", {
        "name": args.name,
        "recommendationId": args.recommendationId,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetSuppressionArgs {
    /**
     * The name of the suppression.
     */
    name: string;
    /**
     * The recommendation ID.
     */
    recommendationId: string;
    /**
     * The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
     */
    resourceUri: string;
}

/**
 * The details of the snoozed or dismissed rule; for example, the duration, name, and GUID associated with the rule.
 */
export interface GetSuppressionResult {
    /**
     * Gets or sets the expiration time stamp.
     */
    readonly expirationTimeStamp: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The GUID of the suppression.
     */
    readonly suppressionId?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The duration for which the suppression is valid.
     */
    readonly ttl?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Obtains the details of a suppression.
 */
export function getSuppressionOutput(args: GetSuppressionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSuppressionResult> {
    return pulumi.output(args).apply((a: any) => getSuppression(a, opts))
}

export interface GetSuppressionOutputArgs {
    /**
     * The name of the suppression.
     */
    name: pulumi.Input<string>;
    /**
     * The recommendation ID.
     */
    recommendationId: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
     */
    resourceUri: pulumi.Input<string>;
}
