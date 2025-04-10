import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a license profile in a hybrid machine.
 *
 * Uses Azure REST API version 2023-06-20-preview.
 *
 * Other available API versions: 2023-10-03-preview, 2024-03-31-preview, 2024-05-20-preview, 2024-07-10, 2024-07-31-preview, 2024-09-10-preview, 2024-11-10-preview, 2025-01-13.
 */
export class LicenseProfile extends pulumi.CustomResource {
    /**
     * Get an existing LicenseProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LicenseProfile {
        return new LicenseProfile(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridcompute:LicenseProfile';

    /**
     * Returns true if the given object is an instance of LicenseProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LicenseProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LicenseProfile.__pulumiType;
    }

    /**
     * The resource id of the license.
     */
    public readonly assignedLicense!: pulumi.Output<string | undefined>;
    /**
     * The guid id of the license.
     */
    public /*out*/ readonly assignedLicenseImmutableId!: pulumi.Output<string>;
    /**
     * Indicates the eligibility state of Esu.
     */
    public /*out*/ readonly esuEligibility!: pulumi.Output<string>;
    /**
     * Indicates whether there is an ESU Key currently active for the machine.
     */
    public /*out*/ readonly esuKeyState!: pulumi.Output<string>;
    /**
     * The list of ESU keys.
     */
    public /*out*/ readonly esuKeys!: pulumi.Output<types.outputs.EsuKeyResponse[]>;
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
     * The type of the Esu servers.
     */
    public /*out*/ readonly serverType!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LicenseProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LicenseProfileArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.machineName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'machineName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["assignedLicense"] = args ? args.assignedLicense : undefined;
            resourceInputs["licenseProfileName"] = args ? args.licenseProfileName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["machineName"] = args ? args.machineName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["assignedLicenseImmutableId"] = undefined /*out*/;
            resourceInputs["esuEligibility"] = undefined /*out*/;
            resourceInputs["esuKeyState"] = undefined /*out*/;
            resourceInputs["esuKeys"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serverType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assignedLicense"] = undefined /*out*/;
            resourceInputs["assignedLicenseImmutableId"] = undefined /*out*/;
            resourceInputs["esuEligibility"] = undefined /*out*/;
            resourceInputs["esuKeyState"] = undefined /*out*/;
            resourceInputs["esuKeys"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serverType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcompute/v20230620preview:LicenseProfile" }, { type: "azure-native:hybridcompute/v20231003preview:LicenseProfile" }, { type: "azure-native:hybridcompute/v20240331preview:LicenseProfile" }, { type: "azure-native:hybridcompute/v20240520preview:LicenseProfile" }, { type: "azure-native:hybridcompute/v20240710:LicenseProfile" }, { type: "azure-native:hybridcompute/v20240731preview:LicenseProfile" }, { type: "azure-native:hybridcompute/v20240910preview:LicenseProfile" }, { type: "azure-native:hybridcompute/v20241110preview:LicenseProfile" }, { type: "azure-native:hybridcompute/v20250113:LicenseProfile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LicenseProfile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LicenseProfile resource.
 */
export interface LicenseProfileArgs {
    /**
     * The resource id of the license.
     */
    assignedLicense?: pulumi.Input<string>;
    /**
     * The name of the license profile.
     */
    licenseProfileName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the hybrid machine.
     */
    machineName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}