import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a database's security alert policy.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2018-06-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview.
 */
export function getDatabaseSecurityAlertPolicy(args: GetDatabaseSecurityAlertPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseSecurityAlertPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getDatabaseSecurityAlertPolicy", {
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "securityAlertPolicyName": args.securityAlertPolicyName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetDatabaseSecurityAlertPolicyArgs {
    /**
     * The name of the  database for which the security alert policy is defined.
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
     * The name of the  server.
     */
    serverName: string;
}

/**
 * A database security alert policy.
 */
export interface GetDatabaseSecurityAlertPolicyResult {
    /**
     * Specifies the UTC creation time of the policy.
     */
    readonly creationTime: string;
    /**
     * Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action, Brute_Force
     */
    readonly disabledAlerts?: string[];
    /**
     * Specifies that the alert is sent to the account administrators.
     */
    readonly emailAccountAdmins?: boolean;
    /**
     * Specifies an array of e-mail addresses to which the alert is sent.
     */
    readonly emailAddresses?: string[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Specifies the number of days to keep in the Threat Detection audit logs.
     */
    readonly retentionDays?: number;
    /**
     * Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database.
     */
    readonly state: string;
    /**
     * Specifies the identifier key of the Threat Detection audit storage account.
     */
    readonly storageAccountAccessKey?: string;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.
     */
    readonly storageEndpoint?: string;
    /**
     * SystemData of SecurityAlertPolicyResource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a database's security alert policy.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2018-06-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview.
 */
export function getDatabaseSecurityAlertPolicyOutput(args: GetDatabaseSecurityAlertPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseSecurityAlertPolicyResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseSecurityAlertPolicy(a, opts))
}

export interface GetDatabaseSecurityAlertPolicyOutputArgs {
    /**
     * The name of the  database for which the security alert policy is defined.
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
     * The name of the  server.
     */
    serverName: pulumi.Input<string>;
}