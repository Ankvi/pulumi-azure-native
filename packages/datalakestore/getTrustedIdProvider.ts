import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified Data Lake Store trusted identity provider.
 *
 * Uses Azure REST API version 2016-11-01.
 */
export function getTrustedIdProvider(args: GetTrustedIdProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetTrustedIdProviderResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datalakestore:getTrustedIdProvider", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "trustedIdProviderName": args.trustedIdProviderName,
    }, opts);
}

export interface GetTrustedIdProviderArgs {
    /**
     * The name of the Data Lake Store account.
     */
    accountName: string;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the trusted identity provider to retrieve.
     */
    trustedIdProviderName: string;
}

/**
 * Data Lake Store trusted identity provider information.
 */
export interface GetTrustedIdProviderResult {
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The URL of this trusted identity provider.
     */
    readonly idProvider: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified Data Lake Store trusted identity provider.
 *
 * Uses Azure REST API version 2016-11-01.
 */
export function getTrustedIdProviderOutput(args: GetTrustedIdProviderOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTrustedIdProviderResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datalakestore:getTrustedIdProvider", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "trustedIdProviderName": args.trustedIdProviderName,
    }, opts);
}

export interface GetTrustedIdProviderOutputArgs {
    /**
     * The name of the Data Lake Store account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the trusted identity provider to retrieve.
     */
    trustedIdProviderName: pulumi.Input<string>;
}