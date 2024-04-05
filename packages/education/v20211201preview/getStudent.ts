import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details for a specific student in the specified lab by student alias
 */
export function getStudent(args: GetStudentArgs, opts?: pulumi.InvokeOptions): Promise<GetStudentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:education/v20211201preview:getStudent", {
        "billingAccountName": args.billingAccountName,
        "billingProfileName": args.billingProfileName,
        "invoiceSectionName": args.invoiceSectionName,
        "studentAlias": args.studentAlias,
    }, opts);
}

export interface GetStudentArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: string;
    /**
     * The ID that uniquely identifies a billing profile.
     */
    billingProfileName: string;
    /**
     * The ID that uniquely identifies an invoice section.
     */
    invoiceSectionName: string;
    /**
     * Student alias.
     */
    studentAlias: string;
}

/**
 * Student details.
 */
export interface GetStudentResult {
    /**
     * Student Budget
     */
    readonly budget: types.outputs.AmountResponse;
    /**
     * Date student was added to the lab
     */
    readonly effectiveDate: string;
    /**
     * Student Email
     */
    readonly email: string;
    /**
     * Date this student is set to expire from the lab.
     */
    readonly expirationDate: string;
    /**
     * First Name
     */
    readonly firstName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Last Name
     */
    readonly lastName: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Student Role
     */
    readonly role: string;
    /**
     * Student Lab Status
     */
    readonly status: string;
    /**
     * Subscription alias
     */
    readonly subscriptionAlias?: string;
    /**
     * Subscription Id
     */
    readonly subscriptionId: string;
    /**
     * subscription invite last sent date
     */
    readonly subscriptionInviteLastSentDate?: string;
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
 * Get the details for a specific student in the specified lab by student alias
 */
export function getStudentOutput(args: GetStudentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStudentResult> {
    return pulumi.output(args).apply((a: any) => getStudent(a, opts))
}

export interface GetStudentOutputArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies a billing profile.
     */
    billingProfileName: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies an invoice section.
     */
    invoiceSectionName: pulumi.Input<string>;
    /**
     * Student alias.
     */
    studentAlias: pulumi.Input<string>;
}