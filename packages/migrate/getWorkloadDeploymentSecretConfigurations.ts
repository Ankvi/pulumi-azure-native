import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the secrets of the workload deployment.
 * Azure REST API version: 2022-05-01-preview.
 */
export function getWorkloadDeploymentSecretConfigurations(args: GetWorkloadDeploymentSecretConfigurationsArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadDeploymentSecretConfigurationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getWorkloadDeploymentSecretConfigurations", {
        "modernizeProjectName": args.modernizeProjectName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
        "workloadDeploymentName": args.workloadDeploymentName,
    }, opts);
}

export interface GetWorkloadDeploymentSecretConfigurationsArgs {
    /**
     * ModernizeProject name.
     */
    modernizeProjectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: string;
    /**
     * Azure Subscription Id in which project was created.
     */
    subscriptionId?: string;
    /**
     * Workload deployment name.
     */
    workloadDeploymentName: string;
}

/**
 * Workload deployment model.
 */
export interface GetWorkloadDeploymentSecretConfigurationsResult {
    /**
     * Gets or sets the Id of the resource.
     */
    readonly id: string;
    /**
     * Gets or sets the name of the resource.
     */
    readonly name: string;
    /**
     * Workload deployment model properties.
     */
    readonly properties: types.outputs.WorkloadDeploymentModelPropertiesResponse;
    readonly systemData: types.outputs.WorkloadDeploymentModelResponseSystemData;
    /**
     * Gets or sets the resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets or sets the type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the secrets of the workload deployment.
 * Azure REST API version: 2022-05-01-preview.
 */
export function getWorkloadDeploymentSecretConfigurationsOutput(args: GetWorkloadDeploymentSecretConfigurationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadDeploymentSecretConfigurationsResult> {
    return pulumi.output(args).apply((a: any) => getWorkloadDeploymentSecretConfigurations(a, opts))
}

export interface GetWorkloadDeploymentSecretConfigurationsOutputArgs {
    /**
     * ModernizeProject name.
     */
    modernizeProjectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Subscription Id in which project was created.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * Workload deployment name.
     */
    workloadDeploymentName: pulumi.Input<string>;
}