import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the time series history for a signal on an entity
 *
 * Uses Azure REST API version 2026-01-01-preview.
 *
 * Other available API versions: 2026-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudhealth [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getEntitySignalHistory(args: GetEntitySignalHistoryArgs, opts?: pulumi.InvokeOptions): Promise<GetEntitySignalHistoryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudhealth:getEntitySignalHistory", {
        "endAt": args.endAt,
        "entityName": args.entityName,
        "healthModelName": args.healthModelName,
        "resourceGroupName": args.resourceGroupName,
        "signalName": args.signalName,
        "startAt": args.startAt,
    }, opts);
}

export interface GetEntitySignalHistoryArgs {
    /**
     * End time for the history query. Defaults to now if not specified.
     */
    endAt?: string;
    /**
     * Name of the entity. Must be unique within a health model.
     */
    entityName: string;
    /**
     * Name of health model resource
     */
    healthModelName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the signal to get history for
     */
    signalName: string;
    /**
     * Start time for the history query. Defaults to 24 hours ago if not specified.
     */
    startAt?: string;
}

/**
 * Response containing signal history
 */
export interface GetEntitySignalHistoryResult {
    /**
     * Name of the entity
     */
    readonly entityName: string;
    /**
     * Signal history data points
     */
    readonly history: types.outputs.SignalHistoryDataPointResponse[];
    /**
     * Name of the signal
     */
    readonly signalName: string;
}
/**
 * Retrieve the time series history for a signal on an entity
 *
 * Uses Azure REST API version 2026-01-01-preview.
 *
 * Other available API versions: 2026-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cloudhealth [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getEntitySignalHistoryOutput(args: GetEntitySignalHistoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEntitySignalHistoryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudhealth:getEntitySignalHistory", {
        "endAt": args.endAt,
        "entityName": args.entityName,
        "healthModelName": args.healthModelName,
        "resourceGroupName": args.resourceGroupName,
        "signalName": args.signalName,
        "startAt": args.startAt,
    }, opts);
}

export interface GetEntitySignalHistoryOutputArgs {
    /**
     * End time for the history query. Defaults to now if not specified.
     */
    endAt?: pulumi.Input<string>;
    /**
     * Name of the entity. Must be unique within a health model.
     */
    entityName: pulumi.Input<string>;
    /**
     * Name of health model resource
     */
    healthModelName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the signal to get history for
     */
    signalName: pulumi.Input<string>;
    /**
     * Start time for the history query. Defaults to 24 hours ago if not specified.
     */
    startAt?: pulumi.Input<string>;
}