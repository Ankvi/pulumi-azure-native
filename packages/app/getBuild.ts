import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a BuildResource
 * Azure REST API version: 2023-08-01-preview.
 */
export function getBuild(args: GetBuildArgs, opts?: pulumi.InvokeOptions): Promise<GetBuildResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getBuild", {
        "buildName": args.buildName,
        "builderName": args.builderName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBuildArgs {
    /**
     * The name of a build.
     */
    buildName: string;
    /**
     * The name of the builder.
     */
    builderName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Information pertaining to an individual build.
 */
export interface GetBuildResult {
    /**
     * Status of the build once it has been provisioned.
     */
    readonly buildStatus: string;
    /**
     * Configuration of the build.
     */
    readonly configuration?: types.outputs.BuildConfigurationResponse;
    /**
     * Container registry that the final image will be uploaded to.
     */
    readonly destinationContainerRegistry?: types.outputs.ContainerRegistryWithCustomImageResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Endpoint from which the build logs can be streamed.
     */
    readonly logStreamEndpoint: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Build provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Endpoint to use to retrieve an authentication token for log streaming and uploading source code.
     */
    readonly tokenEndpoint: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Endpoint to which the source code should be uploaded.
     */
    readonly uploadEndpoint: string;
}
/**
 * Get a BuildResource
 * Azure REST API version: 2023-08-01-preview.
 */
export function getBuildOutput(args: GetBuildOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBuildResult> {
    return pulumi.output(args).apply((a: any) => getBuild(a, opts))
}

export interface GetBuildOutputArgs {
    /**
     * The name of a build.
     */
    buildName: pulumi.Input<string>;
    /**
     * The name of the builder.
     */
    builderName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
