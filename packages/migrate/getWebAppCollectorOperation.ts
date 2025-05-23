import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a WebAppCollector
 *
 * Uses Azure REST API version 2024-01-01-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-09-09-preview, 2024-03-03-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native migrate [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppCollectorOperation(args: GetWebAppCollectorOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppCollectorOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getWebAppCollectorOperation", {
        "collectorName": args.collectorName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppCollectorOperationArgs {
    /**
     * Web app collector ARM name.
     */
    collectorName: string;
    /**
     * Assessment Project Name
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The web app collector REST object.
 */
export interface GetWebAppCollectorOperationResult {
    /**
     * Gets or sets the collector agent properties.
     */
    readonly agentProperties?: types.outputs.CollectorAgentPropertiesBaseResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Gets the Timestamp when collector was created.
     */
    readonly createdTimestamp: string;
    /**
     * Gets the discovery site id.
     */
    readonly discoverySiteId?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Timestamp when collector was last updated.
     */
    readonly updatedTimestamp: string;
}
/**
 * Get a WebAppCollector
 *
 * Uses Azure REST API version 2024-01-01-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-09-09-preview, 2024-03-03-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native migrate [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppCollectorOperationOutput(args: GetWebAppCollectorOperationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppCollectorOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getWebAppCollectorOperation", {
        "collectorName": args.collectorName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppCollectorOperationOutputArgs {
    /**
     * Web app collector ARM name.
     */
    collectorName: pulumi.Input<string>;
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}