import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get deployment log file URL
 */
export function getDeploymentLogFileUrl(args: GetDeploymentLogFileUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentLogFileUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20231101preview:getDeploymentLogFileUrl", {
        "appName": args.appName,
        "deploymentName": args.deploymentName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetDeploymentLogFileUrlArgs {
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
 * Log file URL payload
 */
export interface GetDeploymentLogFileUrlResult {
    /**
     * URL of the log file
     */
    readonly url: string;
}
/**
 * Get deployment log file URL
 */
export function getDeploymentLogFileUrlOutput(args: GetDeploymentLogFileUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeploymentLogFileUrlResult> {
    return pulumi.output(args).apply((a: any) => getDeploymentLogFileUrl(a, opts))
}

export interface GetDeploymentLogFileUrlOutputArgs {
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
