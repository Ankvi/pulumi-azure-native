import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Create and list an account shared access signature token. Use this SAS token for authentication to Azure Maps REST APIs through various Azure Maps SDKs. As prerequisite to create a SAS Token.
 *
 * Prerequisites:
 * 1. Create or have an existing User Assigned Managed Identity in the same Azure region as the account.
 * 2. Create or update an Azure Maps account with the same Azure region as the User Assigned Managed Identity is placed.
 *
 * Uses Azure REST API version 2024-07-01-preview.
 *
 * Other available API versions: 2021-12-01-preview, 2023-06-01, 2023-08-01-preview, 2023-12-01-preview, 2024-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native maps [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listAccountSas(args: ListAccountSasArgs, opts?: pulumi.InvokeOptions): Promise<ListAccountSasResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:maps:listAccountSas", {
        "accountName": args.accountName,
        "expiry": args.expiry,
        "maxRatePerSecond": args.maxRatePerSecond,
        "principalId": args.principalId,
        "regions": args.regions,
        "resourceGroupName": args.resourceGroupName,
        "signingKey": args.signingKey,
        "start": args.start,
    }, opts);
}

export interface ListAccountSasArgs {
    /**
     * The name of the Maps Account.
     */
    accountName: string;
    /**
     * The date time offset of when the token validity expires. For example "2017-05-24T10:42:03.1567373Z". Maximum duration allowed is 24 hours between `start` and `expiry`.
     */
    expiry: string;
    /**
     * Required parameter which represents the desired maximum request per second to allowed for the given SAS token. This does not guarantee perfect accuracy in measurements but provides application safe guards of abuse with eventual enforcement.
     */
    maxRatePerSecond: number;
    /**
     * The principal Id also known as the object Id of a User Assigned Managed Identity currently assigned to the Maps Account. To assign a Managed Identity of the account, use operation Create or Update an assign a User Assigned Identity resource Id.
     */
    principalId: string;
    /**
     * Optional, allows control of which region locations are permitted access to Azure Maps REST APIs with the SAS token. Example: "eastus", "westus2". Omitting this parameter will allow all region locations to be accessible.
     */
    regions?: string[];
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The Maps account key to use for signing. Picking `primaryKey` or `secondaryKey` will use the Maps account Shared Keys, and using `managedIdentity` will use the auto-renewed private key to sign the SAS.
     */
    signingKey: string | types.enums.SigningKey;
    /**
     * The date time offset of when the token validity begins. For example "2017-05-24T10:42:03.1567373Z". Maximum duration allowed is 24 hours between `start` and `expiry`.
     */
    start: string;
}

/**
 * A new Sas token which can be used to access the Maps REST APIs and is controlled by the specified Managed identity permissions on Azure (IAM) Role Based Access Control.
 */
export interface ListAccountSasResult {
    /**
     * The shared access signature access token.
     */
    readonly accountSasToken: string;
}
/**
 * Create and list an account shared access signature token. Use this SAS token for authentication to Azure Maps REST APIs through various Azure Maps SDKs. As prerequisite to create a SAS Token.
 *
 * Prerequisites:
 * 1. Create or have an existing User Assigned Managed Identity in the same Azure region as the account.
 * 2. Create or update an Azure Maps account with the same Azure region as the User Assigned Managed Identity is placed.
 *
 * Uses Azure REST API version 2024-07-01-preview.
 *
 * Other available API versions: 2021-12-01-preview, 2023-06-01, 2023-08-01-preview, 2023-12-01-preview, 2024-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native maps [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listAccountSasOutput(args: ListAccountSasOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAccountSasResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:maps:listAccountSas", {
        "accountName": args.accountName,
        "expiry": args.expiry,
        "maxRatePerSecond": args.maxRatePerSecond,
        "principalId": args.principalId,
        "regions": args.regions,
        "resourceGroupName": args.resourceGroupName,
        "signingKey": args.signingKey,
        "start": args.start,
    }, opts);
}

export interface ListAccountSasOutputArgs {
    /**
     * The name of the Maps Account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The date time offset of when the token validity expires. For example "2017-05-24T10:42:03.1567373Z". Maximum duration allowed is 24 hours between `start` and `expiry`.
     */
    expiry: pulumi.Input<string>;
    /**
     * Required parameter which represents the desired maximum request per second to allowed for the given SAS token. This does not guarantee perfect accuracy in measurements but provides application safe guards of abuse with eventual enforcement.
     */
    maxRatePerSecond: pulumi.Input<number>;
    /**
     * The principal Id also known as the object Id of a User Assigned Managed Identity currently assigned to the Maps Account. To assign a Managed Identity of the account, use operation Create or Update an assign a User Assigned Identity resource Id.
     */
    principalId: pulumi.Input<string>;
    /**
     * Optional, allows control of which region locations are permitted access to Azure Maps REST APIs with the SAS token. Example: "eastus", "westus2". Omitting this parameter will allow all region locations to be accessible.
     */
    regions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Maps account key to use for signing. Picking `primaryKey` or `secondaryKey` will use the Maps account Shared Keys, and using `managedIdentity` will use the auto-renewed private key to sign the SAS.
     */
    signingKey: pulumi.Input<string | types.enums.SigningKey>;
    /**
     * The date time offset of when the token validity begins. For example "2017-05-24T10:42:03.1567373Z". Maximum duration allowed is 24 hours between `start` and `expiry`.
     */
    start: pulumi.Input<string>;
}