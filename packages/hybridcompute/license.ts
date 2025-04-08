import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a license in a hybrid machine.
 *
 * Uses Azure REST API version 2023-06-20-preview.
 *
 * Other available API versions: 2023-10-03-preview, 2024-03-31-preview, 2024-05-20-preview, 2024-07-10, 2024-07-31-preview, 2024-09-10-preview, 2024-11-10-preview, 2025-01-13.
 */
export class License extends pulumi.CustomResource {
    /**
     * Get an existing License resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): License {
        return new License(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridcompute:License';

    /**
     * Returns true if the given object is an instance of License.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is License {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === License.__pulumiType;
    }

    /**
     * Describes the properties of a License.
     */
    public readonly licenseDetails!: pulumi.Output<types.outputs.LicenseDetailsResponse | undefined>;
    /**
     * The type of the license resource.
     */
    public readonly licenseType!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Describes the tenant id.
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a License resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LicenseArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["licenseDetails"] = args ? args.licenseDetails : undefined;
            resourceInputs["licenseName"] = args ? args.licenseName : undefined;
            resourceInputs["licenseType"] = args ? args.licenseType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["licenseDetails"] = undefined /*out*/;
            resourceInputs["licenseType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcompute/v20230620preview:License" }, { type: "azure-native:hybridcompute/v20231003preview:License" }, { type: "azure-native:hybridcompute/v20240331preview:License" }, { type: "azure-native:hybridcompute/v20240520preview:License" }, { type: "azure-native:hybridcompute/v20240710:License" }, { type: "azure-native:hybridcompute/v20240731preview:License" }, { type: "azure-native:hybridcompute/v20240910preview:License" }, { type: "azure-native:hybridcompute/v20241110preview:License" }, { type: "azure-native:hybridcompute/v20250113:License" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(License.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a License resource.
 */
export interface LicenseArgs {
    /**
     * Describes the properties of a License.
     */
    licenseDetails?: pulumi.Input<types.inputs.LicenseDetailsArgs>;
    /**
     * The name of the license.
     */
    licenseName?: pulumi.Input<string>;
    /**
     * The type of the license resource.
     */
    licenseType?: pulumi.Input<string | types.enums.LicenseType>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Describes the tenant id.
     */
    tenantId?: pulumi.Input<string>;
}