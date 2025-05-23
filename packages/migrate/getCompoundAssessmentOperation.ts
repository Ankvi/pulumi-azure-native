import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a CompoundAssessment
 *
 * Uses Azure REST API version 2024-03-03-preview.
 */
export function getCompoundAssessmentOperation(args: GetCompoundAssessmentOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetCompoundAssessmentOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getCompoundAssessmentOperation", {
        "compoundAssessmentName": args.compoundAssessmentName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCompoundAssessmentOperationArgs {
    /**
     * Compound Assessment ARM name
     */
    compoundAssessmentName: string;
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
 * Compound assessment resource.
 */
export interface GetCompoundAssessmentOperationResult {
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
    readonly properties: types.outputs.CompoundAssessmentPropertiesResponse;
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
 * Get a CompoundAssessment
 *
 * Uses Azure REST API version 2024-03-03-preview.
 */
export function getCompoundAssessmentOperationOutput(args: GetCompoundAssessmentOperationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCompoundAssessmentOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getCompoundAssessmentOperation", {
        "compoundAssessmentName": args.compoundAssessmentName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCompoundAssessmentOperationOutputArgs {
    /**
     * Compound Assessment ARM name
     */
    compoundAssessmentName: pulumi.Input<string>;
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}