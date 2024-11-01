import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Fetch User API Key from internal database, if it was generated and stored while creating the Elasticsearch Organization.
 * Azure REST API version: 2023-06-01.
 *
 * Other available API versions: 2023-02-01-preview, 2023-05-01-preview, 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview, 2023-11-01-preview, 2024-01-01-preview, 2024-03-01, 2024-05-01-preview, 2024-06-15-preview, 2024-10-01-preview.
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
 *
 * Other available API versions: 2023-02-01-preview, 2023-05-01-preview, 2023-06-15-preview, 2023-07-01-preview, 2023-10-01-preview, 2023-11-01-preview, 2024-01-01-preview, 2024-03-01, 2024-05-01-preview, 2024-06-15-preview, 2024-10-01-preview.
 */
export function getOrganizationApiKeyOutput(args?: GetOrganizationApiKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOrganizationApiKeyResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:elastic:getOrganizationApiKey", {
        "emailId": args.emailId,
    }, opts);
}

export interface GetOrganizationApiKeyOutputArgs {
    /**
     * The User email Id
     */
    emailId?: pulumi.Input<string>;
}