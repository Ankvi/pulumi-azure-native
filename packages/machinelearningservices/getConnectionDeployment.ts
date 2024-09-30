import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2024-04-01-preview.
 *
 * Other available API versions: 2024-07-01-preview.
 */
export function getConnectionDeployment(args: GetConnectionDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionDeploymentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getConnectionDeployment", {
        "connectionName": args.connectionName,
        "deploymentName": args.deploymentName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetConnectionDeploymentArgs {
    /**
     * Friendly name of the workspace connection
     */
    connectionName: string;
    /**
     * Name of the deployment resource
     */
    deploymentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: string;
}

export interface GetConnectionDeploymentResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: types.outputs.EndpointDeploymentResourcePropertiesResponse;
    readonly sku?: types.outputs.CognitiveServicesSkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Azure REST API version: 2024-04-01-preview.
 *
 * Other available API versions: 2024-07-01-preview.
 */
export function getConnectionDeploymentOutput(args: GetConnectionDeploymentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectionDeploymentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:getConnectionDeployment", {
        "connectionName": args.connectionName,
        "deploymentName": args.deploymentName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetConnectionDeploymentOutputArgs {
    /**
     * Friendly name of the workspace connection
     */
    connectionName: pulumi.Input<string>;
    /**
     * Name of the deployment resource
     */
    deploymentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: pulumi.Input<string>;
}