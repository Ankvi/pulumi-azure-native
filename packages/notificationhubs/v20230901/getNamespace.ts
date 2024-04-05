import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Notification Hubs Namespace Resource.
 */
export function getNamespace(args: GetNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs/v20230901:getNamespace", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceArgs {
    /**
     * Namespace name
     */
    namespaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Notification Hubs Namespace Resource.
 */
export interface GetNamespaceResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * Represents namespace properties.
     */
    readonly properties: types.outputs.NamespacePropertiesResponse;
    /**
     * The Sku description for a namespace
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 * Notification Hubs Namespace Resource.
 */
export function getNamespaceOutput(args: GetNamespaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceResult> {
    return pulumi.output(args).apply((a: any) => getNamespace(a, opts))
}

export interface GetNamespaceOutputArgs {
    /**
     * Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}