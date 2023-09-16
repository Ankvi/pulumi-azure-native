import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the upload location for the user to be able to upload the source.
 */
export function listRegistryBuildSourceUploadUrl(args: ListRegistryBuildSourceUploadUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListRegistryBuildSourceUploadUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20190401:listRegistryBuildSourceUploadUrl", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListRegistryBuildSourceUploadUrlArgs {
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
export interface ListRegistryBuildSourceUploadUrlResult {
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
 */
export function listRegistryBuildSourceUploadUrlOutput(args: ListRegistryBuildSourceUploadUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListRegistryBuildSourceUploadUrlResult> {
    return pulumi.output(args).apply((a: any) => listRegistryBuildSourceUploadUrl(a, opts))
}

export interface ListRegistryBuildSourceUploadUrlOutputArgs {
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
