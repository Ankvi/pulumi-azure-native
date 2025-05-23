import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the default rollout details.
 *
 * Uses Azure REST API version 2021-09-01-preview.
 */
export function getDefaultRollout(args: GetDefaultRolloutArgs, opts?: pulumi.InvokeOptions): Promise<GetDefaultRolloutResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:providerhub:getDefaultRollout", {
        "providerNamespace": args.providerNamespace,
        "rolloutName": args.rolloutName,
    }, opts);
}

export interface GetDefaultRolloutArgs {
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: string;
    /**
     * The rollout name.
     */
    rolloutName: string;
}

/**
 * Default rollout definition.
 */
export interface GetDefaultRolloutResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of the rollout.
     */
    readonly properties: types.outputs.DefaultRolloutResponseProperties;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the default rollout details.
 *
 * Uses Azure REST API version 2021-09-01-preview.
 */
export function getDefaultRolloutOutput(args: GetDefaultRolloutOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDefaultRolloutResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:providerhub:getDefaultRollout", {
        "providerNamespace": args.providerNamespace,
        "rolloutName": args.rolloutName,
    }, opts);
}

export interface GetDefaultRolloutOutputArgs {
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: pulumi.Input<string>;
    /**
     * The rollout name.
     */
    rolloutName: pulumi.Input<string>;
}