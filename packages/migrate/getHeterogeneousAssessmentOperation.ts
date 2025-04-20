import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a HeterogeneousAssessment
 *
 * Uses Azure REST API version 2024-03-03-preview.
 */
export function getHeterogeneousAssessmentOperation(args: GetHeterogeneousAssessmentOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetHeterogeneousAssessmentOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getHeterogeneousAssessmentOperation", {
        "assessmentName": args.assessmentName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHeterogeneousAssessmentOperationArgs {
    /**
     * Heterogeneous Assessment ARM name
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
 * Heterogeneous assessment resource.
 */
export interface GetHeterogeneousAssessmentOperationResult {
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
    readonly properties: types.outputs.HeterogeneousAssessmentPropertiesResponse;
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
 * Get a HeterogeneousAssessment
 *
 * Uses Azure REST API version 2024-03-03-preview.
 */
export function getHeterogeneousAssessmentOperationOutput(args: GetHeterogeneousAssessmentOperationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHeterogeneousAssessmentOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getHeterogeneousAssessmentOperation", {
        "assessmentName": args.assessmentName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHeterogeneousAssessmentOperationOutputArgs {
    /**
     * Heterogeneous Assessment ARM name
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