import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a AKSAssessment
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-05-01-preview.
 */
export function getAksAssessmentOperation(args: GetAksAssessmentOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetAksAssessmentOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getAksAssessmentOperation", {
        "assessmentName": args.assessmentName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAksAssessmentOperationArgs {
    /**
     * AKS Assessment Name.
     */
    assessmentName: string;
    /**
     * Assessment Project Name
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * ARM model of AKS Assessment.
 */
export interface GetAksAssessmentOperationResult {
    /**
     * Gets AKS Assessment Details.
     */
    readonly details: types.outputs.AKSAssessmentDetailsResponse;
    /**
     * If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
     */
    readonly eTag: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Gets or sets scope parameters to identify inventory items for assessment.
     */
    readonly scope?: types.outputs.AssessmentScopeParametersResponse;
    /**
     * Gets or sets AKS Assessment Settings.
     */
    readonly settings: types.outputs.AKSAssessmentSettingsResponse;
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
 * Get a AKSAssessment
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-05-01-preview.
 */
export function getAksAssessmentOperationOutput(args: GetAksAssessmentOperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAksAssessmentOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getAksAssessmentOperation", {
        "assessmentName": args.assessmentName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAksAssessmentOperationOutputArgs {
    /**
     * AKS Assessment Name.
     */
    assessmentName: pulumi.Input<string>;
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}