import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get build service agent pool.
 */
export function getBuildServiceAgentPool(args: GetBuildServiceAgentPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetBuildServiceAgentPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20231101preview:getBuildServiceAgentPool", {
        "agentPoolName": args.agentPoolName,
        "buildServiceName": args.buildServiceName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetBuildServiceAgentPoolArgs {
    /**
     * The name of the build service agent pool resource.
     */
    agentPoolName: string;
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
 * The build service agent pool resource
 */
export interface GetBuildServiceAgentPoolResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * build service agent pool properties
     */
    readonly properties: types.outputs.BuildServiceAgentPoolPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get build service agent pool.
 */
export function getBuildServiceAgentPoolOutput(args: GetBuildServiceAgentPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBuildServiceAgentPoolResult> {
    return pulumi.output(args).apply((a: any) => getBuildServiceAgentPool(a, opts))
}

export interface GetBuildServiceAgentPoolOutputArgs {
    /**
     * The name of the build service agent pool resource.
     */
    agentPoolName: pulumi.Input<string>;
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
