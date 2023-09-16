import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Description for List all apps that are assigned to a hostname.
 */
export function listSiteIdentifiersAssignedToHostName(args?: ListSiteIdentifiersAssignedToHostNameArgs, opts?: pulumi.InvokeOptions): Promise<ListSiteIdentifiersAssignedToHostNameResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220301:listSiteIdentifiersAssignedToHostName", {
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
    readonly value: types.outputs.web.v20220301.IdentifierResponse[];
}
/**
 * Description for List all apps that are assigned to a hostname.
 */
export function listSiteIdentifiersAssignedToHostNameOutput(args?: ListSiteIdentifiersAssignedToHostNameOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListSiteIdentifiersAssignedToHostNameResult> {
    return pulumi.output(args).apply((a: any) => listSiteIdentifiersAssignedToHostName(a, opts))
}

export interface ListSiteIdentifiersAssignedToHostNameOutputArgs {
    /**
     * Name of the object.
     */
    name?: pulumi.Input<string>;
}
