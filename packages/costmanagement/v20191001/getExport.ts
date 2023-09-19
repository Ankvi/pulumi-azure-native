import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get the export for the defined scope by export name.
 */
export function getExport(args: GetExportArgs, opts?: pulumi.InvokeOptions): Promise<GetExportResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement/v20191001:getExport", {
        "exportName": args.exportName,
        "scope": args.scope,
    }, opts);
}

export interface GetExportArgs {
    /**
     * Export Name.
     */
    exportName: string;
    /**
     * The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners, 'providers/Microsoft.CostManagement/ExternalSubscriptions/{externalSubscriptionId}' for linked account and 'providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountId}' for consolidated account
     */
    scope: string;
}

/**
 * A export resource.
 */
export interface GetExportResult {
    /**
     * Has definition for the export.
     */
    readonly definition: types.outputs.QueryDefinitionResponse;
    /**
     * Has delivery information for the export.
     */
    readonly deliveryInfo: types.outputs.ExportDeliveryInfoResponse;
    /**
     * The format of the export being delivered.
     */
    readonly format?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Has schedule information for the export.
     */
    readonly schedule?: types.outputs.ExportScheduleResponse;
    /**
     * Resource tags.
     */
    readonly tags: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * The operation to get the export for the defined scope by export name.
 */
export function getExportOutput(args: GetExportOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExportResult> {
    return pulumi.output(args).apply((a: any) => getExport(a, opts))
}

export interface GetExportOutputArgs {
    /**
     * Export Name.
     */
    exportName: pulumi.Input<string>;
    /**
     * The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners, 'providers/Microsoft.CostManagement/ExternalSubscriptions/{externalSubscriptionId}' for linked account and 'providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountId}' for consolidated account
     */
    scope: pulumi.Input<string>;
}
