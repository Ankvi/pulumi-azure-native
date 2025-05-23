import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a label in the given workspace.
 *
 * Uses Azure REST API version 2023-04-01-preview.
 */
export function getLabelByWorkspace(args: GetLabelByWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetLabelByWorkspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:easm:getLabelByWorkspace", {
        "labelName": args.labelName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetLabelByWorkspaceArgs {
    /**
     * The name of the Label.
     */
    labelName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Workspace.
     */
    workspaceName: string;
}

/**
 * Label details
 */
export interface GetLabelByWorkspaceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Label color.
     */
    readonly color?: string;
    /**
     * Label display name.
     */
    readonly displayName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Resource provisioning state.
     */
    readonly provisioningState: string;
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
 * Returns a label in the given workspace.
 *
 * Uses Azure REST API version 2023-04-01-preview.
 */
export function getLabelByWorkspaceOutput(args: GetLabelByWorkspaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLabelByWorkspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:easm:getLabelByWorkspace", {
        "labelName": args.labelName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetLabelByWorkspaceOutputArgs {
    /**
     * The name of the Label.
     */
    labelName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Workspace.
     */
    workspaceName: pulumi.Input<string>;
}