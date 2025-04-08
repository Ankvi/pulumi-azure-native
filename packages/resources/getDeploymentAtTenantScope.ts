import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a deployment.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2020-10-01, 2021-01-01, 2021-04-01, 2022-09-01, 2023-07-01, 2024-07-01, 2024-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resources [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDeploymentAtTenantScope(args: GetDeploymentAtTenantScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentAtTenantScopeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources:getDeploymentAtTenantScope", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2020-10-01, 2021-01-01, 2021-04-01, 2022-09-01, 2023-07-01, 2024-07-01, 2024-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resources [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDeploymentAtTenantScopeOutput(args: GetDeploymentAtTenantScopeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDeploymentAtTenantScopeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:resources:getDeploymentAtTenantScope", {
        "deploymentName": args.deploymentName,
    }, opts);
}

export interface GetDeploymentAtTenantScopeOutputArgs {
    /**
     * The name of the deployment.
     */
    deploymentName: pulumi.Input<string>;
}