import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Deployment Stack with a given name.
 * Azure REST API version: 2022-08-01-preview.
 */
export function getDeploymentStackAtResourceGroup(args: GetDeploymentStackAtResourceGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentStackAtResourceGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources:getDeploymentStackAtResourceGroup", {
        "deploymentStackName": args.deploymentStackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDeploymentStackAtResourceGroupArgs {
    /**
     * Name of the deployment stack.
     */
    deploymentStackName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Deployment stack object.
 */
export interface GetDeploymentStackAtResourceGroupResult {
    /**
     * Defines the behavior of resources that are not managed immediately after the stack is updated.
     */
    readonly actionOnUnmanage: types.outputs.resources.DeploymentStackPropertiesResponseActionOnUnmanage;
    /**
     * The debug setting of the deployment.
     */
    readonly debugSetting?: types.outputs.resources.DeploymentStacksDebugSettingResponse;
    /**
     * An array of resources that were deleted during the most recent update.
     */
    readonly deletedResources: types.outputs.resources.ResourceReferenceResponse[];
    /**
     * Defines how resources deployed by the stack are locked.
     */
    readonly denySettings: types.outputs.resources.DenySettingsResponse;
    /**
     * The resourceId of the deployment resource created by the deployment stack.
     */
    readonly deploymentId: string;
    /**
     * The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroupId}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}').
     */
    readonly deploymentScope?: string;
    /**
     * Deployment stack description.
     */
    readonly description?: string;
    /**
     * An array of resources that were detached during the most recent update.
     */
    readonly detachedResources: types.outputs.resources.ResourceReferenceResponse[];
    /**
     * The duration of the deployment stack update.
     */
    readonly duration: string;
    /**
     * Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.).
     */
    readonly error?: types.outputs.resources.ErrorResponseResponse;
    /**
     * An array of resources that failed to reach goal state during the most recent update.
     */
    readonly failedResources: types.outputs.resources.ResourceReferenceExtendedResponse[];
    /**
     * String Id used to locate any resource on Azure.
     */
    readonly id: string;
    /**
     * The location of the deployment stack. It cannot be changed after creation. It must be one of the supported Azure locations.
     */
    readonly location?: string;
    /**
     * Name of this resource.
     */
    readonly name: string;
    /**
     * The outputs of the underlying deployment.
     */
    readonly outputs: any;
    /**
     * Name and value pairs that define the deployment parameters for the template. Use this element when providing the parameter values directly in the request, rather than linking to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string.
     */
    readonly parameters?: any;
    /**
     * The URI of parameters file. Use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both.
     */
    readonly parametersLink?: types.outputs.resources.DeploymentStacksParametersLinkResponse;
    /**
     * State of the deployment stack.
     */
    readonly provisioningState: string;
    /**
     * An array of resources currently managed by the deployment stack.
     */
    readonly resources: types.outputs.resources.ManagedResourceReferenceResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.resources.SystemDataResponse;
    /**
     * Deployment stack resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Type of this resource.
     */
    readonly type: string;
}
/**
 * Gets a Deployment Stack with a given name.
 * Azure REST API version: 2022-08-01-preview.
 */
export function getDeploymentStackAtResourceGroupOutput(args: GetDeploymentStackAtResourceGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeploymentStackAtResourceGroupResult> {
    return pulumi.output(args).apply((a: any) => getDeploymentStackAtResourceGroup(a, opts))
}

export interface GetDeploymentStackAtResourceGroupOutputArgs {
    /**
     * Name of the deployment stack.
     */
    deploymentStackName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
