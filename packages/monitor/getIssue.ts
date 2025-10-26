import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get issue properties
 *
 * Uses Azure REST API version 2025-05-03-preview.
 */
export function getIssue(args: GetIssueArgs, opts?: pulumi.InvokeOptions): Promise<GetIssueResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:monitor:getIssue", {
        "azureMonitorWorkspaceName": args.azureMonitorWorkspaceName,
        "issueName": args.issueName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIssueArgs {
    /**
     * The name of the Azure Monitor Workspace. The name is case insensitive
     */
    azureMonitorWorkspaceName: string;
    /**
     * The name of the IssueResource
     */
    issueName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Issue resource
 */
export interface GetIssueResult {
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
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.IssuePropertiesResponse;
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
 * Get issue properties
 *
 * Uses Azure REST API version 2025-05-03-preview.
 */
export function getIssueOutput(args: GetIssueOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIssueResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:monitor:getIssue", {
        "azureMonitorWorkspaceName": args.azureMonitorWorkspaceName,
        "issueName": args.issueName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIssueOutputArgs {
    /**
     * The name of the Azure Monitor Workspace. The name is case insensitive
     */
    azureMonitorWorkspaceName: pulumi.Input<string>;
    /**
     * The name of the IssueResource
     */
    issueName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}