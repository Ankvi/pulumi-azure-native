import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Settings about where we should store your security data and logs. If the result is empty, it means that no custom-workspace configuration was set
 *
 * Uses Azure REST API version 2017-08-01-preview.
 */
export function getWorkspaceSetting(args: GetWorkspaceSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getWorkspaceSetting", {
        "workspaceSettingName": args.workspaceSettingName,
    }, opts);
}

export interface GetWorkspaceSettingArgs {
    /**
     * Name of the security setting
     */
    workspaceSettingName: string;
}

/**
 * Configures where to store the OMS agent data for workspaces under a scope
 */
export interface GetWorkspaceSettingResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
     */
    readonly scope: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The full Azure ID of the workspace to save the data in
     */
    readonly workspaceId: string;
}
/**
 * Settings about where we should store your security data and logs. If the result is empty, it means that no custom-workspace configuration was set
 *
 * Uses Azure REST API version 2017-08-01-preview.
 */
export function getWorkspaceSettingOutput(args: GetWorkspaceSettingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkspaceSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getWorkspaceSetting", {
        "workspaceSettingName": args.workspaceSettingName,
    }, opts);
}

export interface GetWorkspaceSettingOutputArgs {
    /**
     * Name of the security setting
     */
    workspaceSettingName: pulumi.Input<string>;
}