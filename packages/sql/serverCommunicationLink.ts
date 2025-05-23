import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Server communication link.
 *
 * Uses Azure REST API version 2014-04-01. In version 2.x of the Azure Native provider, it used API version 2014-04-01.
 */
export class ServerCommunicationLink extends pulumi.CustomResource {
    /**
     * Get an existing ServerCommunicationLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerCommunicationLink {
        return new ServerCommunicationLink(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:ServerCommunicationLink';

    /**
     * Returns true if the given object is an instance of ServerCommunicationLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerCommunicationLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerCommunicationLink.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Communication link kind.  This property is used for Azure Portal metadata.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Communication link location.
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The name of the partner server.
     */
    public readonly partnerServer!: pulumi.Output<string>;
    /**
     * The state.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServerCommunicationLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerCommunicationLinkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.partnerServer === undefined) && !opts.urn) {
                throw new Error("Missing required property 'partnerServer'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["communicationLinkName"] = args ? args.communicationLinkName : undefined;
            resourceInputs["partnerServer"] = args ? args.partnerServer : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerServer"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20140401:ServerCommunicationLink" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServerCommunicationLink.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerCommunicationLink resource.
 */
export interface ServerCommunicationLinkArgs {
    /**
     * The name of the server communication link.
     */
    communicationLinkName?: pulumi.Input<string>;
    /**
     * The name of the partner server.
     */
    partnerServer: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}