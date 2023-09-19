import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a server.
 */
export class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Server {
        return new Server(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20140401:Server';

    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Server {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Server.__pulumiType;
    }

    /**
     * Administrator username for the server. Can only be specified when the server is being created (and is required for creation).
     */
    public readonly administratorLogin!: pulumi.Output<string | undefined>;
    /**
     * The display name of the Azure Active Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators
     */
    public /*out*/ readonly externalAdministratorLogin!: pulumi.Output<string>;
    /**
     * The ID of the Active Azure Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators.
     */
    public /*out*/ readonly externalAdministratorSid!: pulumi.Output<string>;
    /**
     * The fully qualified domain name of the server.
     */
    public /*out*/ readonly fullyQualifiedDomainName!: pulumi.Output<string>;
    /**
     * Kind of sql server.  This is metadata used for the Azure portal experience.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The state of the server.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The version of the server.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["administratorLogin"] = args ? args.administratorLogin : undefined;
            resourceInputs["administratorLoginPassword"] = args ? args.administratorLoginPassword : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["externalAdministratorLogin"] = undefined /*out*/;
            resourceInputs["externalAdministratorSid"] = undefined /*out*/;
            resourceInputs["fullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administratorLogin"] = undefined /*out*/;
            resourceInputs["externalAdministratorLogin"] = undefined /*out*/;
            resourceInputs["externalAdministratorSid"] = undefined /*out*/;
            resourceInputs["fullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:Server" }, { type: "azure-native:sql/v20150501preview:Server" }, { type: "azure-native:sql/v20190601preview:Server" }, { type: "azure-native:sql/v20200202preview:Server" }, { type: "azure-native:sql/v20200801preview:Server" }, { type: "azure-native:sql/v20201101preview:Server" }, { type: "azure-native:sql/v20210201preview:Server" }, { type: "azure-native:sql/v20210501preview:Server" }, { type: "azure-native:sql/v20210801preview:Server" }, { type: "azure-native:sql/v20211101:Server" }, { type: "azure-native:sql/v20211101preview:Server" }, { type: "azure-native:sql/v20220201preview:Server" }, { type: "azure-native:sql/v20220501preview:Server" }, { type: "azure-native:sql/v20220801preview:Server" }, { type: "azure-native:sql/v20221101preview:Server" }, { type: "azure-native:sql/v20230201preview:Server" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Server.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    /**
     * Administrator username for the server. Can only be specified when the server is being created (and is required for creation).
     */
    administratorLogin?: pulumi.Input<string>;
    /**
     * The administrator login password (required for server creation).
     */
    administratorLoginPassword?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The version of the server.
     */
    version?: pulumi.Input<string | types.enums.ServerVersion>;
}
