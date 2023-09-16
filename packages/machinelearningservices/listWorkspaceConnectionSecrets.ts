import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2023-06-01-preview.
 */
export function listWorkspaceConnectionSecrets(args: ListWorkspaceConnectionSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceConnectionSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:listWorkspaceConnectionSecrets", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListWorkspaceConnectionSecretsArgs {
    /**
     * Friendly name of the workspace connection
     */
    connectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

export interface ListWorkspaceConnectionSecretsResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: types.outputs.machinelearningservices.AccessKeyAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.machinelearningservices.ApiKeyAuthWorkspaceConnectionPropertiesResponse | types.outputs.machinelearningservices.CustomKeysWorkspaceConnectionPropertiesResponse | types.outputs.machinelearningservices.ManagedIdentityAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.machinelearningservices.NoneAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.machinelearningservices.PATAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.machinelearningservices.SASAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.machinelearningservices.ServicePrincipalAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.machinelearningservices.UsernamePasswordAuthTypeWorkspaceConnectionPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.machinelearningservices.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Azure REST API version: 2023-06-01-preview.
 */
export function listWorkspaceConnectionSecretsOutput(args: ListWorkspaceConnectionSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkspaceConnectionSecretsResult> {
    return pulumi.output(args).apply((a: any) => listWorkspaceConnectionSecrets(a, opts))
}

export interface ListWorkspaceConnectionSecretsOutputArgs {
    /**
     * Friendly name of the workspace connection
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
