import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the provider registration details.
 *
 * Uses Azure REST API version 2021-09-01-preview.
 */
export function getProviderRegistration(args: GetProviderRegistrationArgs, opts?: pulumi.InvokeOptions): Promise<GetProviderRegistrationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:providerhub:getProviderRegistration", {
        "providerNamespace": args.providerNamespace,
    }, opts);
}

export interface GetProviderRegistrationArgs {
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: string;
}

export interface GetProviderRegistrationResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: types.outputs.ProviderRegistrationResponseProperties;
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
 * Gets the provider registration details.
 *
 * Uses Azure REST API version 2021-09-01-preview.
 */
export function getProviderRegistrationOutput(args: GetProviderRegistrationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProviderRegistrationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:providerhub:getProviderRegistration", {
        "providerNamespace": args.providerNamespace,
    }, opts);
}

export interface GetProviderRegistrationOutputArgs {
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: pulumi.Input<string>;
}