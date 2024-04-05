import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List allowed upgrade plans for application.
 */
export function listApplicationAllowedUpgradePlans(args: ListApplicationAllowedUpgradePlansArgs, opts?: pulumi.InvokeOptions): Promise<ListApplicationAllowedUpgradePlansResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:solutions/v20210701:listApplicationAllowedUpgradePlans", {
        "applicationName": args.applicationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListApplicationAllowedUpgradePlansArgs {
    /**
     * The name of the managed application.
     */
    applicationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The array of plan.
 */
export interface ListApplicationAllowedUpgradePlansResult {
    /**
     * The array of plans.
     */
    readonly value?: types.outputs.PlanResponse[];
}
/**
 * List allowed upgrade plans for application.
 */
export function listApplicationAllowedUpgradePlansOutput(args: ListApplicationAllowedUpgradePlansOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListApplicationAllowedUpgradePlansResult> {
    return pulumi.output(args).apply((a: any) => listApplicationAllowedUpgradePlans(a, opts))
}

export interface ListApplicationAllowedUpgradePlansOutputArgs {
    /**
     * The name of the managed application.
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}