import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the upload location for the user to be able to upload the source.
 * Azure REST API version: 2018-02-01-preview.
 */
export function getRegistryBuildSourceUploadUrl(args: GetRegistryBuildSourceUploadUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryBuildSourceUploadUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:getRegistryBuildSourceUploadUrl", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRegistryBuildSourceUploadUrlArgs {
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: string;
}

/**
 * The properties of a response to source upload request.
 */
export interface GetRegistryBuildSourceUploadUrlResult {
    /**
     * The relative path to the source. This is used to submit the subsequent queue build request.
     */
    readonly relativePath?: string;
    /**
     * The URL where the client can upload the source.
     */
    readonly uploadUrl?: string;
}
/**
 * Get the upload location for the user to be able to upload the source.
 * Azure REST API version: 2018-02-01-preview.
 */
export function getRegistryBuildSourceUploadUrlOutput(args: GetRegistryBuildSourceUploadUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegistryBuildSourceUploadUrlResult> {
    return pulumi.output(args).apply((a: any) => getRegistryBuildSourceUploadUrl(a, opts))
}

export interface GetRegistryBuildSourceUploadUrlOutputArgs {
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
