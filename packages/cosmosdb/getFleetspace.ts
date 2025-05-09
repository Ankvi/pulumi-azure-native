import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of an existing Azure Cosmos DB fleetspace under a fleet
 *
 * Uses Azure REST API version 2025-05-01-preview.
 */
export function getFleetspace(args: GetFleetspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetFleetspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cosmosdb:getFleetspace", {
        "fleetName": args.fleetName,
        "fleetspaceName": args.fleetspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFleetspaceArgs {
    /**
     * Cosmos DB fleet name. Needs to be unique under a subscription.
     */
    fleetName: string;
    /**
     * Cosmos DB fleetspace name. Needs to be unique under a fleet.
     */
    fleetspaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Azure Cosmos DB Fleetspace.
 */
export interface GetFleetspaceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The kind of API this fleetspace belongs to. Acceptable values: 'NoSQL'
     */
    readonly fleetspaceApiKind?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A provisioning state of the Fleetspace.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Configuration for throughput pool in the fleetspace.
     */
    readonly throughputPoolConfiguration?: types.outputs.FleetspacePropertiesResponseThroughputPoolConfiguration;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves the properties of an existing Azure Cosmos DB fleetspace under a fleet
 *
 * Uses Azure REST API version 2025-05-01-preview.
 */
export function getFleetspaceOutput(args: GetFleetspaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFleetspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cosmosdb:getFleetspace", {
        "fleetName": args.fleetName,
        "fleetspaceName": args.fleetspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFleetspaceOutputArgs {
    /**
     * Cosmos DB fleet name. Needs to be unique under a subscription.
     */
    fleetName: pulumi.Input<string>;
    /**
     * Cosmos DB fleetspace name. Needs to be unique under a fleet.
     */
    fleetspaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}