import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for List all apps that are assigned to a hostname.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2016-03-01, 2018-02-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listSiteIdentifiersAssignedToHostName(args?: ListSiteIdentifiersAssignedToHostNameArgs, opts?: pulumi.InvokeOptions): Promise<ListSiteIdentifiersAssignedToHostNameResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listSiteIdentifiersAssignedToHostName", {
        "name": args.name,
    }, opts);
}

export interface ListSiteIdentifiersAssignedToHostNameArgs {
    /**
     * Name of the object.
     */
    name?: string;
}

/**
 * Collection of identifiers.
 */
export interface ListSiteIdentifiersAssignedToHostNameResult {
    /**
     * Link to next page of resources.
     */
    readonly nextLink: string;
    /**
     * Collection of resources.
     */
    readonly value: types.outputs.IdentifierResponse[];
}
/**
 * Description for List all apps that are assigned to a hostname.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2016-03-01, 2018-02-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listSiteIdentifiersAssignedToHostNameOutput(args?: ListSiteIdentifiersAssignedToHostNameOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListSiteIdentifiersAssignedToHostNameResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listSiteIdentifiersAssignedToHostName", {
        "name": args.name,
    }, opts);
}

export interface ListSiteIdentifiersAssignedToHostNameOutputArgs {
    /**
     * Name of the object.
     */
    name?: pulumi.Input<string>;
}