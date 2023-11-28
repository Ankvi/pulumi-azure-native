import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Information about a partner registration.
 * Azure REST API version: 2022-06-15. Prior API version in Azure Native 1.x: 2021-06-01-preview.
 *
 * Other available API versions: 2021-10-15-preview, 2023-06-01-preview, 2023-12-15-preview.
 */
export class PartnerRegistration extends pulumi.CustomResource {
    /**
     * Get an existing PartnerRegistration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PartnerRegistration {
        return new PartnerRegistration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid:PartnerRegistration';

    /**
     * Returns true if the given object is an instance of PartnerRegistration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PartnerRegistration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PartnerRegistration.__pulumiType;
    }

    /**
     * Location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The immutableId of the corresponding partner registration.
     * Note: This property is marked for deprecation and is not supported in any future GA API version
     */
    public readonly partnerRegistrationImmutableId!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the partner registration.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system metadata relating to Partner Registration resource.
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
     * Create a PartnerRegistration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PartnerRegistrationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["partnerRegistrationImmutableId"] = args ? args.partnerRegistrationImmutableId : undefined;
            resourceInputs["partnerRegistrationName"] = args ? args.partnerRegistrationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerRegistrationImmutableId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid/v20200401preview:PartnerRegistration" }, { type: "azure-native:eventgrid/v20201015preview:PartnerRegistration" }, { type: "azure-native:eventgrid/v20210601preview:PartnerRegistration" }, { type: "azure-native:eventgrid/v20211015preview:PartnerRegistration" }, { type: "azure-native:eventgrid/v20220615:PartnerRegistration" }, { type: "azure-native:eventgrid/v20230601preview:PartnerRegistration" }, { type: "azure-native:eventgrid/v20231215preview:PartnerRegistration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PartnerRegistration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PartnerRegistration resource.
 */
export interface PartnerRegistrationArgs {
    /**
     * Location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The immutableId of the corresponding partner registration.
     * Note: This property is marked for deprecation and is not supported in any future GA API version
     */
    partnerRegistrationImmutableId?: pulumi.Input<string>;
    /**
     * Name of the partner registration.
     */
    partnerRegistrationName?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
