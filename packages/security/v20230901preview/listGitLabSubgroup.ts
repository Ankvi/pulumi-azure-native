import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * List of RP resources which supports pagination.
 */
export function listGitLabSubgroup(args: ListGitLabSubgroupArgs, opts?: pulumi.InvokeOptions): Promise<ListGitLabSubgroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20230901preview:listGitLabSubgroup", {
        "groupFQName": args.groupFQName,
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface ListGitLabSubgroupArgs {
    /**
     * The GitLab group fully-qualified name.
     */
    groupFQName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The security connector name.
     */
    securityConnectorName: string;
}

/**
 * List of RP resources which supports pagination.
 */
export interface ListGitLabSubgroupResult {
    /**
     * Gets or sets next link to scroll over the results.
     */
    readonly nextLink?: string;
    /**
     * Gets or sets list of resources.
     */
    readonly value?: types.outputs.security.v20230901preview.GitLabGroupResponse[];
}
/**
 * List of RP resources which supports pagination.
 */
export function listGitLabSubgroupOutput(args: ListGitLabSubgroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListGitLabSubgroupResult> {
    return pulumi.output(args).apply((a: any) => listGitLabSubgroup(a, opts))
}

export interface ListGitLabSubgroupOutputArgs {
    /**
     * The GitLab group fully-qualified name.
     */
    groupFQName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security connector name.
     */
    securityConnectorName: pulumi.Input<string>;
}
