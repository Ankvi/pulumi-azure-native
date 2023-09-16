import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a deployment.
 */
export function getDeploymentAtManagementGroupScope(args: GetDeploymentAtManagementGroupScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentAtManagementGroupScopeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources/v20230701:getDeploymentAtManagementGroupScope", {
        "deploymentName": args.deploymentName,
        "groupId": args.groupId,
    }, opts);
}

export interface GetDeploymentAtManagementGroupScopeArgs {
    /**
     * The name of the deployment.
     */
    deploymentName: string;
    /**
     * The management group ID.
     */
    groupId: string;
}

/**
 * Deployment information.
 */
export interface GetDeploymentAtManagementGroupScopeResult {
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
    readonly properties: types.outputs.resources.v20230701.DeploymentPropertiesExtendedResponse;
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
export function getDeploymentAtManagementGroupScopeOutput(args: GetDeploymentAtManagementGroupScopeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeploymentAtManagementGroupScopeResult> {
    return pulumi.output(args).apply((a: any) => getDeploymentAtManagementGroupScope(a, opts))
}

export interface GetDeploymentAtManagementGroupScopeOutputArgs {
    /**
     * The name of the deployment.
     */
    deploymentName: pulumi.Input<string>;
    /**
     * The management group ID.
     */
    groupId: pulumi.Input<string>;
}
