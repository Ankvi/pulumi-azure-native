import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a batch configuration for an integration account.
 *
 * Uses Azure REST API version 2019-05-01.
 *
 * Other available API versions: 2016-06-01, 2018-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native logic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2019-05-01.
 *
 * Other available API versions: 2016-06-01, 2018-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native logic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getIntegrationAccountBatchConfigurationOutput(args: GetIntegrationAccountBatchConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIntegrationAccountBatchConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logic:getIntegrationAccountBatchConfiguration", {
        "batchConfigurationName": args.batchConfigurationName,
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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