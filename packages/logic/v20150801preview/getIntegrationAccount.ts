import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration account.
 */
export function getIntegrationAccount(args: GetIntegrationAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20150801preview:getIntegrationAccount", {
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationAccountArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

export interface GetIntegrationAccountResult {
    /**
     * The resource id.
     */
    readonly id?: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The resource name.
     */
    readonly name?: string;
    /**
     * The sku.
     */
    readonly sku?: types.outputs.IntegrationAccountSkuResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type?: string;
}
/**
 * Gets an integration account.
 */
export function getIntegrationAccountOutput(args: GetIntegrationAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationAccountResult> {
    return pulumi.output(args).apply((a: any) => getIntegrationAccount(a, opts))
}

export interface GetIntegrationAccountOutputArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}