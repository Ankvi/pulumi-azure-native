import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the recovery plan.
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01, 2024-10-01.
 */
export function getReplicationRecoveryPlan(args: GetReplicationRecoveryPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationRecoveryPlanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices:getReplicationRecoveryPlan", {
        "recoveryPlanName": args.recoveryPlanName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetReplicationRecoveryPlanArgs {
    /**
     * Name of the recovery plan.
     */
    recoveryPlanName: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    resourceName: string;
}

/**
 * Recovery plan details.
 */
export interface GetReplicationRecoveryPlanResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * The custom details.
     */
    readonly properties: types.outputs.RecoveryPlanPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
/**
 * Gets the details of the recovery plan.
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01, 2024-10-01.
 */
export function getReplicationRecoveryPlanOutput(args: GetReplicationRecoveryPlanOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetReplicationRecoveryPlanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:recoveryservices:getReplicationRecoveryPlan", {
        "recoveryPlanName": args.recoveryPlanName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetReplicationRecoveryPlanOutputArgs {
    /**
     * Name of the recovery plan.
     */
    recoveryPlanName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
}