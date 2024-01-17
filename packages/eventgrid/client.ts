import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Client resource.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-12-15-preview.
 */
export class Client extends pulumi.CustomResource {
    /**
     * Get an existing Client resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Client {
        return new Client(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid:Client';

    /**
     * Returns true if the given object is an instance of Client.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Client {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Client.__pulumiType;
    }

    /**
     * Attributes for the client. Supported values are int, bool, string, string[].
     * Example:
     * "attributes": { "room": "345", "floor": 12, "deviceTypes": ["Fan", "Light"] }
     */
    public readonly attributes!: pulumi.Output<any | undefined>;
    /**
     * Authentication information for the client.
     */
    public readonly authentication!: pulumi.Output<types.outputs.ClientAuthenticationResponse | undefined>;
    /**
     * The name presented by the client for authentication. The default value is the name of the resource.
     */
    public readonly authenticationName!: pulumi.Output<string | undefined>;
    /**
     * The client certificate authentication information.
     */
    public readonly clientCertificateAuthentication!: pulumi.Output<types.outputs.ClientCertificateAuthenticationResponse | undefined>;
    /**
     * Description for the Client resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the Client resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Indicates if the client is enabled or not. Default value is Enabled.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to the Client resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Client resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClientArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["authenticationName"] = args ? args.authenticationName : undefined;
            resourceInputs["clientCertificateAuthentication"] = args ? args.clientCertificateAuthentication : undefined;
            resourceInputs["clientName"] = args ? args.clientName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["state"] = (args ? args.state : undefined) ?? "Enabled";
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["attributes"] = undefined /*out*/;
            resourceInputs["authentication"] = undefined /*out*/;
            resourceInputs["authenticationName"] = undefined /*out*/;
            resourceInputs["clientCertificateAuthentication"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid/v20230601preview:Client" }, { type: "azure-native:eventgrid/v20231215preview:Client" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Client.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Client resource.
 */
export interface ClientArgs {
    /**
     * Attributes for the client. Supported values are int, bool, string, string[].
     * Example:
     * "attributes": { "room": "345", "floor": 12, "deviceTypes": ["Fan", "Light"] }
     */
    attributes?: any;
    /**
     * Authentication information for the client.
     */
    authentication?: pulumi.Input<types.inputs.ClientAuthenticationArgs>;
    /**
     * The name presented by the client for authentication. The default value is the name of the resource.
     */
    authenticationName?: pulumi.Input<string>;
    /**
     * The client certificate authentication information.
     */
    clientCertificateAuthentication?: pulumi.Input<types.inputs.ClientCertificateAuthenticationArgs>;
    /**
     * The client name.
     */
    clientName?: pulumi.Input<string>;
    /**
     * Description for the Client resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Indicates if the client is enabled or not. Default value is Enabled.
     */
    state?: pulumi.Input<string | types.enums.ClientState>;
}