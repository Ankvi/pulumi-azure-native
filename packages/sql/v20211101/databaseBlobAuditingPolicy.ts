import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A database blob auditing policy.
 */
export class DatabaseBlobAuditingPolicy extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseBlobAuditingPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseBlobAuditingPolicy {
        return new DatabaseBlobAuditingPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20211101:DatabaseBlobAuditingPolicy';

    /**
     * Returns true if the given object is an instance of DatabaseBlobAuditingPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseBlobAuditingPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseBlobAuditingPolicy.__pulumiType;
    }

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
    public readonly auditActionsAndGroups!: pulumi.Output<string[] | undefined>;
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
    public readonly isAzureMonitorTargetEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether Managed Identity is used to access blob storage
     */
    public readonly isManagedIdentityInUse!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether storageAccountAccessKey value is the storage's secondary key.
     */
    public readonly isStorageSecondaryKeyInUse!: pulumi.Output<boolean | undefined>;
    /**
     * Resource kind.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
     * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
     */
    public readonly queueDelayMs!: pulumi.Output<number | undefined>;
    /**
     * Specifies the number of days to keep in the audit logs in the storage account.
     */
    public readonly retentionDays!: pulumi.Output<number | undefined>;
    /**
     * Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
     */
    public readonly state!: pulumi.Output<string>;
    /**
     * Specifies the blob storage subscription Id.
     */
    public readonly storageAccountSubscriptionId!: pulumi.Output<string | undefined>;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.
     */
    public readonly storageEndpoint!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DatabaseBlobAuditingPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseBlobAuditingPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.state === undefined) && !opts.urn) {
                throw new Error("Missing required property 'state'");
            }
            resourceInputs["auditActionsAndGroups"] = args ? args.auditActionsAndGroups : undefined;
            resourceInputs["blobAuditingPolicyName"] = args ? args.blobAuditingPolicyName : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["isAzureMonitorTargetEnabled"] = args ? args.isAzureMonitorTargetEnabled : undefined;
            resourceInputs["isManagedIdentityInUse"] = args ? args.isManagedIdentityInUse : undefined;
            resourceInputs["isStorageSecondaryKeyInUse"] = args ? args.isStorageSecondaryKeyInUse : undefined;
            resourceInputs["queueDelayMs"] = args ? args.queueDelayMs : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retentionDays"] = args ? args.retentionDays : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["storageAccountAccessKey"] = args ? args.storageAccountAccessKey : undefined;
            resourceInputs["storageAccountSubscriptionId"] = args ? args.storageAccountSubscriptionId : undefined;
            resourceInputs["storageEndpoint"] = args ? args.storageEndpoint : undefined;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["auditActionsAndGroups"] = undefined /*out*/;
            resourceInputs["isAzureMonitorTargetEnabled"] = undefined /*out*/;
            resourceInputs["isManagedIdentityInUse"] = undefined /*out*/;
            resourceInputs["isStorageSecondaryKeyInUse"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["queueDelayMs"] = undefined /*out*/;
            resourceInputs["retentionDays"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["storageAccountSubscriptionId"] = undefined /*out*/;
            resourceInputs["storageEndpoint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20150501preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20170301preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20200202preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20200801preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20201101preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20210201preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20210501preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20210801preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20211101preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20220201preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20220501preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20220801preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20221101preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20230201preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20230501preview:DatabaseBlobAuditingPolicy" }, { type: "azure-native:sql/v20230801preview:DatabaseBlobAuditingPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DatabaseBlobAuditingPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DatabaseBlobAuditingPolicy resource.
 */
export interface DatabaseBlobAuditingPolicyArgs {
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
    auditActionsAndGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the blob auditing policy.
     */
    blobAuditingPolicyName?: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
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
    isAzureMonitorTargetEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies whether Managed Identity is used to access blob storage
     */
    isManagedIdentityInUse?: pulumi.Input<boolean>;
    /**
     * Specifies whether storageAccountAccessKey value is the storage's secondary key.
     */
    isStorageSecondaryKeyInUse?: pulumi.Input<boolean>;
    /**
     * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
     * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
     */
    queueDelayMs?: pulumi.Input<number>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the number of days to keep in the audit logs in the storage account.
     */
    retentionDays?: pulumi.Input<number>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * Specifies the state of the audit. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
     */
    state: pulumi.Input<types.enums.BlobAuditingPolicyState>;
    /**
     * Specifies the identifier key of the auditing storage account. 
     * If state is Enabled and storageEndpoint is specified, not specifying the storageAccountAccessKey will use SQL server system-assigned managed identity to access the storage.
     * Prerequisites for using managed identity authentication:
     * 1. Assign SQL Server a system-assigned managed identity in Azure Active Directory (AAD).
     * 2. Grant SQL Server identity access to the storage account by adding 'Storage Blob Data Contributor' RBAC role to the server identity.
     * For more information, see [Auditing to storage using Managed Identity authentication](https://go.microsoft.com/fwlink/?linkid=2114355)
     */
    storageAccountAccessKey?: pulumi.Input<string>;
    /**
     * Specifies the blob storage subscription Id.
     */
    storageAccountSubscriptionId?: pulumi.Input<string>;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required.
     */
    storageEndpoint?: pulumi.Input<string>;
}