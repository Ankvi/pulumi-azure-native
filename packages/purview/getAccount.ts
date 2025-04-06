import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an account
 *
 * Uses Azure REST API version 2024-04-01-preview.
 *
 * Other available API versions: 2021-12-01, 2023-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native purview [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:purview:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * The name of the account.
     */
    accountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Account resource
 */
export interface GetAccountResult {
    /**
     * Gets or sets the status of the account.
     */
    readonly accountStatus: types.outputs.AccountPropertiesResponseAccountStatus;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * External Cloud Service connectors
     */
    readonly cloudConnectors?: types.outputs.CloudConnectorsResponse;
    /**
     * Gets the time at which the entity was created.
     */
    readonly createdAt: string;
    /**
     * Gets the creator of the entity.
     */
    readonly createdBy: string;
    /**
     * Gets the creators of the entity's object id.
     */
    readonly createdByObjectId: string;
    /**
     * Gets the default domain in the account.
     */
    readonly defaultDomain: string;
    /**
     * The URIs that are the public endpoints of the account.
     */
    readonly endpoints: types.outputs.AccountPropertiesResponseEndpoints;
    /**
     * Gets or sets the friendly name.
     */
    readonly friendlyName: string;
    /**
     * Gets or sets the identifier.
     */
    readonly id: string;
    /**
     * The Managed Identity of the resource
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * Ingestion Storage Account Info
     */
    readonly ingestionStorage?: types.outputs.IngestionStorageResponse;
    /**
     * Gets or sets the location.
     */
    readonly location?: string;
    /**
     * Gets or sets the state of managed eventhub. If enabled managed eventhub will be created, if disabled the managed eventhub will be removed.
     */
    readonly managedEventHubState?: string;
    /**
     * Gets or sets the managed resource group name
     */
    readonly managedResourceGroupName?: string;
    /**
     * Gets the resource identifiers of the managed resources.
     */
    readonly managedResources: types.outputs.AccountPropertiesResponseManagedResources;
    /**
     * Gets or sets the public network access for managed resources.
     */
    readonly managedResourcesPublicNetworkAccess?: string;
    /**
     * Gets or sets the Merge Info.
     */
    readonly mergeInfo?: types.outputs.AccountMergeInfoResponse;
    /**
     * Gets or sets the name.
     */
    readonly name: string;
    /**
     * Gets the private endpoint connections information.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Gets or sets the state of the provisioning.
     */
    readonly provisioningState: string;
    /**
     * Gets or sets the public network access.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Gets or sets the Sku.
     */
    readonly sku?: types.outputs.AccountResponseSku;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.TrackedResourceResponseSystemData;
    /**
     * Tags on the azure resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets or sets the state of tenant endpoint.
     */
    readonly tenantEndpointState?: string;
    /**
     * Gets or sets the type.
     */
    readonly type: string;
}
/**
 * Get an account
 *
 * Uses Azure REST API version 2024-04-01-preview.
 *
 * Other available API versions: 2021-12-01, 2023-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native purview [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:purview:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountOutputArgs {
    /**
     * The name of the account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}