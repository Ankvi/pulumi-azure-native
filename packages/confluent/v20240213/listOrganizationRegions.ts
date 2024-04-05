import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Result of POST request to list regions supported by confluent
 */
export function listOrganizationRegions(args: ListOrganizationRegionsArgs, opts?: pulumi.InvokeOptions): Promise<ListOrganizationRegionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent/v20240213:listOrganizationRegions", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListOrganizationRegionsArgs {
    /**
     * Organization resource name
     */
    organizationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Search filters for the request
     */
    searchFilters?: {[key: string]: string};
}

/**
 * Result of POST request to list regions supported by confluent
 */
export interface ListOrganizationRegionsResult {
    /**
     * List of regions supported by confluent
     */
    readonly data?: types.outputs.RegionRecordResponse[];
}
/**
 * Result of POST request to list regions supported by confluent
 */
export function listOrganizationRegionsOutput(args: ListOrganizationRegionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListOrganizationRegionsResult> {
    return pulumi.output(args).apply((a: any) => listOrganizationRegions(a, opts))
}

export interface ListOrganizationRegionsOutputArgs {
    /**
     * Organization resource name
     */
    organizationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Search filters for the request
     */
    searchFilters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}