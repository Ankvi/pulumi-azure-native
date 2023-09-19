import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export function getOnlineDeploymentLogs(args: GetOnlineDeploymentLogsArgs, opts?: pulumi.InvokeOptions): Promise<GetOnlineDeploymentLogsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230401preview:getOnlineDeploymentLogs", {
        "containerType": args.containerType,
        "deploymentName": args.deploymentName,
        "endpointName": args.endpointName,
        "resourceGroupName": args.resourceGroupName,
        "tail": args.tail,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetOnlineDeploymentLogsArgs {
    /**
     * The type of container to retrieve logs from.
     */
    containerType?: string | types.enums.ContainerType;
    /**
     * The name and identifier for the endpoint.
     */
    deploymentName: string;
    /**
     * Inference endpoint name.
     */
    endpointName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The maximum number of lines to tail.
     */
    tail?: number;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

export interface GetOnlineDeploymentLogsResult {
    /**
     * The retrieved online deployment logs.
     */
    readonly content?: string;
}
export function getOnlineDeploymentLogsOutput(args: GetOnlineDeploymentLogsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOnlineDeploymentLogsResult> {
    return pulumi.output(args).apply((a: any) => getOnlineDeploymentLogs(a, opts))
}

export interface GetOnlineDeploymentLogsOutputArgs {
    /**
     * The type of container to retrieve logs from.
     */
    containerType?: pulumi.Input<string | types.enums.ContainerType>;
    /**
     * The name and identifier for the endpoint.
     */
    deploymentName: pulumi.Input<string>;
    /**
     * Inference endpoint name.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The maximum number of lines to tail.
     */
    tail?: pulumi.Input<number>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
