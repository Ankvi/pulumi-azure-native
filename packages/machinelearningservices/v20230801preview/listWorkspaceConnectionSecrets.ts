import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export function listWorkspaceConnectionSecrets(args: ListWorkspaceConnectionSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceConnectionSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230801preview:listWorkspaceConnectionSecrets", {
        "aoaiModelsToDeploy": args.aoaiModelsToDeploy,
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListWorkspaceConnectionSecretsArgs {
    /**
     * query parameter for which AOAI mode should be deployed
     */
    aoaiModelsToDeploy?: string;
    /**
     * Friendly name of the workspace connection
     */
    connectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Azure Machine Learning Workspace Name
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
    readonly properties: types.outputs.AccessKeyAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.ApiKeyAuthWorkspaceConnectionPropertiesResponse | types.outputs.CustomKeysWorkspaceConnectionPropertiesResponse | types.outputs.ManagedIdentityAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.NoneAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.PATAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.SASAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.ServicePrincipalAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.UsernamePasswordAuthTypeWorkspaceConnectionPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
export function listWorkspaceConnectionSecretsOutput(args: ListWorkspaceConnectionSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkspaceConnectionSecretsResult> {
    return pulumi.output(args).apply((a: any) => listWorkspaceConnectionSecrets(a, opts))
}

export interface ListWorkspaceConnectionSecretsOutputArgs {
    /**
     * query parameter for which AOAI mode should be deployed
     */
    aoaiModelsToDeploy?: pulumi.Input<string>;
    /**
     * Friendly name of the workspace connection
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: pulumi.Input<string>;
}