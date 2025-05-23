import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Azure AD for customers resource.
 *
 * Uses Azure REST API version 2023-05-17-preview. In version 2.x of the Azure Native provider, it used API version 2023-05-17-preview.
 */
export class CIAMTenant extends pulumi.CustomResource {
    /**
     * Get an existing CIAMTenant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CIAMTenant {
        return new CIAMTenant(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azureactivedirectory:CIAMTenant';

    /**
     * Returns true if the given object is an instance of CIAMTenant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CIAMTenant {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CIAMTenant.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The type of billing. Will be MAU for all new customers. Cannot be changed if value is 'MAU'. Learn more about Azure AD for customers billing at [aka.ms/b2cBilling](https://aka.ms/b2cbilling).
     */
    public /*out*/ readonly billingType!: pulumi.Output<string>;
    /**
     * These properties are used to create the Azure AD for customers tenant. These properties are not part of the Azure resource.
     */
    public readonly createTenantProperties!: pulumi.Output<types.outputs.CreateCIAMTenantPropertiesResponse>;
    /**
     * The domain name of the tenant
     */
    public /*out*/ readonly domainName!: pulumi.Output<string>;
    /**
     * The data from which the billing type took effect
     */
    public /*out*/ readonly effectiveStartDateUtc!: pulumi.Output<string>;
    /**
     * The location in which the resource is hosted and data resides. Can be one of 'United States', 'Europe', 'Asia Pacific', or 'Australia'. Refer to [this documentation](https://aka.ms/ciam-data-location) for more information.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the Azure AD for customers tenant resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * SKU properties of the Azure AD for customers tenant. Learn more about Azure AD for customers billing at [https://aka.ms/ciambilling](https://aka.ms/ciambilling).
     */
    public readonly sku!: pulumi.Output<types.outputs.CIAMResourceSKUResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource Tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * An identifier of the Azure AD for customers tenant.
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of the Azure AD for customers tenant resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CIAMTenant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CIAMTenantArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.createTenantProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'createTenantProperties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["createTenantProperties"] = args ? args.createTenantProperties : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["billingType"] = undefined /*out*/;
            resourceInputs["domainName"] = undefined /*out*/;
            resourceInputs["effectiveStartDateUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["billingType"] = undefined /*out*/;
            resourceInputs["createTenantProperties"] = undefined /*out*/;
            resourceInputs["domainName"] = undefined /*out*/;
            resourceInputs["effectiveStartDateUtc"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azureactivedirectory/v20230517preview:CIAMTenant" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CIAMTenant.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CIAMTenant resource.
 */
export interface CIAMTenantArgs {
    /**
     * These properties are used to create the Azure AD for customers tenant. These properties are not part of the Azure resource.
     */
    createTenantProperties: pulumi.Input<types.inputs.CreateCIAMTenantPropertiesArgs>;
    /**
     * The location in which the resource is hosted and data resides. Can be one of 'United States', 'Europe', 'Asia Pacific', or 'Australia'. Refer to [this documentation](https://aka.ms/ciam-data-location) for more information.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The initial sub domain of the tenant.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * SKU properties of the Azure AD for customers tenant. Learn more about Azure AD for customers billing at [https://aka.ms/ciambilling](https://aka.ms/ciambilling).
     */
    sku: pulumi.Input<types.inputs.CIAMResourceSKUArgs>;
    /**
     * Resource Tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * An identifier of the Azure AD for customers tenant.
     */
    tenantId?: pulumi.Input<string>;
}