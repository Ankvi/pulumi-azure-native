import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * REST model used to encapsulate the user visible state of a PrivateEndpoint.
 *
 * Uses Azure REST API version 2020-05-01. In version 2.x of the Azure Native provider, it used API version 2020-05-01.
 *
 * Other available API versions: 2023-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native migrate [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PrivateEndpointConnectionControllerPrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing PrivateEndpointConnectionControllerPrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateEndpointConnectionControllerPrivateEndpointConnection {
        return new PrivateEndpointConnectionControllerPrivateEndpointConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate:PrivateEndpointConnectionControllerPrivateEndpointConnection';

    /**
     * Returns true if the given object is an instance of PrivateEndpointConnectionControllerPrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateEndpointConnectionControllerPrivateEndpointConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateEndpointConnectionControllerPrivateEndpointConnection.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets the tag for optimistic concurrency control.
     */
    public readonly eTag!: pulumi.Output<string>;
    /**
     * Gets the name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets the properties of the object.
     */
    public readonly properties!: pulumi.Output<types.outputs.PrivateEndpointConnectionPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Gets the resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateEndpointConnectionControllerPrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateEndpointConnectionControllerPrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.migrateProjectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'migrateProjectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["migrateProjectName"] = args ? args.migrateProjectName : undefined;
            resourceInputs["peConnectionName"] = args ? args.peConnectionName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20200501:PrivateEndpointConnectionControllerPrivateEndpointConnection" }, { type: "azure-native:migrate/v20230101:PrivateEndpointConnectionControllerPrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateEndpointConnectionControllerPrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateEndpointConnectionControllerPrivateEndpointConnection resource.
 */
export interface PrivateEndpointConnectionControllerPrivateEndpointConnectionArgs {
    /**
     * Gets the tag for optimistic concurrency control.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Migrate project name.
     */
    migrateProjectName: pulumi.Input<string>;
    /**
     * Private endpoint connection name.
     */
    peConnectionName?: pulumi.Input<string>;
    /**
     * Properties of Connection state request.
     */
    properties?: pulumi.Input<types.inputs.ConnectionStateRequestBodyPropertiesArgs>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
}