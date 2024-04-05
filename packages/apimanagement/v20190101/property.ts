import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Property details.
 */
export class Property extends pulumi.CustomResource {
    /**
     * Get an existing Property resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Property {
        return new Property(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20190101:Property';

    /**
     * Returns true if the given object is an instance of Property.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Property {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Property.__pulumiType;
    }

    /**
     * Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Determines whether the value is a secret and should be encrypted or not. Default value is false.
     */
    public readonly secret!: pulumi.Output<boolean | undefined>;
    /**
     * Optional tags that when provided can be used to filter the property list.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * Resource type for API Management resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.
     */
    public readonly value!: pulumi.Output<string>;

    /**
     * Create a Property resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PropertyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.value === undefined) && !opts.urn) {
                throw new Error("Missing required property 'value'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["propId"] = args ? args.propId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["secret"] = args ? args.secret : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["secret"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["value"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20160707:Property" }, { type: "azure-native:apimanagement/v20161010:Property" }, { type: "azure-native:apimanagement/v20170301:Property" }, { type: "azure-native:apimanagement/v20180101:Property" }, { type: "azure-native:apimanagement/v20180601preview:Property" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Property.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Property resource.
 */
export interface PropertyArgs {
    /**
     * Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
     */
    displayName: pulumi.Input<string>;
    /**
     * Identifier of the property.
     */
    propId?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Determines whether the value is a secret and should be encrypted or not. Default value is false.
     */
    secret?: pulumi.Input<boolean>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Optional tags that when provided can be used to filter the property list.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.
     */
    value: pulumi.Input<string>;
}