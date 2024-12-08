import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a BusinessCase
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-05-01-preview, 2023-09-09-preview.
 */
export function getBusinessCaseOperation(args: GetBusinessCaseOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetBusinessCaseOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getBusinessCaseOperation", {
        "businessCaseName": args.businessCaseName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBusinessCaseOperationArgs {
    /**
     * Business case ARM name
     */
    businessCaseName: string;
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
 * Business case resource.
 */
export interface GetBusinessCaseOperationResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Gets the state of business case reports.
     */
    readonly reportStatusDetails: types.outputs.ReportDetailsResponse[];
    /**
     * Business case settings.
     */
    readonly settings?: types.outputs.SettingsResponse;
    /**
     * Business case state.
     */
    readonly state: string;
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
 * Get a BusinessCase
 * Azure REST API version: 2023-04-01-preview.
 *
 * Other available API versions: 2023-05-01-preview, 2023-09-09-preview.
 */
export function getBusinessCaseOperationOutput(args: GetBusinessCaseOperationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBusinessCaseOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getBusinessCaseOperation", {
        "businessCaseName": args.businessCaseName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBusinessCaseOperationOutputArgs {
    /**
     * Business case ARM name
     */
    businessCaseName: pulumi.Input<string>;
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}