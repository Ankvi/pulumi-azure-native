import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the integration account callback URL.
 */
export function listIntegrationAccountCallbackUrl(args: ListIntegrationAccountCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationAccountCallbackUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20190501:listIntegrationAccountCallbackUrl", {
        "integrationAccountName": args.integrationAccountName,
        "keyType": args.keyType,
        "notAfter": args.notAfter,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIntegrationAccountCallbackUrlArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: string;
    /**
     * The key type.
     */
    keyType?: string | types.enums.KeyType;
    /**
     * The expiry time.
     */
    notAfter?: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The callback url.
 */
export interface ListIntegrationAccountCallbackUrlResult {
    /**
     * The URL value.
     */
    readonly value?: string;
}
/**
 * Gets the integration account callback URL.
 */
export function listIntegrationAccountCallbackUrlOutput(args: ListIntegrationAccountCallbackUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListIntegrationAccountCallbackUrlResult> {
    return pulumi.output(args).apply((a: any) => listIntegrationAccountCallbackUrl(a, opts))
}

export interface ListIntegrationAccountCallbackUrlOutputArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The key type.
     */
    keyType?: pulumi.Input<string | types.enums.KeyType>;
    /**
     * The expiry time.
     */
    notAfter?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
