import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Azure AD B2C tenant resource.
 *
 * Uses Azure REST API version 2023-05-17-preview.
 *
 * Other available API versions: 2021-04-01, 2023-01-18-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azureactivedirectory [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getB2CTenant(args: GetB2CTenantArgs, opts?: pulumi.InvokeOptions): Promise<GetB2CTenantResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azureactivedirectory:getB2CTenant", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetB2CTenantArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The initial domain name of the Azure AD B2C tenant.
     */
    resourceName: string;
}

export interface GetB2CTenantResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The billing configuration for the tenant.
     */
    readonly billingConfig?: types.outputs.B2CTenantResourcePropertiesResponseBillingConfig;
    /**
     * An identifier that represents the Azure AD B2C tenant resource.
     */
    readonly id: string;
    /**
     * Enable GoLocal add-on to store data at rest in the specific Geo. Refer to [aka.ms/B2CDataResidency](https://aka.ms/B2CDataResidency) to see local data residency options.
     */
    readonly isGoLocalTenant?: boolean;
    /**
     * The location in which the resource is hosted and data resides. Can be one of 'United States', 'Europe', 'Asia Pacific', or 'Australia'. Refer to [this documentation](https://aka.ms/B2CDataResidency) for more information.
     */
    readonly location: string;
    /**
     * The name of the Azure AD B2C tenant resource.
     */
    readonly name: string;
    /**
     * SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling).
     */
    readonly sku: types.outputs.B2CResourceSKUResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource Tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * An identifier of the Azure AD B2C tenant.
     */
    readonly tenantId?: string;
    /**
     * The type of the B2C tenant resource.
     */
    readonly type: string;
}
/**
 * Get the Azure AD B2C tenant resource.
 *
 * Uses Azure REST API version 2023-05-17-preview.
 *
 * Other available API versions: 2021-04-01, 2023-01-18-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azureactivedirectory [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getB2CTenantOutput(args: GetB2CTenantOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetB2CTenantResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azureactivedirectory:getB2CTenant", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetB2CTenantOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The initial domain name of the Azure AD B2C tenant.
     */
    resourceName: pulumi.Input<string>;
}