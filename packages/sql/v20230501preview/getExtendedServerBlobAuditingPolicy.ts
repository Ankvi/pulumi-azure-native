import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an extended server's blob auditing policy.
 */
export function getExtendedServerBlobAuditingPolicy(args: GetExtendedServerBlobAuditingPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetExtendedServerBlobAuditingPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230501preview:getExtendedServerBlobAuditingPolicy", {
        "blobAuditingPolicyName": args.blobAuditingPolicyName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetExtendedServerBlobAuditingPolicyArgs {
    /**
     * The name of the blob auditing policy.
     */
    blobAuditingPolicyName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * An extended server blob auditing policy.
 */
export interface GetExtendedServerBlobAuditingPolicyResult {
    /**
     * Specifies the Actions-Groups and Actions to audit.
     * 
     * The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:
     * 
     * BATCH_COMPLETED_GROUP,
     * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,
     * FAILED_DATABASE_AUTHENTICATION_GROUP.
     * 
     * This above combination is also the set that is configured by default when enabling auditing from the Azure portal.
     * 
     * The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):
     * 
     * APPLICATION_ROLE_CHANGE_PASSWORD_GROUP
     * BACKUP_RESTORE_GROUP
     * DATABASE_LOGOUT_GROUP
     * DATABASE_OBJECT_CHANGE_GROUP
     * DATABASE_OBJECT_OWNERSHIP_CHANGE_GROUP
     * DATABASE_OBJECT_PERMISSION_CHANGE_GROUP
     * DATABASE_OPERATION_GROUP
     * DATABASE_PERMISSION_CHANGE_GROUP
     * DATABASE_PRINCIPAL_CHANGE_GROUP
     * DATABASE_PRINCIPAL_IMPERSONATION_GROUP
     * DATABASE_ROLE_MEMBER_CHANGE_GROUP
     * FAILED_DATABASE_AUTHENTICATION_GROUP
     * SCHEMA_OBJECT_ACCESS_GROUP
     * SCHEMA_OBJECT_CHANGE_GROUP
     * SCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUP
     * SCHEMA_OBJECT_PERMISSION_CHANGE_GROUP
     * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP
     * USER_CHANGE_PASSWORD_GROUP
     * BATCH_STARTED_GROUP
     * BATCH_COMPLETED_GROUP
     * DBCC_GROUP
     * DATABASE_OWNERSHIP_CHANGE_GROUP
     * DATABASE_CHANGE_GROUP
     * LEDGER_OPERATION_GROUP
     * 
     * These are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.
     * 
     * For more information, see [Database-Level Audit Action Groups](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-action-groups).
     * 
     * For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:
     * SELECT
     * UPDATE
     * INSERT
     * DELETE
     * EXECUTE
     * RECEIVE
     * REFERENCES
     * 
     * The general form for defining an action to be audited is:
     * {action} ON {object} BY {principal}
     * 
     * Note that <object> in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.
     * 
     * For example:
     * SELECT on dbo.myTable by public
     * SELECT on DATABASE::myDatabase by public
     * SELECT on SCHEMA::mySchema by public
     * 
     * For more information, see [Database-Level Audit Actions](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-actions)
     */
    readonly auditActionsAndGroups?: string[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Specifies whether audit events are sent to Azure Monitor. 
     * In order to send the events to Azure Monitor, specify 'State' as 'Enabled' and 'IsAzureMonitorTargetEnabled' as true.
     * 
     * When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
     * Note that for server level audit you should use the 'master' database as {databaseName}.
     * 
     * Diagnostic Settings URI format:
     * PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview
     * 
     * For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
     * or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
     */
    readonly isAzureMonitorTargetEnabled?: boolean;
    /**
     * Specifies the state of devops audit. If state is Enabled, devops logs will be sent to Azure Monitor.
     * In order to send the events to Azure Monitor, specify 'State' as 'Enabled', 'IsAzureMonitorTargetEnabled' as true and 'IsDevopsAuditEnabled' as true
     * 
     * When using REST API to configure auditing, Diagnostic Settings with 'DevOpsOperationsAudit' diagnostic logs category on the master database should also be created.
     * 
     * Diagnostic Settings URI format:
     * PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/master/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview
     * 
     * For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
     * or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
     */
    readonly isDevopsAuditEnabled?: boolean;
    /**
     * Specifies whether Managed Identity is used to access blob storage
     */
    readonly isManagedIdentityInUse?: boolean;
    /**
     * Specifies whether storageAccountAccessKey value is the storage's secondary key.
     */
    readonly isStorageSecondaryKeyInUse?: boolean;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Specifies condition of where clause when creating an audit.
     */
    readonly predicateExpression?: string;
    /**
     * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
     * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
     */
    readonly queueDelayMs?: number;
    /**
     * Specifies the number of days to keep in the audit logs in the storage account.
     */
    readonly retentionDays?: number;
    /**
     * Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
     */
    readonly state: string;
    /**
     * Specifies the blob storage subscription Id.
     */
    readonly storageAccountSubscriptionId?: string;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.
     */
    readonly storageEndpoint?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an extended server's blob auditing policy.
 */
export function getExtendedServerBlobAuditingPolicyOutput(args: GetExtendedServerBlobAuditingPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExtendedServerBlobAuditingPolicyResult> {
    return pulumi.output(args).apply((a: any) => getExtendedServerBlobAuditingPolicy(a, opts))
}

export interface GetExtendedServerBlobAuditingPolicyOutputArgs {
    /**
     * The name of the blob auditing policy.
     */
    blobAuditingPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}