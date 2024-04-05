import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export function getWorkspaceConnection(args: GetWorkspaceConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230401:getWorkspaceConnection", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceConnectionArgs {
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

export interface GetWorkspaceConnectionResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: types.outputs.ManagedIdentityAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.NoneAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.PATAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.SASAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.UsernamePasswordAuthTypeWorkspaceConnectionPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
export function getWorkspaceConnectionOutput(args: GetWorkspaceConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceConnectionResult> {
    return pulumi.output(args).apply((a: any) => getWorkspaceConnection(a, opts))
}

export interface GetWorkspaceConnectionOutputArgs {
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