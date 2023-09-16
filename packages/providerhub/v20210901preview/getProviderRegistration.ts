import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the provider registration details.
 */
export function getProviderRegistration(args: GetProviderRegistrationArgs, opts?: pulumi.InvokeOptions): Promise<GetProviderRegistrationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:providerhub/v20210901preview:getProviderRegistration", {
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
    readonly properties: types.outputs.providerhub.v20210901preview.ProviderRegistrationResponseProperties;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.providerhub.v20210901preview.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the provider registration details.
 */
export function getProviderRegistrationOutput(args: GetProviderRegistrationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProviderRegistrationResult> {
    return pulumi.output(args).apply((a: any) => getProviderRegistration(a, opts))
}

export interface GetProviderRegistrationOutputArgs {
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: pulumi.Input<string>;
}
