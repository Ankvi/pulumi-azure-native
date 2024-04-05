import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * View a threat intelligence indicator by name.
 */
export function getThreatIntelligenceIndicator(args: GetThreatIntelligenceIndicatorArgs, opts?: pulumi.InvokeOptions): Promise<GetThreatIntelligenceIndicatorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20210401:getThreatIntelligenceIndicator", {
        "name": args.name,
        "operationalInsightsResourceProvider": args.operationalInsightsResourceProvider,
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
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
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
     * Azure resource Id
     */
    readonly id: string;
    /**
     * The kind of the entity.
     */
    readonly kind: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Azure resource type
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
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}