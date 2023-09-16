import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of the specified Video Analyzer account
 * Azure REST API version: 2021-11-01-preview.
 */
export function getVideoAnalyzer(args: GetVideoAnalyzerArgs, opts?: pulumi.InvokeOptions): Promise<GetVideoAnalyzerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:videoanalyzer:getVideoAnalyzer", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetVideoAnalyzerArgs {
    /**
     * The Video Analyzer account name.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Video Analyzer account.
 */
export interface GetVideoAnalyzerResult {
    /**
     * The account encryption properties.
     */
    readonly encryption?: types.outputs.videoanalyzer.AccountEncryptionResponse;
    /**
     * The endpoints associated with this resource.
     */
    readonly endpoints: types.outputs.videoanalyzer.EndpointResponse[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identities associated to the Video Analyzer resource.
     */
    readonly identity?: types.outputs.videoanalyzer.VideoAnalyzerIdentityResponse;
    /**
     * The IoT Hubs for this resource.
     */
    readonly iotHubs?: types.outputs.videoanalyzer.IotHubResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network access control for Video Analyzer.
     */
    readonly networkAccessControl?: types.outputs.videoanalyzer.NetworkAccessControlResponse;
    /**
     * Private Endpoint Connections created under Video Analyzer account.
     */
    readonly privateEndpointConnections: types.outputs.videoanalyzer.PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the Video Analyzer account.
     */
    readonly provisioningState: string;
    /**
     * Whether or not public network access is allowed for resources under the Video Analyzer account.
     */
    readonly publicNetworkAccess?: string;
    /**
     * The storage accounts for this resource.
     */
    readonly storageAccounts: types.outputs.videoanalyzer.StorageAccountResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.videoanalyzer.SystemDataResponse;
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
 * Get the details of the specified Video Analyzer account
 * Azure REST API version: 2021-11-01-preview.
 */
export function getVideoAnalyzerOutput(args: GetVideoAnalyzerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVideoAnalyzerResult> {
    return pulumi.output(args).apply((a: any) => getVideoAnalyzer(a, opts))
}

export interface GetVideoAnalyzerOutputArgs {
    /**
     * The Video Analyzer account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
