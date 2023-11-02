import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a given registered server.
 * Azure REST API version: 2022-06-01.
 *
 * Other available API versions: 2017-06-05-preview, 2018-04-02, 2018-07-01, 2022-09-01.
 */
export function getRegisteredServer(args: GetRegisteredServerArgs, opts?: pulumi.InvokeOptions): Promise<GetRegisteredServerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagesync:getRegisteredServer", {
        "resourceGroupName": args.resourceGroupName,
        "serverId": args.serverId,
        "storageSyncServiceName": args.storageSyncServiceName,
    }, opts);
}

export interface GetRegisteredServerArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * GUID identifying the on-premises server.
     */
    serverId: string;
    /**
     * Name of Storage Sync Service resource.
     */
    storageSyncServiceName: string;
}

/**
 * Registered Server resource.
 */
export interface GetRegisteredServerResult {
    /**
     * Registered Server Agent Version
     */
    readonly agentVersion?: string;
    /**
     * Registered Server Agent Version Expiration Date
     */
    readonly agentVersionExpirationDate: string;
    /**
     * Registered Server Agent Version Status
     */
    readonly agentVersionStatus: string;
    /**
     * Registered Server clusterId
     */
    readonly clusterId?: string;
    /**
     * Registered Server clusterName
     */
    readonly clusterName?: string;
    /**
     * Resource discoveryEndpointUri
     */
    readonly discoveryEndpointUri?: string;
    /**
     * Friendly Name
     */
    readonly friendlyName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Registered Server last heart beat
     */
    readonly lastHeartBeat?: string;
    /**
     * Resource Last Operation Name
     */
    readonly lastOperationName?: string;
    /**
     * Registered Server lastWorkflowId
     */
    readonly lastWorkflowId?: string;
    /**
     * Management Endpoint Uri
     */
    readonly managementEndpointUri?: string;
    /**
     * Monitoring Configuration
     */
    readonly monitoringConfiguration?: string;
    /**
     * Telemetry Endpoint Uri
     */
    readonly monitoringEndpointUri?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Registered Server Provisioning State
     */
    readonly provisioningState?: string;
    /**
     * Resource Location
     */
    readonly resourceLocation?: string;
    /**
     * Registered Server Certificate
     */
    readonly serverCertificate?: string;
    /**
     * Registered Server serverId
     */
    readonly serverId?: string;
    /**
     * Registered Server Management Error Code
     */
    readonly serverManagementErrorCode?: number;
    /**
     * Server name
     */
    readonly serverName: string;
    /**
     * Registered Server OS Version
     */
    readonly serverOSVersion?: string;
    /**
     * Registered Server serverRole
     */
    readonly serverRole?: string;
    /**
     * Service Location
     */
    readonly serviceLocation?: string;
    /**
     * Registered Server storageSyncServiceUid
     */
    readonly storageSyncServiceUid?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a given registered server.
 * Azure REST API version: 2022-06-01.
 *
 * Other available API versions: 2017-06-05-preview, 2018-04-02, 2018-07-01, 2022-09-01.
 */
export function getRegisteredServerOutput(args: GetRegisteredServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegisteredServerResult> {
    return pulumi.output(args).apply((a: any) => getRegisteredServer(a, opts))
}

export interface GetRegisteredServerOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * GUID identifying the on-premises server.
     */
    serverId: pulumi.Input<string>;
    /**
     * Name of Storage Sync Service resource.
     */
    storageSyncServiceName: pulumi.Input<string>;
}
