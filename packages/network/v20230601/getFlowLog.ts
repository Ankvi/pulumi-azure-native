import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a flow log resource by name.
 */
export function getFlowLog(args: GetFlowLogArgs, opts?: pulumi.InvokeOptions): Promise<GetFlowLogResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230601:getFlowLog", {
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
     * Flag to enable/disable flow logging.
     */
    readonly enabled?: boolean;
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
 */
export function getFlowLogOutput(args: GetFlowLogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFlowLogResult> {
    return pulumi.output(args).apply((a: any) => getFlowLog(a, opts))
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