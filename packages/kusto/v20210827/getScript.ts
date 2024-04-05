import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Kusto cluster database script.
 */
export function getScript(args: GetScriptArgs, opts?: pulumi.InvokeOptions): Promise<GetScriptResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto/v20210827:getScript", {
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "scriptName": args.scriptName,
    }, opts);
}

export interface GetScriptArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: string;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: string;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: string;
    /**
     * The name of the Kusto database script.
     */
    scriptName: string;
}

/**
 * Class representing a database script.
 */
export interface GetScriptResult {
    /**
     * Flag that indicates whether to continue if one of the command fails.
     */
    readonly continueOnErrors?: boolean;
    /**
     * A unique string. If changed the script will be applied again.
     */
    readonly forceUpdateTag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The url to the KQL script blob file.
     */
    readonly scriptUrl: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a Kusto cluster database script.
 */
export function getScriptOutput(args: GetScriptOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetScriptResult> {
    return pulumi.output(args).apply((a: any) => getScript(a, opts))
}

export interface GetScriptOutputArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Kusto database script.
     */
    scriptName: pulumi.Input<string>;
}