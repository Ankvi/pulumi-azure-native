import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a batch configuration for an integration account.
 * Azure REST API version: 2019-05-01.
 */
export function getIntegrationAccountBatchConfiguration(args: GetIntegrationAccountBatchConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountBatchConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:getIntegrationAccountBatchConfiguration", {
        "batchConfigurationName": args.batchConfigurationName,
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationAccountBatchConfigurationArgs {
    /**
     * The batch configuration name.
     */
    batchConfigurationName: string;
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
 * The batch configuration resource definition.
 */
export interface GetIntegrationAccountBatchConfigurationResult {
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The batch configuration properties.
     */
    readonly properties: types.outputs.BatchConfigurationPropertiesResponse;
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
 * Get a batch configuration for an integration account.
 * Azure REST API version: 2019-05-01.
 */
export function getIntegrationAccountBatchConfigurationOutput(args: GetIntegrationAccountBatchConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationAccountBatchConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getIntegrationAccountBatchConfiguration(a, opts))
}

export interface GetIntegrationAccountBatchConfigurationOutputArgs {
    /**
     * The batch configuration name.
     */
    batchConfigurationName: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}