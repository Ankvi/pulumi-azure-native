import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * View a threat intelligence indicator by name.
 */
export function getThreatIntelligenceIndicator(args: GetThreatIntelligenceIndicatorArgs, opts?: pulumi.InvokeOptions): Promise<GetThreatIntelligenceIndicatorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230201:getThreatIntelligenceIndicator", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetThreatIntelligenceIndicatorArgs {
    /**
     * Threat intelligence indicator name field.
     */
    name: string;
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
 * Threat intelligence information object.
 */
export interface GetThreatIntelligenceIndicatorResult {
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The kind of the entity.
     */
    readonly kind: string;
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * View a threat intelligence indicator by name.
 */
export function getThreatIntelligenceIndicatorOutput(args: GetThreatIntelligenceIndicatorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetThreatIntelligenceIndicatorResult> {
    return pulumi.output(args).apply((a: any) => getThreatIntelligenceIndicator(a, opts))
}

export interface GetThreatIntelligenceIndicatorOutputArgs {
    /**
     * Threat intelligence indicator name field.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
