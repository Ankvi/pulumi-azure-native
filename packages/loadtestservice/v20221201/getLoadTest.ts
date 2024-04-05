import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a LoadTest resource.
 */
export function getLoadTest(args: GetLoadTestArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadTestResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:loadtestservice/v20221201:getLoadTest", {
        "loadTestName": args.loadTestName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLoadTestArgs {
    /**
     * Load Test name.
     */
    loadTestName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * LoadTest details
 */
export interface GetLoadTestResult {
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The type of identity used for the resource.
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
 * Get a LoadTest resource.
 */
export function getLoadTestOutput(args: GetLoadTestOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadTestResult> {
    return pulumi.output(args).apply((a: any) => getLoadTest(a, opts))
}

export interface GetLoadTestOutputArgs {
    /**
     * Load Test name.
     */
    loadTestName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}