import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a WebAppCollector
 * Azure REST API version: 2023-04-01-preview.
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
 * Azure REST API version: 2023-04-01-preview.
 */
export function getWebAppCollectorOperationOutput(args: GetWebAppCollectorOperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppCollectorOperationResult> {
    return pulumi.output(args).apply((a: any) => getWebAppCollectorOperation(a, opts))
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