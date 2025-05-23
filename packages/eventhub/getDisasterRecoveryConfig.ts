import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves Alias(Disaster Recovery configuration) for primary or secondary namespace
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2018-01-01-preview, 2021-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDisasterRecoveryConfig(args: GetDisasterRecoveryConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetDisasterRecoveryConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventhub:getDisasterRecoveryConfig", {
        "alias": args.alias,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDisasterRecoveryConfigArgs {
    /**
     * The Disaster Recovery configuration name
     */
    alias: string;
    /**
     * The Namespace name
     */
    namespaceName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Single item in List or Get Alias(Disaster Recovery configuration) operation
 */
export interface GetDisasterRecoveryConfigResult {
    /**
     * Alternate name specified when alias and namespace names are same.
     */
    readonly alternateName?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
     */
    readonly partnerNamespace?: string;
    /**
     * Number of entities pending to be replicated.
     */
    readonly pendingReplicationOperationsCount: number;
    /**
     * Provisioning state of the Alias(Disaster Recovery configuration) - possible values 'Accepted' or 'Succeeded' or 'Failed'
     */
    readonly provisioningState: string;
    /**
     * role of namespace in GEO DR - possible values 'Primary' or 'PrimaryNotReplicating' or 'Secondary'
     */
    readonly role: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    readonly type: string;
}
/**
 * Retrieves Alias(Disaster Recovery configuration) for primary or secondary namespace
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2018-01-01-preview, 2021-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDisasterRecoveryConfigOutput(args: GetDisasterRecoveryConfigOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDisasterRecoveryConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventhub:getDisasterRecoveryConfig", {
        "alias": args.alias,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDisasterRecoveryConfigOutputArgs {
    /**
     * The Disaster Recovery configuration name
     */
    alias: pulumi.Input<string>;
    /**
     * The Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}