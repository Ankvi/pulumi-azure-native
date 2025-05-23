import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get environment.
 *
 * Uses Azure REST API version 2018-09-15.
 */
export function getEnvironment(args: GetEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetEnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:getEnvironment", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "userName": args.userName,
    }, opts);
}

export interface GetEnvironmentArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=deploymentProperties)'
     */
    expand?: string;
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the environment.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the user profile.
     */
    userName: string;
}

/**
 * An environment, which is essentially an ARM template deployment.
 */
export interface GetEnvironmentResult {
    /**
     * The display name of the Azure Resource Manager template that produced the environment.
     */
    readonly armTemplateDisplayName?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The creator of the environment.
     */
    readonly createdByUser: string;
    /**
     * The deployment properties of the environment.
     */
    readonly deploymentProperties?: types.outputs.EnvironmentDeploymentPropertiesResponse;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * The identifier of the resource group containing the environment's resources.
     */
    readonly resourceGroupId: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
}
/**
 * Get environment.
 *
 * Uses Azure REST API version 2018-09-15.
 */
export function getEnvironmentOutput(args: GetEnvironmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devtestlab:getEnvironment", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "userName": args.userName,
    }, opts);
}

export interface GetEnvironmentOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=deploymentProperties)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the environment.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the user profile.
     */
    userName: pulumi.Input<string>;
}