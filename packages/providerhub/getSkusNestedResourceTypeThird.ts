import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the sku details for the given resource type and sku name.
 * Azure REST API version: 2021-09-01-preview.
 */
export function getSkusNestedResourceTypeThird(args: GetSkusNestedResourceTypeThirdArgs, opts?: pulumi.InvokeOptions): Promise<GetSkusNestedResourceTypeThirdResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:providerhub:getSkusNestedResourceTypeThird", {
        "nestedResourceTypeFirst": args.nestedResourceTypeFirst,
        "nestedResourceTypeSecond": args.nestedResourceTypeSecond,
        "nestedResourceTypeThird": args.nestedResourceTypeThird,
        "providerNamespace": args.providerNamespace,
        "resourceType": args.resourceType,
        "sku": args.sku,
    }, opts);
}

export interface GetSkusNestedResourceTypeThirdArgs {
    /**
     * The first child resource type.
     */
    nestedResourceTypeFirst: string;
    /**
     * The second child resource type.
     */
    nestedResourceTypeSecond: string;
    /**
     * The third child resource type.
     */
    nestedResourceTypeThird: string;
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: string;
    /**
     * The resource type.
     */
    resourceType: string;
    /**
     * The SKU.
     */
    sku: string;
}

export interface GetSkusNestedResourceTypeThirdResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: types.outputs.providerhub.SkuResourceResponseProperties;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.providerhub.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the sku details for the given resource type and sku name.
 * Azure REST API version: 2021-09-01-preview.
 */
export function getSkusNestedResourceTypeThirdOutput(args: GetSkusNestedResourceTypeThirdOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSkusNestedResourceTypeThirdResult> {
    return pulumi.output(args).apply((a: any) => getSkusNestedResourceTypeThird(a, opts))
}

export interface GetSkusNestedResourceTypeThirdOutputArgs {
    /**
     * The first child resource type.
     */
    nestedResourceTypeFirst: pulumi.Input<string>;
    /**
     * The second child resource type.
     */
    nestedResourceTypeSecond: pulumi.Input<string>;
    /**
     * The third child resource type.
     */
    nestedResourceTypeThird: pulumi.Input<string>;
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: pulumi.Input<string>;
    /**
     * The resource type.
     */
    resourceType: pulumi.Input<string>;
    /**
     * The SKU.
     */
    sku: pulumi.Input<string>;
}
