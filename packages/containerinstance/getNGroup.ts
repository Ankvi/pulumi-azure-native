import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the properties of the specified n group.
 * Azure REST API version: 2024-09-01-preview.
 *
 * Other available API versions: 2024-11-01-preview.
 */
export function getNGroup(args: GetNGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetNGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerinstance:getNGroup", {
        "ngroupsName": args.ngroupsName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNGroupArgs {
    /**
     * The N Groups name.
     */
    ngroupsName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Describes a nGroup.
 */
export interface GetNGroupResult {
    /**
     * The Container Group Profiles that could be used in a nGroup.
     */
    readonly containerGroupProfiles?: types.outputs.ContainerGroupProfileStubResponse[];
    /**
     * The elastic profile.
     */
    readonly elasticProfile?: types.outputs.ElasticProfileResponse;
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The identity of the nGroup, if configured.
     */
    readonly identity?: types.outputs.NGroupIdentityResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type: string;
    /**
     * The zones for the container group.
     */
    readonly zones?: string[];
}
/**
 * Get the properties of the specified n group.
 * Azure REST API version: 2024-09-01-preview.
 *
 * Other available API versions: 2024-11-01-preview.
 */
export function getNGroupOutput(args: GetNGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerinstance:getNGroup", {
        "ngroupsName": args.ngroupsName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNGroupOutputArgs {
    /**
     * The N Groups name.
     */
    ngroupsName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}