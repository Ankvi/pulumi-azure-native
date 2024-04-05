import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of the specified Video Analyzer account
 */
export function getVideoAnalyzer(args: GetVideoAnalyzerArgs, opts?: pulumi.InvokeOptions): Promise<GetVideoAnalyzerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:videoanalyzer/v20210501preview:getVideoAnalyzer", {
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
 * A Video Analyzer account.
 */
export interface GetVideoAnalyzerResult {
    /**
     * The account encryption properties.
     */
    readonly encryption: types.outputs.AccountEncryptionResponse;
    /**
     * The list of endpoints associated with this resource.
     */
    readonly endpoints: types.outputs.EndpointResponse[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The set of managed identities associated with the Video Analyzer resource.
     */
    readonly identity?: types.outputs.VideoAnalyzerIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The storage accounts for this resource.
     */
    readonly storageAccounts: types.outputs.StorageAccountResponse[];
    /**
     * The system data of the Video Analyzer account.
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
 * Get the details of the specified Video Analyzer account
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