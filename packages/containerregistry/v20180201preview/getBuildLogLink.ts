import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a link to download the build logs.
 */
export function getBuildLogLink(args: GetBuildLogLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetBuildLogLinkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20180201preview:getBuildLogLink", {
        "buildId": args.buildId,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBuildLogLinkArgs {
    /**
     * The build ID.
     */
    buildId: string;
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
 * The result of get log link operation.
 */
export interface GetBuildLogLinkResult {
    /**
     * The link to logs for a azure container registry build.
     */
    readonly logLink?: string;
}
/**
 * Gets a link to download the build logs.
 */
export function getBuildLogLinkOutput(args: GetBuildLogLinkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBuildLogLinkResult> {
    return pulumi.output(args).apply((a: any) => getBuildLogLink(a, opts))
}

export interface GetBuildLogLinkOutputArgs {
    /**
     * The build ID.
     */
    buildId: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
