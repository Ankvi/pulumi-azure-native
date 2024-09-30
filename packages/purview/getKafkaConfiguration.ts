import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the kafka configuration for the account
 * Azure REST API version: 2021-12-01.
 *
 * Other available API versions: 2023-05-01-preview, 2024-04-01-preview.
 */
export function getKafkaConfiguration(args: GetKafkaConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetKafkaConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:purview:getKafkaConfiguration", {
        "accountName": args.accountName,
        "kafkaConfigurationName": args.kafkaConfigurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKafkaConfigurationArgs {
    /**
     * The name of the account.
     */
    accountName: string;
    /**
     * Name of kafka configuration.
     */
    kafkaConfigurationName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The configuration of the event streaming service resource attached to the Purview account for kafka notifications.
 */
export interface GetKafkaConfigurationResult {
    /**
     * Consumer group for hook event hub.
     */
    readonly consumerGroup?: string;
    /**
     * Credentials to access event hub.
     */
    readonly credentials?: types.outputs.CredentialsResponse;
    /**
     * Optional partition Id for notification event hub. If not set, all partitions will be leveraged.
     */
    readonly eventHubPartitionId?: string;
    readonly eventHubResourceId?: string;
    /**
     * The event hub type.
     */
    readonly eventHubType?: string;
    /**
     * The state of the event streaming service
     */
    readonly eventStreamingState?: string;
    /**
     * The event streaming service type
     */
    readonly eventStreamingType?: string;
    /**
     * Gets or sets the identifier.
     */
    readonly id: string;
    /**
     * Gets or sets the name.
     */
    readonly name: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.ProxyResourceResponseSystemData;
    /**
     * Gets or sets the type.
     */
    readonly type: string;
}
/**
 * Gets the kafka configuration for the account
 * Azure REST API version: 2021-12-01.
 *
 * Other available API versions: 2023-05-01-preview, 2024-04-01-preview.
 */
export function getKafkaConfigurationOutput(args: GetKafkaConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKafkaConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:purview:getKafkaConfiguration", {
        "accountName": args.accountName,
        "kafkaConfigurationName": args.kafkaConfigurationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKafkaConfigurationOutputArgs {
    /**
     * The name of the account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Name of kafka configuration.
     */
    kafkaConfigurationName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}