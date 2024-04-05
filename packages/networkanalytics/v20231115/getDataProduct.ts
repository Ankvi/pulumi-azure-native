import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve data product resource.
 */
export function getDataProduct(args: GetDataProductArgs, opts?: pulumi.InvokeOptions): Promise<GetDataProductResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkanalytics/v20231115:getDataProduct", {
        "dataProductName": args.dataProductName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataProductArgs {
    /**
     * The data product resource name
     */
    dataProductName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The data product resource.
 */
export interface GetDataProductResult {
    /**
     * List of available minor versions of the data product resource.
     */
    readonly availableMinorVersions: string[];
    /**
     * Resource links which exposed to the customer to query the data.
     */
    readonly consumptionEndpoints: types.outputs.ConsumptionEndpointsPropertiesResponse;
    /**
     * Current configured minor version of the data product resource.
     */
    readonly currentMinorVersion?: string;
    /**
     * Customer managed encryption key details for data product.
     */
    readonly customerEncryptionKey?: types.outputs.EncryptionKeyDetailsResponse;
    /**
     * Flag to enable customer managed key encryption for data product.
     */
    readonly customerManagedKeyEncryptionEnabled?: string;
    /**
     * Documentation link for the data product based on definition file.
     */
    readonly documentation: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Key vault url.
     */
    readonly keyVaultUrl: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Major version of data product.
     */
    readonly majorVersion: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network rule set for data product.
     */
    readonly networkacls?: types.outputs.DataProductNetworkAclsResponse;
    /**
     * List of name or email associated with data product resource deployment.
     */
    readonly owners?: string[];
    /**
     * Flag to enable or disable private link for data product resource.
     */
    readonly privateLinksEnabled?: string;
    /**
     * Product name of data product.
     */
    readonly product: string;
    /**
     * Latest provisioning state  of data product.
     */
    readonly provisioningState: string;
    /**
     * Flag to enable or disable public access of data product resource.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Data product publisher name.
     */
    readonly publisher: string;
    /**
     * Purview account url for data product to connect to.
     */
    readonly purviewAccount?: string;
    /**
     * Purview collection url for data product to connect to.
     */
    readonly purviewCollection?: string;
    /**
     * Flag to enable or disable redundancy for data product.
     */
    readonly redundancy?: string;
    /**
     * The resource GUID property of the data product resource.
     */
    readonly resourceGuid: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieve data product resource.
 */
export function getDataProductOutput(args: GetDataProductOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataProductResult> {
    return pulumi.output(args).apply((a: any) => getDataProduct(a, opts))
}

export interface GetDataProductOutputArgs {
    /**
     * The data product resource name
     */
    dataProductName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}