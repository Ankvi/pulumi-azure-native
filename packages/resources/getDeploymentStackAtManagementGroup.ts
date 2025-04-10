import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Deployment Stack with a given name.
 *
 * Uses Azure REST API version 2022-08-01-preview.
 *
 * Other available API versions: 2024-03-01.
 */
export function getDeploymentStackAtManagementGroup(args: GetDeploymentStackAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentStackAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources:getDeploymentStackAtManagementGroup", {
        "deploymentStackName": args.deploymentStackName,
        "managementGroupId": args.managementGroupId,
    }, opts);
}

export interface GetDeploymentStackAtManagementGroupArgs {
    /**
     * Name of the deployment stack.
     */
    deploymentStackName: string;
    /**
     * Management Group.
     */
    managementGroupId: string;
}

/**
 * Deployment stack object.
 */
export interface GetDeploymentStackAtManagementGroupResult {
    /**
     * Defines the behavior of resources that are not managed immediately after the stack is updated.
     */
    readonly actionOnUnmanage: types.outputs.DeploymentStackPropertiesResponseActionOnUnmanage;
    /**
     * The debug setting of the deployment.
     */
    readonly debugSetting?: types.outputs.DeploymentStacksDebugSettingResponse;
    /**
     * An array of resources that were deleted during the most recent update.
     */
    readonly deletedResources: types.outputs.ResourceReferenceResponse[];
    /**
     * Defines how resources deployed by the stack are locked.
     */
    readonly denySettings: types.outputs.DenySettingsResponse;
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
    readonly detachedResources: types.outputs.ResourceReferenceResponse[];
    /**
     * The duration of the deployment stack update.
     */
    readonly duration: string;
    /**
     * Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.).
     */
    readonly error?: types.outputs.ErrorResponseResponse;
    /**
     * An array of resources that failed to reach goal state during the most recent update.
     */
    readonly failedResources: types.outputs.ResourceReferenceExtendedResponse[];
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
    readonly parametersLink?: types.outputs.DeploymentStacksParametersLinkResponse;
    /**
     * State of the deployment stack.
     */
    readonly provisioningState: string;
    /**
     * An array of resources currently managed by the deployment stack.
     */
    readonly resources: types.outputs.ManagedResourceReferenceResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 *
 * Uses Azure REST API version 2022-08-01-preview.
 *
 * Other available API versions: 2024-03-01.
 */
export function getDeploymentStackAtManagementGroupOutput(args: GetDeploymentStackAtManagementGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDeploymentStackAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:resources:getDeploymentStackAtManagementGroup", {
        "deploymentStackName": args.deploymentStackName,
        "managementGroupId": args.managementGroupId,
    }, opts);
}

export interface GetDeploymentStackAtManagementGroupOutputArgs {
    /**
     * Name of the deployment stack.
     */
    deploymentStackName: pulumi.Input<string>;
    /**
     * Management Group.
     */
    managementGroupId: pulumi.Input<string>;
}