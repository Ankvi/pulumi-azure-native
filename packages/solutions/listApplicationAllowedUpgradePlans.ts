import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List allowed upgrade plans for application.
 *
 * Uses Azure REST API version 2021-07-01.
 *
 * Other available API versions: 2023-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native solutions [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listApplicationAllowedUpgradePlans(args: ListApplicationAllowedUpgradePlansArgs, opts?: pulumi.InvokeOptions): Promise<ListApplicationAllowedUpgradePlansResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:solutions:listApplicationAllowedUpgradePlans", {
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
 *
 * Uses Azure REST API version 2021-07-01.
 *
 * Other available API versions: 2023-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native solutions [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listApplicationAllowedUpgradePlansOutput(args: ListApplicationAllowedUpgradePlansOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListApplicationAllowedUpgradePlansResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:solutions:listApplicationAllowedUpgradePlans", {
        "applicationName": args.applicationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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