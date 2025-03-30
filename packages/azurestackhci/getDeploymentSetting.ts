import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DeploymentSetting
 *
 * Uses Azure REST API version 2023-08-01-preview.
 *
 * Other available API versions: 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-04-01, 2024-09-01-preview, 2024-12-01-preview.
 */
export function getDeploymentSetting(args: GetDeploymentSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getDeploymentSetting", {
        "clusterName": args.clusterName,
        "deploymentSettingsName": args.deploymentSettingsName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDeploymentSettingArgs {
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * Name of Deployment Setting
     */
    deploymentSettingsName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Edge device resource
 */
export interface GetDeploymentSettingResult {
    /**
     * Azure resource ids of Arc machines to be part of cluster.
     */
    readonly arcNodeResourceIds: string[];
    /**
     * Scale units will contains list of deployment data
     */
    readonly deploymentConfiguration: types.outputs.DeploymentConfigurationResponse;
    /**
     * The deployment mode for cluster deployment.
     */
    readonly deploymentMode: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * DeploymentSetting provisioning state
     */
    readonly provisioningState: string;
    /**
     * Deployment Status reported from cluster.
     */
    readonly reportedProperties: types.outputs.ReportedPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a DeploymentSetting
 *
 * Uses Azure REST API version 2023-08-01-preview.
 *
 * Other available API versions: 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-04-01, 2024-09-01-preview, 2024-12-01-preview.
 */
export function getDeploymentSettingOutput(args: GetDeploymentSettingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDeploymentSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getDeploymentSetting", {
        "clusterName": args.clusterName,
        "deploymentSettingsName": args.deploymentSettingsName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDeploymentSettingOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Name of Deployment Setting
     */
    deploymentSettingsName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}