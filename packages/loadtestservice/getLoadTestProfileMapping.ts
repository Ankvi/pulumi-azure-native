import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a LoadTestProfileMappingResource
 * Azure REST API version: 2023-12-01-preview.
 */
export function getLoadTestProfileMapping(args: GetLoadTestProfileMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadTestProfileMappingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:loadtestservice:getLoadTestProfileMapping", {
        "loadTestProfileMappingName": args.loadTestProfileMappingName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetLoadTestProfileMappingArgs {
    /**
     * Load Test Profile Mapping name
     */
    loadTestProfileMappingName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * LoadTest profile mapping resource details
 */
export interface GetLoadTestProfileMappingResult {
    /**
     * Mapped Azure Load Test resource Id.
     */
    readonly azureLoadTestingResourceId?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Mapped source resource Id.
     */
    readonly sourceResourceId?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Mapped Azure Load Test resource test-profile-id.
     */
    readonly testProfileId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a LoadTestProfileMappingResource
 * Azure REST API version: 2023-12-01-preview.
 */
export function getLoadTestProfileMappingOutput(args: GetLoadTestProfileMappingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadTestProfileMappingResult> {
    return pulumi.output(args).apply((a: any) => getLoadTestProfileMapping(a, opts))
}

export interface GetLoadTestProfileMappingOutputArgs {
    /**
     * Load Test Profile Mapping name
     */
    loadTestProfileMappingName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}