import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the AppComplianceAutomation scoping configuration of the specific report.
 * Azure REST API version: 2024-06-27.
 */
export function getScopingConfiguration(args: GetScopingConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetScopingConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appcomplianceautomation:getScopingConfiguration", {
        "reportName": args.reportName,
        "scopingConfigurationName": args.scopingConfigurationName,
    }, opts);
}

export interface GetScopingConfigurationArgs {
    /**
     * Report Name.
     */
    reportName: string;
    /**
     * The scoping configuration of the specific report.
     */
    scopingConfigurationName: string;
}

/**
 * A class represent an AppComplianceAutomation scoping configuration resource.
 */
export interface GetScopingConfigurationResult {
    /**
     * List of scoping question answers.
     */
    readonly answers?: types.outputs.ScopingAnswerResponse[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
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
 * Get the AppComplianceAutomation scoping configuration of the specific report.
 * Azure REST API version: 2024-06-27.
 */
export function getScopingConfigurationOutput(args: GetScopingConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetScopingConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getScopingConfiguration(a, opts))
}

export interface GetScopingConfigurationOutputArgs {
    /**
     * Report Name.
     */
    reportName: pulumi.Input<string>;
    /**
     * The scoping configuration of the specific report.
     */
    scopingConfigurationName: pulumi.Input<string>;
}