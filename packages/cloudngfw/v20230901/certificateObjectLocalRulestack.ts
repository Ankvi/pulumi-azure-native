import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * LocalRulestack Certificate Object
 */
export class CertificateObjectLocalRulestack extends pulumi.CustomResource {
    /**
     * Get an existing CertificateObjectLocalRulestack resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CertificateObjectLocalRulestack {
        return new CertificateObjectLocalRulestack(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cloudngfw/v20230901:CertificateObjectLocalRulestack';

    /**
     * Returns true if the given object is an instance of CertificateObjectLocalRulestack.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CertificateObjectLocalRulestack {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CertificateObjectLocalRulestack.__pulumiType;
    }

    /**
     * comment for this object
     */
    public readonly auditComment!: pulumi.Output<string | undefined>;
    /**
     * use certificate self signed
     */
    public readonly certificateSelfSigned!: pulumi.Output<string>;
    /**
     * Resource Id of certificate signer, to be populated only when certificateSelfSigned is false
     */
    public readonly certificateSignerResourceId!: pulumi.Output<string | undefined>;
    /**
     * user description for this object
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * read only string representing last create or update
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CertificateObjectLocalRulestack resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateObjectLocalRulestackArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.certificateSelfSigned === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateSelfSigned'");
            }
            if ((!args || args.localRulestackName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'localRulestackName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["auditComment"] = args ? args.auditComment : undefined;
            resourceInputs["certificateSelfSigned"] = args ? args.certificateSelfSigned : undefined;
            resourceInputs["certificateSignerResourceId"] = args ? args.certificateSignerResourceId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["localRulestackName"] = args ? args.localRulestackName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["auditComment"] = undefined /*out*/;
            resourceInputs["certificateSelfSigned"] = undefined /*out*/;
            resourceInputs["certificateSignerResourceId"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cloudngfw:CertificateObjectLocalRulestack" }, { type: "azure-native:cloudngfw/v20220829:CertificateObjectLocalRulestack" }, { type: "azure-native:cloudngfw/v20220829preview:CertificateObjectLocalRulestack" }, { type: "azure-native:cloudngfw/v20230901preview:CertificateObjectLocalRulestack" }, { type: "azure-native:cloudngfw/v20231010preview:CertificateObjectLocalRulestack" }, { type: "azure-native:cloudngfw/v20240119preview:CertificateObjectLocalRulestack" }, { type: "azure-native:cloudngfw/v20240207preview:CertificateObjectLocalRulestack" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CertificateObjectLocalRulestack.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CertificateObjectLocalRulestack resource.
 */
export interface CertificateObjectLocalRulestackArgs {
    /**
     * comment for this object
     */
    auditComment?: pulumi.Input<string>;
    /**
     * use certificate self signed
     */
    certificateSelfSigned: pulumi.Input<string | types.enums.BooleanEnum>;
    /**
     * Resource Id of certificate signer, to be populated only when certificateSelfSigned is false
     */
    certificateSignerResourceId?: pulumi.Input<string>;
    /**
     * user description for this object
     */
    description?: pulumi.Input<string>;
    /**
     * LocalRulestack resource name
     */
    localRulestackName: pulumi.Input<string>;
    /**
     * certificate name
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}