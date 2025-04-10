import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get the export for the defined scope by export name.
 *
 * Uses Azure REST API version 2023-03-01.
 *
 * Other available API versions: 2019-10-01, 2023-04-01-preview, 2023-07-01-preview, 2023-08-01, 2023-09-01, 2023-11-01, 2024-08-01, 2024-10-01-preview.
 */
export function getExport(args: GetExportArgs, opts?: pulumi.InvokeOptions): Promise<GetExportResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement:getExport", {
        "expand": args.expand,
        "exportName": args.exportName,
        "scope": args.scope,
    }, opts);
}

export interface GetExportArgs {
    /**
     * May be used to expand the properties within an export. Currently only 'runHistory' is supported and will return information for the last 10 runs of the export.
     */
    expand?: string;
    /**
     * Export Name.
     */
    exportName: string;
    /**
     * The scope associated with export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners.
     */
    scope: string;
}

/**
 * An export resource.
 */
export interface GetExportResult {
    /**
     * Has the definition for the export.
     */
    readonly definition: types.outputs.ExportDefinitionResponse;
    /**
     * Has delivery information for the export.
     */
    readonly deliveryInfo: types.outputs.ExportDeliveryInfoResponse;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag?: string;
    /**
     * The format of the export being delivered. Currently only 'Csv' is supported.
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
     * If the export has an active schedule, provides an estimate of the next run time.
     */
    readonly nextRunTimeEstimate: string;
    /**
     * If set to true, exported data will be partitioned by size and placed in a blob directory together with a manifest file. Note: this option is currently available only for Microsoft Customer Agreement commerce scopes.
     */
    readonly partitionData?: boolean;
    /**
     * If requested, has the most recent run history for the export.
     */
    readonly runHistory?: types.outputs.ExportExecutionListResultResponse;
    /**
     * Has schedule information for the export.
     */
    readonly schedule?: types.outputs.ExportScheduleResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * The operation to get the export for the defined scope by export name.
 *
 * Uses Azure REST API version 2023-03-01.
 *
 * Other available API versions: 2019-10-01, 2023-04-01-preview, 2023-07-01-preview, 2023-08-01, 2023-09-01, 2023-11-01, 2024-08-01, 2024-10-01-preview.
 */
export function getExportOutput(args: GetExportOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetExportResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:costmanagement:getExport", {
        "expand": args.expand,
        "exportName": args.exportName,
        "scope": args.scope,
    }, opts);
}

export interface GetExportOutputArgs {
    /**
     * May be used to expand the properties within an export. Currently only 'runHistory' is supported and will return information for the last 10 runs of the export.
     */
    expand?: pulumi.Input<string>;
    /**
     * Export Name.
     */
    exportName: pulumi.Input<string>;
    /**
     * The scope associated with export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners.
     */
    scope: pulumi.Input<string>;
}