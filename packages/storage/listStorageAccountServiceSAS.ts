import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List service SAS credentials of a specific resource.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2018-11-01, 2023-01-01, 2023-04-01, 2023-05-01.
 */
export function listStorageAccountServiceSAS(args: ListStorageAccountServiceSASArgs, opts?: pulumi.InvokeOptions): Promise<ListStorageAccountServiceSASResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage:listStorageAccountServiceSAS", {
        "accountName": args.accountName,
        "cacheControl": args.cacheControl,
        "canonicalizedResource": args.canonicalizedResource,
        "contentDisposition": args.contentDisposition,
        "contentEncoding": args.contentEncoding,
        "contentLanguage": args.contentLanguage,
        "contentType": args.contentType,
        "iPAddressOrRange": args.iPAddressOrRange,
        "identifier": args.identifier,
        "keyToSign": args.keyToSign,
        "partitionKeyEnd": args.partitionKeyEnd,
        "partitionKeyStart": args.partitionKeyStart,
        "permissions": args.permissions,
        "protocols": args.protocols,
        "resource": args.resource,
        "resourceGroupName": args.resourceGroupName,
        "rowKeyEnd": args.rowKeyEnd,
        "rowKeyStart": args.rowKeyStart,
        "sharedAccessExpiryTime": args.sharedAccessExpiryTime,
        "sharedAccessStartTime": args.sharedAccessStartTime,
    }, opts);
}

export interface ListStorageAccountServiceSASArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * The response header override for cache control.
     */
    cacheControl?: string;
    /**
     * The canonical path to the signed resource.
     */
    canonicalizedResource: string;
    /**
     * The response header override for content disposition.
     */
    contentDisposition?: string;
    /**
     * The response header override for content encoding.
     */
    contentEncoding?: string;
    /**
     * The response header override for content language.
     */
    contentLanguage?: string;
    /**
     * The response header override for content type.
     */
    contentType?: string;
    /**
     * An IP address or a range of IP addresses from which to accept requests.
     */
    iPAddressOrRange?: string;
    /**
     * A unique value up to 64 characters in length that correlates to an access policy specified for the container, queue, or table.
     */
    identifier?: string;
    /**
     * The key to sign the account SAS token with.
     */
    keyToSign?: string;
    /**
     * The end of partition key.
     */
    partitionKeyEnd?: string;
    /**
     * The start of partition key.
     */
    partitionKeyStart?: string;
    /**
     * The signed permissions for the service SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p).
     */
    permissions?: string | types.enums.Permissions;
    /**
     * The protocol permitted for a request made with the account SAS.
     */
    protocols?: types.enums.HttpProtocol;
    /**
     * The signed services accessible with the service SAS. Possible values include: Blob (b), Container (c), File (f), Share (s).
     */
    resource?: string | types.enums.SignedResource;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The end of row key.
     */
    rowKeyEnd?: string;
    /**
     * The start of row key.
     */
    rowKeyStart?: string;
    /**
     * The time at which the shared access signature becomes invalid.
     */
    sharedAccessExpiryTime?: string;
    /**
     * The time at which the SAS becomes valid.
     */
    sharedAccessStartTime?: string;
}

/**
 * The List service SAS credentials operation response.
 */
export interface ListStorageAccountServiceSASResult {
    /**
     * List service SAS credentials of specific resource.
     */
    readonly serviceSasToken: string;
}
/**
 * List service SAS credentials of a specific resource.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2018-11-01, 2023-01-01, 2023-04-01, 2023-05-01.
 */
export function listStorageAccountServiceSASOutput(args: ListStorageAccountServiceSASOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListStorageAccountServiceSASResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storage:listStorageAccountServiceSAS", {
        "accountName": args.accountName,
        "cacheControl": args.cacheControl,
        "canonicalizedResource": args.canonicalizedResource,
        "contentDisposition": args.contentDisposition,
        "contentEncoding": args.contentEncoding,
        "contentLanguage": args.contentLanguage,
        "contentType": args.contentType,
        "iPAddressOrRange": args.iPAddressOrRange,
        "identifier": args.identifier,
        "keyToSign": args.keyToSign,
        "partitionKeyEnd": args.partitionKeyEnd,
        "partitionKeyStart": args.partitionKeyStart,
        "permissions": args.permissions,
        "protocols": args.protocols,
        "resource": args.resource,
        "resourceGroupName": args.resourceGroupName,
        "rowKeyEnd": args.rowKeyEnd,
        "rowKeyStart": args.rowKeyStart,
        "sharedAccessExpiryTime": args.sharedAccessExpiryTime,
        "sharedAccessStartTime": args.sharedAccessStartTime,
    }, opts);
}

export interface ListStorageAccountServiceSASOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The response header override for cache control.
     */
    cacheControl?: pulumi.Input<string>;
    /**
     * The canonical path to the signed resource.
     */
    canonicalizedResource: pulumi.Input<string>;
    /**
     * The response header override for content disposition.
     */
    contentDisposition?: pulumi.Input<string>;
    /**
     * The response header override for content encoding.
     */
    contentEncoding?: pulumi.Input<string>;
    /**
     * The response header override for content language.
     */
    contentLanguage?: pulumi.Input<string>;
    /**
     * The response header override for content type.
     */
    contentType?: pulumi.Input<string>;
    /**
     * An IP address or a range of IP addresses from which to accept requests.
     */
    iPAddressOrRange?: pulumi.Input<string>;
    /**
     * A unique value up to 64 characters in length that correlates to an access policy specified for the container, queue, or table.
     */
    identifier?: pulumi.Input<string>;
    /**
     * The key to sign the account SAS token with.
     */
    keyToSign?: pulumi.Input<string>;
    /**
     * The end of partition key.
     */
    partitionKeyEnd?: pulumi.Input<string>;
    /**
     * The start of partition key.
     */
    partitionKeyStart?: pulumi.Input<string>;
    /**
     * The signed permissions for the service SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p).
     */
    permissions?: pulumi.Input<string | types.enums.Permissions>;
    /**
     * The protocol permitted for a request made with the account SAS.
     */
    protocols?: pulumi.Input<types.enums.HttpProtocol>;
    /**
     * The signed services accessible with the service SAS. Possible values include: Blob (b), Container (c), File (f), Share (s).
     */
    resource?: pulumi.Input<string | types.enums.SignedResource>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The end of row key.
     */
    rowKeyEnd?: pulumi.Input<string>;
    /**
     * The start of row key.
     */
    rowKeyStart?: pulumi.Input<string>;
    /**
     * The time at which the shared access signature becomes invalid.
     */
    sharedAccessExpiryTime?: pulumi.Input<string>;
    /**
     * The time at which the SAS becomes valid.
     */
    sharedAccessStartTime?: pulumi.Input<string>;
}