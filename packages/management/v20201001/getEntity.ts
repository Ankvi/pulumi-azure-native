import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all entities (Management Groups, Subscriptions, etc.) for the authenticated user.
 */
export function getEntity(args?: GetEntityArgs, opts?: pulumi.InvokeOptions): Promise<GetEntityResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:management/v20201001:getEntity", {
        "filter": args.filter,
        "groupName": args.groupName,
        "search": args.search,
        "select": args.select,
        "skip": args.skip,
        "skiptoken": args.skiptoken,
        "top": args.top,
        "view": args.view,
    }, opts);
}

export interface GetEntityArgs {
    /**
     * The filter parameter allows you to filter on the the name or display name fields. You can check for equality on the name field (e.g. name eq '{entityName}')  and you can check for substrings on either the name or display name fields(e.g. contains(name, '{substringToSearch}'), contains(displayName, '{substringToSearch')). Note that the '{entityName}' and '{substringToSearch}' fields are checked case insensitively.
     */
    filter?: string;
    /**
     * A filter which allows the get entities call to focus on a particular group (i.e. "$filter=name eq 'groupName'")
     */
    groupName?: string;
    /**
     * The $search parameter is used in conjunction with the $filter parameter to return three different outputs depending on the parameter passed in. 
     * With $search=AllowedParents the API will return the entity info of all groups that the requested entity will be able to reparent to as determined by the user's permissions.
     * With $search=AllowedChildren the API will return the entity info of all entities that can be added as children of the requested entity.
     * With $search=ParentAndFirstLevelChildren the API will return the parent and  first level of children that the user has either direct access to or indirect access via one of their descendants.
     * With $search=ParentOnly the API will return only the group if the user has access to at least one of the descendants of the group.
     * With $search=ChildrenOnly the API will return only the first level of children of the group entity info specified in $filter.  The user must have direct access to the children entities or one of it's descendants for it to show up in the results.
     */
    search?: string;
    /**
     * This parameter specifies the fields to include in the response. Can include any combination of Name,DisplayName,Type,ParentDisplayNameChain,ParentChain, e.g. '$select=Name,DisplayName,Type,ParentDisplayNameChain,ParentNameChain'. When specified the $select parameter can override select in $skipToken.
     */
    select?: string;
    /**
     * Number of entities to skip over when retrieving results. Passing this in will override $skipToken.
     */
    skip?: number;
    /**
     * Page continuation token is only used if a previous operation returned a partial result. 
     * If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.
     */
    skiptoken?: string;
    /**
     * Number of elements to return when retrieving results. Passing this in will override $skipToken.
     */
    top?: number;
    /**
     * The view parameter allows clients to filter the type of data that is returned by the getEntities call.
     */
    view?: string;
}

/**
 * Describes the result of the request to view entities.
 */
export interface GetEntityResult {
    /**
     * Total count of records that match the filter
     */
    readonly count: number;
    /**
     * The URL to use for getting the next set of results.
     */
    readonly nextLink: string;
    /**
     * The list of entities.
     */
    readonly value?: types.outputs.EntityInfoResponse[];
}
/**
 * List all entities (Management Groups, Subscriptions, etc.) for the authenticated user.
 */
export function getEntityOutput(args?: GetEntityOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEntityResult> {
    return pulumi.output(args).apply((a: any) => getEntity(a, opts))
}

export interface GetEntityOutputArgs {
    /**
     * The filter parameter allows you to filter on the the name or display name fields. You can check for equality on the name field (e.g. name eq '{entityName}')  and you can check for substrings on either the name or display name fields(e.g. contains(name, '{substringToSearch}'), contains(displayName, '{substringToSearch')). Note that the '{entityName}' and '{substringToSearch}' fields are checked case insensitively.
     */
    filter?: pulumi.Input<string>;
    /**
     * A filter which allows the get entities call to focus on a particular group (i.e. "$filter=name eq 'groupName'")
     */
    groupName?: pulumi.Input<string>;
    /**
     * The $search parameter is used in conjunction with the $filter parameter to return three different outputs depending on the parameter passed in. 
     * With $search=AllowedParents the API will return the entity info of all groups that the requested entity will be able to reparent to as determined by the user's permissions.
     * With $search=AllowedChildren the API will return the entity info of all entities that can be added as children of the requested entity.
     * With $search=ParentAndFirstLevelChildren the API will return the parent and  first level of children that the user has either direct access to or indirect access via one of their descendants.
     * With $search=ParentOnly the API will return only the group if the user has access to at least one of the descendants of the group.
     * With $search=ChildrenOnly the API will return only the first level of children of the group entity info specified in $filter.  The user must have direct access to the children entities or one of it's descendants for it to show up in the results.
     */
    search?: pulumi.Input<string>;
    /**
     * This parameter specifies the fields to include in the response. Can include any combination of Name,DisplayName,Type,ParentDisplayNameChain,ParentChain, e.g. '$select=Name,DisplayName,Type,ParentDisplayNameChain,ParentNameChain'. When specified the $select parameter can override select in $skipToken.
     */
    select?: pulumi.Input<string>;
    /**
     * Number of entities to skip over when retrieving results. Passing this in will override $skipToken.
     */
    skip?: pulumi.Input<number>;
    /**
     * Page continuation token is only used if a previous operation returned a partial result. 
     * If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.
     */
    skiptoken?: pulumi.Input<string>;
    /**
     * Number of elements to return when retrieving results. Passing this in will override $skipToken.
     */
    top?: pulumi.Input<number>;
    /**
     * The view parameter allows clients to filter the type of data that is returned by the getEntities call.
     */
    view?: pulumi.Input<string>;
}
