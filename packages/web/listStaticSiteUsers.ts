import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets the list of users of a static site.
 * Azure REST API version: 2022-09-01.
 */
export function listStaticSiteUsers(args: ListStaticSiteUsersArgs, opts?: pulumi.InvokeOptions): Promise<ListStaticSiteUsersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listStaticSiteUsers", {
        "authprovider": args.authprovider,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListStaticSiteUsersArgs {
    /**
     * The auth provider for the users.
     */
    authprovider: string;
    /**
     * Name of the static site.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Collection of static site custom users.
 */
export interface ListStaticSiteUsersResult {
    /**
     * Link to next page of resources.
     */
    readonly nextLink: string;
    /**
     * Collection of resources.
     */
    readonly value: types.outputs.StaticSiteUserARMResourceResponse[];
}
/**
 * Description for Gets the list of users of a static site.
 * Azure REST API version: 2022-09-01.
 */
export function listStaticSiteUsersOutput(args: ListStaticSiteUsersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListStaticSiteUsersResult> {
    return pulumi.output(args).apply((a: any) => listStaticSiteUsers(a, opts))
}

export interface ListStaticSiteUsersOutputArgs {
    /**
     * The auth provider for the users.
     */
    authprovider: pulumi.Input<string>;
    /**
     * Name of the static site.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
