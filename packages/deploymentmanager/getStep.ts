import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The resource representation of a rollout step.
 * Azure REST API version: 2019-11-01-preview.
 */
export function getStep(args: GetStepArgs, opts?: pulumi.InvokeOptions): Promise<GetStepResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deploymentmanager:getStep", {
        "resourceGroupName": args.resourceGroupName,
        "stepName": args.stepName,
    }, opts);
}

export interface GetStepArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the deployment step.
     */
    stepName: string;
}

/**
 * The resource representation of a rollout step.
 */
export interface GetStepResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The properties that define the step.
     */
    readonly properties: types.outputs.HealthCheckStepPropertiesResponse | types.outputs.WaitStepPropertiesResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * The resource representation of a rollout step.
 * Azure REST API version: 2019-11-01-preview.
 */
export function getStepOutput(args: GetStepOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStepResult> {
    return pulumi.output(args).apply((a: any) => getStep(a, opts))
}

export interface GetStepOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the deployment step.
     */
    stepName: pulumi.Input<string>;
}
