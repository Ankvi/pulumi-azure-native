import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Sentinel onboarding state
 */
export function getSentinelOnboardingState(args: GetSentinelOnboardingStateArgs, opts?: pulumi.InvokeOptions): Promise<GetSentinelOnboardingStateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20231001preview:getSentinelOnboardingState", {
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
 */
export function getSentinelOnboardingStateOutput(args: GetSentinelOnboardingStateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSentinelOnboardingStateResult> {
    return pulumi.output(args).apply((a: any) => getSentinelOnboardingState(a, opts))
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
