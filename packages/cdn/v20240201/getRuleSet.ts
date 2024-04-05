import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing AzureFrontDoor rule set with the specified rule set name under the specified subscription, resource group and profile.
 */
export function getRuleSet(args: GetRuleSetArgs, opts?: pulumi.InvokeOptions): Promise<GetRuleSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn/v20240201:getRuleSet", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
        "ruleSetName": args.ruleSetName,
    }, opts);
}

export interface GetRuleSetArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the rule set under the profile which is unique globally.
     */
    ruleSetName: string;
}

/**
 * Friendly RuleSet name mapping to the any RuleSet or secret related information.
 */
export interface GetRuleSetResult {
    readonly deploymentStatus: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The name of the profile which holds the rule set.
     */
    readonly profileName: string;
    /**
     * Provisioning status
     */
    readonly provisioningState: string;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an existing AzureFrontDoor rule set with the specified rule set name under the specified subscription, resource group and profile.
 */
export function getRuleSetOutput(args: GetRuleSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRuleSetResult> {
    return pulumi.output(args).apply((a: any) => getRuleSet(a, opts))
}

export interface GetRuleSetOutputArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the rule set under the profile which is unique globally.
     */
    ruleSetName: pulumi.Input<string>;
}