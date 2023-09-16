import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a KPack build.
 * Azure REST API version: 2023-05-01-preview.
 */
export function getBuildServiceBuild(args: GetBuildServiceBuildArgs, opts?: pulumi.InvokeOptions): Promise<GetBuildServiceBuildResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform:getBuildServiceBuild", {
        "buildName": args.buildName,
        "buildServiceName": args.buildServiceName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetBuildServiceBuildArgs {
    /**
     * The name of the build resource.
     */
    buildName: string;
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
 * Build resource payload
 */
export interface GetBuildServiceBuildResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of the build resource
     */
    readonly properties: types.outputs.appplatform.BuildPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.appplatform.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get a KPack build.
 * Azure REST API version: 2023-05-01-preview.
 */
export function getBuildServiceBuildOutput(args: GetBuildServiceBuildOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBuildServiceBuildResult> {
    return pulumi.output(args).apply((a: any) => getBuildServiceBuild(a, opts))
}

export interface GetBuildServiceBuildOutputArgs {
    /**
     * The name of the build resource.
     */
    buildName: pulumi.Input<string>;
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
