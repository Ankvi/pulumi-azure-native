import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a MachineAssessmentV2
 *
 * Uses Azure REST API version 2024-03-03-preview.
 */
export function getMachineAssessmentsV2Operation(args: GetMachineAssessmentsV2OperationArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineAssessmentsV2OperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getMachineAssessmentsV2Operation", {
        "assessmentName": args.assessmentName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMachineAssessmentsV2OperationArgs {
    /**
     * Machine Assessment V2 ARM name
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
 * Machine assessment V2 resource.
 */
export interface GetMachineAssessmentsV2OperationResult {
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
    readonly properties: types.outputs.MachineAssessmentV2PropertiesResponse;
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
 * Get a MachineAssessmentV2
 *
 * Uses Azure REST API version 2024-03-03-preview.
 */
export function getMachineAssessmentsV2OperationOutput(args: GetMachineAssessmentsV2OperationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMachineAssessmentsV2OperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getMachineAssessmentsV2Operation", {
        "assessmentName": args.assessmentName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMachineAssessmentsV2OperationOutputArgs {
    /**
     * Machine Assessment V2 ARM name
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