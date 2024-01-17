import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents a connected registry for a container registry.
 * Azure REST API version: 2023-01-01-preview. Prior API version in Azure Native 1.x: 2020-11-01-preview.
 *
 * Other available API versions: 2023-06-01-preview, 2023-08-01-preview, 2023-11-01-preview.
 */
export class ConnectedRegistry extends pulumi.CustomResource {
    /**
     * Get an existing ConnectedRegistry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectedRegistry {
        return new ConnectedRegistry(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry:ConnectedRegistry';

    /**
     * Returns true if the given object is an instance of ConnectedRegistry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectedRegistry {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectedRegistry.__pulumiType;
    }

    /**
     * The activation properties of the connected registry.
     */
    public /*out*/ readonly activation!: pulumi.Output<types.outputs.ActivationPropertiesResponse>;
    /**
     * The list of the ACR token resource IDs used to authenticate clients to the connected registry.
     */
    public readonly clientTokenIds!: pulumi.Output<string[] | undefined>;
    /**
     * The current connection state of the connected registry.
     */
    public /*out*/ readonly connectionState!: pulumi.Output<string>;
    /**
     * The last activity time of the connected registry.
     */
    public /*out*/ readonly lastActivityTime!: pulumi.Output<string>;
    /**
     * The logging properties of the connected registry.
     */
    public readonly logging!: pulumi.Output<types.outputs.LoggingPropertiesResponse | undefined>;
    /**
     * The login server properties of the connected registry.
     */
    public /*out*/ readonly loginServer!: pulumi.Output<types.outputs.LoginServerPropertiesResponse | undefined>;
    /**
     * The mode of the connected registry resource that indicates the permissions of the registry.
     */
    public readonly mode!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of notifications subscription information for the connected registry.
     */
    public readonly notificationsList!: pulumi.Output<string[] | undefined>;
    /**
     * The parent of the connected registry.
     */
    public readonly parent!: pulumi.Output<types.outputs.ParentPropertiesResponse>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The list of current statuses of the connected registry.
     */
    public /*out*/ readonly statusDetails!: pulumi.Output<types.outputs.StatusDetailPropertiesResponse[]>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The current version of ACR runtime on the connected registry.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a ConnectedRegistry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectedRegistryArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.mode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mode'");
            }
            if ((!args || args.parent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parent'");
            }
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clientTokenIds"] = args ? args.clientTokenIds : undefined;
            resourceInputs["connectedRegistryName"] = args ? args.connectedRegistryName : undefined;
            resourceInputs["logging"] = args ? (args.logging ? pulumi.output(args.logging).apply(types.inputs.loggingPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["notificationsList"] = args ? args.notificationsList : undefined;
            resourceInputs["parent"] = args ? args.parent : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["activation"] = undefined /*out*/;
            resourceInputs["connectionState"] = undefined /*out*/;
            resourceInputs["lastActivityTime"] = undefined /*out*/;
            resourceInputs["loginServer"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statusDetails"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["activation"] = undefined /*out*/;
            resourceInputs["clientTokenIds"] = undefined /*out*/;
            resourceInputs["connectionState"] = undefined /*out*/;
            resourceInputs["lastActivityTime"] = undefined /*out*/;
            resourceInputs["logging"] = undefined /*out*/;
            resourceInputs["loginServer"] = undefined /*out*/;
            resourceInputs["mode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notificationsList"] = undefined /*out*/;
            resourceInputs["parent"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statusDetails"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry/v20201101preview:ConnectedRegistry" }, { type: "azure-native:containerregistry/v20210601preview:ConnectedRegistry" }, { type: "azure-native:containerregistry/v20210801preview:ConnectedRegistry" }, { type: "azure-native:containerregistry/v20211201preview:ConnectedRegistry" }, { type: "azure-native:containerregistry/v20220201preview:ConnectedRegistry" }, { type: "azure-native:containerregistry/v20230101preview:ConnectedRegistry" }, { type: "azure-native:containerregistry/v20230601preview:ConnectedRegistry" }, { type: "azure-native:containerregistry/v20230801preview:ConnectedRegistry" }, { type: "azure-native:containerregistry/v20231101preview:ConnectedRegistry" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConnectedRegistry.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConnectedRegistry resource.
 */
export interface ConnectedRegistryArgs {
    /**
     * The list of the ACR token resource IDs used to authenticate clients to the connected registry.
     */
    clientTokenIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the connected registry.
     */
    connectedRegistryName?: pulumi.Input<string>;
    /**
     * The logging properties of the connected registry.
     */
    logging?: pulumi.Input<types.inputs.LoggingPropertiesArgs>;
    /**
     * The mode of the connected registry resource that indicates the permissions of the registry.
     */
    mode: pulumi.Input<string | types.enums.ConnectedRegistryMode>;
    /**
     * The list of notifications subscription information for the connected registry.
     */
    notificationsList?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The parent of the connected registry.
     */
    parent: pulumi.Input<types.inputs.ParentPropertiesArgs>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}