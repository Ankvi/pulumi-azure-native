import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the recovery plan.
 */
export function getReplicationRecoveryPlan(args: GetReplicationRecoveryPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationRecoveryPlanResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices/v20230801:getReplicationRecoveryPlan", {
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
 */
export function getReplicationRecoveryPlanOutput(args: GetReplicationRecoveryPlanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicationRecoveryPlanResult> {
    return pulumi.output(args).apply((a: any) => getReplicationRecoveryPlan(a, opts))
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