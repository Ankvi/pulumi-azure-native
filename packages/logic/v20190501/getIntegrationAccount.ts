import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets an integration account.
 */
export function getIntegrationAccount(args: GetIntegrationAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20190501:getIntegrationAccount", {
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

/**
 * The integration account.
 */
export interface GetIntegrationAccountResult {
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The integration service environment.
     */
    readonly integrationServiceEnvironment?: types.outputs.logic.v20190501.ResourceReferenceResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The sku.
     */
    readonly sku?: types.outputs.logic.v20190501.IntegrationAccountSkuResponse;
    /**
     * The workflow state.
     */
    readonly state?: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets the resource type.
     */
    readonly type: string;
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
