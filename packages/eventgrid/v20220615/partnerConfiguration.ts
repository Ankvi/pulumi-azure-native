import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Partner configuration information
 */
export class PartnerConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing PartnerConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PartnerConfiguration {
        return new PartnerConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid/v20220615:PartnerConfiguration';

    /**
     * Returns true if the given object is an instance of PartnerConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PartnerConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PartnerConfiguration.__pulumiType;
    }

    /**
     * Location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The details of authorized partners.
     */
    public readonly partnerAuthorization!: pulumi.Output<types.outputs.PartnerAuthorizationResponse | undefined>;
    /**
     * Provisioning state of the partner configuration.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to partner configuration resource.
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
     * Create a PartnerConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PartnerConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["partnerAuthorization"] = args ? args.partnerAuthorization : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerAuthorization"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid:PartnerConfiguration" }, { type: "azure-native:eventgrid/v20211015preview:PartnerConfiguration" }, { type: "azure-native:eventgrid/v20230601preview:PartnerConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PartnerConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PartnerConfiguration resource.
 */
export interface PartnerConfigurationArgs {
    /**
     * Location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The details of authorized partners.
     */
    partnerAuthorization?: pulumi.Input<types.inputs.PartnerAuthorizationArgs>;
    /**
     * Provisioning state of the partner configuration.
     */
    provisioningState?: pulumi.Input<string | types.enums.PartnerConfigurationProvisioningState>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
