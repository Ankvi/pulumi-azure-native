import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Subscription feature registration details
 */
export class SubscriptionFeatureRegistration extends pulumi.CustomResource {
    /**
     * Get an existing SubscriptionFeatureRegistration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SubscriptionFeatureRegistration {
        return new SubscriptionFeatureRegistration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:features/v20210701:SubscriptionFeatureRegistration';

    /**
     * Returns true if the given object is an instance of SubscriptionFeatureRegistration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SubscriptionFeatureRegistration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SubscriptionFeatureRegistration.__pulumiType;
    }

    /**
     * Azure resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly properties!: pulumi.Output<types.outputs.features.v20210701.SubscriptionFeatureRegistrationResponseProperties>;
    /**
     * Azure resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SubscriptionFeatureRegistration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubscriptionFeatureRegistrationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.providerNamespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'providerNamespace'");
            }
            resourceInputs["featureName"] = args ? args.featureName : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.features.v20210701.subscriptionFeatureRegistrationPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["providerNamespace"] = args ? args.providerNamespace : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:features:SubscriptionFeatureRegistration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SubscriptionFeatureRegistration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SubscriptionFeatureRegistration resource.
 */
export interface SubscriptionFeatureRegistrationArgs {
    /**
     * The feature name.
     */
    featureName?: pulumi.Input<string>;
    properties?: pulumi.Input<types.inputs.features.v20210701.SubscriptionFeatureRegistrationPropertiesArgs>;
    /**
     * The provider namespace.
     */
    providerNamespace: pulumi.Input<string>;
}
