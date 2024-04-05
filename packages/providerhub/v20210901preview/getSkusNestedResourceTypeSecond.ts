import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the sku details for the given resource type and sku name.
 */
export function getSkusNestedResourceTypeSecond(args: GetSkusNestedResourceTypeSecondArgs, opts?: pulumi.InvokeOptions): Promise<GetSkusNestedResourceTypeSecondResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:providerhub/v20210901preview:getSkusNestedResourceTypeSecond", {
        "nestedResourceTypeFirst": args.nestedResourceTypeFirst,
        "nestedResourceTypeSecond": args.nestedResourceTypeSecond,
        "providerNamespace": args.providerNamespace,
        "resourceType": args.resourceType,
        "sku": args.sku,
    }, opts);
}

export interface GetSkusNestedResourceTypeSecondArgs {
    /**
     * The first child resource type.
     */
    nestedResourceTypeFirst: string;
    /**
     * The second child resource type.
     */
    nestedResourceTypeSecond: string;
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

export interface GetSkusNestedResourceTypeSecondResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: types.outputs.SkuResourceResponseProperties;
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
 * Gets the sku details for the given resource type and sku name.
 */
export function getSkusNestedResourceTypeSecondOutput(args: GetSkusNestedResourceTypeSecondOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSkusNestedResourceTypeSecondResult> {
    return pulumi.output(args).apply((a: any) => getSkusNestedResourceTypeSecond(a, opts))
}

export interface GetSkusNestedResourceTypeSecondOutputArgs {
    /**
     * The first child resource type.
     */
    nestedResourceTypeFirst: pulumi.Input<string>;
    /**
     * The second child resource type.
     */
    nestedResourceTypeSecond: pulumi.Input<string>;
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