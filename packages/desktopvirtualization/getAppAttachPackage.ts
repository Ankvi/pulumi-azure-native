import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an app attach package.
 *
 * Uses Azure REST API version 2023-10-04-preview.
 *
 * Other available API versions: 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-03, 2024-04-08-preview, 2024-08-08-preview, 2024-11-01-preview.
 */
export function getAppAttachPackage(args: GetAppAttachPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetAppAttachPackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:desktopvirtualization:getAppAttachPackage", {
        "appAttachPackageName": args.appAttachPackageName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppAttachPackageArgs {
    /**
     * The name of the App Attach package arm object
     */
    appAttachPackageName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Schema for App Attach Package properties.
 */
export interface GetAppAttachPackageResult {
    /**
     * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. 
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    readonly identity?: types.outputs.ResourceModelWithAllowedPropertySetResponseIdentity;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
     */
    readonly managedBy?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly plan?: types.outputs.ResourceModelWithAllowedPropertySetResponsePlan;
    /**
     * Detailed properties for App Attach Package
     */
    readonly properties: types.outputs.AppAttachPackagePropertiesResponse;
    readonly sku?: types.outputs.ResourceModelWithAllowedPropertySetResponseSku;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
 * Get an app attach package.
 *
 * Uses Azure REST API version 2023-10-04-preview.
 *
 * Other available API versions: 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-03, 2024-04-08-preview, 2024-08-08-preview, 2024-11-01-preview.
 */
export function getAppAttachPackageOutput(args: GetAppAttachPackageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAppAttachPackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:desktopvirtualization:getAppAttachPackage", {
        "appAttachPackageName": args.appAttachPackageName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppAttachPackageOutputArgs {
    /**
     * The name of the App Attach package arm object
     */
    appAttachPackageName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}