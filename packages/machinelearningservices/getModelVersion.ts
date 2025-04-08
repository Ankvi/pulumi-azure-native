import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2021-03-01-preview, 2022-02-01-preview, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview, 2024-04-01, 2024-04-01-preview, 2024-07-01-preview, 2024-10-01, 2024-10-01-preview, 2025-01-01-preview.
 */
export function getModelVersion(args: GetModelVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetModelVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getModelVersion", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "version": args.version,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetModelVersionArgs {
    /**
     * Container name. This is case-sensitive.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Version identifier. This is case-sensitive.
     */
    version: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * Azure Resource Manager resource envelope.
 */
export interface GetModelVersionResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly modelVersionProperties: types.outputs.ModelVersionResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * Azure Resource Manager resource envelope.
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2021-03-01-preview, 2022-02-01-preview, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview, 2024-04-01, 2024-04-01-preview, 2024-07-01-preview, 2024-10-01, 2024-10-01-preview, 2025-01-01-preview.
 */
export function getModelVersionOutput(args: GetModelVersionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetModelVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:getModelVersion", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "version": args.version,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetModelVersionOutputArgs {
    /**
     * Container name. This is case-sensitive.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Version identifier. This is case-sensitive.
     */
    version: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}