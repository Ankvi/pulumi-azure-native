import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves Alias(Disaster Recovery configuration) for primary or secondary namespace
 * Azure REST API version: 2022-10-01-preview.
 *
 * Other available API versions: 2023-01-01-preview, 2024-01-01.
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
 * Azure REST API version: 2022-10-01-preview.
 *
 * Other available API versions: 2023-01-01-preview, 2024-01-01.
 */
export function getDisasterRecoveryConfigOutput(args: GetDisasterRecoveryConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDisasterRecoveryConfigResult> {
    return pulumi.output(args).apply((a: any) => getDisasterRecoveryConfig(a, opts))
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
