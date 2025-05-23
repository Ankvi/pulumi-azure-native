import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a LoadTestResource
 *
 * Uses Azure REST API version 2023-12-01-preview.
 *
 * Other available API versions: 2022-12-01, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native loadtestservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLoadTest(args: GetLoadTestArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadTestResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:loadtestservice:getLoadTest", {
        "loadTestName": args.loadTestName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLoadTestArgs {
    /**
     * Load Test name
     */
    loadTestName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * LoadTest details.
 */
export interface GetLoadTestResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource data plane URI.
     */
    readonly dataPlaneURI: string;
    /**
     * Description of the resource.
     */
    readonly description?: string;
    /**
     * CMK Encryption property.
     */
    readonly encryption?: types.outputs.EncryptionPropertiesResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Resource provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a LoadTestResource
 *
 * Uses Azure REST API version 2023-12-01-preview.
 *
 * Other available API versions: 2022-12-01, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native loadtestservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLoadTestOutput(args: GetLoadTestOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLoadTestResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:loadtestservice:getLoadTest", {
        "loadTestName": args.loadTestName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLoadTestOutputArgs {
    /**
     * Load Test name
     */
    loadTestName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}