import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an application control VM/server group.
 * Azure REST API version: 2020-01-01.
 */
export function getAdaptiveApplicationControl(args: GetAdaptiveApplicationControlArgs, opts?: pulumi.InvokeOptions): Promise<GetAdaptiveApplicationControlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getAdaptiveApplicationControl", {
        "ascLocation": args.ascLocation,
        "groupName": args.groupName,
    }, opts);
}

export interface GetAdaptiveApplicationControlArgs {
    /**
     * The location where ASC stores the data of the subscription. can be retrieved from Get locations
     */
    ascLocation: string;
    /**
     * Name of an application control machine group
     */
    groupName: string;
}

export interface GetAdaptiveApplicationControlResult {
    /**
     * The configuration status of the machines group or machine or rule
     */
    readonly configurationStatus: string;
    /**
     * The application control policy enforcement/protection mode of the machine group
     */
    readonly enforcementMode?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    readonly issues: types.outputs.AdaptiveApplicationControlIssueSummaryResponse[];
    /**
     * Location where the resource is stored
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    readonly pathRecommendations?: types.outputs.PathRecommendationResponse[];
    /**
     * The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
     */
    readonly protectionMode?: types.outputs.ProtectionModeResponse;
    /**
     * The initial recommendation status of the machine group or machine
     */
    readonly recommendationStatus: string;
    /**
     * The source type of the machine group
     */
    readonly sourceSystem: string;
    /**
     * Resource type
     */
    readonly type: string;
    readonly vmRecommendations?: types.outputs.VmRecommendationResponse[];
}
/**
 * Gets an application control VM/server group.
 * Azure REST API version: 2020-01-01.
 */
export function getAdaptiveApplicationControlOutput(args: GetAdaptiveApplicationControlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAdaptiveApplicationControlResult> {
    return pulumi.output(args).apply((a: any) => getAdaptiveApplicationControl(a, opts))
}

export interface GetAdaptiveApplicationControlOutputArgs {
    /**
     * The location where ASC stores the data of the subscription. can be retrieved from Get locations
     */
    ascLocation: pulumi.Input<string>;
    /**
     * Name of an application control machine group
     */
    groupName: pulumi.Input<string>;
}
