import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a RecoveryPlan
 *
 * Uses Azure REST API version 2026-03-01-preview.
 *
 * Other available API versions: 2025-02-01-preview, 2026-04-01-preview, 2026-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azureresiliencemanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRecoveryPlan(args: GetRecoveryPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetRecoveryPlanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azureresiliencemanagement:getRecoveryPlan", {
        "recoveryPlanName": args.recoveryPlanName,
        "serviceGroupName": args.serviceGroupName,
    }, opts);
}

export interface GetRecoveryPlanArgs {
    /**
     * The name of the recovery orchestration plan.
     */
    recoveryPlanName: string;
    /**
     * The name of the service group.
     */
    serviceGroupName: string;
}

/**
 * Represents a recovery orchestration plan resource in the Azure Resilience Management provider namespace.
 */
export interface GetRecoveryPlanResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.RecoveryPlanPropertiesResponse;
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
 * Get a RecoveryPlan
 *
 * Uses Azure REST API version 2026-03-01-preview.
 *
 * Other available API versions: 2025-02-01-preview, 2026-04-01-preview, 2026-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azureresiliencemanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRecoveryPlanOutput(args: GetRecoveryPlanOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRecoveryPlanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azureresiliencemanagement:getRecoveryPlan", {
        "recoveryPlanName": args.recoveryPlanName,
        "serviceGroupName": args.serviceGroupName,
    }, opts);
}

export interface GetRecoveryPlanOutputArgs {
    /**
     * The name of the recovery orchestration plan.
     */
    recoveryPlanName: pulumi.Input<string>;
    /**
     * The name of the service group.
     */
    serviceGroupName: pulumi.Input<string>;
}