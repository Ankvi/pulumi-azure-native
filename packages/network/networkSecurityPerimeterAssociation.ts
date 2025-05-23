import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The NSP resource association resource
 *
 * Uses Azure REST API version 2024-06-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-06-01-preview.
 */
export class NetworkSecurityPerimeterAssociation extends pulumi.CustomResource {
    /**
     * Get an existing NetworkSecurityPerimeterAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkSecurityPerimeterAssociation {
        return new NetworkSecurityPerimeterAssociation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:NetworkSecurityPerimeterAssociation';

    /**
     * Returns true if the given object is an instance of NetworkSecurityPerimeterAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkSecurityPerimeterAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkSecurityPerimeterAssociation.__pulumiType;
    }

    /**
     * Access mode on the association.
     */
    public readonly accessMode!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Specifies if there are provisioning issues
     */
    public /*out*/ readonly hasProvisioningIssues!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The PaaS resource to be associated.
     */
    public readonly privateLinkResource!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * Profile id to which the PaaS resource is associated.
     */
    public readonly profile!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The provisioning state of the resource  association resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NetworkSecurityPerimeterAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkSecurityPerimeterAssociationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkSecurityPerimeterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkSecurityPerimeterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accessMode"] = args ? args.accessMode : undefined;
            resourceInputs["associationName"] = args ? args.associationName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkSecurityPerimeterName"] = args ? args.networkSecurityPerimeterName : undefined;
            resourceInputs["privateLinkResource"] = args ? args.privateLinkResource : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hasProvisioningIssues"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accessMode"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hasProvisioningIssues"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateLinkResource"] = undefined /*out*/;
            resourceInputs["profile"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20210201preview:NetworkSecurityPerimeterAssociation" }, { type: "azure-native:network/v20210201preview:NspAssociation" }, { type: "azure-native:network/v20230701preview:NetworkSecurityPerimeterAssociation" }, { type: "azure-native:network/v20230701preview:NspAssociation" }, { type: "azure-native:network/v20230801preview:NetworkSecurityPerimeterAssociation" }, { type: "azure-native:network/v20230801preview:NspAssociation" }, { type: "azure-native:network/v20240601preview:NetworkSecurityPerimeterAssociation" }, { type: "azure-native:network:NspAssociation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkSecurityPerimeterAssociation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkSecurityPerimeterAssociation resource.
 */
export interface NetworkSecurityPerimeterAssociationArgs {
    /**
     * Access mode on the association.
     */
    accessMode?: pulumi.Input<string | types.enums.AssociationAccessMode>;
    /**
     * The name of the NSP association.
     */
    associationName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: pulumi.Input<string>;
    /**
     * The PaaS resource to be associated.
     */
    privateLinkResource?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * Profile id to which the PaaS resource is associated.
     */
    profile?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}