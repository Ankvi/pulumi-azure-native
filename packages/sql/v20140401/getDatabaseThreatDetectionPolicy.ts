import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a database's threat detection policy.
 */
export function getDatabaseThreatDetectionPolicy(args: GetDatabaseThreatDetectionPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseThreatDetectionPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20140401:getDatabaseThreatDetectionPolicy", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "securityAlertPolicyName": args.securityAlertPolicyName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetDatabaseThreatDetectionPolicyArgs {
    /**
     * The name of the database for which database Threat Detection policy is defined.
     */
    databaseName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the security alert policy.
     */
    securityAlertPolicyName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * Contains information about a database Threat Detection policy.
 */
export interface GetDatabaseThreatDetectionPolicyResult {
    /**
     * Specifies the semicolon-separated list of alerts that are disabled, or empty string to disable no alerts. Possible values: Sql_Injection; Sql_Injection_Vulnerability; Access_Anomaly; Data_Exfiltration; Unsafe_Action.
     */
    readonly disabledAlerts?: string;
    /**
     * Specifies that the alert is sent to the account administrators.
     */
    readonly emailAccountAdmins?: string;
    /**
     * Specifies the semicolon-separated list of e-mail addresses to which the alert is sent.
     */
    readonly emailAddresses?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource kind.
     */
    readonly kind: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Specifies the number of days to keep in the Threat Detection audit logs.
     */
    readonly retentionDays?: number;
    /**
     * Specifies the state of the policy. If state is Enabled, storageEndpoint and storageAccountAccessKey are required.
     */
    readonly state: string;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. If state is Enabled, storageEndpoint is required.
     */
    readonly storageEndpoint?: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Specifies whether to use the default server policy.
     */
    readonly useServerDefault?: string;
}
/**
 * Gets a database's threat detection policy.
 */
export function getDatabaseThreatDetectionPolicyOutput(args: GetDatabaseThreatDetectionPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseThreatDetectionPolicyResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseThreatDetectionPolicy(a, opts))
}

export interface GetDatabaseThreatDetectionPolicyOutputArgs {
    /**
     * The name of the database for which database Threat Detection policy is defined.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the security alert policy.
     */
    securityAlertPolicyName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}