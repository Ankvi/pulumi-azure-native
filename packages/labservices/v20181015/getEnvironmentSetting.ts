import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get environment setting
 */
export function getEnvironmentSetting(args: GetEnvironmentSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetEnvironmentSettingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices/v20181015:getEnvironmentSetting", {
        "environmentSettingName": args.environmentSettingName,
        "expand": args.expand,
        "labAccountName": args.labAccountName,
        "labName": args.labName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEnvironmentSettingArgs {
    /**
     * The name of the environment Setting.
     */
    environmentSettingName: string;
    /**
     * Specify the $expand query. Example: 'properties($select=publishingState)'
     */
    expand?: string;
    /**
     * The name of the lab Account.
     */
    labAccountName: string;
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Represents settings of an environment, from which environment instances would be created
 */
export interface GetEnvironmentSettingResult {
    /**
     * Describes the user's progress in configuring their environment setting
     */
    readonly configurationState?: string;
    /**
     * Describes the environment and its resource settings
     */
    readonly description?: string;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * Time when the template VM was last changed.
     */
    readonly lastChanged: string;
    /**
     * Time when the template VM was last sent for publishing.
     */
    readonly lastPublished: string;
    /**
     * The details of the latest operation. ex: status, error
     */
    readonly latestOperationResult: types.outputs.labservices.v20181015.LatestOperationResultResponse;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: string;
    /**
     * Describes the readiness of this environment setting
     */
    readonly publishingState: string;
    /**
     * The resource specific settings
     */
    readonly resourceSettings: types.outputs.labservices.v20181015.ResourceSettingsResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Brief title describing the environment and its resource settings
     */
    readonly title?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: string;
}
/**
 * Get environment setting
 */
export function getEnvironmentSettingOutput(args: GetEnvironmentSettingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEnvironmentSettingResult> {
    return pulumi.output(args).apply((a: any) => getEnvironmentSetting(a, opts))
}

export interface GetEnvironmentSettingOutputArgs {
    /**
     * The name of the environment Setting.
     */
    environmentSettingName: pulumi.Input<string>;
    /**
     * Specify the $expand query. Example: 'properties($select=publishingState)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab Account.
     */
    labAccountName: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
