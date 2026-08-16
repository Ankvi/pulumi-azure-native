import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an AppLink.
 *
 * Uses Azure REST API version 2025-08-01-preview.
 */
export function getAppLink(args: GetAppLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetAppLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:applink:getAppLink", {
        "appLinkName": args.appLinkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppLinkArgs {
    /**
     * The name of the AppLink
     */
    appLinkName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * AppLink resource
 */
export interface GetAppLinkResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.AppLinkPropertiesResponse;
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
 * Get an AppLink.
 *
 * Uses Azure REST API version 2025-08-01-preview.
 */
export function getAppLinkOutput(args: GetAppLinkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAppLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:applink:getAppLink", {
        "appLinkName": args.appLinkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppLinkOutputArgs {
    /**
     * The name of the AppLink
     */
    appLinkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}