import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified spacecraft in a specified resource group.
 */
export function getSpacecraft(args: GetSpacecraftArgs, opts?: pulumi.InvokeOptions): Promise<GetSpacecraftResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:orbital/v20220301:getSpacecraft", {
        "resourceGroupName": args.resourceGroupName,
        "spacecraftName": args.spacecraftName,
    }, opts);
}

export interface GetSpacecraftArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Spacecraft ID.
     */
    spacecraftName: string;
}

/**
 * Customer creates a spacecraft resource to schedule a contact.
 */
export interface GetSpacecraftResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Immutable list of Spacecraft links.
     */
    readonly links?: types.outputs.SpacecraftLinkResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * NORAD ID of the spacecraft.
     */
    readonly noradId: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Title line of the two-line element set (TLE).
     */
    readonly titleLine?: string;
    /**
     * Line 1 of the two-line element set (TLE).
     */
    readonly tleLine1?: string;
    /**
     * Line 2 of the two-line element set (TLE).
     */
    readonly tleLine2?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the specified spacecraft in a specified resource group.
 */
export function getSpacecraftOutput(args: GetSpacecraftOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSpacecraftResult> {
    return pulumi.output(args).apply((a: any) => getSpacecraft(a, opts))
}

export interface GetSpacecraftOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Spacecraft ID.
     */
    spacecraftName: pulumi.Input<string>;
}
