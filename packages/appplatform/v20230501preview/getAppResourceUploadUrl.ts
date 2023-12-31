import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get an resource upload URL for an App, which may be artifacts or source archive.
 */
export function getAppResourceUploadUrl(args: GetAppResourceUploadUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetAppResourceUploadUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230501preview:getAppResourceUploadUrl", {
        "appName": args.appName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetAppResourceUploadUrlArgs {
    /**
     * The name of the App resource.
     */
    appName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
}

/**
 * Resource upload definition payload
 */
export interface GetAppResourceUploadUrlResult {
    /**
     * Source relative path
     */
    readonly relativePath?: string;
    /**
     * Upload URL
     */
    readonly uploadUrl?: string;
}
/**
 * Get an resource upload URL for an App, which may be artifacts or source archive.
 */
export function getAppResourceUploadUrlOutput(args: GetAppResourceUploadUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppResourceUploadUrlResult> {
    return pulumi.output(args).apply((a: any) => getAppResourceUploadUrl(a, opts))
}

export interface GetAppResourceUploadUrlOutputArgs {
    /**
     * The name of the App resource.
     */
    appName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
