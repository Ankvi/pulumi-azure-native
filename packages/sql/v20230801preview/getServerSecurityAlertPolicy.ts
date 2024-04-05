import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a server's security alert policy.
 */
export function getServerSecurityAlertPolicy(args: GetServerSecurityAlertPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetServerSecurityAlertPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230801preview:getServerSecurityAlertPolicy", {
        "resourceGroupName": args.resourceGroupName,
        "securityAlertPolicyName": args.securityAlertPolicyName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerSecurityAlertPolicyArgs {
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
 * A server security alert policy.
 */
export interface GetServerSecurityAlertPolicyResult {
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
 * Get a server's security alert policy.
 */
export function getServerSecurityAlertPolicyOutput(args: GetServerSecurityAlertPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerSecurityAlertPolicyResult> {
    return pulumi.output(args).apply((a: any) => getServerSecurityAlertPolicy(a, opts))
}

export interface GetServerSecurityAlertPolicyOutputArgs {
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