import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a hunt, without relations and comments.
 */
export function getHunt(args: GetHuntArgs, opts?: pulumi.InvokeOptions): Promise<GetHuntResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230901preview:getHunt", {
        "huntId": args.huntId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetHuntArgs {
    /**
     * The hunt id (GUID)
     */
    huntId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents a Hunt in Azure Security Insights.
 */
export interface GetHuntResult {
    /**
     * A list of mitre attack tactics the hunt is associated with
     */
    readonly attackTactics?: string[];
    /**
     * A list of a mitre attack techniques the hunt is associated with
     */
    readonly attackTechniques?: string[];
    /**
     * The description of the hunt
     */
    readonly description: string;
    /**
     * The display name of the hunt
     */
    readonly displayName: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * The hypothesis status of the hunt.
     */
    readonly hypothesisStatus?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * List of labels relevant to this hunt 
     */
    readonly labels?: string[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Describes a user that the hunt is assigned to
     */
    readonly owner?: types.outputs.HuntOwnerResponse;
    /**
     * The status of the hunt.
     */
    readonly status?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a hunt, without relations and comments.
 */
export function getHuntOutput(args: GetHuntOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHuntResult> {
    return pulumi.output(args).apply((a: any) => getHunt(a, opts))
}

export interface GetHuntOutputArgs {
    /**
     * The hunt id (GUID)
     */
    huntId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}