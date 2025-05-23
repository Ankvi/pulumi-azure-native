import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A FluidRelay Server.
 *
 * Uses Azure REST API version 2022-06-01. In version 2.x of the Azure Native provider, it used API version 2022-06-01.
 */
export class FluidRelayServer extends pulumi.CustomResource {
    /**
     * Get an existing FluidRelayServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FluidRelayServer {
        return new FluidRelayServer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:fluidrelay:FluidRelayServer';

    /**
     * Returns true if the given object is an instance of FluidRelayServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FluidRelayServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FluidRelayServer.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * All encryption configuration for a resource.
     */
    public readonly encryption!: pulumi.Output<types.outputs.EncryptionPropertiesResponse | undefined>;
    /**
     * The Fluid Relay Service endpoints for this server.
     */
    public /*out*/ readonly fluidRelayEndpoints!: pulumi.Output<types.outputs.FluidRelayEndpointsResponse>;
    /**
     * The Fluid tenantId for this server
     */
    public /*out*/ readonly frsTenantId!: pulumi.Output<string>;
    /**
     * The type of identity used for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provision states for FluidRelay RP
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Sku of the storage associated with the resource
     */
    public readonly storagesku!: pulumi.Output<string | undefined>;
    /**
     * System meta data for this resource, including creation and modification information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FluidRelayServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FluidRelayServerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroup'");
            }
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["fluidRelayServerName"] = args ? args.fluidRelayServerName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["storagesku"] = args ? args.storagesku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["fluidRelayEndpoints"] = undefined /*out*/;
            resourceInputs["frsTenantId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["fluidRelayEndpoints"] = undefined /*out*/;
            resourceInputs["frsTenantId"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["storagesku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:fluidrelay/v20210312preview:FluidRelayServer" }, { type: "azure-native:fluidrelay/v20210615preview:FluidRelayServer" }, { type: "azure-native:fluidrelay/v20210830preview:FluidRelayServer" }, { type: "azure-native:fluidrelay/v20210910preview:FluidRelayServer" }, { type: "azure-native:fluidrelay/v20220215:FluidRelayServer" }, { type: "azure-native:fluidrelay/v20220421:FluidRelayServer" }, { type: "azure-native:fluidrelay/v20220511:FluidRelayServer" }, { type: "azure-native:fluidrelay/v20220526:FluidRelayServer" }, { type: "azure-native:fluidrelay/v20220601:FluidRelayServer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FluidRelayServer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FluidRelayServer resource.
 */
export interface FluidRelayServerArgs {
    /**
     * All encryption configuration for a resource.
     */
    encryption?: pulumi.Input<types.inputs.EncryptionPropertiesArgs>;
    /**
     * The Fluid Relay server resource name.
     */
    fluidRelayServerName?: pulumi.Input<string>;
    /**
     * The type of identity used for the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Provision states for FluidRelay RP
     */
    provisioningState?: pulumi.Input<string | types.enums.ProvisioningState>;
    /**
     * The resource group containing the resource.
     */
    resourceGroup: pulumi.Input<string>;
    /**
     * Sku of the storage associated with the resource
     */
    storagesku?: pulumi.Input<string | types.enums.StorageSKU>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}