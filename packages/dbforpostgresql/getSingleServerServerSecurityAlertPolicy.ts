import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a server's security alert policy.
 *
 * Uses Azure REST API version 2017-12-01.
 */
export function getSingleServerServerSecurityAlertPolicy(args: GetSingleServerServerSecurityAlertPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetSingleServerServerSecurityAlertPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql:getSingleServerServerSecurityAlertPolicy", {
        "resourceGroupName": args.resourceGroupName,
        "securityAlertPolicyName": args.securityAlertPolicyName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetSingleServerServerSecurityAlertPolicyArgs {
    /**
     * The name of the resource group. The name is case insensitive.
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
export interface GetSingleServerServerSecurityAlertPolicyResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Specifies the number of days to keep in the Threat Detection audit logs.
     */
    readonly retentionDays?: number;
    /**
     * Specifies the state of the policy, whether it is enabled or disabled.
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a server's security alert policy.
 *
 * Uses Azure REST API version 2017-12-01.
 */
export function getSingleServerServerSecurityAlertPolicyOutput(args: GetSingleServerServerSecurityAlertPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSingleServerServerSecurityAlertPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbforpostgresql:getSingleServerServerSecurityAlertPolicy", {
        "resourceGroupName": args.resourceGroupName,
        "securityAlertPolicyName": args.securityAlertPolicyName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetSingleServerServerSecurityAlertPolicyOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
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