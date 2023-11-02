import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the PUT rollout request body.
 * Azure REST API version: 2019-11-01-preview.
 *
 * Other available API versions: 2018-09-01-preview.
 */
export function getRollout(args: GetRolloutArgs, opts?: pulumi.InvokeOptions): Promise<GetRolloutResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deploymentmanager:getRollout", {
        "resourceGroupName": args.resourceGroupName,
        "retryAttempt": args.retryAttempt,
        "rolloutName": args.rolloutName,
    }, opts);
}

export interface GetRolloutArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Rollout retry attempt ordinal to get the result of. If not specified, result of the latest attempt will be returned.
     */
    retryAttempt?: number;
    /**
     * The rollout name.
     */
    rolloutName: string;
}

/**
 * Defines the rollout.
 */
export interface GetRolloutResult {
    /**
     * The reference to the artifact source resource Id where the payload is located.
     */
    readonly artifactSourceId?: string;
    /**
     * The version of the build being deployed.
     */
    readonly buildVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Operational information of the rollout.
     */
    readonly operationInfo: types.outputs.RolloutOperationInfoResponse;
    /**
     * The detailed information on the services being deployed.
     */
    readonly services: types.outputs.ServiceResponse[];
    /**
     * The current status of the rollout.
     */
    readonly status: string;
    /**
     * The list of step groups that define the orchestration.
     */
    readonly stepGroups: types.outputs.StepGroupResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource Id of the service topology from which service units are being referenced in step groups to be deployed.
     */
    readonly targetServiceTopologyId: string;
    /**
     * The cardinal count of total number of retries performed on the rollout at a given time.
     */
    readonly totalRetryAttempts: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Defines the PUT rollout request body.
 * Azure REST API version: 2019-11-01-preview.
 *
 * Other available API versions: 2018-09-01-preview.
 */
export function getRolloutOutput(args: GetRolloutOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRolloutResult> {
    return pulumi.output(args).apply((a: any) => getRollout(a, opts))
}

export interface GetRolloutOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Rollout retry attempt ordinal to get the result of. If not specified, result of the latest attempt will be returned.
     */
    retryAttempt?: pulumi.Input<number>;
    /**
     * The rollout name.
     */
    rolloutName: pulumi.Input<string>;
}
