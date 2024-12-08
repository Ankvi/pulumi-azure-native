import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the deleted runbooks for an automation account.
 * Azure REST API version: 2023-05-15-preview.
 */
export function listAutomationAccountDeletedRunbooks(args: ListAutomationAccountDeletedRunbooksArgs, opts?: pulumi.InvokeOptions): Promise<ListAutomationAccountDeletedRunbooksResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:listAutomationAccountDeletedRunbooks", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAutomationAccountDeletedRunbooksArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * The response model for the list deleted runbook.
 */
export interface ListAutomationAccountDeletedRunbooksResult {
    /**
     * Gets or sets the next link.
     */
    readonly nextLink?: string;
    /**
     * List of deleted runbooks in automation account.
     */
    readonly value?: types.outputs.DeletedRunbookResponse[];
}
/**
 * Retrieve the deleted runbooks for an automation account.
 * Azure REST API version: 2023-05-15-preview.
 */
export function listAutomationAccountDeletedRunbooksOutput(args: ListAutomationAccountDeletedRunbooksOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAutomationAccountDeletedRunbooksResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:listAutomationAccountDeletedRunbooks", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAutomationAccountDeletedRunbooksOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}