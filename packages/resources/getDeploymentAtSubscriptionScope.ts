import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a deployment.
 * Azure REST API version: 2022-09-01.
 */
export function getDeploymentAtSubscriptionScope(args: GetDeploymentAtSubscriptionScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentAtSubscriptionScopeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources:getDeploymentAtSubscriptionScope", {
        "deploymentName": args.deploymentName,
    }, opts);
}

export interface GetDeploymentAtSubscriptionScopeArgs {
    /**
     * The name of the deployment.
     */
    deploymentName: string;
}

/**
 * Deployment information.
 */
export interface GetDeploymentAtSubscriptionScopeResult {
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
    readonly properties: types.outputs.DeploymentPropertiesExtendedResponse;
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
 * Azure REST API version: 2022-09-01.
 */
export function getDeploymentAtSubscriptionScopeOutput(args: GetDeploymentAtSubscriptionScopeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeploymentAtSubscriptionScopeResult> {
    return pulumi.output(args).apply((a: any) => getDeploymentAtSubscriptionScope(a, opts))
}

export interface GetDeploymentAtSubscriptionScopeOutputArgs {
    /**
     * The name of the deployment.
     */
    deploymentName: pulumi.Input<string>;
}
