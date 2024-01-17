import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Data Lake Store account.
 * Azure REST API version: 2016-11-01.
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datalakestore:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * The name of the Data Lake Store account.
     */
    accountName: string;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * Data Lake Store account information.
 */
export interface GetAccountResult {
    /**
     * The unique identifier associated with this Data Lake Store account.
     */
    readonly accountId: string;
    /**
     * The account creation time.
     */
    readonly creationTime: string;
    /**
     * The commitment tier in use for the current month.
     */
    readonly currentTier: string;
    /**
     * The default owner group for all new folders and files created in the Data Lake Store account.
     */
    readonly defaultGroup: string;
    /**
     * The Key Vault encryption configuration.
     */
    readonly encryptionConfig: types.outputs.EncryptionConfigResponse;
    /**
     * The current state of encryption provisioning for this Data Lake Store account.
     */
    readonly encryptionProvisioningState: string;
    /**
     * The current state of encryption for this Data Lake Store account.
     */
    readonly encryptionState: string;
    /**
     * The full CName endpoint for this account.
     */
    readonly endpoint: string;
    /**
     * The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
     */
    readonly firewallAllowAzureIps: string;
    /**
     * The list of firewall rules associated with this Data Lake Store account.
     */
    readonly firewallRules: types.outputs.FirewallRuleResponse[];
    /**
     * The current state of the IP address firewall for this Data Lake Store account.
     */
    readonly firewallState: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The Key Vault encryption identity, if any.
     */
    readonly identity: types.outputs.EncryptionIdentityResponse;
    /**
     * The account last modified time.
     */
    readonly lastModifiedTime: string;
    /**
     * The resource location.
     */
    readonly location: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The commitment tier to use for next month.
     */
    readonly newTier: string;
    /**
     * The provisioning status of the Data Lake Store account.
     */
    readonly provisioningState: string;
    /**
     * The state of the Data Lake Store account.
     */
    readonly state: string;
    /**
     * The resource tags.
     */
    readonly tags: {[key: string]: string};
    /**
     * The current state of the trusted identity provider feature for this Data Lake Store account.
     */
    readonly trustedIdProviderState: string;
    /**
     * The list of trusted identity providers associated with this Data Lake Store account.
     */
    readonly trustedIdProviders: types.outputs.TrustedIdProviderResponse[];
    /**
     * The resource type.
     */
    readonly type: string;
    /**
     * The list of virtual network rules associated with this Data Lake Store account.
     */
    readonly virtualNetworkRules: types.outputs.VirtualNetworkRuleResponse[];
}
/**
 * Gets the specified Data Lake Store account.
 * Azure REST API version: 2016-11-01.
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountResult> {
    return pulumi.output(args).apply((a: any) => getAccount(a, opts))
}

export interface GetAccountOutputArgs {
    /**
     * The name of the Data Lake Store account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}