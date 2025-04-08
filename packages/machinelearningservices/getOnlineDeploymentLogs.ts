import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2021-03-01-preview, 2022-02-01-preview, 2022-05-01, 2022-06-01-preview, 2022-10-01, 2022-10-01-preview, 2022-12-01-preview, 2023-02-01-preview, 2023-04-01, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview, 2024-04-01, 2024-07-01-preview, 2024-10-01-preview, 2025-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getOnlineDeploymentLogs(args: GetOnlineDeploymentLogsArgs, opts?: pulumi.InvokeOptions): Promise<GetOnlineDeploymentLogsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getOnlineDeploymentLogs", {
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
/**
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2021-03-01-preview, 2022-02-01-preview, 2022-05-01, 2022-06-01-preview, 2022-10-01, 2022-10-01-preview, 2022-12-01-preview, 2023-02-01-preview, 2023-04-01, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview, 2024-04-01, 2024-07-01-preview, 2024-10-01-preview, 2025-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getOnlineDeploymentLogsOutput(args: GetOnlineDeploymentLogsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOnlineDeploymentLogsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:getOnlineDeploymentLogs", {
        "containerType": args.containerType,
        "deploymentName": args.deploymentName,
        "endpointName": args.endpointName,
        "resourceGroupName": args.resourceGroupName,
        "tail": args.tail,
        "workspaceName": args.workspaceName,
    }, opts);
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