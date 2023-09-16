import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * ProfessionalService REST API resource definition.
 */
export class ProfessionalServiceSubscriptionLevel extends pulumi.CustomResource {
    /**
     * Get an existing ProfessionalServiceSubscriptionLevel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProfessionalServiceSubscriptionLevel {
        return new ProfessionalServiceSubscriptionLevel(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:professionalservice/v20230701preview:ProfessionalServiceSubscriptionLevel';

    /**
     * Returns true if the given object is an instance of ProfessionalServiceSubscriptionLevel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProfessionalServiceSubscriptionLevel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProfessionalServiceSubscriptionLevel.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * professionalService properties
     */
    public readonly properties!: pulumi.Output<types.outputs.professionalservice.v20230701preview.ProfessionalServiceResourceResponseProperties>;
    /**
     * the resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ProfessionalServiceSubscriptionLevel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProfessionalServiceSubscriptionLevelArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:professionalservice:ProfessionalServiceSubscriptionLevel" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ProfessionalServiceSubscriptionLevel.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ProfessionalServiceSubscriptionLevel resource.
 */
export interface ProfessionalServiceSubscriptionLevelArgs {
    /**
     * Resource location. Only value allowed for ProfessionalService is 'global'
     */
    location?: pulumi.Input<string>;
    /**
     * The resource name
     */
    name?: pulumi.Input<string>;
    /**
     * Properties of the ProfessionalService resource that are relevant for creation.
     */
    properties?: pulumi.Input<types.inputs.professionalservice.v20230701preview.ProfessionalServiceCreationPropertiesArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * the resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
