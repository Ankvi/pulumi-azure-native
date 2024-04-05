import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Details of the environments returned on successful response
 */
export function listAccessEnvironments(args: ListAccessEnvironmentsArgs, opts?: pulumi.InvokeOptions): Promise<ListAccessEnvironmentsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent/v20240213:listAccessEnvironments", {
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "searchFilters": args.searchFilters,
    }, opts);
}

export interface ListAccessEnvironmentsArgs {
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
 * Details of the environments returned on successful response
 */
export interface ListAccessEnvironmentsResult {
    /**
     * Environment list data
     */
    readonly data?: types.outputs.EnvironmentRecordResponse[];
    /**
     * Type of response
     */
    readonly kind?: string;
    /**
     * Metadata of the  environment list
     */
    readonly metadata?: types.outputs.ConfluentListMetadataResponse;
}
/**
 * Details of the environments returned on successful response
 */
export function listAccessEnvironmentsOutput(args: ListAccessEnvironmentsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAccessEnvironmentsResult> {
    return pulumi.output(args).apply((a: any) => listAccessEnvironments(a, opts))
}

export interface ListAccessEnvironmentsOutputArgs {
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