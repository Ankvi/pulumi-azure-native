import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
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
    public static readonly __pulumiType = 'azure-native:logic/v20150801preview:IntegrationAccountAgreement';

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
    public readonly agreementType!: pulumi.Output<string | undefined>;
    /**
     * The changed time.
     */
    public /*out*/ readonly changedTime!: pulumi.Output<string>;
    /**
     * The agreement content.
     */
    public readonly content!: pulumi.Output<types.outputs.logic.v20150801preview.AgreementContentResponse | undefined>;
    /**
     * The created time.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * The guest identity.
     */
    public readonly guestIdentity!: pulumi.Output<types.outputs.logic.v20150801preview.BusinessIdentityResponse | undefined>;
    /**
     * The guest partner.
     */
    public readonly guestPartner!: pulumi.Output<string | undefined>;
    /**
     * The host identity.
     */
    public readonly hostIdentity!: pulumi.Output<types.outputs.logic.v20150801preview.BusinessIdentityResponse | undefined>;
    /**
     * The host partner.
     */
    public readonly hostPartner!: pulumi.Output<string | undefined>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The metadata.
     */
    public readonly metadata!: pulumi.Output<any | undefined>;
    /**
     * The resource name.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    public readonly type!: pulumi.Output<string | undefined>;

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
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["integrationAccountName"] = args ? args.integrationAccountName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
        } else {
            resourceInputs["agreementType"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:logic:IntegrationAccountAgreement" }, { type: "azure-native:logic/v20160601:IntegrationAccountAgreement" }, { type: "azure-native:logic/v20180701preview:IntegrationAccountAgreement" }, { type: "azure-native:logic/v20190501:IntegrationAccountAgreement" }] };
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
    agreementType?: pulumi.Input<types.enums.v20150801preview.AgreementType>;
    /**
     * The agreement content.
     */
    content?: pulumi.Input<types.inputs.logic.v20150801preview.AgreementContentArgs>;
    /**
     * The guest identity.
     */
    guestIdentity?: pulumi.Input<types.inputs.logic.v20150801preview.BusinessIdentityArgs>;
    /**
     * The guest partner.
     */
    guestPartner?: pulumi.Input<string>;
    /**
     * The host identity.
     */
    hostIdentity?: pulumi.Input<types.inputs.logic.v20150801preview.BusinessIdentityArgs>;
    /**
     * The host partner.
     */
    hostPartner?: pulumi.Input<string>;
    /**
     * The resource id.
     */
    id?: pulumi.Input<string>;
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
     * The resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The resource type.
     */
    type?: pulumi.Input<string>;
}
