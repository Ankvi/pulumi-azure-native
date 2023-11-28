import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Event Grid Partner Destination.
 */
export class PartnerDestination extends pulumi.CustomResource {
    /**
     * Get an existing PartnerDestination resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PartnerDestination {
        return new PartnerDestination(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid/v20211015preview:PartnerDestination';

    /**
     * Returns true if the given object is an instance of PartnerDestination.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PartnerDestination {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PartnerDestination.__pulumiType;
    }

    /**
     * Activation state of the partner destination.
     */
    public readonly activationState!: pulumi.Output<string | undefined>;
    /**
     * Endpoint Base URL of the partner destination
     */
    public readonly endpointBaseUrl!: pulumi.Output<string | undefined>;
    /**
     * Endpoint context associated with this partner destination.
     */
    public readonly endpointServiceContext!: pulumi.Output<string | undefined>;
    /**
     * Expiration time of the partner destination. If this timer expires and the partner destination was never activated,
     * the partner destination and corresponding channel are deleted.
     */
    public readonly expirationTimeIfNotActivatedUtc!: pulumi.Output<string | undefined>;
    /**
     * Location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Context or helpful message that can be used during the approval process.
     */
    public readonly messageForActivation!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The immutable Id of the corresponding partner registration.
     */
    public readonly partnerRegistrationImmutableId!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the partner destination.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to Partner Destination resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PartnerDestination resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PartnerDestinationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["activationState"] = args ? args.activationState : undefined;
            resourceInputs["endpointBaseUrl"] = args ? args.endpointBaseUrl : undefined;
            resourceInputs["endpointServiceContext"] = args ? args.endpointServiceContext : undefined;
            resourceInputs["expirationTimeIfNotActivatedUtc"] = args ? args.expirationTimeIfNotActivatedUtc : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["messageForActivation"] = args ? args.messageForActivation : undefined;
            resourceInputs["partnerDestinationName"] = args ? args.partnerDestinationName : undefined;
            resourceInputs["partnerRegistrationImmutableId"] = args ? args.partnerRegistrationImmutableId : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["activationState"] = undefined /*out*/;
            resourceInputs["endpointBaseUrl"] = undefined /*out*/;
            resourceInputs["endpointServiceContext"] = undefined /*out*/;
            resourceInputs["expirationTimeIfNotActivatedUtc"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["messageForActivation"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerRegistrationImmutableId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid:PartnerDestination" }, { type: "azure-native:eventgrid/v20230601preview:PartnerDestination" }, { type: "azure-native:eventgrid/v20231215preview:PartnerDestination" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PartnerDestination.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PartnerDestination resource.
 */
export interface PartnerDestinationArgs {
    /**
     * Activation state of the partner destination.
     */
    activationState?: pulumi.Input<string | types.enums.PartnerDestinationActivationState>;
    /**
     * Endpoint Base URL of the partner destination
     */
    endpointBaseUrl?: pulumi.Input<string>;
    /**
     * Endpoint context associated with this partner destination.
     */
    endpointServiceContext?: pulumi.Input<string>;
    /**
     * Expiration time of the partner destination. If this timer expires and the partner destination was never activated,
     * the partner destination and corresponding channel are deleted.
     */
    expirationTimeIfNotActivatedUtc?: pulumi.Input<string>;
    /**
     * Location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Context or helpful message that can be used during the approval process.
     */
    messageForActivation?: pulumi.Input<string>;
    /**
     * Name of the partner destination.
     */
    partnerDestinationName?: pulumi.Input<string>;
    /**
     * The immutable Id of the corresponding partner registration.
     */
    partnerRegistrationImmutableId?: pulumi.Input<string>;
    /**
     * Provisioning state of the partner destination.
     */
    provisioningState?: pulumi.Input<string | types.enums.PartnerDestinationProvisioningState>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
