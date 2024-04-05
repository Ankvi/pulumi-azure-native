import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get an resource upload URL for build service, which may be artifacts or source archive.
 */
export function getBuildServiceResourceUploadUrl(args: GetBuildServiceResourceUploadUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetBuildServiceResourceUploadUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230701preview:getBuildServiceResourceUploadUrl", {
        "buildServiceName": args.buildServiceName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetBuildServiceResourceUploadUrlArgs {
    /**
     * The name of the build service resource.
     */
    buildServiceName: string;
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
export interface GetBuildServiceResourceUploadUrlResult {
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
 * Get an resource upload URL for build service, which may be artifacts or source archive.
 */
export function getBuildServiceResourceUploadUrlOutput(args: GetBuildServiceResourceUploadUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBuildServiceResourceUploadUrlResult> {
    return pulumi.output(args).apply((a: any) => getBuildServiceResourceUploadUrl(a, opts))
}

export interface GetBuildServiceResourceUploadUrlOutputArgs {
    /**
     * The name of the build service resource.
     */
    buildServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}