import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Fetch User API Key from internal database, if it was generated and stored while creating the Elasticsearch Organization.
 * Azure REST API version: 2023-06-01.
 */
export function getOrganizationApiKey(args?: GetOrganizationApiKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetOrganizationApiKeyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic:getOrganizationApiKey", {
        "emailId": args.emailId,
    }, opts);
}

export interface GetOrganizationApiKeyArgs {
    /**
     * The User email Id
     */
    emailId?: string;
}

/**
 * The User Api Key created for the Organization associated with the User Email Id that was passed in the request
 */
export interface GetOrganizationApiKeyResult {
    readonly properties: types.outputs.UserApiKeyResponsePropertiesResponse;
}
/**
 * Fetch User API Key from internal database, if it was generated and stored while creating the Elasticsearch Organization.
 * Azure REST API version: 2023-06-01.
 */
export function getOrganizationApiKeyOutput(args?: GetOrganizationApiKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOrganizationApiKeyResult> {
    return pulumi.output(args).apply((a: any) => getOrganizationApiKey(a, opts))
}

export interface GetOrganizationApiKeyOutputArgs {
    /**
     * The User email Id
     */
    emailId?: pulumi.Input<string>;
}
