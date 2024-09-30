import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Azure AD B2C tenant resource.
 * Azure REST API version: 2021-04-01.
 *
 * Other available API versions: 2019-01-01-preview, 2023-01-18-preview, 2023-05-17-preview.
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
     * The billing configuration for the tenant.
     */
    readonly billingConfig?: types.outputs.B2CTenantResourcePropertiesResponseBillingConfig;
    /**
     * An identifier that represents the Azure AD B2C tenant resource.
     */
    readonly id: string;
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
 * Azure REST API version: 2021-04-01.
 *
 * Other available API versions: 2019-01-01-preview, 2023-01-18-preview, 2023-05-17-preview.
 */
export function getB2CTenantOutput(args: GetB2CTenantOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetB2CTenantResult> {
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