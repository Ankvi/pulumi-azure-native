import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get IoT site
 * Azure REST API version: 2021-02-01-preview.
 */
export function getSite(args: GetSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotsecurity:getSite", {
        "scope": args.scope,
    }, opts);
}

export interface GetSiteArgs {
    /**
     * Scope of the query (IoT Hub, /providers/Microsoft.Devices/iotHubs/myHub)
     */
    scope: string;
}

/**
 * IoT site model
 */
export interface GetSiteResult {
    /**
     * Display name of the IoT site
     */
    readonly displayName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Tags of the IoT site
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get IoT site
 * Azure REST API version: 2021-02-01-preview.
 */
export function getSiteOutput(args: GetSiteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSiteResult> {
    return pulumi.output(args).apply((a: any) => getSite(a, opts))
}

export interface GetSiteOutputArgs {
    /**
     * Scope of the query (IoT Hub, /providers/Microsoft.Devices/iotHubs/myHub)
     */
    scope: pulumi.Input<string>;
}
