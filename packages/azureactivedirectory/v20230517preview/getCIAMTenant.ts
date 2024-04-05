import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Azure AD for customers tenant resource.
 */
export function getCIAMTenant(args: GetCIAMTenantArgs, opts?: pulumi.InvokeOptions): Promise<GetCIAMTenantResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azureactivedirectory/v20230517preview:getCIAMTenant", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetCIAMTenantArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The initial sub domain of the tenant.
     */
    resourceName: string;
}

/**
 * The Azure AD for customers resource.
 */
export interface GetCIAMTenantResult {
    /**
     * The type of billing. Will be MAU for all new customers. Cannot be changed if value is 'MAU'. Learn more about Azure AD for customers billing at [aka.ms/b2cBilling](https://aka.ms/b2cbilling).
     */
    readonly billingType: string;
    /**
     * These properties are used to create the Azure AD for customers tenant. These properties are not part of the Azure resource.
     */
    readonly createTenantProperties: types.outputs.CreateCIAMTenantPropertiesResponse;
    /**
     * The domain name of the tenant
     */
    readonly domainName: string;
    /**
     * The data from which the billing type took effect
     */
    readonly effectiveStartDateUtc: string;
    /**
     * An identifier that represents the Azure AD for customers tenant resource.
     */
    readonly id: string;
    /**
     * The location in which the resource is hosted and data resides. Can be one of 'United States', 'Europe', 'Asia Pacific', or 'Australia'. Refer to [this documentation](https://aka.ms/ciam-data-location) for more information.
     */
    readonly location: string;
    /**
     * The name of the Azure AD for customers tenant resource.
     */
    readonly name: string;
    readonly provisioningState: string;
    /**
     * SKU properties of the Azure AD for customers tenant. Learn more about Azure AD for customers billing at [https://aka.ms/ciambilling](https://aka.ms/ciambilling).
     */
    readonly sku: types.outputs.CIAMResourceSKUResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource Tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * An identifier of the Azure AD for customers tenant.
     */
    readonly tenantId?: string;
    /**
     * The type of the Azure AD for customers tenant resource.
     */
    readonly type: string;
}
/**
 * Get the Azure AD for customers tenant resource.
 */
export function getCIAMTenantOutput(args: GetCIAMTenantOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCIAMTenantResult> {
    return pulumi.output(args).apply((a: any) => getCIAMTenant(a, opts))
}

export interface GetCIAMTenantOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The initial sub domain of the tenant.
     */
    resourceName: pulumi.Input<string>;
}