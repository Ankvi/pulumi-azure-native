import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about the model of a security automation.
 */
export function getAutomation(args: GetAutomationArgs, opts?: pulumi.InvokeOptions): Promise<GetAutomationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20231201preview:getAutomation", {
        "automationName": args.automationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAutomationArgs {
    /**
     * The security automation name.
     */
    automationName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The security automation resource.
 */
export interface GetAutomationResult {
    /**
     * A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true.
     */
    readonly actions?: (types.outputs.AutomationActionEventHubResponse | types.outputs.AutomationActionLogicAppResponse | types.outputs.AutomationActionWorkspaceResponse)[];
    /**
     * The security automation description.
     */
    readonly description?: string;
    /**
     * Entity tag is used for comparing two or more entities from the same requested resource.
     */
    readonly etag?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Indicates whether the security automation is enabled.
     */
    readonly isEnabled?: boolean;
    /**
     * Kind of the resource
     */
    readonly kind?: string;
    /**
     * Location where the resource is stored
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * A collection of scopes on which the security automations logic is applied. Supported scopes are the subscription itself or a resource group under that subscription. The automation will only apply on defined scopes.
     */
    readonly scopes?: types.outputs.AutomationScopeResponse[];
    /**
     * A collection of the source event types which evaluate the security automation set of rules.
     */
    readonly sources?: types.outputs.AutomationSourceResponse[];
    /**
     * A list of key value pairs that describe the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Retrieves information about the model of a security automation.
 */
export function getAutomationOutput(args: GetAutomationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAutomationResult> {
    return pulumi.output(args).apply((a: any) => getAutomation(a, opts))
}

export interface GetAutomationOutputArgs {
    /**
     * The security automation name.
     */
    automationName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}