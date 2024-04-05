import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a KPack build result log download URL.
 */
export function getBuildServiceBuildResultLog(args: GetBuildServiceBuildResultLogArgs, opts?: pulumi.InvokeOptions): Promise<GetBuildServiceBuildResultLogResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20231101preview:getBuildServiceBuildResultLog", {
        "buildName": args.buildName,
        "buildResultName": args.buildResultName,
        "buildServiceName": args.buildServiceName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetBuildServiceBuildResultLogArgs {
    /**
     * The name of the build resource.
     */
    buildName: string;
    /**
     * The name of the build result resource.
     */
    buildResultName: string;
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
 * Build result log resource properties payload
 */
export interface GetBuildServiceBuildResultLogResult {
    /**
     * The public download URL of this build result log
     */
    readonly blobUrl?: string;
}
/**
 * Get a KPack build result log download URL.
 */
export function getBuildServiceBuildResultLogOutput(args: GetBuildServiceBuildResultLogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBuildServiceBuildResultLogResult> {
    return pulumi.output(args).apply((a: any) => getBuildServiceBuildResultLog(a, opts))
}

export interface GetBuildServiceBuildResultLogOutputArgs {
    /**
     * The name of the build resource.
     */
    buildName: pulumi.Input<string>;
    /**
     * The name of the build result resource.
     */
    buildResultName: pulumi.Input<string>;
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