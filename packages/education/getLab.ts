import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details for a specific lab associated with the provided billing account name, billing profile name, and invoice section name.
 *
 * Uses Azure REST API version 2021-12-01-preview.
 */
export function getLab(args: GetLabArgs, opts?: pulumi.InvokeOptions): Promise<GetLabResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:education:getLab", {
        "billingAccountName": args.billingAccountName,
        "billingProfileName": args.billingProfileName,
        "includeBudget": args.includeBudget,
        "invoiceSectionName": args.invoiceSectionName,
    }, opts);
}

export interface GetLabArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: string;
    /**
     * The ID that uniquely identifies a billing profile.
     */
    billingProfileName: string;
    /**
     * May be used to include budget information.
     */
    includeBudget?: boolean;
    /**
     * The ID that uniquely identifies an invoice section.
     */
    invoiceSectionName: string;
}

/**
 * Lab details.
 */
export interface GetLabResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Default monetary cap for each student in this lab
     */
    readonly budgetPerStudent: types.outputs.AmountResponse;
    /**
     * The type of currency being used for the value.
     */
    readonly currency?: string;
    /**
     * Detail description of this lab
     */
    readonly description: string;
    /**
     * Lab Display Name
     */
    readonly displayName: string;
    /**
     * Lab creation date
     */
    readonly effectiveDate: string;
    /**
     * Default expiration date for each student in this lab
     */
    readonly expirationDate: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * invitation code for redeemable lab
     */
    readonly invitationCode: string;
    /**
     * the total number of students that can be accepted to the lab.
     */
    readonly maxStudentCount: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of this lab
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Total budget
     */
    readonly totalBudget: types.outputs.AmountResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Amount value.
     */
    readonly value?: number;
}
/**
 * Get the details for a specific lab associated with the provided billing account name, billing profile name, and invoice section name.
 *
 * Uses Azure REST API version 2021-12-01-preview.
 */
export function getLabOutput(args: GetLabOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLabResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:education:getLab", {
        "billingAccountName": args.billingAccountName,
        "billingProfileName": args.billingProfileName,
        "includeBudget": args.includeBudget,
        "invoiceSectionName": args.invoiceSectionName,
    }, opts);
}

export interface GetLabOutputArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies a billing profile.
     */
    billingProfileName: pulumi.Input<string>;
    /**
     * May be used to include budget information.
     */
    includeBudget?: pulumi.Input<boolean>;
    /**
     * The ID that uniquely identifies an invoice section.
     */
    invoiceSectionName: pulumi.Input<string>;
}