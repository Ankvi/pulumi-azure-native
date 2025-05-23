import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Certificate profile resource.
 *
 * Uses Azure REST API version 2024-09-30-preview. In version 2.x of the Azure Native provider, it used API version 2024-02-05-preview.
 *
 * Other available API versions: 2024-02-05-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native codesigning [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class CertificateProfile extends pulumi.CustomResource {
    /**
     * Get an existing CertificateProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CertificateProfile {
        return new CertificateProfile(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:codesigning:CertificateProfile';

    /**
     * Returns true if the given object is an instance of CertificateProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CertificateProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CertificateProfile.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Identity validation id used for the certificate subject name.
     */
    public readonly identityValidationId!: pulumi.Output<string>;
    /**
     * Whether to include L in the certificate subject name. Applicable only for private trust, private trust ci profile types
     */
    public readonly includeCity!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to include C in the certificate subject name. Applicable only for private trust, private trust ci profile types
     */
    public readonly includeCountry!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to include PC in the certificate subject name.
     */
    public readonly includePostalCode!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to include S in the certificate subject name. Applicable only for private trust, private trust ci profile types
     */
    public readonly includeState!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to include STREET in the certificate subject name.
     */
    public readonly includeStreetAddress!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Profile type of the certificate.
     */
    public readonly profileType!: pulumi.Output<string>;
    /**
     * Status of the current operation on certificate profile.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Status of the certificate profile.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CertificateProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateProfileArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.identityValidationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identityValidationId'");
            }
            if ((!args || args.profileType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["identityValidationId"] = args ? args.identityValidationId : undefined;
            resourceInputs["includeCity"] = (args ? args.includeCity : undefined) ?? false;
            resourceInputs["includeCountry"] = (args ? args.includeCountry : undefined) ?? false;
            resourceInputs["includePostalCode"] = (args ? args.includePostalCode : undefined) ?? false;
            resourceInputs["includeState"] = (args ? args.includeState : undefined) ?? false;
            resourceInputs["includeStreetAddress"] = (args ? args.includeStreetAddress : undefined) ?? false;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["profileType"] = args ? args.profileType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["identityValidationId"] = undefined /*out*/;
            resourceInputs["includeCity"] = undefined /*out*/;
            resourceInputs["includeCountry"] = undefined /*out*/;
            resourceInputs["includePostalCode"] = undefined /*out*/;
            resourceInputs["includeState"] = undefined /*out*/;
            resourceInputs["includeStreetAddress"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["profileType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:codesigning/v20240205preview:CertificateProfile" }, { type: "azure-native:codesigning/v20240930preview:CertificateProfile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CertificateProfile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CertificateProfile resource.
 */
export interface CertificateProfileArgs {
    /**
     * Trusted Signing account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Identity validation id used for the certificate subject name.
     */
    identityValidationId: pulumi.Input<string>;
    /**
     * Whether to include L in the certificate subject name. Applicable only for private trust, private trust ci profile types
     */
    includeCity?: pulumi.Input<boolean>;
    /**
     * Whether to include C in the certificate subject name. Applicable only for private trust, private trust ci profile types
     */
    includeCountry?: pulumi.Input<boolean>;
    /**
     * Whether to include PC in the certificate subject name.
     */
    includePostalCode?: pulumi.Input<boolean>;
    /**
     * Whether to include S in the certificate subject name. Applicable only for private trust, private trust ci profile types
     */
    includeState?: pulumi.Input<boolean>;
    /**
     * Whether to include STREET in the certificate subject name.
     */
    includeStreetAddress?: pulumi.Input<boolean>;
    /**
     * Certificate profile name.
     */
    profileName?: pulumi.Input<string>;
    /**
     * Profile type of the certificate.
     */
    profileType: pulumi.Input<string | types.enums.ProfileType>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}