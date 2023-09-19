import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a deployment.
 */
export function getDeploymentAtTenantScope(args: GetDeploymentAtTenantScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentAtTenantScopeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources/v20230701:getDeploymentAtTenantScope", {
        "deploymentName": args.deploymentName,
    }, opts);
}

export interface GetDeploymentAtTenantScopeArgs {
    /**
     * The name of the deployment.
     */
    deploymentName: string;
}

/**
 * Deployment information.
 */
export interface GetDeploymentAtTenantScopeResult {
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
export function getDeploymentAtTenantScopeOutput(args: GetDeploymentAtTenantScopeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeploymentAtTenantScopeResult> {
    return pulumi.output(args).apply((a: any) => getDeploymentAtTenantScope(a, opts))
}

export interface GetDeploymentAtTenantScopeOutputArgs {
    /**
     * The name of the deployment.
     */
    deploymentName: pulumi.Input<string>;
}
