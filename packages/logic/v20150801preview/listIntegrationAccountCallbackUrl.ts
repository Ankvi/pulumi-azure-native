import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Lists the integration account callback URL.
 */
export function listIntegrationAccountCallbackUrl(args: ListIntegrationAccountCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationAccountCallbackUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20150801preview:listIntegrationAccountCallbackUrl", {
        "integrationAccountName": args.integrationAccountName,
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
     * The expiry time.
     */
    notAfter?: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

export interface ListIntegrationAccountCallbackUrlResult {
    /**
     * The URL value.
     */
    readonly value?: string;
}
/**
 * Lists the integration account callback URL.
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
     * The expiry time.
     */
    notAfter?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}