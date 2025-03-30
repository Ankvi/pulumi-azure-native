import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a resource type details in the given subscription and provider.
 *
 * Uses Azure REST API version 2021-09-01-preview.
 */
export function getResourceTypeRegistration(args: GetResourceTypeRegistrationArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceTypeRegistrationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:providerhub:getResourceTypeRegistration", {
        "providerNamespace": args.providerNamespace,
        "resourceType": args.resourceType,
    }, opts);
}

export interface GetResourceTypeRegistrationArgs {
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: string;
    /**
     * The resource type.
     */
    resourceType: string;
}

export interface GetResourceTypeRegistrationResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: types.outputs.ResourceTypeRegistrationResponseProperties;
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
 * Gets a resource type details in the given subscription and provider.
 *
 * Uses Azure REST API version 2021-09-01-preview.
 */
export function getResourceTypeRegistrationOutput(args: GetResourceTypeRegistrationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetResourceTypeRegistrationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:providerhub:getResourceTypeRegistration", {
        "providerNamespace": args.providerNamespace,
        "resourceType": args.resourceType,
    }, opts);
}

export interface GetResourceTypeRegistrationOutputArgs {
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: pulumi.Input<string>;
    /**
     * The resource type.
     */
    resourceType: pulumi.Input<string>;
}