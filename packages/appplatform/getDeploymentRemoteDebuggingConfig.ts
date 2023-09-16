import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get remote debugging config.
 * Azure REST API version: 2023-05-01-preview.
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
 * Azure REST API version: 2023-05-01-preview.
 */
export function getDeploymentRemoteDebuggingConfigOutput(args: GetDeploymentRemoteDebuggingConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeploymentRemoteDebuggingConfigResult> {
    return pulumi.output(args).apply((a: any) => getDeploymentRemoteDebuggingConfig(a, opts))
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
