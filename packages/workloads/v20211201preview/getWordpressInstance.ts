import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the WordPress instance resource.
 */
export function getWordpressInstance(args: GetWordpressInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetWordpressInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads/v20211201preview:getWordpressInstance", {
        "phpWorkloadName": args.phpWorkloadName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWordpressInstanceArgs {
    /**
     * Php workload name
     */
    phpWorkloadName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * WordPress instance resource
 */
export interface GetWordpressInstanceResult {
    /**
     * Database name used by the application
     */
    readonly databaseName?: string;
    /**
     * User name used by the application to connect to database
     */
    readonly databaseUser?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * WordPress instance provisioning state
     */
    readonly provisioningState: string;
    /**
     * Site Url to access the WordPress application
     */
    readonly siteUrl: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Application version
     */
    readonly version: string;
}
/**
 * Gets the WordPress instance resource.
 */
export function getWordpressInstanceOutput(args: GetWordpressInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWordpressInstanceResult> {
    return pulumi.output(args).apply((a: any) => getWordpressInstance(a, opts))
}

export interface GetWordpressInstanceOutputArgs {
    /**
     * Php workload name
     */
    phpWorkloadName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
