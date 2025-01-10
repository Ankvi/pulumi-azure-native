import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Sentinel onboarding state
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-03-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-11-01, 2023-12-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-09-01, 2024-10-01-preview.
 */
export function getSentinelOnboardingState(args: GetSentinelOnboardingStateArgs, opts?: pulumi.InvokeOptions): Promise<GetSentinelOnboardingStateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getSentinelOnboardingState", {
        "resourceGroupName": args.resourceGroupName,
        "sentinelOnboardingStateName": args.sentinelOnboardingStateName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSentinelOnboardingStateArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The Sentinel onboarding state name. Supports - default
     */
    sentinelOnboardingStateName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Sentinel onboarding state
 */
export interface GetSentinelOnboardingStateResult {
    /**
     * Flag that indicates the status of the CMK setting
     */
    readonly customerManagedKey?: boolean;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * Get Sentinel onboarding state
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-03-01-preview, 2023-06-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-11-01, 2023-12-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-09-01, 2024-10-01-preview.
 */
export function getSentinelOnboardingStateOutput(args: GetSentinelOnboardingStateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSentinelOnboardingStateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getSentinelOnboardingState", {
        "resourceGroupName": args.resourceGroupName,
        "sentinelOnboardingStateName": args.sentinelOnboardingStateName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSentinelOnboardingStateOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Sentinel onboarding state name. Supports - default
     */
    sentinelOnboardingStateName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}