import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets properties of the specified application.
 */
export function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hdinsight/v20210601:getApplication", {
        "applicationName": args.applicationName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationArgs {
    /**
     * The constant value for the application name.
     */
    applicationName: string;
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The HDInsight cluster application
 */
export interface GetApplicationResult {
    /**
     * The ETag for the application
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The properties of the application.
     */
    readonly properties: types.outputs.hdinsight.v20210601.ApplicationPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.hdinsight.v20210601.SystemDataResponse;
    /**
     * The tags for the application.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets properties of the specified application.
 */
export function getApplicationOutput(args: GetApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationResult> {
    return pulumi.output(args).apply((a: any) => getApplication(a, opts))
}

export interface GetApplicationOutputArgs {
    /**
     * The constant value for the application name.
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
