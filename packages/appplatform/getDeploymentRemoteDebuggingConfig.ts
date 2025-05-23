import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get remote debugging config.
 *
 * Uses Azure REST API version 2024-01-01-preview.
 *
 * Other available API versions: 2023-05-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native appplatform [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDeploymentRemoteDebuggingConfig(args: GetDeploymentRemoteDebuggingConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentRemoteDebuggingConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform:getDeploymentRemoteDebuggingConfig", {
        "appName": args.appName,
        "deploymentName": args.deploymentName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetDeploymentRemoteDebuggingConfigArgs {
    /**
     * The name of the App resource.
     */
    appName: string;
    /**
     * The name of the Deployment resource.
     */
    deploymentName: string;
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
 * Remote debugging config.
 */
export interface GetDeploymentRemoteDebuggingConfigResult {
    /**
     * Indicate if remote debugging is enabled
     */
    readonly enabled?: boolean;
    /**
     * Application debugging port
     */
    readonly port?: number;
}
/**
 * Get remote debugging config.
 *
 * Uses Azure REST API version 2024-01-01-preview.
 *
 * Other available API versions: 2023-05-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native appplatform [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDeploymentRemoteDebuggingConfigOutput(args: GetDeploymentRemoteDebuggingConfigOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDeploymentRemoteDebuggingConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:appplatform:getDeploymentRemoteDebuggingConfig", {
        "appName": args.appName,
        "deploymentName": args.deploymentName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetDeploymentRemoteDebuggingConfigOutputArgs {
    /**
     * The name of the App resource.
     */
    appName: pulumi.Input<string>;
    /**
     * The name of the Deployment resource.
     */
    deploymentName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}