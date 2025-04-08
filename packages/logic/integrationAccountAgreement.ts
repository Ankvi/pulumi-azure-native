import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The integration account agreement.
 *
 * Uses Azure REST API version 2019-05-01. In version 2.x of the Azure Native provider, it used API version 2019-05-01.
 *
 * Other available API versions: 2015-08-01-preview, 2018-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native logic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class IntegrationAccountAgreement extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccountAgreement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IntegrationAccountAgreement {
        return new IntegrationAccountAgreement(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:logic:IntegrationAccountAgreement';

    /**
     * Returns true if the given object is an instance of IntegrationAccountAgreement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntegrationAccountAgreement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IntegrationAccountAgreement.__pulumiType;
    }

    /**
     * The agreement type.
     */
    public readonly agreementType!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The changed time.
     */
    public /*out*/ readonly changedTime!: pulumi.Output<string>;
    /**
     * The agreement content.
     */
    public readonly content!: pulumi.Output<types.outputs.AgreementContentResponse>;
    /**
     * The created time.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * The business identity of the guest partner.
     */
    public readonly guestIdentity!: pulumi.Output<types.outputs.BusinessIdentityResponse>;
    /**
     * The integration account partner that is set as guest partner for this agreement.
     */
    public readonly guestPartner!: pulumi.Output<string>;
    /**
     * The business identity of the host partner.
     */
    public readonly hostIdentity!: pulumi.Output<types.outputs.BusinessIdentityResponse>;
    /**
     * The integration account partner that is set as host partner for this agreement.
     */
    public readonly hostPartner!: pulumi.Output<string>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The metadata.
     */
    public readonly metadata!: pulumi.Output<any | undefined>;
    /**
     * Gets the resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets the resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IntegrationAccountAgreement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountAgreementArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.agreementType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agreementType'");
            }
            if ((!args || args.content === undefined) && !opts.urn) {
                throw new Error("Missing required property 'content'");
            }
            if ((!args || args.guestIdentity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'guestIdentity'");
            }
            if ((!args || args.guestPartner === undefined) && !opts.urn) {
                throw new Error("Missing required property 'guestPartner'");
            }
            if ((!args || args.hostIdentity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostIdentity'");
            }
            if ((!args || args.hostPartner === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostPartner'");
            }
            if ((!args || args.integrationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrationAccountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["agreementName"] = args ? args.agreementName : undefined;
            resourceInputs["agreementType"] = args ? args.agreementType : undefined;
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["guestIdentity"] = args ? args.guestIdentity : undefined;
            resourceInputs["guestPartner"] = args ? args.guestPartner : undefined;
            resourceInputs["hostIdentity"] = args ? args.hostIdentity : undefined;
            resourceInputs["hostPartner"] = args ? args.hostPartner : undefined;
            resourceInputs["integrationAccountName"] = args ? args.integrationAccountName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["agreementType"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["content"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["guestIdentity"] = undefined /*out*/;
            resourceInputs["guestPartner"] = undefined /*out*/;
            resourceInputs["hostIdentity"] = undefined /*out*/;
            resourceInputs["hostPartner"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:logic/v20150801preview:IntegrationAccountAgreement" }, { type: "azure-native:logic/v20160601:Agreement" }, { type: "azure-native:logic/v20160601:IntegrationAccountAgreement" }, { type: "azure-native:logic/v20180701preview:IntegrationAccountAgreement" }, { type: "azure-native:logic/v20190501:IntegrationAccountAgreement" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IntegrationAccountAgreement.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IntegrationAccountAgreement resource.
 */
export interface IntegrationAccountAgreementArgs {
    /**
     * The integration account agreement name.
     */
    agreementName?: pulumi.Input<string>;
    /**
     * The agreement type.
     */
    agreementType: pulumi.Input<types.enums.AgreementType>;
    /**
     * The agreement content.
     */
    content: pulumi.Input<types.inputs.AgreementContentArgs>;
    /**
     * The business identity of the guest partner.
     */
    guestIdentity: pulumi.Input<types.inputs.BusinessIdentityArgs>;
    /**
     * The integration account partner that is set as guest partner for this agreement.
     */
    guestPartner: pulumi.Input<string>;
    /**
     * The business identity of the host partner.
     */
    hostIdentity: pulumi.Input<types.inputs.BusinessIdentityArgs>;
    /**
     * The integration account partner that is set as host partner for this agreement.
     */
    hostPartner: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The metadata.
     */
    metadata?: any;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}