import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2023-05-17-preview. In version 2.x of the Azure Native provider, it used API version 2021-04-01.
 *
 * Other available API versions: 2021-04-01, 2023-01-18-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azureactivedirectory [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class B2CTenant extends pulumi.CustomResource {
    /**
     * Get an existing B2CTenant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): B2CTenant {
        return new B2CTenant(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azureactivedirectory:B2CTenant';

    /**
     * Returns true if the given object is an instance of B2CTenant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is B2CTenant {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === B2CTenant.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The billing configuration for the tenant.
     */
    public /*out*/ readonly billingConfig!: pulumi.Output<types.outputs.B2CTenantResourcePropertiesResponseBillingConfig | undefined>;
    /**
     * Enable GoLocal add-on to store data at rest in the specific Geo. Refer to [aka.ms/B2CDataResidency](https://aka.ms/B2CDataResidency) to see local data residency options.
     */
    public readonly isGoLocalTenant!: pulumi.Output<boolean | undefined>;
    /**
     * The location in which the resource is hosted and data resides. Can be one of 'United States', 'Europe', 'Asia Pacific', or 'Australia'. Refer to [this documentation](https://aka.ms/B2CDataResidency) for more information.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the Azure AD B2C tenant resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling).
     */
    public readonly sku!: pulumi.Output<types.outputs.B2CResourceSKUResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource Tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * An identifier of the Azure AD B2C tenant.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of the B2C tenant resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a B2CTenant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: B2CTenantArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["countryCode"] = args ? args.countryCode : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["isGoLocalTenant"] = args ? args.isGoLocalTenant : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["billingConfig"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["billingConfig"] = undefined /*out*/;
            resourceInputs["isGoLocalTenant"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azureactivedirectory/v20190101preview:B2CTenant" }, { type: "azure-native:azureactivedirectory/v20210401:B2CTenant" }, { type: "azure-native:azureactivedirectory/v20230118preview:B2CTenant" }, { type: "azure-native:azureactivedirectory/v20230517preview:B2CTenant" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(B2CTenant.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a B2CTenant resource.
 */
export interface B2CTenantArgs {
    /**
     * Country code of Azure tenant (e.g. 'US'). Refer to [aka.ms/B2CDataResidency](https://aka.ms/B2CDataResidency) to see valid country codes and corresponding data residency locations. If you do not see a country code in an valid data residency location, choose one from the list.
     */
    countryCode?: pulumi.Input<string>;
    /**
     * The display name of the Azure AD B2C tenant.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Enable GoLocal add-on to store data at rest in the specific Geo. Refer to [aka.ms/B2CDataResidency](https://aka.ms/B2CDataResidency) to see local data residency options.
     */
    isGoLocalTenant?: pulumi.Input<boolean>;
    /**
     * The location in which the resource is hosted and data resides. Can be one of 'United States', 'Europe', 'Asia Pacific', or 'Australia'. Refer to [this documentation](https://aka.ms/B2CDataResidency) for more information.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The initial domain name of the Azure AD B2C tenant.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling).
     */
    sku: pulumi.Input<types.inputs.B2CResourceSKUArgs>;
    /**
     * Resource Tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}