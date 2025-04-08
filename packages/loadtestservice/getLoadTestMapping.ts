import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a LoadTestMappingResource
 *
 * Uses Azure REST API version 2023-12-01-preview.
 *
 * Other available API versions: 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native loadtestservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLoadTestMapping(args: GetLoadTestMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadTestMappingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:loadtestservice:getLoadTestMapping", {
        "loadTestMappingName": args.loadTestMappingName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetLoadTestMappingArgs {
    /**
     * Load Test Mapping name
     */
    loadTestMappingName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * LoadTest mapping resource details
 */
export interface GetLoadTestMappingResult {
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
     * Mapped Azure Load Test resource test-id.
     */
    readonly testId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a LoadTestMappingResource
 *
 * Uses Azure REST API version 2023-12-01-preview.
 *
 * Other available API versions: 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native loadtestservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLoadTestMappingOutput(args: GetLoadTestMappingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLoadTestMappingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:loadtestservice:getLoadTestMapping", {
        "loadTestMappingName": args.loadTestMappingName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetLoadTestMappingOutputArgs {
    /**
     * Load Test Mapping name
     */
    loadTestMappingName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}