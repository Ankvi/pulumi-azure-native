import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the custom rollout details.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getCustomRollout(args: GetCustomRolloutArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomRolloutResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:providerhub:getCustomRollout", {
        "providerNamespace": args.providerNamespace,
        "rolloutName": args.rolloutName,
    }, opts);
}

export interface GetCustomRolloutArgs {
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: string;
    /**
     * The rollout name.
     */
    rolloutName: string;
}

export interface GetCustomRolloutResult {
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
     * Properties of the rollout.
     */
    readonly properties: types.outputs.CustomRolloutPropertiesResponse;
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
 * Gets the custom rollout details.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getCustomRolloutOutput(args: GetCustomRolloutOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCustomRolloutResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:providerhub:getCustomRollout", {
        "providerNamespace": args.providerNamespace,
        "rolloutName": args.rolloutName,
    }, opts);
}

export interface GetCustomRolloutOutputArgs {
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: pulumi.Input<string>;
    /**
     * The rollout name.
     */
    rolloutName: pulumi.Input<string>;
}