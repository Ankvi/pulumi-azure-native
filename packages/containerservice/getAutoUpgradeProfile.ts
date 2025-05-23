import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a AutoUpgradeProfile
 *
 * Uses Azure REST API version 2024-05-02-preview.
 *
 * Other available API versions: 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAutoUpgradeProfile(args: GetAutoUpgradeProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetAutoUpgradeProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice:getAutoUpgradeProfile", {
        "autoUpgradeProfileName": args.autoUpgradeProfileName,
        "fleetName": args.fleetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAutoUpgradeProfileArgs {
    /**
     * The name of the AutoUpgradeProfile resource.
     */
    autoUpgradeProfileName: string;
    /**
     * The name of the Fleet resource.
     */
    fleetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The AutoUpgradeProfile resource.
 */
export interface GetAutoUpgradeProfileResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Configures how auto-upgrade will be run.
     */
    readonly channel: string;
    /**
     * If set to False: the auto upgrade has effect - target managed clusters will be upgraded on schedule.
     * If set to True: the auto upgrade has no effect - no upgrade will be run on the target managed clusters.
     * This is a boolean and not an enum because enabled/disabled are all available states of the auto upgrade profile.
     * By default, this is set to False.
     */
    readonly disabled?: boolean;
    /**
     * If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
     */
    readonly eTag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The node image upgrade to be applied to the target clusters in auto upgrade.
     */
    readonly nodeImageSelection?: types.outputs.AutoUpgradeNodeImageSelectionResponse;
    /**
     * The provisioning state of the AutoUpgradeProfile resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The resource id of the UpdateStrategy resource to reference. If not specified, the auto upgrade will run on all clusters which are members of the fleet.
     */
    readonly updateStrategyId?: string;
}
/**
 * Get a AutoUpgradeProfile
 *
 * Uses Azure REST API version 2024-05-02-preview.
 *
 * Other available API versions: 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAutoUpgradeProfileOutput(args: GetAutoUpgradeProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAutoUpgradeProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerservice:getAutoUpgradeProfile", {
        "autoUpgradeProfileName": args.autoUpgradeProfileName,
        "fleetName": args.fleetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAutoUpgradeProfileOutputArgs {
    /**
     * The name of the AutoUpgradeProfile resource.
     */
    autoUpgradeProfileName: pulumi.Input<string>;
    /**
     * The name of the Fleet resource.
     */
    fleetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}