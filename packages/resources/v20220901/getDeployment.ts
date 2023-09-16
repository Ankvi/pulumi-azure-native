import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a deployment.
 */
export function getDeployment(args: GetDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources/v20220901:getDeployment", {
        "deploymentName": args.deploymentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDeploymentArgs {
    /**
     * The name of the deployment.
     */
    deploymentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Deployment information.
 */
export interface GetDeploymentResult {
    /**
     * The ID of the deployment.
     */
    readonly id: string;
    /**
     * the location of the deployment.
     */
    readonly location?: string;
    /**
     * The name of the deployment.
     */
    readonly name: string;
    /**
     * Deployment properties.
     */
    readonly properties: types.outputs.resources.v20220901.DeploymentPropertiesExtendedResponse;
    /**
     * Deployment tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the deployment.
     */
    readonly type: string;
}
/**
 * Gets a deployment.
 */
export function getDeploymentOutput(args: GetDeploymentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeploymentResult> {
    return pulumi.output(args).apply((a: any) => getDeployment(a, opts))
}

export interface GetDeploymentOutputArgs {
    /**
     * The name of the deployment.
     */
    deploymentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
