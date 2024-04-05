import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a deployment.
 */
export function getDeploymentAtScope(args: GetDeploymentAtScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentAtScopeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources/v20230701:getDeploymentAtScope", {
        "deploymentName": args.deploymentName,
        "scope": args.scope,
    }, opts);
}

export interface GetDeploymentAtScopeArgs {
    /**
     * The name of the deployment.
     */
    deploymentName: string;
    /**
     * The resource scope.
     */
    scope: string;
}

/**
 * Deployment information.
 */
export interface GetDeploymentAtScopeResult {
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
 */
export function getDeploymentAtScopeOutput(args: GetDeploymentAtScopeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeploymentAtScopeResult> {
    return pulumi.output(args).apply((a: any) => getDeploymentAtScope(a, opts))
}

export interface GetDeploymentAtScopeOutputArgs {
    /**
     * The name of the deployment.
     */
    deploymentName: pulumi.Input<string>;
    /**
     * The resource scope.
     */
    scope: pulumi.Input<string>;
}