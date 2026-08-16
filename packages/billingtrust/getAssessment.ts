import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Assessment
 *
 * Uses Azure REST API version 2026-03-17-preview.
 */
export function getAssessment(args: GetAssessmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAssessmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:billingtrust:getAssessment", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetAssessmentArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * A billing trust assessment. An assessment runs a set of rules to evaluate trust attributes of a billing account. The assessment is a singleton per parent resource and is always named 'default'. Re-issuing PUT with the same `assessmentType` is idempotent; changing `assessmentType` after the assessment exists is not supported.
 */
export interface GetAssessmentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
    readonly properties: types.outputs.AssessmentPropertiesResponse;
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
 * Get a Assessment
 *
 * Uses Azure REST API version 2026-03-17-preview.
 */
export function getAssessmentOutput(args: GetAssessmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAssessmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:billingtrust:getAssessment", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetAssessmentOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}