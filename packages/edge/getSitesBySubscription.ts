import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Site
 *
 * Uses Azure REST API version 2024-02-01-preview.
 */
export function getSitesBySubscription(args: GetSitesBySubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetSitesBySubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edge:getSitesBySubscription", {
        "siteName": args.siteName,
    }, opts);
}

export interface GetSitesBySubscriptionArgs {
    /**
     * Name of Site resource
     */
    siteName: string;
}

/**
 * Site as ARM Resource
 */
export interface GetSitesBySubscriptionResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.SitePropertiesResponse;
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
 * Get a Site
 *
 * Uses Azure REST API version 2024-02-01-preview.
 */
export function getSitesBySubscriptionOutput(args: GetSitesBySubscriptionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSitesBySubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:edge:getSitesBySubscription", {
        "siteName": args.siteName,
    }, opts);
}

export interface GetSitesBySubscriptionOutputArgs {
    /**
     * Name of Site resource
     */
    siteName: pulumi.Input<string>;
}