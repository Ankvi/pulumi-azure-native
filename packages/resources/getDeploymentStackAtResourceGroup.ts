import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Deployment stack with a given name at Resource Group scope.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2022-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resources [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * Defines the behavior of resources that are no longer managed after the Deployment stack is updated or deleted.
     */
    readonly actionOnUnmanage: types.outputs.ActionOnUnmanageResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The correlation id of the last Deployment stack upsert or delete operation. It is in GUID format and is used for tracing.
     */
    readonly correlationId: string;
    /**
     * The debug setting of the deployment.
     */
    readonly debugSetting?: types.outputs.DeploymentStacksDebugSettingResponse;
    /**
     * An array of resources that were deleted during the most recent Deployment stack update. Deleted means that the resource was removed from the template and relevant deletion operations were specified.
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
     * Deployment stack description. Max length of 4096 characters.
     */
    readonly description?: string;
    /**
     * An array of resources that were detached during the most recent Deployment stack update. Detached means that the resource was removed from the template, but no relevant deletion operations were specified. So, the resource still exists while no longer being associated with the stack.
     */
    readonly detachedResources: types.outputs.ResourceReferenceResponse[];
    /**
     * The duration of the last successful Deployment stack update.
     */
    readonly duration: string;
    /**
     * The error detail.
     */
    readonly error?: types.outputs.ErrorDetailResponse;
    /**
     * An array of resources that failed to reach goal state during the most recent update. Each resourceId is accompanied by an error message.
     */
    readonly failedResources: types.outputs.ResourceReferenceExtendedResponse[];
    /**
     * String Id used to locate any resource on Azure.
     */
    readonly id: string;
    /**
     * The location of the Deployment stack. It cannot be changed after creation. It must be one of the supported Azure locations.
     */
    readonly location?: string;
    /**
     * Name of this resource.
     */
    readonly name: string;
    /**
     * The outputs of the deployment resource created by the deployment stack.
     */
    readonly outputs: any;
    /**
     * Name and value pairs that define the deployment parameters for the template. Use this element when providing the parameter values directly in the request, rather than linking to an existing parameter file. Use either the parametersLink property or the parameters property, but not both.
     */
    readonly parameters?: {[key: string]: types.outputs.DeploymentParameterResponse};
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
 * Gets a Deployment stack with a given name at Resource Group scope.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2022-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resources [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDeploymentStackAtResourceGroupOutput(args: GetDeploymentStackAtResourceGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDeploymentStackAtResourceGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:resources:getDeploymentStackAtResourceGroup", {
        "deploymentStackName": args.deploymentStackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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