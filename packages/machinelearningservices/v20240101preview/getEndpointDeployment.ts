import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export function getEndpointDeployment(args: GetEndpointDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetEndpointDeploymentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20240101preview:getEndpointDeployment", {
        "deploymentName": args.deploymentName,
        "endpointName": args.endpointName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetEndpointDeploymentArgs {
    /**
     * Name of the deployment resource
     */
    deploymentName: string;
    /**
     * Name of the endpoint resource.
     */
    endpointName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: string;
}

export interface GetEndpointDeploymentResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: types.outputs.ContentSafetyEndpointDeploymentResourcePropertiesResponse | types.outputs.ManagedOnlineEndpointDeploymentResourcePropertiesResponse | types.outputs.OpenAIEndpointDeploymentResourcePropertiesResponse | types.outputs.SpeechEndpointDeploymentResourcePropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
export function getEndpointDeploymentOutput(args: GetEndpointDeploymentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEndpointDeploymentResult> {
    return pulumi.output(args).apply((a: any) => getEndpointDeployment(a, opts))
}

export interface GetEndpointDeploymentOutputArgs {
    /**
     * Name of the deployment resource
     */
    deploymentName: pulumi.Input<string>;
    /**
     * Name of the endpoint resource.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: pulumi.Input<string>;
}