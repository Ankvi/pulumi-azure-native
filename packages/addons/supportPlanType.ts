import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The status of the Canonical support plan.
 *
 * Uses Azure REST API version 2018-03-01. In version 2.x of the Azure Native provider, it used API version 2018-03-01.
 */
export class SupportPlanType extends pulumi.CustomResource {
    /**
     * Get an existing SupportPlanType resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SupportPlanType {
        return new SupportPlanType(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:addons:SupportPlanType';

    /**
     * Returns true if the given object is an instance of SupportPlanType.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SupportPlanType {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SupportPlanType.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the Canonical support plan, i.e. "essential", "standard" or "advanced".
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Microsoft.Addons/supportProvider
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SupportPlanType resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SupportPlanTypeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.providerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'providerName'");
            }
            resourceInputs["planTypeName"] = args ? args.planTypeName : undefined;
            resourceInputs["providerName"] = args ? args.providerName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:addons/v20170515:SupportPlanType" }, { type: "azure-native:addons/v20180301:SupportPlanType" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SupportPlanType.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SupportPlanType resource.
 */
export interface SupportPlanTypeArgs {
    /**
     * The Canonical support plan type.
     */
    planTypeName?: pulumi.Input<string>;
    /**
     * The support plan type. For now the only valid type is "canonical".
     */
    providerName: pulumi.Input<string>;
}