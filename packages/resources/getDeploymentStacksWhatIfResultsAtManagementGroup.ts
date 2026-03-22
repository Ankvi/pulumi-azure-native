import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Deployment stack with the given name.
 *
 * Uses Azure REST API version 2025-07-01.
 */
export function getDeploymentStacksWhatIfResultsAtManagementGroup(args: GetDeploymentStacksWhatIfResultsAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentStacksWhatIfResultsAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources:getDeploymentStacksWhatIfResultsAtManagementGroup", {
        "deploymentStacksWhatIfResultName": args.deploymentStacksWhatIfResultName,
        "managementGroupId": args.managementGroupId,
    }, opts);
}

export interface GetDeploymentStacksWhatIfResultsAtManagementGroupArgs {
    /**
     * Name of the deployment stack what-if result.
     */
    deploymentStacksWhatIfResultName: string;
    /**
     * The management group ID.
     */
    managementGroupId: string;
}

/**
 * Deployment stack object.
 */
export interface GetDeploymentStacksWhatIfResultsAtManagementGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives. Required for subscription and management group scoped stacks. The location is inherited from the resource group for resource group scoped stacks.
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.DeploymentStacksWhatIfResultPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the Deployment stack with the given name.
 *
 * Uses Azure REST API version 2025-07-01.
 */
export function getDeploymentStacksWhatIfResultsAtManagementGroupOutput(args: GetDeploymentStacksWhatIfResultsAtManagementGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDeploymentStacksWhatIfResultsAtManagementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:resources:getDeploymentStacksWhatIfResultsAtManagementGroup", {
        "deploymentStacksWhatIfResultName": args.deploymentStacksWhatIfResultName,
        "managementGroupId": args.managementGroupId,
    }, opts);
}

export interface GetDeploymentStacksWhatIfResultsAtManagementGroupOutputArgs {
    /**
     * Name of the deployment stack what-if result.
     */
    deploymentStacksWhatIfResultName: pulumi.Input<string>;
    /**
     * The management group ID.
     */
    managementGroupId: pulumi.Input<string>;
}