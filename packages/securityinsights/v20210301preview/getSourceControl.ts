import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a source control byt its identifier.
 */
export function getSourceControl(args: GetSourceControlArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceControlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20210301preview:getSourceControl", {
        "operationalInsightsResourceProvider": args.operationalInsightsResourceProvider,
        "resourceGroupName": args.resourceGroupName,
        "sourceControlId": args.sourceControlId,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSourceControlArgs {
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Source control Id
     */
    sourceControlId: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents a SourceControl in Azure Security Insights.
 */
export interface GetSourceControlResult {
    /**
     * Array of source control content types.
     */
    readonly contentTypes: string[];
    /**
     * The timestamp of resource creation (UTC).
     */
    readonly createdAt?: string;
    /**
     * The identity that created the resource.
     */
    readonly createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    readonly createdByType?: string;
    /**
     * A description of the source control
     */
    readonly description?: string;
    /**
     * The display name of the source control
     */
    readonly displayName: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    readonly lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    readonly lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    readonly lastModifiedByType?: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * The repository type of the source control
     */
    readonly repoType: string;
    /**
     * Repository metadata.
     */
    readonly repository: types.outputs.RepositoryResponse;
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
 * Gets a source control byt its identifier.
 */
export function getSourceControlOutput(args: GetSourceControlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceControlResult> {
    return pulumi.output(args).apply((a: any) => getSourceControl(a, opts))
}

export interface GetSourceControlOutputArgs {
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Source control Id
     */
    sourceControlId: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
