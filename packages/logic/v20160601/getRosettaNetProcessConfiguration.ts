import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration account RosettaNetProcessConfiguration.
 */
export function getRosettaNetProcessConfiguration(args: GetRosettaNetProcessConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetRosettaNetProcessConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20160601:getRosettaNetProcessConfiguration", {
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "rosettaNetProcessConfigurationName": args.rosettaNetProcessConfigurationName,
    }, opts);
}

export interface GetRosettaNetProcessConfigurationArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The integration account RosettaNetProcessConfiguration name.
     */
    rosettaNetProcessConfigurationName: string;
}

/**
 * The integration account RosettaNet process configuration.
 */
export interface GetRosettaNetProcessConfigurationResult {
    /**
     * The RosettaNet process configuration activity settings.
     */
    readonly activitySettings: types.outputs.RosettaNetPipActivitySettingsResponse;
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The integration account RosettaNet ProcessConfiguration properties.
     */
    readonly description?: string;
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The RosettaNet initiator role settings.
     */
    readonly initiatorRoleSettings: types.outputs.RosettaNetPipRoleSettingsResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The metadata.
     */
    readonly metadata?: {[key: string]: string};
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The integration account RosettaNet process code.
     */
    readonly processCode: string;
    /**
     * The integration account RosettaNet process name.
     */
    readonly processName: string;
    /**
     * The integration account RosettaNet process version.
     */
    readonly processVersion: string;
    /**
     * The RosettaNet responder role settings.
     */
    readonly responderRoleSettings: types.outputs.RosettaNetPipRoleSettingsResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
/**
 * Gets an integration account RosettaNetProcessConfiguration.
 */
export function getRosettaNetProcessConfigurationOutput(args: GetRosettaNetProcessConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRosettaNetProcessConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getRosettaNetProcessConfiguration(a, opts))
}

export interface GetRosettaNetProcessConfigurationOutputArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The integration account RosettaNetProcessConfiguration name.
     */
    rosettaNetProcessConfigurationName: pulumi.Input<string>;
}