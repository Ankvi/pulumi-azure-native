import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
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
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
     */
    readonly scope: string;
    /**
     * Resource type
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