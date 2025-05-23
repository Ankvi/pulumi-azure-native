import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a BuildResource
 *
 * Uses Azure REST API version 2024-10-02-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
 *
 * Uses Azure REST API version 2024-10-02-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBuildOutput(args: GetBuildOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBuildResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getBuild", {
        "buildName": args.buildName,
        "builderName": args.builderName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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