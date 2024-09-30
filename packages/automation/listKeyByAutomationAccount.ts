import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the automation keys for an account.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01.
 */
export function listKeyByAutomationAccount(args: ListKeyByAutomationAccountArgs, opts?: pulumi.InvokeOptions): Promise<ListKeyByAutomationAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:listKeyByAutomationAccount", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListKeyByAutomationAccountArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

export interface ListKeyByAutomationAccountResult {
    /**
     * Lists the automation keys.
     */
    readonly keys?: types.outputs.KeyResponse[];
}
/**
 * Retrieve the automation keys for an account.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01.
 */
export function listKeyByAutomationAccountOutput(args: ListKeyByAutomationAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListKeyByAutomationAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:listKeyByAutomationAccount", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListKeyByAutomationAccountOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}