import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Details about environment name, metadata and environment id of an environment
 *
 * Uses Azure REST API version 2024-07-01.
 */
export function getOrganizationEnvironmentById(args: GetOrganizationEnvironmentByIdArgs, opts?: pulumi.InvokeOptions): Promise<GetOrganizationEnvironmentByIdResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent:getOrganizationEnvironmentById", {
        "environmentId": args.environmentId,
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOrganizationEnvironmentByIdArgs {
    /**
     * Confluent environment id
     */
    environmentId: string;
    /**
     * Organization resource name
     */
    organizationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Details about environment name, metadata and environment id of an environment
 */
export interface GetOrganizationEnvironmentByIdResult {
    /**
     * Id of the environment
     */
    readonly id?: string;
    /**
     * Type of environment
     */
    readonly kind?: string;
    /**
     * Metadata of the record
     */
    readonly metadata?: types.outputs.SCMetadataEntityResponse;
    /**
     * Display name of the environment
     */
    readonly name?: string;
    /**
     * Stream governance configuration
     */
    readonly streamGovernanceConfig?: types.outputs.StreamGovernanceConfigResponse;
    /**
     * Type of the resource
     */
    readonly type?: string;
}
/**
 * Details about environment name, metadata and environment id of an environment
 *
 * Uses Azure REST API version 2024-07-01.
 */
export function getOrganizationEnvironmentByIdOutput(args: GetOrganizationEnvironmentByIdOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOrganizationEnvironmentByIdResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:confluent:getOrganizationEnvironmentById", {
        "environmentId": args.environmentId,
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOrganizationEnvironmentByIdOutputArgs {
    /**
     * Confluent environment id
     */
    environmentId: pulumi.Input<string>;
    /**
     * Organization resource name
     */
    organizationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}