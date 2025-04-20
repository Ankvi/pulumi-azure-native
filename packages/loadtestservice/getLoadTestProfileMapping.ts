import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a LoadTestProfileMappingResource
 *
 * Uses Azure REST API version 2023-12-01-preview.
 *
 * Other available API versions: 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native loadtestservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2023-12-01-preview.
 *
 * Other available API versions: 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native loadtestservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLoadTestProfileMappingOutput(args: GetLoadTestProfileMappingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLoadTestProfileMappingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:loadtestservice:getLoadTestProfileMapping", {
        "loadTestProfileMappingName": args.loadTestProfileMappingName,
        "resourceUri": args.resourceUri,
    }, opts);
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