import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a flow log resource by name.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFlowLog(args: GetFlowLogArgs, opts?: pulumi.InvokeOptions): Promise<GetFlowLogResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getFlowLog", {
        "flowLogName": args.flowLogName,
        "networkWatcherName": args.networkWatcherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowLogArgs {
    /**
     * The name of the flow log resource.
     */
    flowLogName: string;
    /**
     * The name of the network watcher.
     */
    networkWatcherName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * A flow log resource.
 */
export interface GetFlowLogResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Flag to enable/disable flow logging.
     */
    readonly enabled?: boolean;
    /**
     * Optional field to filter network traffic logs based on SrcIP, SrcPort, DstIP, DstPort, Protocol, Encryption, Direction and Action. If not specified, all network traffic will be logged.
     */
    readonly enabledFilteringCriteria?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Parameters that define the configuration of traffic analytics.
     */
    readonly flowAnalyticsConfiguration?: types.outputs.TrafficAnalyticsPropertiesResponse;
    /**
     * Parameters that define the flow log format.
     */
    readonly format?: types.outputs.FlowLogFormatParametersResponse;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * FlowLog resource Managed Identity
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the flow log.
     */
    readonly provisioningState: string;
    /**
     * Parameters that define the retention policy for flow log.
     */
    readonly retentionPolicy?: types.outputs.RetentionPolicyParametersResponse;
    /**
     * ID of the storage account which is used to store the flow log.
     */
    readonly storageId: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Guid of network security group to which flow log will be applied.
     */
    readonly targetResourceGuid: string;
    /**
     * ID of network security group to which flow log will be applied.
     */
    readonly targetResourceId: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a flow log resource by name.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFlowLogOutput(args: GetFlowLogOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFlowLogResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getFlowLog", {
        "flowLogName": args.flowLogName,
        "networkWatcherName": args.networkWatcherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowLogOutputArgs {
    /**
     * The name of the flow log resource.
     */
    flowLogName: pulumi.Input<string>;
    /**
     * The name of the network watcher.
     */
    networkWatcherName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}